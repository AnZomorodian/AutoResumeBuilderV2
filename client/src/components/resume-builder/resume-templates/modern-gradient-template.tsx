import { Mail, Phone, Globe, MapPin, Calendar, Star, Briefcase } from "lucide-react";
import { FaLinkedin, FaGithub, FaTelegram, FaDiscord } from "react-icons/fa";
import type { ResumeData } from "@shared/schema";

interface ModernGradientTemplateProps {
  data: ResumeData;
}

export default function ModernGradientTemplate({ data }: ModernGradientTemplateProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    try {
      const [year, month] = dateString.split("-");
      const date = new Date(parseInt(year), parseInt(month) - 1);
      return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
    } catch {
      return dateString;
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 min-h-full">
      {/* Header Section with Gradient */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white p-8">
        <div className="flex items-center space-x-6">
          {data.personalDetails.profileImage && (
            <div className="flex-shrink-0">
              <img
                src={data.personalDetails.profileImage}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-2xl"
              />
            </div>
          )}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">
              {data.personalDetails.fullName || "Your Name"}
            </h1>
            <p className="text-xl mb-4 text-purple-100">
              {data.personalDetails.jobTitle || "Your Job Title"}
            </p>
            {data.personalDetails.summary && (
              <p className="text-purple-100 leading-relaxed max-w-2xl">
                {data.personalDetails.summary}
              </p>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-6 flex flex-wrap gap-6 text-sm">
          {data.personalDetails.email && (
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              {data.personalDetails.email}
            </div>
          )}
          {data.personalDetails.phone && (
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              {data.personalDetails.phone}
            </div>
          )}
          {data.personalDetails.location && (
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              {data.personalDetails.location}
            </div>
          )}
        </div>

        {/* Social Links */}
        <div className="mt-4 flex flex-wrap gap-4">
          {data.personalDetails.linkedin && (
            <a href={data.personalDetails.linkedin} target="_blank" rel="noopener noreferrer" 
               className="flex items-center bg-white/20 backdrop-blur px-3 py-1 rounded-full hover:bg-white/30 transition-colors">
              <FaLinkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </a>
          )}
          {data.personalDetails.github && (
            <a href={data.personalDetails.github} target="_blank" rel="noopener noreferrer"
               className="flex items-center bg-white/20 backdrop-blur px-3 py-1 rounded-full hover:bg-white/30 transition-colors">
              <FaGithub className="h-4 w-4 mr-2" />
              GitHub
            </a>
          )}
          {data.personalDetails.telegram && (
            <a href={data.personalDetails.telegram} target="_blank" rel="noopener noreferrer"
               className="flex items-center bg-white/20 backdrop-blur px-3 py-1 rounded-full hover:bg-white/30 transition-colors">
              <FaTelegram className="h-4 w-4 mr-2" />
              Telegram
            </a>
          )}
          {data.personalDetails.discord && (
            <a href={data.personalDetails.discord} target="_blank" rel="noopener noreferrer"
               className="flex items-center bg-white/20 backdrop-blur px-3 py-1 rounded-full hover:bg-white/30 transition-colors">
              <FaDiscord className="h-4 w-4 mr-2" />
              Discord
            </a>
          )}
          {data.personalDetails.website && (
            <a href={data.personalDetails.website} target="_blank" rel="noopener noreferrer"
               className="flex items-center bg-white/20 backdrop-blur px-3 py-1 rounded-full hover:bg-white/30 transition-colors">
              <Globe className="h-4 w-4 mr-2" />
              Website
            </a>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Work Experience */}
            {data.workExperience.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg mr-3">
                    <Briefcase className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Work Experience</h2>
                </div>
                {data.workExperience.map((experience, index) => (
                  <div key={experience.id} className={`${index !== 0 ? 'border-t pt-6 mt-6' : ''}`}>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {experience.jobTitle || "Job Title"}
                        </h3>
                        <p className="text-purple-600 font-medium">
                          {experience.company || "Company Name"}
                        </p>
                      </div>
                      <div className="text-sm text-gray-500 text-right">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {formatDate(experience.startDate)} - {experience.current ? "Present" : formatDate(experience.endDate || "")}
                        </div>
                        {experience.location && (
                          <div className="flex items-center mt-1">
                            <MapPin className="h-3 w-3 mr-1" />
                            {experience.location}
                          </div>
                        )}
                      </div>
                    </div>
                    {(experience.achievements.length > 0 && experience.achievements[0]) && (
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        {experience.achievements.map((achievement, index) => (
                          achievement && (
                            <li key={index}>{achievement}</li>
                          )
                        ))}
                      </ul>
                    )}
                    {experience.description && (
                      <p className="text-gray-700 mt-2">{experience.description}</p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Projects */}
            {data.projects.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-lg mr-3">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Featured Projects</h2>
                </div>
                {data.projects.map((project, index) => (
                  <div key={project.id} className={`${index !== 0 ? 'border-t pt-6 mt-6' : ''}`}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {project.name || "Project Name"}
                      </h3>
                      {project.current && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          In Progress
                        </span>
                      )}
                    </div>
                    {project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    {project.description && (
                      <p className="text-gray-700 text-sm mb-3">{project.description}</p>
                    )}
                    <div className="flex gap-4 text-sm">
                      {project.url && (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" 
                           className="text-purple-600 hover:underline flex items-center">
                          <Globe className="h-3 w-3 mr-1" />
                          Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                           className="text-purple-600 hover:underline flex items-center">
                          <FaGithub className="h-3 w-3 mr-1" />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Skills */}
            {(data.skills.technical.length > 0 || data.skills.soft.length > 0) && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Skills</h2>
                <div className="space-y-4">
                  {data.skills.technical.length > 0 && (
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Technical</h4>
                      <div className="flex flex-wrap gap-2">
                        {data.skills.technical.map((skill, index) => (
                          <span key={index} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {data.skills.soft.length > 0 && (
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Soft Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {data.skills.soft.map((skill, index) => (
                          <span key={index} className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Education */}
            {data.education.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Education</h2>
                {data.education.map((education) => (
                  <div key={education.id} className="mb-4 last:mb-0">
                    <h3 className="font-semibold text-gray-800">
                      {education.degree || "Degree"}
                    </h3>
                    <p className="text-purple-600 font-medium">
                      {education.institution || "Institution"}
                    </p>
                    <div className="text-sm text-gray-500 mt-1">
                      {education.graduationYear && (
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {education.graduationYear}
                        </div>
                      )}
                      {education.gpa && (
                        <p className="text-gray-600">GPA: {education.gpa}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Languages */}
            {data.skills.languages.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Languages</h2>
                <div className="space-y-3">
                  {data.skills.languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700">{lang.language}</span>
                      <span className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                        {lang.proficiency}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Certifications */}
            {data.certifications.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Certifications</h2>
                <div className="space-y-3">
                  {data.certifications.map((cert) => (
                    <div key={cert.id} className="border-l-4 border-purple-500 pl-3">
                      <h4 className="font-medium text-gray-800 text-sm">
                        {cert.name || "Certification Name"}
                      </h4>
                      <p className="text-purple-600 text-sm">
                        {cert.issuer || "Issuer"}
                      </p>
                      {cert.issueDate && (
                        <p className="text-gray-500 text-xs">
                          {formatDate(cert.issueDate)}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}