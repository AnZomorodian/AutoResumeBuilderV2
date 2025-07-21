import { FileText } from "lucide-react";
import { FaTelegram, FaDiscord, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-primary text-white p-2 rounded-lg">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-secondary">ResumeBuilder Pro</h3>
                <p className="text-xs text-slate-500">Create Professional Resumes</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm mb-4">
              Build stunning professional resumes with our easy-to-use tools and templates. 
              Stand out from the competition.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://t.me/resumebuilder" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors"
              >
                <FaTelegram className="h-5 w-5" />
              </a>
              <a 
                href="https://discord.gg/resumebuilder" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors"
              >
                <FaDiscord className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/resumebuilder/app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors"
              >
                <FaGithub className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-secondary mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-primary transition-colors">Resume Templates</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cover Letter Builder</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Portfolio Generator</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Career Resources</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-secondary mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Video Tutorials</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-secondary mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-200 mt-8 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            &copy; 2024 ResumeBuilder Pro. All rights reserved. Built with ❤️ for job seekers worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
