import { Mail, Phone, MapPin, Globe, Calendar, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin, FaTelegram, FaDiscord } from "react-icons/fa";
import type { ResumeData } from "@shared/schema";

interface TechTemplateProps {
  data: ResumeData;
}

export default function TechTemplate({ data }: TechTemplateProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-gray-900 text-gray-100 font-mono text-sm leading-relaxed">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-8">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-white mb-2">
              {data.personalDetails.fullName || "Your Name"}
            </h1>
            <div className="text-cyan-100 text-lg mb-4 font-semibold">
              {data.personalDetails.jobTitle || "Software Engineer"}
            </div>
            
            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-cyan-50">
              {data.personalDetails.email && (
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <a href={`mailto:${data.personalDetails.email}`} className="hover:text-cyan-200">
                    {data.personalDetails.email}
                  </a>
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
              {data.personalDetails.website && (
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-2" />
                  <a href={data.personalDetails.website} target="_blank" rel="noopener noreferrer" 
                     className="hover:text-cyan-200">
                    {data.personalDetails.website.replace(/^https?:\/\//, '')}
                  </a>
                </div>
              )}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mt-4">
              {data.personalDetails.github && (
                <a href={data.personalDetails.github} target="_blank" rel="noopener noreferrer"
                   className="text-cyan-100 hover:text-cyan-200 transition-colors">
                  <FaGithub className="h-5 w-5" />
                </a>
              )}
              {data.personalDetails.linkedin && (
                <a href={data.personalDetails.linkedin} target="_blank" rel="noopener noreferrer"
                   className="text-cyan-100 hover:text-cyan-200 transition-colors">
                  <FaLinkedin className="h-5 w-5" />
                </a>
              )}
              {data.personalDetails.telegram && (
                <a href={data.personalDetails.telegram} target="_blank" rel="noopener noreferrer"
                   className="text-cyan-100 hover:text-cyan-200 transition-colors">
                  <FaTelegram className="h-5 w-5" />
                </a>
              )}
              {data.personalDetails.discord && (
                <a href={data.personalDetails.discord} target="_blank" rel="noopener noreferrer"
                   className="text-cyan-100 hover:text-cyan-200 transition-colors">
                  <FaDiscord className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
          
          {/* Profile Image */}
          {data.personalDetails.profileImage && (
            <div className="ml-6">
              <img
                src={data.personalDetails.profileImage}
                alt="Profile"
                className="w-32 h-32 rounded-lg object-cover border-4 border-cyan-200 shadow-lg"
              />
            </div>
          )}
        </div>
      </div>

      <div className="p-8 space-y-8">
        {/* Summary */}
        {data.personalDetails.summary && (
          <div>
            <h2 className="text-xl font-bold text-cyan-400 mb-4 border-b border-gray-700 pb-2">
              ~/about.md
            </h2>
            <p className="text-gray-300 leading-relaxed">{data.personalDetails.summary}</p>
          </div>
        )}

        {/* Skills */}
        {(data.skills.technical.length > 0 || data.skills.soft.length > 0 || data.skills.languages.length > 0) && (
          <div>
            <h2 className="text-xl font-bold text-cyan-400 mb-4 border-b border-gray-700 pb-2">
              ~/skills.json
            </h2>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              {data.skills.technical.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">
                    "technical": [
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 ml-4">
                    {data.skills.technical.map((skill, index) => (
                      <div key={index} className="text-green-300">
                        "{skill}"{index < data.skills.technical.length - 1 ? ',' : ''}
                      </div>
                    ))}
                  </div>
                  <div className="text-blue-400 mt-2">],</div>
                </div>
              )}
              
              {data.skills.soft.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">
                    "soft_skills": [
                  </h3>
                  <div className="grid grid-cols-2 gap-2 ml-4">
                    {data.skills.soft.map((skill, index) => (
                      <div key={index} className="text-yellow-300">
                        "{skill}"{index < data.skills.soft.length - 1 ? ',' : ''}
                      </div>
                    ))}
                  </div>
                  <div className="text-blue-400 mt-2">],</div>
                </div>
              )}
              
              {data.skills.languages.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">
                    "languages": [
                  </h3>
                  <div className="space-y-1 ml-4">
                    {data.skills.languages.map((lang, index) => (
                      <div key={index} className="text-purple-300">
                        {"{"}
                        <span className="ml-4">
                          "name": "{lang.language}",
                          <br />
                          "level": "{lang.proficiency}"
                        </span>
                        {"}"}{index < data.skills.languages.length - 1 ? ',' : ''}
                      </div>
                    ))}
                  </div>
                  <div className="text-blue-400 mt-2">]</div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Work Experience */}
        {data.workExperience.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-cyan-400 mb-4 border-b border-gray-700 pb-2">
              ~/experience.log
            </h2>
            <div className="space-y-6">
              {data.workExperience.map((experience) => (
                <div key={experience.id} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-green-400">
                        $ {experience.jobTitle || "Job Title"}
                      </h3>
                      <p className="text-blue-300 font-medium">
                        @ {experience.company || "Company"}
                      </p>
                      {experience.location && (
                        <p className="text-gray-400 text-sm">{experience.location}</p>
                      )}
                    </div>
                    <div className="text-right text-gray-400 text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(experience.startDate)} - {
                          experience.current ? 
                          <span className="text-green-400 font-medium">Present</span> : 
                          formatDate(experience.endDate || '')
                        }
                      </div>
                    </div>
                  </div>
                  
                  {experience.description && (
                    <p className="text-gray-300 mb-3">{experience.description}</p>
                  )}
                  
                  {experience.achievements.length > 0 && (
                    <div>
                      <h4 className="text-purple-400 font-medium mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, index) => (
                          achievement && (
                            <li key={index} className="text-gray-300 flex items-start">
                              <span className="text-cyan-400 mr-2">&gt;</span>
                              {achievement}
                            </li>
                          )
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {data.projects.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-cyan-400 mb-4 border-b border-gray-700 pb-2">
              ~/projects/
            </h2>
            <div className="grid gap-6">
              {data.projects.map((project) => (
                <div key={project.id} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-yellow-400">
                      📁 {project.name || "Project Name"}
                    </h3>
                    <div className="text-sm text-gray-400">
                      {project.endDate && !project.current && formatDate(project.endDate)}
                      {project.current && (
                        <span className="text-green-400 font-medium">Active</span>
                      )}
                    </div>
                  </div>
                  
                  {project.technologies && (
                    <div className="mb-3">
                      <span className="text-blue-400">Tech Stack: </span>
                      <span className="text-gray-300">{project.technologies}</span>
                    </div>
                  )}
                  
                  {project.description && (
                    <p className="text-gray-300 mb-4">{project.description}</p>
                  )}
                  
                  <div className="flex space-x-4">
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-400 hover:text-cyan-300 flex items-center text-sm">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                         className="text-cyan-400 hover:text-cyan-300 flex items-center text-sm">
                        <FaGithub className="h-3 w-3 mr-1" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-cyan-400 mb-4 border-b border-gray-700 pb-2">
              ~/education.txt
            </h2>
            <div className="space-y-4">
              {data.education.map((education) => (
                <div key={education.id} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-green-400">
                        {education.degree || "Degree"}
                      </h3>
                      {education.fieldOfStudy && (
                        <p className="text-blue-300">{education.fieldOfStudy}</p>
                      )}
                      <p className="text-gray-300">{education.institution || "Institution"}</p>
                      {education.location && (
                        <p className="text-gray-400 text-sm">{education.location}</p>
                      )}
                    </div>
                    <div className="text-right text-gray-400">
                      {education.graduationYear && (
                        <div>Class of {education.graduationYear}</div>
                      )}
                      {education.gpa && (
                        <div className="text-yellow-400">GPA: {education.gpa}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-cyan-400 mb-4 border-b border-gray-700 pb-2">
              ~/certificates/
            </h2>
            <div className="grid gap-4">
              {data.certifications.map((cert) => (
                <div key={cert.id} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-purple-400">
                        🏆 {cert.name || "Certification Name"}
                      </h3>
                      <p className="text-gray-300">{cert.issuer || "Issuer"}</p>
                    </div>
                    {cert.issueDate && (
                      <div className="text-gray-400 text-sm">
                        {formatDate(cert.issueDate)}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}