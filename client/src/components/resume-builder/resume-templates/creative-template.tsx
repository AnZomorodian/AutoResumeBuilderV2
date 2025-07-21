import { Mail, Phone, Globe, MapPin, Calendar, Star, Code2, Briefcase } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import type { ResumeData } from "@shared/schema";

interface CreativeTemplateProps {
  data: ResumeData;
}

export default function CreativeTemplate({ data }: CreativeTemplateProps) {
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
    <div className="p-8 text-gray-900 bg-gradient-to-br from-emerald-50 to-white">
      {/* Header Section with Creative Design */}
      <div className="relative mb-8">
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="text-3xl font-bold text-white">
                {(data.personalDetails.fullName || "YN").split(' ').map(n => n[0]).join('').substring(0, 2)}
              </span>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">
                {data.personalDetails.fullName || "Your Name"}
              </h1>
              <p className="text-emerald-100 text-lg mb-3">
                {data.personalDetails.jobTitle || "Your Job Title"}
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-emerald-100">
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
                    <a href={data.personalDetails.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-200 underline">
                      {data.personalDetails.linkedin.replace(/^https?:\/\//, "")}
                    </a>
                  </div>
                )}
                {data.personalDetails.website && (
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 mr-2" />
                    <a href={data.personalDetails.website} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-200 underline">
                      {data.personalDetails.website.replace(/^https?:\/\//, "")}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {data.personalDetails.location && (
          <div className="absolute -bottom-3 right-6 bg-white px-4 py-2 rounded-full shadow-md flex items-center text-sm text-emerald-700">
            <MapPin className="h-4 w-4 mr-1" />
            {data.personalDetails.location}
          </div>
        )}
      </div>

      {/* Professional Summary */}
      {data.personalDetails.summary && (
        <div className="mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-emerald-500">
            <h2 className="text-xl font-bold text-emerald-700 mb-3 flex items-center">
              <Star className="h-5 w-5 mr-2" />
              About Me
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {data.personalDetails.summary}
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Work Experience */}
          {data.workExperience.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 flex items-center">
                <Briefcase className="h-6 w-6 mr-2" />
                Experience
              </h2>
              <div className="space-y-4">
                {data.workExperience.map((experience, index) => (
                  <div key={experience.id} className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full mr-4 mt-2"></div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {experience.jobTitle || "Job Title"}
                          </h3>
                          <p className="text-emerald-600 font-medium">
                            {experience.company || "Company Name"}
                          </p>
                        </div>
                      </div>
                      <div className="text-right text-sm text-gray-500">
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
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          achievement && (
                            <li key={achievementIndex} className="flex items-start text-gray-700">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          )
                        ))}
                      </ul>
                    )}
                    {experience.description && (
                      <p className="text-gray-700 mt-3 italic">{experience.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {data.projects.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 flex items-center">
                <Code2 className="h-6 w-6 mr-2" />
                Featured Projects
              </h2>
              <div className="grid gap-4">
                {data.projects.map((project) => (
                  <div key={project.id} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-emerald-300">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-gray-900">
                        {project.name || "Project Name"}
                      </h3>
                      {project.endDate && !project.current && (
                        <span className="text-sm text-gray-500 bg-emerald-50 px-3 py-1 rounded-full">
                          {formatDate(project.endDate)}
                        </span>
                      )}
                      {project.current && (
                        <span className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full font-medium">
                          In Progress
                        </span>
                      )}
                    </div>
                    {project.technologies && (
                      <div className="mb-3">
                        <div className="flex flex-wrap gap-2">
                          {(typeof project.technologies === 'string' 
                            ? project.technologies.split(',')
                            : project.technologies || []
                          ).map((tech: string, index: number) => (
                            <span key={index} className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-md text-xs font-medium">
                              {tech.trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {project.description && (
                      <p className="text-gray-700 mb-3">{project.description}</p>
                    )}
                    <div className="flex gap-3 text-sm">
                      {project.url && (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" 
                           className="text-emerald-600 hover:text-emerald-800 hover:underline flex items-center">
                          <Globe className="h-3 w-3 mr-1" />
                          Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                           className="text-emerald-600 hover:text-emerald-800 hover:underline flex items-center">
                          <FaGithub className="h-3 w-3 mr-1" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Skills */}
          {(data.skills.technical.length > 0 || data.skills.soft.length > 0) && (
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-bold text-emerald-700 mb-4">Skills</h2>
              <div className="space-y-4">
                {data.skills.technical.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Technical</h4>
                    <div className="flex flex-wrap gap-2">
                      {data.skills.technical.map((skill, index) => (
                        <span key={index} className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {data.skills.soft.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Soft Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {data.skills.soft.map((skill, index) => (
                        <span key={index} className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {data.skills.languages.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Languages</h4>
                    <div className="space-y-2">
                      {data.skills.languages.map((lang, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-sm text-gray-700">{lang.language}</span>
                          <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
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

          {/* Education */}
          {data.education.length > 0 && (
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-bold text-emerald-700 mb-4">Education</h2>
              {data.education.map((education) => (
                <div key={education.id} className="mb-4 last:mb-0">
                  <h3 className="font-bold text-gray-900">
                    {education.degree || "Degree"}
                  </h3>
                  <p className="text-emerald-600 font-medium text-sm">
                    {education.institution || "Institution"}
                  </p>
                  <div className="text-xs text-gray-500 mt-1">
                    {education.graduationYear && (
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {education.graduationYear}
                      </div>
                    )}
                    {education.gpa && (
                      <div className="mt-1">GPA: {education.gpa}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certifications */}
          {data.certifications.length > 0 && (
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-bold text-emerald-700 mb-4">Certifications</h2>
              <div className="space-y-3">
                {data.certifications.map((cert) => (
                  <div key={cert.id} className="border-l-3 border-emerald-300 pl-3">
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {cert.name || "Certification Name"}
                    </h4>
                    <p className="text-emerald-600 text-xs">
                      {cert.issuer || "Issuer"}
                    </p>
                    {cert.issueDate && (
                      <p className="text-xs text-gray-500">
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
  );
}
