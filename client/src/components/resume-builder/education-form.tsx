import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { GraduationCap, Plus, Trash2, GripVertical } from "lucide-react";
import { nanoid } from "nanoid";
import type { Education } from "@shared/schema";

interface EducationFormProps {
  data: Education[];
  onChange: (data: Education[]) => void;
}

export default function EducationForm({ data, onChange }: EducationFormProps) {
  const addEducation = () => {
    const newEducation: Education = {
      id: nanoid(),
      degree: "",
      institution: "",
      location: "",
      graduationYear: undefined,
      gpa: "",
      honors: "",
    };
    onChange([...data, newEducation]);
  };

  const removeEducation = (id: string) => {
    onChange(data.filter(edu => edu.id !== id));
  };

  const updateEducation = (id: string, field: keyof Education, value: any) => {
    onChange(data.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    ));
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-secondary flex items-center">
            <GraduationCap className="h-5 w-5 mr-2 text-primary" />
            Education
          </h2>
          <Button onClick={addEducation} size="sm">
            <Plus className="h-4 w-4 mr-1" />
            Add Education
          </Button>
        </div>

        <div className="space-y-4">
          {data.map((education, index) => (
            <div key={education.id} className="border border-slate-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <GripVertical className="h-4 w-4 text-slate-400 mr-3 cursor-grab" />
                  <span className="font-medium text-slate-700">Education #{index + 1}</span>
                </div>
                <Button
                  onClick={() => removeEducation(education.id)}
                  variant="ghost"
                  size="sm"
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-slate-700">Degree *</Label>
                  <Input
                    value={education.degree}
                    onChange={(e) => updateEducation(education.id, 'degree', e.target.value)}
                    placeholder="Bachelor of Computer Science"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label className="text-sm font-medium text-slate-700">Institution *</Label>
                  <Input
                    value={education.institution}
                    onChange={(e) => updateEducation(education.id, 'institution', e.target.value)}
                    placeholder="Stanford University"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-slate-700">Graduation Year</Label>
                  <Input
                    type="number"
                    value={education.graduationYear || ''}
                    onChange={(e) => updateEducation(education.id, 'graduationYear', e.target.value ? parseInt(e.target.value) : undefined)}
                    placeholder="2020"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-slate-700">GPA (Optional)</Label>
                  <Input
                    value={education.gpa || ''}
                    onChange={(e) => updateEducation(education.id, 'gpa', e.target.value)}
                    placeholder="3.8/4.0"
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
          ))}

          {data.length === 0 && (
            <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center text-slate-500">
              <GraduationCap className="h-8 w-8 mx-auto mb-2" />
              <p>Add your education background</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
