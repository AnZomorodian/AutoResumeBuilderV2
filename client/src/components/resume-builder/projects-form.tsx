import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Code, Plus, Trash2, GripVertical, X, Calendar } from "lucide-react";
import { nanoid } from "nanoid";
import type { Project } from "@shared/schema";

interface ProjectsFormProps {
  data: Project[];
  onChange: (data: Project[]) => void;
}

export default function ProjectsForm({ data, onChange }: ProjectsFormProps) {
  const [newTechSkill, setNewTechSkill] = useState<{[key: string]: string}>({});
  const [newHighlight, setNewHighlight] = useState<{[key: string]: string}>({});
  const addProject = () => {
    const newProject: Project = {
      id: nanoid(),
      name: "",
      description: "",
      technologies: [],
      url: "",
      github: "",
      startDate: "",
      endDate: "",
      current: false,
      highlights: [],
      category: "",
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

  const addTechnology = (projectId: string) => {
    const skill = newTechSkill[projectId]?.trim();
    if (skill) {
      const project = data.find(p => p.id === projectId);
      if (project && !project.technologies.includes(skill)) {
        updateProject(projectId, 'technologies', [...project.technologies, skill]);
        setNewTechSkill({...newTechSkill, [projectId]: ''});
      }
    }
  };

  const removeTechnology = (projectId: string, index: number) => {
    const project = data.find(p => p.id === projectId);
    if (project) {
      updateProject(projectId, 'technologies', project.technologies.filter((_, i) => i !== index));
    }
  };

  const addHighlight = (projectId: string) => {
    const highlight = newHighlight[projectId]?.trim();
    if (highlight) {
      const project = data.find(p => p.id === projectId);
      if (project && !project.highlights.includes(highlight)) {
        updateProject(projectId, 'highlights', [...project.highlights, highlight]);
        setNewHighlight({...newHighlight, [projectId]: ''});
      }
    }
  };

  const removeHighlight = (projectId: string, index: number) => {
    const project = data.find(p => p.id === projectId);
    if (project) {
      updateProject(projectId, 'highlights', project.highlights.filter((_, i) => i !== index));
    }
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
                  <Label className="text-sm font-medium text-slate-700">Category</Label>
                  <Input
                    value={project.category || ''}
                    onChange={(e) => updateProject(project.id, 'category', e.target.value)}
                    placeholder="Web Development, Mobile App, etc."
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
                  <Label className="text-sm font-medium text-slate-700">Start Date</Label>
                  <Input
                    type="month"
                    value={project.startDate || ''}
                    onChange={(e) => updateProject(project.id, 'startDate', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-slate-700">End Date</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={`current-${project.id}`}
                        checked={project.current}
                        onCheckedChange={(checked) => updateProject(project.id, 'current', checked)}
                      />
                      <Label htmlFor={`current-${project.id}`} className="text-sm">
                        Currently working on this
                      </Label>
                    </div>
                    {!project.current && (
                      <Input
                        type="month"
                        value={project.endDate || ''}
                        onChange={(e) => updateProject(project.id, 'endDate', e.target.value)}
                        className="mt-1"
                      />
                    )}
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

                <div className="mt-4">
                  <Label className="text-sm font-medium text-slate-700">Technologies Used</Label>
                  <div className="mt-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <Input
                        value={newTechSkill[project.id] || ''}
                        onChange={(e) => setNewTechSkill({...newTechSkill, [project.id]: e.target.value})}
                        placeholder="React, Node.js, MongoDB..."
                        className="flex-1"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            addTechnology(project.id);
                          }
                        }}
                      />
                      <Button onClick={() => addTechnology(project.id)} size="sm">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="flex items-center gap-1">
                          {tech}
                          <X 
                            className="h-3 w-3 cursor-pointer" 
                            onClick={() => removeTechnology(project.id, index)}
                          />
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <Label className="text-sm font-medium text-slate-700">Key Highlights</Label>
                  <div className="mt-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <Input
                        value={newHighlight[project.id] || ''}
                        onChange={(e) => setNewHighlight({...newHighlight, [project.id]: e.target.value})}
                        placeholder="Increased performance by 40%..."
                        className="flex-1"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            addHighlight(project.id);
                          }
                        }}
                      />
                      <Button onClick={() => addHighlight(project.id)} size="sm">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-1">
                      {project.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center justify-between bg-slate-50 p-2 rounded text-sm">
                          <span>• {highlight}</span>
                          <X 
                            className="h-3 w-3 cursor-pointer text-slate-400 hover:text-red-500" 
                            onClick={() => removeHighlight(project.id, index)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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
