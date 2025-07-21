import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Settings, Plus, X, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { HelpTooltip } from "@/components/ui/help-tooltip";
import type { Skills } from "@shared/schema";

type LanguageSkill = {
  language: string;
  proficiency: "Native" | "Fluent" | "Advanced" | "Intermediate" | "Basic";
};

interface EnhancedSkillsFormProps {
  data: Skills;
  onChange: (data: Skills) => void;
}

const SUGGESTED_TECHNICAL_SKILLS = [
  // Programming Languages
  "JavaScript", "TypeScript", "Python", "Java", "C++", "C#", "Go", "Rust", "Swift", "Kotlin", "PHP", "Ruby",
  // Frontend
  "React", "Vue.js", "Angular", "HTML", "CSS", "SCSS", "Tailwind CSS", "Bootstrap", "jQuery",
  // Backend
  "Node.js", "Express.js", "Django", "Flask", "Spring Boot", ".NET", "Laravel", "Ruby on Rails",
  // Databases
  "MySQL", "PostgreSQL", "MongoDB", "Redis", "SQLite", "Oracle", "Firebase", "Supabase",
  // Cloud & DevOps
  "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins", "Git", "Linux", "Nginx",
  // Data & AI
  "TensorFlow", "PyTorch", "Pandas", "NumPy", "Machine Learning", "Data Analysis", "SQL"
];

const SUGGESTED_SOFT_SKILLS = [
  "Leadership", "Team Management", "Project Management", "Communication", "Problem Solving",
  "Critical Thinking", "Analytical Skills", "Creativity", "Adaptability", "Time Management",
  "Collaboration", "Mentoring", "Strategic Planning", "Conflict Resolution", "Public Speaking",
  "Customer Service", "Sales", "Marketing", "Negotiation", "Research", "Writing", "Presentation"
];

const LANGUAGE_PROFICIENCY_LEVELS = [
  "Native", "Fluent", "Advanced", "Intermediate", "Basic"
] as const;

const COMMON_LANGUAGES = [
  "English", "Spanish", "French", "German", "Italian", "Portuguese", "Russian", "Chinese (Mandarin)",
  "Japanese", "Korean", "Arabic", "Hindi", "Dutch", "Swedish", "Norwegian", "Danish", "Finnish",
  "Polish", "Czech", "Hungarian", "Romanian", "Bulgarian", "Greek", "Turkish", "Hebrew", "Thai",
  "Vietnamese", "Indonesian", "Malay", "Filipino", "Swahili", "Urdu", "Bengali", "Tamil", "Telugu"
];

