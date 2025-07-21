import { FileText, Scale, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function TermsOfService() {
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

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <Scale className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service ("Terms") govern your use of ResumeBuilder Pro ("Service") operated by 
                DeepInk Team ("us", "we", or "our"). By accessing or using our Service, you agree to be bound 
                by these Terms. If you disagree with any part of these terms, you may not access the Service.
              </p>
            </section>

            {/* Use License */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                Use License
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Permission is granted to temporarily access and use ResumeBuilder Pro for personal, 
                  non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                  <li>attempt to decompile or reverse engineer any software contained on our website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>
            </section>

            {/* Account Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Account Terms</h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Account Responsibilities:</h3>
                  <ul className="list-disc list-inside text-blue-800 space-y-1">
                    <li>You are responsible for safeguarding the password and all activities under your account</li>
                    <li>You must notify us immediately upon becoming aware of any breach of security</li>
                    <li>You may not use another person's account without permission</li>
                    <li>Account names may not be offensive, inappropriate, or infringe on trademarks</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* User Content */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Content</h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Our Service allows you to create, post, and share content. You are responsible for the content 
                  you submit to the Service, including its legality, reliability, and appropriateness.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-900 mb-2">You retain rights to your content</h3>
                    <p className="text-green-800 text-sm">
                      All resume data, personal information, and content you create remains yours.
                    </p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-yellow-900 mb-2">Content Guidelines</h3>
                    <p className="text-yellow-800 text-sm">
                      Content must be accurate, lawful, and not infringe on others' rights.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Prohibited Uses */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-2" />
                Prohibited Uses
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may not use our Service:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>For any unlawful purpose or to solicit others to unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
                <li>To upload or transmit viruses or any other type of malicious code</li>
                <li>To collect or track the personal information of others</li>
                <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                <li>For any obscene or immoral purpose</li>
                <li>To interfere with or circumvent the security features of the Service</li>
              </ul>
            </section>

            {/* Service Availability */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Availability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We strive to provide reliable service, but we cannot guarantee:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>That the service will be uninterrupted, timely, secure, or error-free</li>
                <li>That the information obtained through the service will be accurate or reliable</li>
                <li>That any defects in the service will be corrected</li>
              </ul>
              <div className="bg-amber-50 p-4 rounded-lg mt-4">
                <p className="text-amber-800 text-sm">
                  <strong>Note:</strong> We reserve the right to modify or discontinue the service at any time 
                  without notice. We shall not be liable if for any reason all or any part of the service 
                  is unavailable at any time.
                </p>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  The Service and its original content, features, and functionality are and will remain the 
                  exclusive property of DeepInk Team and its licensors. The Service is protected by copyright, 
                  trademark, and other laws.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">What you can do:</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Use our resume templates for creating your personal resumes</li>
                    <li>Export and use your completed resumes for job applications</li>
                    <li>Share your resume links as intended by the service</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  We may terminate or suspend your account and bar access to the Service immediately, without 
                  prior notice or liability, under our sole discretion, for any reason whatsoever, including 
                  but not limited to a breach of the Terms.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you wish to terminate your account, you may simply discontinue using the Service and 
                  delete your account through the platform.
                </p>
              </div>
            </section>

            {/* Disclaimer */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-red-800 text-sm leading-relaxed">
                  The information on this website is provided on an "as is" basis. To the fullest extent 
                  permitted by law, this Company excludes all representations, warranties, conditions and 
                  terms, whether express, implied, statutory or otherwise, including but not limited to 
                  warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                In no event shall DeepInk Team, nor its directors, employees, partners, agents, suppliers, 
                or affiliates, be liable for any indirect, incidental, special, consequential, or punitive 
                damages, including without limitation, loss of profits, data, use, goodwill, or other 
                intangible losses, resulting from your use of the Service.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction 
                in which the service operates, without regard to its conflict of law provisions. Our failure 
                to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will provide at least 30 days notice prior to any new terms 
                taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-primary/5 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>DeepInk Team</strong></p>
                <p className="text-gray-700 mb-2">Email: legal@resumebuilder.pro</p>
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