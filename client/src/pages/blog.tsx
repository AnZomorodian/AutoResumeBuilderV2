import { FileText, Calendar, User, ArrowRight, Tag, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Resume Templates That Will Get You Hired in 2025",
      excerpt: "Discover the most effective resume templates for different industries and career levels. From tech to finance, find the perfect design for your next application.",
      author: "DeepInk Team",
      date: "2025-01-20",
      category: "Templates",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      title: "How to Write a Professional Summary That Stands Out",
      excerpt: "Learn how to craft a compelling professional summary that captures recruiters' attention in the first 6 seconds of reading your resume.",
      author: "Career Expert",
      date: "2025-01-18",
      category: "Writing Tips",
      readTime: "7 min read",
      featured: false,
    },
    {
      id: 3,
      title: "The Complete Guide to ATS-Friendly Resumes",
      excerpt: "Understand how Applicant Tracking Systems work and how to optimize your resume to pass through ATS filters and reach human recruiters.",
      author: "Tech Specialist",
      date: "2025-01-15",
      category: "ATS Tips",
      readTime: "10 min read",
      featured: true,
    },
    {
      id: 4,
      title: "Remote Work Resume: Essential Skills and Formatting",
      excerpt: "With remote work becoming the norm, learn how to highlight your remote work capabilities and format your resume for distributed teams.",
      author: "Remote Work Expert",
      date: "2025-01-12",
      category: "Remote Work",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 5,
      title: "Career Change Resume Strategy: Transferable Skills",
      excerpt: "Making a career change? Discover how to highlight transferable skills and position yourself as the ideal candidate for a new industry.",
      author: "Career Coach",
      date: "2025-01-10",
      category: "Career Change",
      readTime: "8 min read",
      featured: false,
    },
    {
      id: 6,
      title: "Entry-Level Resume Guide: No Experience Required",
      excerpt: "New to the job market? Learn how to create a compelling resume even without extensive work experience, focusing on education, projects, and potential.",
      author: "Entry-Level Specialist",
      date: "2025-01-08",
      category: "Entry Level",
      readTime: "5 min read",
      featured: false,
    },
  ];

  const categories = ["All", "Templates", "Writing Tips", "ATS Tips", "Remote Work", "Career Change", "Entry Level"];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", { 
      year: "numeric", 
      month: "long", 
      day: "numeric" 
    });
  };

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
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-12 w-12 text-primary mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Career Blog</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert advice, tips, and insights to help you create the perfect resume and advance your career
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge 
              key={category} 
              variant={category === "All" ? "default" : "secondary"}
              className="cursor-pointer hover:bg-primary hover:text-white transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-accent h-48 relative">
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="text-white text-center p-6">
                      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                      <Badge variant="secondary" className="bg-white/20 text-white">
                        Featured
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(post.date)}
                    </div>
                    <Badge variant="outline">
                      {post.category}
                    </Badge>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Read More <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(post.date)}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="p-0 h-auto group-hover:text-primary">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get the latest career tips, resume advice, and job market insights delivered to your inbox. 
            Join thousands of professionals who read our weekly newsletter.
          </p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Button className="rounded-l-none">
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            No spam, unsubscribe at any time. Read our Privacy Policy.
          </p>
        </div>

        {/* Coming Soon */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">More Content Coming Soon!</h3>
            <p className="text-gray-600 mb-6">
              We're working on more comprehensive guides, industry-specific advice, and expert interviews to help you succeed in your career journey.
            </p>
            <Link href="/">
              <Button variant="outline" className="mr-4">
                Start Building Your Resume
              </Button>
            </Link>
            <Button>
              Follow Us for Updates
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}