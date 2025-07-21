import { Mail, Phone, Globe, MapPin, Calendar, Award, Target, TrendingUp, Users } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import type { ResumeData } from "@shared/schema";

interface ExecutiveTemplateProps {
  data: ResumeData;
}

export default function ExecutiveTemplate({ data }: ExecutiveTemplateProps) {
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
    <div className="p-8 text-gray-900 bg-gradient-to-b from-white to-purple-50">
      {/* Header Section - Executive Style */}
      <div className="relative mb-8">
        <div className="bg-gradient-to-r from-purple-800 to-purple-900 text-white p-8 rounded-lg shadow-xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-3 tracking-wide">
              {data.personalDetails.fullName || "EXECUTIVE NAME"}
            </h1>
            <div className="w-24 h-1 bg-purple-300 mx-auto mb-4"></div>
            <p className="text-xl text-purple-100 font-light mb-6 tracking-wide">
              {data.personalDetails.jobTitle || "EXECUTIVE POSITION"}
            </p>
            
            <div className="flex justify-center flex-wrap gap-6 text-sm text-purple-100">
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
              {data.personalDetails.linkedin && (
                <div className="flex items-center">
                  <FaLinkedin className="h-4 w-4 mr-2" />
                  {data.personalDetails.linkedin.replace(/^https?:\/\//, "")}
                </div>
              )}
              {data.personalDetails.location && (
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {data.personalDetails.location}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      {data.personalDetails.summary && (
        <div className="mb-8">
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-purple-600">
            <h2 className="text-2xl font-bold text-purple-800 mb-4 flex items-center">
              <Target className="h-6 w-6 mr-3" />
              EXECUTIVE SUMMARY
            </h2>
            <div className="w-16 h-1 bg-purple-600 mb-4"></div>
            <p className="text-gray-700 leading-relaxed text-lg font-light">
              {data.personalDetails.summary}
            </p>
          </div>
        </div>
      )}

      {/* Professional Experience */}
      {data.workExperience.length > 0 && (
        <div className="mb-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-800 mb-6 flex items-center">
              <TrendingUp className="h-6 w-6 mr-3" />
              PROFESSIONAL EXPERIENCE
            </h2>
            <div className="w-16 h-1 bg-purple-600 mb-6"></div>
            
            {data.workExperience.map((experience, index) => (
              <div key={experience.id} className="mb-8 last:mb-0">
                <div className="border-l-4 border-purple-300 pl-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {experience.jobTitle || "Executive Position"}
                      </h3>
                      <p className="text-lg text-purple-700 font-semibold mb-2">
                        {experience.company || "Company Name"}
                      </p>
                      {experience.location && (
                        <p className="text-sm text-gray-600 flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {experience.location}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                        {formatDate(experience.startDate)} - {experience.current ? "Present" : formatDate(experience.endDate || "")}
                      </div>
                    </div>
                  </div>
                  
                  {(experience.achievements.length > 0 && experience.achievements[0]) && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">Key Achievements</h4>
                      {experience.achievements.map((achievement, achievementIndex) => (
                        achievement && (
                          <div key={achievementIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700 leading-relaxed">{achievement}</p>
                          </div>
                        )
                      ))}
                    </div>
                  )}
                  
                  {experience.description && (
                    <div className="mt-4">
                      <p className="text-gray-700 leading-relaxed italic">{experience.description}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Education */}
          {data.education.length > 0 && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2" />
                EDUCATION
              </h2>
              <div className="w-12 h-1 bg-purple-600 mb-4"></div>
              {data.education.map((education) => (
                <div key={education.id} className="mb-4 last:mb-0">
                  <h3 className="text-lg font-bold text-gray-900">
                    {education.degree || "Degree"}
                  </h3>
                  <p className="text-purple-700 font-medium">
                    {education.institution || "Institution"}
                  </p>
                  <div className="text-sm text-gray-600 mt-1">
                    <div className="flex justify-between">
                      {education.graduationYear && (
                        <span>Class of {education.graduationYear}</span>
                      )}
                      {education.gpa && (
                        <span>GPA: {education.gpa}</span>
                      )}
                    </div>
                    {education.location && (
                      <p className="text-xs text-gray-500 mt-1">{education.location}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certifications */}
          {data.certifications.length > 0 && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2" />
                CERTIFICATIONS
              </h2>
              <div className="w-12 h-1 bg-purple-600 mb-4"></div>
              <div className="space-y-3">
                {data.certifications.map((cert) => (
                  <div key={cert.id} className="border-l-3 border-purple-300 pl-4">
                    <h4 className="font-bold text-gray-900">
                      {cert.name || "Certification Name"}
                    </h4>
                    <p className="text-purple-700 text-sm font-medium">
                      {cert.issuer || "Issuing Organization"}
                    </p>
                    {cert.issueDate && (
                      <p className="text-xs text-gray-600">
                        Issued: {formatDate(cert.issueDate)}
                      </p>
                    )}
                    {cert.credentialId && (
                      <p className="text-xs text-gray-500">
                        ID: {cert.credentialId}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Core Competencies */}
          {(data.skills.technical.length > 0 || data.skills.soft.length > 0) && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2" />
                CORE COMPETENCIES
              </h2>
              <div className="w-12 h-1 bg-purple-600 mb-4"></div>
              <div className="space-y-4">
                {data.skills.technical.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 uppercase tracking-wide text-sm">
                      Technical Expertise
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {data.skills.technical.map((skill, index) => (
                        <div key={index} className="bg-purple-50 text-purple-800 px-3 py-2 rounded text-sm font-medium text-center">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {data.skills.soft.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 uppercase tracking-wide text-sm">
                      Leadership Skills
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {data.skills.soft.map((skill, index) => (
                        <div key={index} className="bg-gray-100 text-gray-800 px-3 py-2 rounded text-sm font-medium text-center">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {data.skills.languages.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 uppercase tracking-wide text-sm">
                      Languages
                    </h4>
                    <div className="space-y-2">
                      {data.skills.languages.map((lang, index) => (
                        <div key={index} className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded">
                          <span className="text-sm font-medium text-gray-800">{lang.language}</span>
                          <span className="text-xs text-purple-700 bg-purple-100 px-2 py-1 rounded-full">
                            {lang.proficiency}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Notable Projects */}
          {data.projects.length > 0 && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-purple-800 mb-4">
                NOTABLE PROJECTS
              </h2>
              <div className="w-12 h-1 bg-purple-600 mb-4"></div>
              {data.projects.map((project) => (
                <div key={project.id} className="mb-4 last:mb-0">
                  <h3 className="font-bold text-gray-900 mb-1">
                    {project.name || "Project Name"}
                  </h3>
                  {project.technologies && (
                    <p className="text-sm text-purple-700 font-medium mb-1">
                      {project.technologies}
                    </p>
                  )}
                  {project.description && (
                    <p className="text-sm text-gray-700 mb-2">{project.description}</p>
                  )}
                  {project.completionDate && (
                    <p className="text-xs text-gray-500">
                      Completed: {formatDate(project.completionDate)}
                    </p>
                  )}
                  <div className="flex gap-3 mt-2">
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" 
                         className="text-purple-700 hover:text-purple-900 text-xs font-medium hover:underline">
                        View Project →
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                         className="text-purple-700 hover:text-purple-900 text-xs font-medium hover:underline">
                        Source Code →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
