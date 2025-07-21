import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Settings, Plus, X, Trash2 } from "lucide-react";
import { HelpTooltip } from "@/components/ui/help-tooltip";
import type { Skills } from "@shared/schema";

interface SkillsFormProps {
  data: Skills;
  onChange: (data: Skills) => void;
}

// World languages list
const WORLD_LANGUAGES = [
  "English", "Spanish", "French", "German", "Italian", "Portuguese", "Russian", "Chinese (Mandarin)", "Chinese (Cantonese)", "Japanese", "Korean", "Arabic", "Hebrew", "Hindi", "Bengali", "Punjabi", "Urdu", "Persian", "Turkish", "Greek", "Dutch", "Swedish", "Norwegian", "Danish", "Finnish", "Polish", "Czech", "Hungarian", "Romanian", "Bulgarian", "Serbian", "Croatian", "Slovak", "Slovenian", "Estonian", "Latvian", "Lithuanian", "Ukrainian", "Belarusian", "Albanian", "Macedonian", "Bosnian", "Montenegrin", "Icelandic", "Irish", "Welsh", "Scottish Gaelic", "Basque", "Catalan", "Galician", "Maltese", "Thai", "Vietnamese", "Indonesian", "Malay", "Filipino", "Tagalog", "Swahili", "Amharic", "Zulu", "Xhosa", "Afrikaans", "Yoruba", "Igbo", "Hausa"
];

export default function SkillsForm({ data, onChange }: SkillsFormProps) {
  const [newTechnicalSkill, setNewTechnicalSkill] = useState("");
  const [newSoftSkill, setNewSoftSkill] = useState("");
  const [newLanguage, setNewLanguage] = useState("");
  const [newLanguageProficiency, setNewLanguageProficiency] = useState<"Native" | "Fluent" | "Intermediate" | "Basic">("Intermediate");

  const addTechnicalSkill = () => {
    if (newTechnicalSkill.trim() && !data.technical.includes(newTechnicalSkill.trim())) {
      onChange({
        ...data,
        technical: [...(data.technical || []), newTechnicalSkill.trim()],
      });
      setNewTechnicalSkill("");
    }
  };

  const removeTechnicalSkill = (index: number) => {
    onChange({
      ...data,
      technical: (data.technical || []).filter((_, i) => i !== index),
    });
  };

  const addSoftSkill = () => {
    if (newSoftSkill.trim() && !(data.soft || []).includes(newSoftSkill.trim())) {
      onChange({
        ...data,
        soft: [...(data.soft || []), newSoftSkill.trim()],
      });
      setNewSoftSkill("");
    }
  };

  const removeSoftSkill = (index: number) => {
    onChange({
      ...data,
      soft: (data.soft || []).filter((_, i) => i !== index),
    });
  };

  const addLanguage = () => {
    if (newLanguage.trim() && !(data.languages || []).some(lang => lang.language === newLanguage.trim())) {
      onChange({
        ...data,
        languages: [...(data.languages || []), {
          language: newLanguage.trim(),
          proficiency: newLanguageProficiency,
        }],
      });
      setNewLanguage("");
      setNewLanguageProficiency("Intermediate");
    }
  };

  const removeLanguage = (index: number) => {
    onChange({
      ...data,
      languages: (data.languages || []).filter((_, i) => i !== index),
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      action();
    }
  };

  const updateLanguage = (index: number, field: 'language' | 'proficiency', value: string) => {
    const updatedLanguages = [...(data.languages || [])];
    if (field === 'proficiency') {
      updatedLanguages[index] = {
        ...updatedLanguages[index],
        proficiency: value as "Native" | "Fluent" | "Intermediate" | "Basic",
      };
    } else {
      updatedLanguages[index] = {
        ...updatedLanguages[index],
        language: value,
      };
    }
    onChange({
      ...data,
      languages: updatedLanguages,
    });
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-secondary flex items-center">
            <Settings className="h-5 w-5 mr-2 text-primary" />
            Skills
          </h2>
        </div>

        <div className="space-y-6">
          {/* Technical Skills */}
          <div>
            <Label className="text-sm font-medium text-slate-700 mb-3 block">Technical Skills</Label>
            <div className="flex flex-wrap gap-2 mb-3">
              {(data.technical || []).map((skill, index) => (
                <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800 flex items-center">
                  <span>{skill}</span>
                  <Button
                    onClick={() => removeTechnicalSkill(index)}
                    variant="ghost"
                    size="sm"
                    className="ml-2 h-auto p-0 text-blue-600 hover:text-blue-800"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
            </div>
            <div className="flex space-x-2">
              <Input
                value={newTechnicalSkill}
                onChange={(e) => setNewTechnicalSkill(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e, addTechnicalSkill)}
                placeholder="Add technical skill"
                className="flex-1"
              />
              <Button onClick={addTechnicalSkill}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <Label className="text-sm font-medium text-slate-700 mb-3 block">Soft Skills</Label>
            <div className="flex flex-wrap gap-2 mb-3">
              {(data.soft || []).map((skill, index) => (
                <Badge key={index} variant="secondary" className="bg-green-100 text-green-800 flex items-center">
                  <span>{skill}</span>
                  <Button
                    onClick={() => removeSoftSkill(index)}
                    variant="ghost"
                    size="sm"
                    className="ml-2 h-auto p-0 text-green-600 hover:text-green-800"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
            </div>
            <div className="flex space-x-2">
              <Input
                value={newSoftSkill}
                onChange={(e) => setNewSoftSkill(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e, addSoftSkill)}
                placeholder="Add soft skill"
                className="flex-1"
              />
              <Button onClick={addSoftSkill}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Languages */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Label className="text-sm font-medium text-slate-700">Languages</Label>
              <HelpTooltip content="Select languages from our comprehensive list of world languages and set your proficiency level." />
            </div>
            <div className="space-y-3 mb-3">
              {(data.languages || []).map((lang, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Input
                    value={lang.language}
                    onChange={(e) => updateLanguage(index, 'language', e.target.value)}
                    placeholder="Language"
                    className="flex-1"
                  />
                  <Select
                    value={lang.proficiency}
                    onValueChange={(value) => updateLanguage(index, 'proficiency', value)}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Native">Native</SelectItem>
                      <SelectItem value="Fluent">Fluent</SelectItem>
                      <SelectItem value="Intermediate">Intermediate</SelectItem>
                      <SelectItem value="Basic">Basic</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    onClick={() => removeLanguage(index)}
                    variant="ghost"
                    size="sm"
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="flex items-center space-x-3">
              <Select
                value={newLanguage}
                onValueChange={(value) => setNewLanguage(value)}
              >
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  {WORLD_LANGUAGES.map((lang) => (
                    <SelectItem key={lang} value={lang}>
                      {lang}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={newLanguageProficiency}
                onValueChange={(value: "Native" | "Fluent" | "Intermediate" | "Basic") => setNewLanguageProficiency(value)}
              >
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Native">Native</SelectItem>
                  <SelectItem value="Fluent">Fluent</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Basic">Basic</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={addLanguage}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
