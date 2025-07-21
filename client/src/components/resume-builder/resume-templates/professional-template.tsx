import { Mail, Phone, Globe, MapPin, Calendar, Award } from "lucide-react";
import { FaLinkedin, FaGithub, FaTelegram, FaDiscord } from "react-icons/fa";
import type { ResumeData } from "@shared/schema";

interface ProfessionalTemplateProps {
  data: ResumeData;
}

export default function ProfessionalTemplate({ data }: ProfessionalTemplateProps) {
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
    <div className="p-8 text-gray-900 bg-gradient-to-br from-blue-50 to-white">
      {/* Header Section with Two-Column Layout */}
      <div className="grid grid-cols-3 gap-8 mb-8">
        {/* Left Column - Personal Info */}
        <div className="col-span-2">
          {data.personalDetails.profileImage && (
            <div className="float-left mr-6 mb-4">
              <img
                src={data.personalDetails.profileImage}
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover border-4 border-blue-200 shadow-lg"
              />
            </div>
          )}
          <h1 className="text-4xl font-bold text-blue-900 mb-2">
            {data.personalDetails.fullName || "Your Name"}
          </h1>
          <p className="text-xl text-blue-600 font-medium mb-4">
            {data.personalDetails.jobTitle || "Your Job Title"}
          </p>
          {data.personalDetails.summary && (
            <p className="text-gray-700 leading-relaxed mb-4">
              {data.personalDetails.summary}
            </p>
          )}
        </div>

        {/* Right Column - Contact Info */}
        <div className="bg-blue-900 text-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <div className="space-y-3 text-sm">
            {data.personalDetails.email && (
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 opacity-80" />
                <span className="break-all">{data.personalDetails.email}</span>
              </div>
            )}
            {data.personalDetails.phone && (
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 opacity-80" />
                <span>{data.personalDetails.phone}</span>
              </div>
            )}
            {data.personalDetails.location && (
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 opacity-80" />
                <span>{data.personalDetails.location}</span>
              </div>
            )}
            {data.personalDetails.linkedin && (
              <div className="flex items-center">
                <FaLinkedin className="h-4 w-4 mr-3 opacity-80" />
                <a href={data.personalDetails.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 underline break-all">
                  {data.personalDetails.linkedin.replace(/^https?:\/\//, "")}
                </a>
              </div>
            )}
            {data.personalDetails.github && (
              <div className="flex items-center">
                <FaGithub className="h-4 w-4 mr-3 opacity-80" />
                <a href={data.personalDetails.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 underline break-all">
                  {data.personalDetails.github.replace(/^https?:\/\//, "")}
                </a>
              </div>
            )}
            {data.personalDetails.telegram && (
              <div className="flex items-center">
                <FaTelegram className="h-4 w-4 mr-3 opacity-80" />
                <a href={data.personalDetails.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 underline break-all">
                  {data.personalDetails.telegram.replace(/^https?:\/\//, "")}
                </a>
              </div>
            )}
            {data.personalDetails.discord && (
              <div className="flex items-center">
                <FaDiscord className="h-4 w-4 mr-3 opacity-80" />
                <a href={data.personalDetails.discord} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 underline break-all">
                  {data.personalDetails.discord.replace(/^https?:\/\//, "")}
                </a>
              </div>
            )}
            {data.personalDetails.website && (
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-3 opacity-80" />
                <a href={data.personalDetails.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 underline break-all">
                  {data.personalDetails.website.replace(/^https?:\/\//, "")}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-3 gap-8">
        {/* Left Column - Main Content */}
        <div className="col-span-2 space-y-8">
          {/* Work Experience */}
          {data.workExperience.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-blue-200">
                Professional Experience
              </h2>
              {data.workExperience.map((experience) => (
                <div key={experience.id} className="mb-6 last:mb-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {experience.jobTitle || "Job Title"}
                      </h3>
                      <p className="text-blue-600 font-medium">
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
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-blue-200">
                Notable Projects
              </h2>
              {data.projects.map((project) => (
                <div key={project.id} className="mb-4 last:mb-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {project.name || "Project Name"}
                    </h3>
                    {project.endDate && !project.current && (
                      <span className="text-sm text-gray-500">
                        {formatDate(project.endDate)}
                      </span>
                    )}
                    {project.current && (
                      <span className="text-sm text-green-600 font-medium">
                        In Progress
                      </span>
                    )}
                  </div>
                  {project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  {project.description && (
                    <p className="text-gray-700 text-sm mb-2">{project.description}</p>
                  )}
                  <div className="flex gap-4 text-sm">
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" 
                         className="text-blue-600 hover:underline flex items-center">
                        <Globe className="h-3 w-3 mr-1" />
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                         className="text-blue-600 hover:underline flex items-center">
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
          {/* Education */}
          {data.education.length > 0 && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="text-lg font-bold text-blue-900 mb-3">Education</h2>
              {data.education.map((education) => (
                <div key={education.id} className="mb-3 last:mb-0">
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {education.degree || "Degree"}
                  </h3>
                  <p className="text-blue-600 text-sm font-medium">
                    {education.institution || "Institution"}
                  </p>
                  {education.graduationYear && (
                    <p className="text-gray-500 text-xs">
                      {education.graduationYear}
                    </p>
                  )}
                  {education.gpa && (
                    <p className="text-gray-600 text-xs">GPA: {education.gpa}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {(data.skills.technical.length > 0 || data.skills.soft.length > 0) && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="text-lg font-bold text-blue-900 mb-3">Core Skills</h2>
              <div className="space-y-3">
                {data.skills.technical.length > 0 && (
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2 text-sm">Technical</h4>
                    <div className="flex flex-wrap gap-1">
                      {data.skills.technical.map((skill, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {data.skills.soft.length > 0 && (
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2 text-sm">Soft Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      {data.skills.soft.map((skill, index) => (
                        <span key={index} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Languages */}
          {data.skills.languages.length > 0 && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="text-lg font-bold text-blue-900 mb-3">Languages</h2>
              <div className="space-y-2">
                {data.skills.languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700 text-sm">{lang.language}</span>
                    <span className="text-blue-600 text-xs font-medium">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {data.certifications.length > 0 && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="text-lg font-bold text-blue-900 mb-3">Certifications</h2>
              <div className="space-y-2">
                {data.certifications.map((cert) => (
                  <div key={cert.id}>
                    <div className="flex items-start">
                      <Award className="h-3 w-3 mt-1 mr-2 text-blue-600" />
                      <div>
                        <span className="text-gray-700 font-medium text-sm block">
                          {cert.name || "Certification Name"}
                        </span>
                        <span className="text-gray-500 text-xs">
                          {cert.issuer || "Issuer"}
                        </span>
                        {cert.issueDate && (
                          <div className="text-gray-400 text-xs">
                            {formatDate(cert.issueDate)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}