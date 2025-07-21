import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Expand, Minimize, Eye, Clock } from "lucide-react";
import { useState } from "react";
import ModernTemplate from "./resume-templates/modern-template";
import MinimalTemplate from "./resume-templates/minimal-template";
import ClassicTemplate from "./resume-templates/classic-template";
import CreativeTemplate from "./resume-templates/creative-template";
import ExecutiveTemplate from "./resume-templates/executive-template";
import type { ResumeData } from "@shared/schema";

interface ResumePreviewProps {
  data: ResumeData;
  template: string;
  lastSaved: Date | null;
  autoSaveEnabled: boolean;
}

export default function ResumePreview({ data, template, lastSaved, autoSaveEnabled }: ResumePreviewProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const formatLastSaved = (date: Date | null) => {
    if (!date) return "Never";
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes === 1) return "1 minute ago";
    if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours === 1) return "1 hour ago";
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    
    return date.toLocaleDateString();
  };

  const getTemplateComponent = () => {
    switch (template) {
      case "minimal":
        return <MinimalTemplate data={data} />;
      case "classic":
        return <ClassicTemplate data={data} />;
      case "creative":
        return <CreativeTemplate data={data} />;
      case "executive":
        return <ExecutiveTemplate data={data} />;
      default:
        return <ModernTemplate data={data} />;
    }
  };

  return (
    <div className={`
      ${isFullscreen 
        ? 'fixed inset-0 z-50 bg-white' 
        : 'relative'
      }
    `}>
      <Card className="h-full flex flex-col">
        {/* Preview Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200">
          <div className="flex items-center space-x-3">
            <h3 className="text-lg font-semibold text-secondary">Resume Preview</h3>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Live
            </Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              onClick={() => setIsFullscreen(!isFullscreen)}
              variant="ghost"
              size="sm"
            >
              {isFullscreen ? (
                <Minimize className="h-4 w-4" />
              ) : (
                <Expand className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Resume Preview Content */}
        <CardContent className="flex-1 p-6 overflow-y-auto">
          <div className="bg-white shadow-lg rounded-lg mx-auto max-w-2xl min-h-[600px]">
            {getTemplateComponent()}
          </div>
        </CardContent>

        {/* Preview Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50">
          <div className="flex justify-between items-center text-sm text-slate-600">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Last saved: {formatLastSaved(lastSaved)}</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span>Auto-save: {autoSaveEnabled ? "On" : "Off"}</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Synced</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
