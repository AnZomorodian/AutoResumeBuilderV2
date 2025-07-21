import { useState, useEffect } from "react";
import { useParams, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { FileText, Download, Share2, Save, ArrowLeft, Home } from "lucide-react";
import { Link } from "wouter";
import { FaTelegram, FaDiscord, FaGithub } from "react-icons/fa";
import TemplateSelector from "@/components/resume-builder/template-selector";
import EnhancedPersonalDetailsForm from "@/components/resume-builder/enhanced-personal-details-form";
import WorkExperienceForm from "@/components/resume-builder/work-experience-form";
import EducationForm from "@/components/resume-builder/education-form";
import EnhancedSkillsForm from "@/components/resume-builder/enhanced-skills-form";
import EnhancedProjectsForm from "@/components/resume-builder/enhanced-projects-form";
import CertificationsForm from "@/components/resume-builder/certifications-form";
import ResumePreview from "@/components/resume-builder/resume-preview";
import Footer from "@/components/ui/footer";
import { useResumeData } from "@/hooks/use-resume-data";
import { useAutoSave } from "@/hooks/use-auto-save";
import { exportToPDF } from "@/lib/pdf-export";
import { useToast } from "@/hooks/use-toast";
import type { ResumeData } from "@shared/schema";

export default function ResumeBuilder() {
  const params = useParams();
  const resumeId = params.id ? parseInt(params.id) : undefined;
  const { toast } = useToast();
  
  const [selectedTemplate, setSelectedTemplate] = useState("modern");
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalDetails: {
      fullName: "",
      jobTitle: "",
      email: "",
      phone: "",
      linkedin: "",
      website: "",
      location: "",
      summary: "",
    },
    workExperience: [],
    education: [],
    skills: {
      technical: [],
      soft: [],
      languages: [],
    },
    projects: [],
    certifications: [],
  });

  const {
    currentResume,
    isLoading,
    saveResume,
    updateResume,
    isSaving,
  } = useResumeData(resumeId);

  const { lastSaved, triggerSave } = useAutoSave(
    resumeData,
    async (data) => {
      if (currentResume) {
        await updateResume({
          personalDetails: data.personalDetails,
          workExperience: data.workExperience,
          education: data.education,
          skills: data.skills,
          projects: data.projects,
          certifications: data.certifications,
          template: selectedTemplate,
        });
      } else {
        const newResume = await saveResume({
          title: data.personalDetails.fullName || "Untitled Resume",
          template: selectedTemplate,
          personalDetails: data.personalDetails,
          workExperience: data.workExperience,
          education: data.education,
          skills: data.skills,
          projects: data.projects,
          certifications: data.certifications,
          isPublic: false,
        });
        // Could redirect to /resume/:id here if needed
      }
    }
  );

  // Load existing resume data
  useEffect(() => {
    if (currentResume && !isLoading) {
      setResumeData({
        personalDetails: currentResume.personalDetails || resumeData.personalDetails,
        workExperience: currentResume.workExperience || [],
        education: currentResume.education || [],
        skills: currentResume.skills || resumeData.skills,
        projects: currentResume.projects || [],
        certifications: currentResume.certifications || [],
      });
      setSelectedTemplate(currentResume.template || "modern");
    }
  }, [currentResume, isLoading]);

  const handleExportPDF = async () => {
    try {
      await exportToPDF(resumeData, selectedTemplate);
      toast({
        title: "PDF Exported",
        description: "Your resume has been downloaded as a PDF.",
      });
    } catch (error) {
      toast({
        title: "Export Failed",
        description: "Failed to export PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleShareResume = async () => {
    if (!currentResume) {
      toast({
        title: "Save Resume First",
        description: "Please save your resume before sharing.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Toggle public visibility
      await updateResume({ isPublic: !currentResume.isPublic });
      
      if (!currentResume.isPublic) {
        const shareUrl = `${window.location.origin}/shared/${currentResume.shareId}`;
        await navigator.clipboard.writeText(shareUrl);
        toast({
          title: "Resume Shared",
          description: "Share link copied to clipboard!",
        });
      } else {
        toast({
          title: "Resume Made Private",
          description: "Your resume is no longer publicly accessible.",
        });
      }
    } catch (error) {
      toast({
        title: "Share Failed",
        description: "Failed to share resume. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleManualSave = () => {
    triggerSave();
    toast({
      title: "Resume Saved",
      description: "Your changes have been saved successfully.",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading resume...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-primary text-white p-2 rounded-lg">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-secondary">ResumeBuilder Pro</h1>
                <p className="text-xs text-slate-500">Create Professional Resumes</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="outline" size="sm">
                  <Home className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <Button
                onClick={handleManualSave}
                variant="outline"
                disabled={isSaving}
                className="text-sm"
              >
                <Save className="h-4 w-4 mr-2" />
                {isSaving ? "Saving..." : "Save"}
              </Button>
              <Button
                onClick={handleExportPDF}
                className="bg-accent hover:bg-green-600 text-white"
              >
                <Download className="h-4 w-4 mr-2" />
                Export PDF
              </Button>
              <Button
                onClick={handleShareResume}
                className="bg-primary hover:bg-blue-600 text-white"
              >
                <Share2 className="h-4 w-4 mr-2" />
                {currentResume?.isPublic ? "Make Private" : "Share Resume"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Panel - Forms */}
          <div className="space-y-6">
            <TemplateSelector
              selectedTemplate={selectedTemplate}
              onTemplateChange={setSelectedTemplate}
            />
            
            <EnhancedPersonalDetailsForm
              data={resumeData.personalDetails}
              onChange={(personalDetails) =>
                setResumeData(prev => ({ ...prev, personalDetails }))
              }
            />
            
            <WorkExperienceForm
              data={resumeData.workExperience}
              onChange={(workExperience) =>
                setResumeData(prev => ({ ...prev, workExperience }))
              }
            />
            
            <EducationForm
              data={resumeData.education}
              onChange={(education) =>
                setResumeData(prev => ({ ...prev, education }))
              }
            />
            
            <EnhancedSkillsForm
              data={resumeData.skills}
              onChange={(skills) =>
                setResumeData(prev => ({ ...prev, skills }))
              }
            />
            
            <EnhancedProjectsForm
              data={resumeData.projects}
              onChange={(projects) =>
                setResumeData(prev => ({ ...prev, projects }))
              }
            />
            
            <CertificationsForm
              data={resumeData.certifications}
              onChange={(certifications) =>
                setResumeData(prev => ({ ...prev, certifications }))
              }
            />
          </div>

          {/* Right Panel - Preview */}
          <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)]">
            <ResumePreview
              data={resumeData}
              template={selectedTemplate}
              lastSaved={lastSaved}
              autoSaveEnabled={true}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
