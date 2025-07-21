import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Plus, 
  Eye, 
  Edit, 
  Download, 
  Share2, 
  Trash2,
  Clock,
  Layout,
  Sparkles
} from "lucide-react";
import { formatDate } from "@/lib/utils";

interface Resume {
  id: number;
  title: string;
  template: string;
  updatedAt: string;
  isPublic: boolean;
}

export default function Dashboard() {
  const { data: resumes, isLoading } = useQuery<Resume[]>({
    queryKey: ["/api/resumes"],
  });

  const templates = [
    { id: "modern", name: "Modern", description: "Clean and professional", color: "bg-blue-500" },
    { id: "minimal", name: "Minimal", description: "Simple and elegant", color: "bg-gray-500" },
    { id: "classic", name: "Classic", description: "Traditional format", color: "bg-amber-500" },
    { id: "creative", name: "Creative", description: "Colorful and dynamic", color: "bg-emerald-500" },
    { id: "executive", name: "Executive", description: "Professional leadership", color: "bg-purple-500" },
    { id: "tech", name: "Tech Pro", description: "For developers & engineers", color: "bg-indigo-500" },
    { id: "academic", name: "Academic", description: "For research & education", color: "bg-teal-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Resume Builder</h1>
              <p className="text-gray-600 mt-1">Create professional resumes in minutes</p>
            </div>
            <Link href="/builder">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Plus className="h-5 w-5 mr-2" />
                Create New Resume
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-blue-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Resumes</p>
                  <p className="text-2xl font-bold text-gray-900">{resumes?.length || 0}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Layout className="h-8 w-8 text-emerald-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Templates Available</p>
                  <p className="text-2xl font-bold text-gray-900">{templates.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Sparkles className="h-8 w-8 text-purple-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Recent Updates</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {resumes?.filter(r => {
                      const updated = new Date(r.updatedAt);
                      const dayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
                      return updated > dayAgo;
                    }).length || 0}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Template Gallery */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Layout className="h-5 w-5 mr-2" />
              Choose a Template
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {templates.map((template) => (
                <Link key={template.id} href={`/builder?template=${template.id}`}>
                  <Card className="cursor-pointer hover:shadow-lg transition-all duration-200 group">
                    <CardContent className="p-4">
                      <div className={`w-full h-32 ${template.color} rounded-lg mb-3 flex items-center justify-center group-hover:scale-105 transition-transform`}>
                        <FileText className="h-12 w-12 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900">{template.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{template.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Resumes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Recent Resumes
              </div>
              {resumes && resumes.length > 0 && (
                <Badge variant="secondary">{resumes.length} total</Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              </div>
            ) : resumes && resumes.length > 0 ? (
              <div className="space-y-4">
                {resumes.map((resume) => (
                  <div key={resume.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center space-x-4">
                      <FileText className="h-8 w-8 text-gray-400" />
                      <div>
                        <h3 className="font-medium text-gray-900">{resume.title}</h3>
                        <div className="flex items-center space-x-3 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {resume.template}
                          </Badge>
                          <span className="text-sm text-gray-500">
                            Updated {formatDate(resume.updatedAt)}
                          </span>
                          {resume.isPublic && (
                            <Badge className="text-xs bg-green-100 text-green-800">Public</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Link href={`/resume/${resume.id}/preview`}>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href={`/resume/${resume.id}`}>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No resumes yet</h3>
                <p className="text-gray-600 mb-4">Create your first professional resume to get started</p>
                <Link href="/builder">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Resume
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}