export default function EnhancedSkillsForm({ data, onChange }: EnhancedSkillsFormProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [newTechnicalSkill, setNewTechnicalSkill] = useState("");
  const [newSoftSkill, setNewSoftSkill] = useState("");

  const addTechnicalSkill = (skill: string) => {
    if (skill && !data.technical.includes(skill)) {
      onChange({
        ...data,
        technical: [...data.technical, skill]
      });
      setNewTechnicalSkill("");
    }
  };

  const removeTechnicalSkill = (skillToRemove: string) => {
    onChange({
      ...data,
      technical: data.technical.filter(skill => skill !== skillToRemove)
    });
  };

  const addSoftSkill = (skill: string) => {
    if (skill && !data.soft.includes(skill)) {
      onChange({
        ...data,
        soft: [...data.soft, skill]
      });
      setNewSoftSkill("");
    }
  };

  const removeSoftSkill = (skillToRemove: string) => {
    onChange({
      ...data,
      soft: data.soft.filter(skill => skill !== skillToRemove)
    });
  };

  const addLanguage = () => {
    const newLanguage: LanguageSkill = {
      language: "",
      proficiency: "Intermediate"
    };
    onChange({
      ...data,
      languages: [...data.languages, newLanguage]
    });
  };

  const updateLanguage = (index: number, field: keyof LanguageSkill, value: string) => {
    const updatedLanguages = data.languages.map((lang, i) => 
      i === index ? { ...lang, [field]: value } : lang
    );
    onChange({
      ...data,
      languages: updatedLanguages
    });
  };

  const removeLanguage = (index: number) => {
    onChange({
      ...data,
      languages: data.languages.filter((_, i) => i !== index)
    });
  };

  return (
    <Card>
      <CardContent className="p-6">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-secondary flex items-center">
              <Settings className="h-5 w-5 mr-2 text-primary" />
              Skills & Competencies
            </h2>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <ChevronUp className={`h-4 w-4 transition-transform ${isOpen ? '' : 'rotate-180'}`} />
              </Button>
            </CollapsibleTrigger>
          </div>
          
          <CollapsibleContent className="space-y-6">
            {/* Technical Skills */}
            <div>
              <Label className="text-sm font-medium text-slate-700 mb-3 block flex items-center">
                Technical Skills
                <HelpTooltip content="Add your programming languages, frameworks, tools, and technical competencies" />
              </Label>
              
              {/* Add new technical skill */}
              <div className="flex items-center space-x-2 mb-3">
                <Input
                  value={newTechnicalSkill}
                  onChange={(e) => setNewTechnicalSkill(e.target.value)}
                  placeholder="Type a skill or select from suggestions..."
                  className="flex-1"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addTechnicalSkill(newTechnicalSkill);
                    }
                  }}
                />
                <Button
                  onClick={() => addTechnicalSkill(newTechnicalSkill)}
                  size="sm"
                  disabled={!newTechnicalSkill}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {/* Suggested technical skills */}
              <div className="mb-4">
                <p className="text-xs text-slate-500 mb-2">Popular technical skills:</p>
                <div className="flex flex-wrap gap-1">
                  {SUGGESTED_TECHNICAL_SKILLS.filter(skill => !data.technical.includes(skill)).slice(0, 15).map((skill) => (
                    <Button
                      key={skill}
                      variant="outline"
                      size="sm"
                      className="text-xs h-6 px-2"
                      onClick={() => addTechnicalSkill(skill)}
                    >
                      + {skill}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Current technical skills */}
              <div className="flex flex-wrap gap-2">
                {data.technical.map((skill) => (
                  <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                    {skill}
                    <button
                      onClick={() => removeTechnicalSkill(skill)}
                      className="ml-1 hover:text-red-500"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <Label className="text-sm font-medium text-slate-700 mb-3 block flex items-center">
                Soft Skills
                <HelpTooltip content="Add your interpersonal and professional skills like leadership, communication, etc." />
              </Label>
              
              {/* Add new soft skill */}
              <div className="flex items-center space-x-2 mb-3">
                <Input
                  value={newSoftSkill}
                  onChange={(e) => setNewSoftSkill(e.target.value)}
                  placeholder="Type a skill or select from suggestions..."
                  className="flex-1"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addSoftSkill(newSoftSkill);
                    }
                  }}
                />
                <Button
                  onClick={() => addSoftSkill(newSoftSkill)}
                  size="sm"
                  disabled={!newSoftSkill}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {/* Suggested soft skills */}
              <div className="mb-4">
                <p className="text-xs text-slate-500 mb-2">Popular soft skills:</p>
                <div className="flex flex-wrap gap-1">
                  {SUGGESTED_SOFT_SKILLS.filter(skill => !data.soft.includes(skill)).slice(0, 15).map((skill) => (
                    <Button
                      key={skill}
                      variant="outline"
                      size="sm"
                      className="text-xs h-6 px-2"
                      onClick={() => addSoftSkill(skill)}
                    >
                      + {skill}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Current soft skills */}
              <div className="flex flex-wrap gap-2">
                {data.soft.map((skill) => (
                  <Badge key={skill} variant="outline" className="flex items-center gap-1">
                    {skill}
                    <button
                      onClick={() => removeSoftSkill(skill)}
                      className="ml-1 hover:text-red-500"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <Label className="text-sm font-medium text-slate-700 flex items-center">
                  Languages
                  <HelpTooltip content="Add languages you speak and your proficiency level" />
                </Label>
                <Button onClick={addLanguage} size="sm" variant="outline">
                  <Plus className="h-4 w-4 mr-1" />
                  Add Language
                </Button>
              </div>

              <div className="space-y-3">
                {data.languages.map((language, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Select
                      value={language.language}
                      onValueChange={(value) => updateLanguage(index, 'language', value)}
                    >
                      <SelectTrigger className="flex-1">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        {COMMON_LANGUAGES.map((lang) => (
                          <SelectItem key={lang} value={lang}>{lang}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    <Select
                      value={language.proficiency}
                      onValueChange={(value) => updateLanguage(index, 'proficiency', value)}
                    >
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {LANGUAGE_PROFICIENCY_LEVELS.map((level) => (
                          <SelectItem key={level} value={level}>{level}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Button
                      onClick={() => removeLanguage(index)}
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}