import { FileText, Users, Target, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center space-x-3">
                <div className="bg-primary text-white p-2 rounded-lg">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-secondary">ResumeBuilder Pro</h1>
                  <p className="text-xs text-slate-500">Create Professional Resumes</p>
                </div>
              </div>
            </Link>
            <Link href="/">
              <Button variant="outline">Back to App</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About ResumeBuilder Pro
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to help job seekers worldwide create stunning, professional resumes 
            that stand out from the competition and land their dream jobs.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To democratize professional resume creation by providing easy-to-use, powerful tools 
              that help anyone create a compelling resume, regardless of their design skills or 
              technical background. We believe everyone deserves a chance to present their best self.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              <Zap className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To become the world's leading platform for career advancement tools, empowering 
              millions of professionals to achieve their career goals through better presentation 
              of their skills, experience, and potential.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">11 Professional Templates</h3>
              <p className="text-gray-600">
                Choose from a variety of professionally designed templates suitable for any industry
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Preview</h3>
              <p className="text-gray-600">
                See your changes instantly with our live preview feature as you build your resume
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Auto-save</h3>
              <p className="text-gray-600">
                Never lose your work with automatic saving every 3 seconds
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're a passionate team of developers, designers, and career experts dedicated to 
              helping you succeed in your professional journey.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-xl text-white text-center">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">DeepInk Team</h3>
              <p className="text-blue-100">
                A collective of talented individuals working together to create the best resume building experience
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Simplicity</h3>
              <p className="text-gray-600 text-sm">
                We believe in making complex tasks simple and intuitive
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600 text-sm">
                Every template and feature is crafted with attention to detail
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Accessibility</h3>
              <p className="text-gray-600 text-sm">
                Professional resume creation should be available to everyone
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                We continuously improve and add new features based on user feedback
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Create Your Resume?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have successfully created stunning resumes with our platform
          </p>
          <Link href="/">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Building Your Resume
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}