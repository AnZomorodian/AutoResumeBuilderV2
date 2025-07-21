import { Mail, Phone, Globe, MapPin, Calendar, Award, BookOpen } from "lucide-react";
import { FaLinkedin, FaGithub, FaTelegram, FaDiscord } from "react-icons/fa";
import type { ResumeData } from "@shared/schema";

interface ElegantTemplateProps {
  data: ResumeData;
}

export default function ElegantTemplate({ data }: ElegantTemplateProps) {
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
    <div className="bg-white text-gray-900 font-serif">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white p-8">
        <div className="text-center">
          {data.personalDetails.profileImage && (
            <div className="mb-6">
              <img
                src={data.personalDetails.profileImage}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-3 border-white mx-auto shadow-lg"
              />
            </div>
          )}
          <h1 className="text-4xl font-light tracking-wide mb-2">
            {data.personalDetails.fullName || "Your Name"}
          </h1>
          <div className="w-24 h-0.5 bg-white mx-auto mb-3"></div>
          <p className="text-xl text-slate-200 font-light">
            {data.personalDetails.jobTitle || "Your Job Title"}
          </p>
        </div>
      </div>

      {/* Contact Bar */}
      <div className="bg-slate-100 px-8 py-4">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-700">
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
          {data.personalDetails.linkedin && (
            <div className="flex items-center">
              <FaLinkedin className="h-4 w-4 mr-2" />
              <a href={data.personalDetails.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 underline">
                LinkedIn
              </a>
            </div>
          )}
          {data.personalDetails.github && (
            <div className="flex items-center">
              <FaGithub className="h-4 w-4 mr-2" />
              <a href={data.personalDetails.github} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 underline">
                GitHub
              </a>
            </div>
          )}
          {data.personalDetails.telegram && (
            <div className="flex items-center">
              <FaTelegram className="h-4 w-4 mr-2" />
              <a href={data.personalDetails.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 underline">
                Telegram
              </a>
            </div>
          )}
          {data.personalDetails.discord && (
            <div className="flex items-center">
              <FaDiscord className="h-4 w-4 mr-2" />
              <a href={data.personalDetails.discord} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 underline">
                Discord
              </a>
            </div>
          )}
          {data.personalDetails.website && (
            <div className="flex items-center">
              <Globe className="h-4 w-4 mr-2" />
              <a href={data.personalDetails.website} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 underline">
                Website
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        {/* Professional Summary */}
        {data.personalDetails.summary && (
          <div className="mb-8">
            <h2 className="text-2xl font-light text-slate-800 mb-4 text-center">
              Professional Summary
            </h2>
            <div className="w-16 h-0.5 bg-slate-400 mx-auto mb-4"></div>
            <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto italic">
              "{data.personalDetails.summary}"
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Work Experience */}
            {data.workExperience.length > 0 && (
              <div>
                <h2 className="text-2xl font-light text-slate-800 mb-6 pb-2 border-b border-slate-300">
                  Professional Experience
                </h2>
                {data.workExperience.map((experience, index) => (
                  <div key={experience.id} className={`mb-8 last:mb-0 ${index !== 0 ? 'pt-6 border-t border-slate-100' : ''}`}>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-medium text-slate-800">
                          {experience.jobTitle || "Job Title"}
                        </h3>
                        <p className="text-slate-600 font-medium italic">
                          {experience.company || "Company Name"}
                        </p>
                      </div>
                      <div className="text-sm text-slate-500 text-right">
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
                      <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 leading-relaxed">
                        {experience.achievements.map((achievement, index) => (
                          achievement && (
                            <li key={index}>{achievement}</li>
                          )
                        ))}
                      </ul>
                    )}
                    {experience.description && (
                      <p className="text-gray-700 mt-3 leading-relaxed">{experience.description}</p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Projects */}
            {data.projects.length > 0 && (
              <div>
                <h2 className="text-2xl font-light text-slate-800 mb-6 pb-2 border-b border-slate-300">
                  Notable Projects
                </h2>
                {data.projects.map((project, index) => (
                  <div key={project.id} className={`mb-6 last:mb-0 ${index !== 0 ? 'pt-6 border-t border-slate-100' : ''}`}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-medium text-slate-800">
                        {project.name || "Project Name"}
                      </h3>
                      {project.current && (
                        <span className="text-sm text-green-600 font-medium italic">
                          In Progress
                        </span>
                      )}
                    </div>
                    {project.technologies.length > 0 && (
                      <p className="text-sm text-slate-600 mb-2 italic">
                        Technologies: {project.technologies.join(", ")}
                      </p>
                    )}
                    {project.description && (
                      <p className="text-gray-700 text-sm mb-3 leading-relaxed">{project.description}</p>
                    )}
                    <div className="flex gap-4 text-sm">
                      {project.url && (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" 
                           className="text-slate-600 hover:text-slate-800 underline flex items-center">
                          <Globe className="h-3 w-3 mr-1" />
                          View Project
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                           className="text-slate-600 hover:text-slate-800 underline flex items-center">
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
          <div className="space-y-8">
            {/* Education */}
            {data.education.length > 0 && (
              <div>
                <h2 className="text-xl font-light text-slate-800 mb-4 pb-2 border-b border-slate-300 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Education
                </h2>
                {data.education.map((education) => (
                  <div key={education.id} className="mb-4 last:mb-0">
                    <h3 className="font-medium text-slate-800">
                      {education.degree || "Degree"}
                    </h3>
                    <p className="text-slate-600 italic">
                      {education.institution || "Institution"}
                    </p>
                    <div className="text-sm text-slate-500 mt-1">
                      {education.graduationYear && (
                        <p>{education.graduationYear}</p>
                      )}
                      {education.gpa && (
                        <p>GPA: {education.gpa}</p>
                      )}
                      {education.honors && (
                        <p className="italic">{education.honors}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Skills */}
            {(data.skills.technical.length > 0 || data.skills.soft.length > 0) && (
              <div>
                <h2 className="text-xl font-light text-slate-800 mb-4 pb-2 border-b border-slate-300">
                  Core Competencies
                </h2>
                <div className="space-y-4">
                  {data.skills.technical.length > 0 && (
                    <div>
                      <h4 className="font-medium text-slate-700 mb-2 text-sm uppercase tracking-wide">Technical Skills</h4>
                      <div className="text-sm text-gray-700 leading-relaxed">
                        {data.skills.technical.join(" • ")}
                      </div>
                    </div>
                  )}
                  {data.skills.soft.length > 0 && (
                    <div>
                      <h4 className="font-medium text-slate-700 mb-2 text-sm uppercase tracking-wide">Soft Skills</h4>
                      <div className="text-sm text-gray-700 leading-relaxed">
                        {data.skills.soft.join(" • ")}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Languages */}
            {data.skills.languages.length > 0 && (
              <div>
                <h2 className="text-xl font-light text-slate-800 mb-4 pb-2 border-b border-slate-300">
                  Languages
                </h2>
                <div className="space-y-2">
                  {data.skills.languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="text-gray-700 font-medium">{lang.language}</span>
                      <span className="text-slate-500 italic">{lang.proficiency}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Certifications */}
            {data.certifications.length > 0 && (
              <div>
                <h2 className="text-xl font-light text-slate-800 mb-4 pb-2 border-b border-slate-300 flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Certifications
                </h2>
                <div className="space-y-3">
                  {data.certifications.map((cert) => (
                    <div key={cert.id}>
                      <h4 className="font-medium text-slate-800 text-sm">
                        {cert.name || "Certification Name"}
                      </h4>
                      <p className="text-slate-600 text-sm italic">
                        {cert.issuer || "Issuer"}
                      </p>
                      {cert.issueDate && (
                        <p className="text-slate-500 text-xs">
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