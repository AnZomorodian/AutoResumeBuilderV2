import { FileText, Shield, Lock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
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

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                At ResumeBuilder Pro ("we," "our," or "us"), we take your privacy seriously. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you visit our website 
                and use our resume building services.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Eye className="h-6 w-6 mr-2" />
                Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Personal Information</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We collect information you provide directly to us, such as when you create a resume, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>Name, email address, phone number, and address</li>
                    <li>Professional experience, education, and skills information</li>
                    <li>Profile pictures and other personal details you choose to include</li>
                    <li>Social media links and website URLs</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Technical Information</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We automatically collect certain information about your device and how you interact with our services:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>IP address, browser type, and operating system</li>
                    <li>Pages visited, time spent on our site, and navigation patterns</li>
                    <li>Device identifiers and mobile network information</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Provide, maintain, and improve our resume building services</li>
                <li>Process your requests and provide customer support</li>
                <li>Send you technical notices, updates, and security alerts</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Prevent fraud and ensure the security of our services</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            {/* Data Storage */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock className="h-6 w-6 mr-2" />
                Data Storage and Security
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Security Measures Include:</h3>
                  <ul className="list-disc list-inside text-blue-800 space-y-1">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication requirements</li>
                    <li>Monitoring for suspicious activities</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and services</li>
                <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                <li><strong>Consent:</strong> We may share information with your explicit consent</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Access and Portability</h3>
                  <p className="text-gray-700 text-sm">
                    You can access and download your resume data at any time through your account.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Correction</h3>
                  <p className="text-gray-700 text-sm">
                    You can update or correct your personal information through our platform.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Deletion</h3>
                  <p className="text-gray-700 text-sm">
                    You can delete your account and associated data at any time.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Opt-out</h3>
                  <p className="text-gray-700 text-sm">
                    You can opt out of non-essential communications from us.
                  </p>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. These include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                You can control cookies through your browser settings, though disabling certain cookies may affect website functionality.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not intended for children under 13 years of age. We do not knowingly collect 
                personal information from children under 13. If we become aware that we have collected personal 
                information from a child under 13, we will take steps to delete such information.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued 
                use of our services after any modifications indicates your acceptance of the updated Privacy Policy.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-primary/5 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>DeepInk Team</strong></p>
                <p className="text-gray-700 mb-2">Email: privacy@resumebuilder.pro</p>
                <p className="text-gray-700 mb-2">GitHub: <a href="https://github.com/AnZomorodian" className="text-primary hover:underline">@AnZomorodian</a></p>
                <p className="text-gray-700">Telegram: <a href="https://t.me/ArtinZomorodian" className="text-primary hover:underline">@ArtinZomorodian</a></p>
              </div>
            </section>
          </div>

          {/* Back to App */}
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <Link href="/">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Back to Resume Builder
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}