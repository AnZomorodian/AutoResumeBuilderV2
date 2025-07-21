import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FolderOpen, Plus, Trash2, GripVertical, X, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { HelpTooltip } from "@/components/ui/help-tooltip";
import { technologyOptions, type Project } from "@shared/schema";
import { nanoid } from "nanoid";

interface EnhancedProjectsFormProps {
  data: Project[];
  onChange: (data: Project[]) => void;
}

export default function EnhancedProjectsForm({ data, onChange }: EnhancedProjectsFormProps) {
  const [isOpen, setIsOpen] = useState(true);

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
    };
    onChange([...data, newProject]);
  };

  const updateProject = (id: string, field: keyof Project, value: any) => {
    const updatedProjects = data.map(project =>
      project.id === id ? { ...project, [field]: value } : project
    );
    onChange(updatedProjects);
  };

  const removeProject = (id: string) => {
    onChange(data.filter(project => project.id !== id));
  };

  const addTechnology = (projectId: string, technology: string) => {
    const project = data.find(p => p.id === projectId);
    if (project && technology && !project.technologies.includes(technology)) {
      updateProject(projectId, 'technologies', [...project.technologies, technology]);
    }
  };

  const removeTechnology = (projectId: string, technology: string) => {
    const project = data.find(p => p.id === projectId);
    if (project) {
      updateProject(projectId, 'technologies', project.technologies.filter(tech => tech !== technology));
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-secondary flex items-center">
              <FolderOpen className="h-5 w-5 mr-2 text-primary" />
              Projects
            </h2>
            <div className="flex items-center space-x-2">
              <Button onClick={addProject} size="sm">
                <Plus className="h-4 w-4 mr-1" />
                Add Project
              </Button>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm">
                  <ChevronUp className={`h-4 w-4 transition-transform ${isOpen ? '' : 'rotate-180'}`} />
                </Button>
              </CollapsibleTrigger>
            </div>
          </div>
          
          <CollapsibleContent>
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                      <Label className="text-sm font-medium text-slate-700">Project URL</Label>
                      <Input
                        value={project.url || ''}
                        onChange={(e) => updateProject(project.id, 'url', e.target.value)}
                        placeholder="https://myproject.com"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label className="text-sm font-medium text-slate-700">GitHub Repository</Label>
                      <Input
                        value={project.github || ''}
                        onChange={(e) => updateProject(project.id, 'github', e.target.value)}
                        placeholder="https://github.com/username/project"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-slate-700">Status</Label>
                      <div className="flex items-center space-x-3 mt-1">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id={`current-${project.id}`}
                            checked={project.current || false}
                            onCheckedChange={(checked) => {
                              const isCurrent = checked === true;
                              updateProject(project.id, 'current', isCurrent);
                              if (isCurrent) {
                                updateProject(project.id, 'endDate', '');
                              }
                            }}
                          />
                          <Label htmlFor={`current-${project.id}`} className="text-sm text-slate-600 cursor-pointer">
                            Ongoing Project
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                      <Input
                        type="month"
                        value={project.endDate || ''}
                        onChange={(e) => updateProject(project.id, 'endDate', e.target.value)}
                        disabled={project.current}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div className="mb-4">
                    <Label className="text-sm font-medium text-slate-700 mb-2 block flex items-center">
                      Technologies Used
                      <HelpTooltip content="Select the technologies, frameworks, and tools used in this project" />
                    </Label>
                    
                    <Select onValueChange={(value) => addTechnology(project.id, value)}>
                      <SelectTrigger className="mb-3">
                        <SelectValue placeholder="Add a technology..." />
                      </SelectTrigger>
                      <SelectContent>
                        {technologyOptions
                          .filter(tech => !project.technologies.includes(tech))
                          .map((tech) => (
                            <SelectItem key={tech} value={tech}>{tech}</SelectItem>
                          ))}
                      </SelectContent>
                    </Select>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="flex items-center gap-1">
                          {tech}
                          <button
                            onClick={() => removeTechnology(project.id, tech)}
                            className="ml-1 hover:text-red-500"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <Label className="text-sm font-medium text-slate-700 mb-2 block flex items-center">
                      Project Description
                      <HelpTooltip content="Describe what the project does, your role, and key achievements" />
                    </Label>
                    <Textarea
                      value={project.description || ''}
                      onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                      placeholder="Developed a full-stack e-commerce platform that increased sales by 40%. Built responsive frontend with React and scalable backend with Node.js..."
                      className="min-h-[80px]"
                      maxLength={500}
                    />
                    <p className="text-xs text-slate-500 mt-1">
                      {(project.description || "").length}/500 characters
                    </p>
                  </div>
                </div>
              ))}

              {data.length === 0 && (
                <div className="text-center py-8 text-slate-500">
                  <FolderOpen className="h-12 w-12 mx-auto mb-3 text-slate-300" />
                  <p className="mb-2">No projects added yet</p>
                  <p className="text-sm">Showcase your best work and side projects</p>
                </div>
              )}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}