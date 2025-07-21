import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Briefcase, Plus, Trash2, GripVertical, X } from "lucide-react";
import { nanoid } from "nanoid";
import type { WorkExperience } from "@shared/schema";

interface WorkExperienceFormProps {
  data: WorkExperience[];
  onChange: (data: WorkExperience[]) => void;
}

export default function WorkExperienceForm({ data, onChange }: WorkExperienceFormProps) {
  const addExperience = () => {
    const newExperience: WorkExperience = {
      id: nanoid(),
      jobTitle: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      achievements: [""],
      description: "",
    };
    onChange([...data, newExperience]);
  };

  const removeExperience = (id: string) => {
    onChange(data.filter(exp => exp.id !== id));
  };

  const updateExperience = (id: string, field: keyof WorkExperience, value: any) => {
    onChange(data.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  const addAchievement = (id: string) => {
    const experience = data.find(exp => exp.id === id);
    if (experience) {
      updateExperience(id, 'achievements', [...experience.achievements, ""]);
    }
  };

  const updateAchievement = (id: string, index: number, value: string) => {
    const experience = data.find(exp => exp.id === id);
    if (experience) {
      const newAchievements = [...experience.achievements];
      newAchievements[index] = value;
      updateExperience(id, 'achievements', newAchievements);
    }
  };

  const removeAchievement = (id: string, index: number) => {
    const experience = data.find(exp => exp.id === id);
    if (experience && experience.achievements.length > 1) {
      const newAchievements = experience.achievements.filter((_, i) => i !== index);
      updateExperience(id, 'achievements', newAchievements);
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-secondary flex items-center">
            <Briefcase className="h-5 w-5 mr-2 text-primary" />
            Work Experience
          </h2>
          <Button onClick={addExperience} size="sm">
            <Plus className="h-4 w-4 mr-1" />
            Add Experience
          </Button>
        </div>

        <div className="space-y-4">
          {data.map((experience, index) => (
            <div key={experience.id} className="border border-slate-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <GripVertical className="h-4 w-4 text-slate-400 mr-3 cursor-grab" />
                  <span className="font-medium text-slate-700">Experience #{index + 1}</span>
                </div>
                <Button
                  onClick={() => removeExperience(experience.id)}
                  variant="ghost"
                  size="sm"
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-slate-700">Job Title *</Label>
                  <Input
                    value={experience.jobTitle}
                    onChange={(e) => updateExperience(experience.id, 'jobTitle', e.target.value)}
                    placeholder="Senior Software Engineer"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label className="text-sm font-medium text-slate-700">Company *</Label>
                  <Input
                    value={experience.company}
                    onChange={(e) => updateExperience(experience.id, 'company', e.target.value)}
                    placeholder="Tech Corp Inc."
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-slate-700">Start Date *</Label>
                  <Input
                    type="month"
                    value={experience.startDate}
                    onChange={(e) => updateExperience(experience.id, 'startDate', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-slate-700">End Date</Label>
                  <div className="flex items-center space-x-3 mt-1">
                    <Input
                      type="month"
                      value={experience.endDate || ''}
                      onChange={(e) => updateExperience(experience.id, 'endDate', e.target.value)}
                      disabled={experience.current}
                      className="flex-1"
                    />
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        checked={experience.current}
                        onCheckedChange={(checked) => {
                          updateExperience(experience.id, 'current', !!checked);
                          if (checked) {
                            updateExperience(experience.id, 'endDate', '');
                          }
                        }}
                      />
                      <Label className="text-sm text-slate-600">Current</Label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <Label className="text-sm font-medium text-slate-700 mb-2 block">
                  Key Achievements
                </Label>
                <div className="space-y-2">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-center space-x-3">
                      <Input
                        value={achievement}
                        onChange={(e) => updateAchievement(experience.id, achievementIndex, e.target.value)}
                        placeholder="Led development of microservices architecture, reducing system latency by 40%"
                        className="flex-1"
                      />
                      {experience.achievements.length > 1 && (
                        <Button
                          onClick={() => removeAchievement(experience.id, achievementIndex)}
                          variant="ghost"
                          size="sm"
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button
                    onClick={() => addAchievement(experience.id)}
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-blue-600"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add Achievement
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {data.length === 0 && (
            <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center text-slate-500">
              <Briefcase className="h-8 w-8 mx-auto mb-2" />
              <p>Add your work experience</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
