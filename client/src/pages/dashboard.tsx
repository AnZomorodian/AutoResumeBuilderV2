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
  Sparkles,
  Star,
  Users,
  Target,
  Zap,
  Award,
  Rocket,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Globe,
  Shield,
  Palette
} from "lucide-react";
import { formatDate } from "@/lib/utils";
import Footer from "@/components/ui/footer";

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
    { id: "modern", name: "Modern", description: "Clean and professional", color: "bg-blue-500", icon: <Target className="h-8 w-8" /> },
    { id: "minimal", name: "Minimal", description: "Simple and elegant", color: "bg-gray-500", icon: <Layout className="h-8 w-8" /> },
    { id: "classic", name: "Classic", description: "Traditional format", color: "bg-amber-500", icon: <Award className="h-8 w-8" /> },
    { id: "creative", name: "Creative", description: "Colorful and dynamic", color: "bg-emerald-500", icon: <Palette className="h-8 w-8" /> },
    { id: "executive", name: "Executive", description: "Professional leadership", color: "bg-purple-500", icon: <Users className="h-8 w-8" /> },
    { id: "tech", name: "Tech Pro", description: "For developers & engineers", color: "bg-indigo-500", icon: <Rocket className="h-8 w-8" /> },
    { id: "academic", name: "Academic", description: "For research & education", color: "bg-teal-500", icon: <FileText className="h-8 w-8" /> },
    { id: "professional", name: "Professional", description: "Corporate executive design", color: "bg-blue-600", icon: <TrendingUp className="h-8 w-8" /> },
    { id: "modern-gradient", name: "Modern Gradient", description: "Colorful modern design", color: "bg-gradient-to-r from-purple-500 to-pink-500", icon: <Sparkles className="h-8 w-8" /> },
    { id: "elegant", name: "Elegant", description: "Sophisticated serif layout", color: "bg-slate-600", icon: <Star className="h-8 w-8" /> },
  ];

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Real-time Preview",
      description: "See your changes instantly as you build your resume with live preview updates."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Auto-save",
      description: "Never lose your work with automatic saving every 3 seconds."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Public Sharing",
      description: "Generate shareable links to showcase your resume to potential employers."
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "PDF Export",
      description: "Download your resume as a professional PDF ready for job applications."
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "10 Templates",
      description: "Choose from professionally designed templates for every industry."
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "ATS Friendly",
      description: "All templates are optimized to pass through Applicant Tracking Systems."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      company: "Tech Corp",
      content: "ResumeBuilder Pro helped me land my dream job! The templates are professional and the interface is incredibly user-friendly.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Marketing Manager",
      company: "Growth Inc",
      content: "I was able to create a stunning resume in under 30 minutes. The real-time preview feature is amazing!",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "UX Designer",
      company: "Design Studio",
      content: "The variety of templates is impressive. I found the perfect design that matches my creative background.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation Header */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-primary to-accent text-white p-2 rounded-lg">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-secondary">ResumeBuilder Pro</h1>
                <p className="text-xs text-slate-500">Create Professional Resumes</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/about" className="text-slate-600 hover:text-primary transition-colors">About</Link>
                <Link href="/blog" className="text-slate-600 hover:text-primary transition-colors">Blog</Link>
                <Link href="/privacy-policy" className="text-slate-600 hover:text-primary transition-colors">Privacy</Link>
              </div>
              <Link href="/builder">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transform hover:scale-105 transition-all">
                  <Plus className="h-5 w-5 mr-2" />
                  Create Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-gray-700">New: 10 Professional Templates Available</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Build Your Perfect
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Resume in Minutes
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Create professional, ATS-friendly resumes with our powerful builder. Choose from expertly designed templates, 
              get real-time preview, and land your dream job faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/builder">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-xl transform hover:scale-105 transition-all px-8 py-4 text-lg">
                  <Rocket className="h-5 w-5 mr-2" />
                  Start Building Now
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                  <Eye className="h-5 w-5 mr-2" />
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex justify-center items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                No registration required
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                Free to use
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                PDF export ready
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose ResumeBuilder Pro?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to create a professional resume that gets you noticed by recruiters and hiring managers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-primary to-accent text-white rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Stats Dashboard */}
        {resumes && resumes.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Your Resume Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <FileText className="h-8 w-8 text-blue-100" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-blue-100">Total Resumes</p>
                      <p className="text-2xl font-bold text-white">{resumes?.length || 0}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Layout className="h-8 w-8 text-emerald-100" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-emerald-100">Templates Available</p>
                      <p className="text-2xl font-bold text-white">{templates.length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Sparkles className="h-8 w-8 text-purple-100" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-purple-100">Recent Updates</p>
                      <p className="text-2xl font-bold text-white">
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
          </div>
        )}

        {/* Template Gallery */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Perfect Template</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select from our collection of professionally designed templates, each optimized for different industries and career levels.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {templates.map((template) => (
              <Link key={template.id} href={`/builder?template=${template.id}`}>
                <Card className="cursor-pointer hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2 border-0 shadow-md">
                  <CardContent className="p-4">
                    <div className={`w-full h-32 ${template.color} rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner`}>
                      <div className="text-white">
                        {template.icon}
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">{template.name}</h3>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">{template.description}</p>
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex items-center text-primary text-sm font-medium">
                        Use Template <ArrowRight className="h-3 w-3 ml-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Recent Resumes */}
        {resumes && resumes.length > 0 ? (
          <Card className="mb-16 shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-slate-50 to-gray-50">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  Your Recent Resumes
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary">{resumes.length} total</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {isLoading ? (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              ) : (
                <div className="grid gap-4">
                  {resumes.map((resume) => (
                    <div key={resume.id} className="flex items-center justify-between p-6 border rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 group">
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-r from-primary to-accent text-white p-3 rounded-lg group-hover:scale-110 transition-transform">
                          <FileText className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-lg">{resume.title}</h3>
                          <div className="flex items-center space-x-3 mt-2">
                            <Badge variant="outline" className="text-xs capitalize">
                              {resume.template}
                            </Badge>
                            <span className="text-sm text-gray-500 flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              Updated {formatDate(resume.updatedAt)}
                            </span>
                            {resume.isPublic && (
                              <Badge className="text-xs bg-green-100 text-green-800 flex items-center">
                                <Globe className="h-3 w-3 mr-1" />
                                Public
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Link href={`/resume/${resume.id}/preview`}>
                          <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:border-blue-300">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Link href={`/resume/${resume.id}`}>
                          <Button variant="outline" size="sm" className="hover:bg-emerald-50 hover:border-emerald-300">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Button variant="outline" size="sm" className="hover:bg-purple-50 hover:border-purple-300">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="hover:bg-amber-50 hover:border-amber-300">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ) : (
          <section className="text-center py-16 mb-16">
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-12">
              <div className="bg-gradient-to-r from-primary to-accent text-white p-6 rounded-2xl w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <FileText className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Create Your First Resume?</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                Join thousands of professionals who have successfully landed jobs with our resume builder
              </p>
              <Link href="/builder">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-xl transform hover:scale-105 transition-all px-8 py-4">
                  <Plus className="h-5 w-5 mr-2" />
                  Create Your First Resume
                </Button>
              </Link>
            </div>
          </section>
        )}

        {/* Testimonials */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600">
              Join thousands of professionals who have successfully landed their dream jobs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 bg-gradient-to-r from-primary to-accent rounded-2xl text-white">
          <div className="px-8">
            <h2 className="text-3xl font-bold mb-4">Start Building Your Professional Resume Today</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              No credit card required. No hidden fees. Just a powerful resume builder that helps you land your dream job.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/builder">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 px-8 py-4">
                  <Rocket className="h-5 w-5 mr-2" />
                  Get Started for Free
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}