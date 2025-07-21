import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Code, Plus, Trash2, GripVertical } from "lucide-react";
import { nanoid } from "nanoid";
import type { Project } from "@shared/schema";

interface ProjectsFormProps {
  data: Project[];
  onChange: (data: Project[]) => void;
}

export default function ProjectsForm({ data, onChange }: ProjectsFormProps) {
  const addProject = () => {
    const newProject: Project = {
      id: nanoid(),
      name: "",
      description: "",
      technologies: "",
      url: "",
      github: "",
      completionDate: "",
      highlights: [],
    };
    onChange([...data, newProject]);
  };

  const removeProject = (id: string) => {
    onChange(data.filter(project => project.id !== id));
  };

  const updateProject = (id: string, field: keyof Project, value: any) => {
    onChange(data.map(project => 
      project.id === id ? { ...project, [field]: value } : project
    ));
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-secondary flex items-center">
            <Code className="h-5 w-5 mr-2 text-primary" />
            Projects
          </h2>
          <Button onClick={addProject} size="sm">
            <Plus className="h-4 w-4 mr-1" />
            Add Project
          </Button>
        </div>

        <div className="space-y-4">
          {data.map((project, index) => (
            <div key={project.id} className="border border-slate-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <GripVertical className="h-4 w-4 text-slate-400 mr-3 cursor-grab" />
                  <span className="font-medium text-slate-700">Project #{index + 1}</span>
                </div>
                <Button
                  onClick={() => removeProject(project.id)}
                  variant="ghost"
                  size="sm"
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-slate-700">Project Name *</Label>
                  <Input
                    value={project.name}
                    onChange={(e) => updateProject(project.id, 'name', e.target.value)}
                    placeholder="E-commerce Platform"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label className="text-sm font-medium text-slate-700">Technologies Used</Label>
                  <Input
                    value={project.technologies || ''}
                    onChange={(e) => updateProject(project.id, 'technologies', e.target.value)}
                    placeholder="React, Node.js, MongoDB"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-slate-700">Project URL</Label>
                  <Input
                    type="url"
                    value={project.url || ''}
                    onChange={(e) => updateProject(project.id, 'url', e.target.value)}
                    placeholder="https://myproject.com"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-slate-700">GitHub Repository</Label>
                  <Input
                    type="url"
                    value={project.github || ''}
                    onChange={(e) => updateProject(project.id, 'github', e.target.value)}
                    placeholder="https://github.com/username/project"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-slate-700">Completion Date</Label>
                  <Input
                    type="month"
                    value={project.completionDate || ''}
                    onChange={(e) => updateProject(project.id, 'completionDate', e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="mt-4">
                <Label className="text-sm font-medium text-slate-700">Project Description</Label>
                <Textarea
                  rows={3}
                  value={project.description || ''}
                  onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                  placeholder="Built a full-stack e-commerce platform with user authentication, payment processing, and inventory management..."
                  className="mt-1 resize-none"
                />
              </div>
            </div>
          ))}

          {data.length === 0 && (
            <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center text-slate-500">
              <Code className="h-8 w-8 mx-auto mb-2" />
              <p>Add your projects</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
