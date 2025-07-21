import { Mail, Phone, Globe, MapPin, Calendar } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import type { ResumeData } from "@shared/schema";

interface ModernTemplateProps {
  data: ResumeData;
}

export default function ModernTemplate({ data }: ModernTemplateProps) {
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
    <div className="p-8 text-gray-900">
      {/* Header Section */}
      <div className="text-center pb-6 border-b-2 border-primary">
        <h1 className="text-3xl font-bold text-secondary mb-2">
          {data.personalDetails.fullName || "Your Name"}
        </h1>
        <p className="text-lg text-primary font-medium mb-3">
          {data.personalDetails.jobTitle || "Your Job Title"}
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
          {data.personalDetails.email && (
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              {data.personalDetails.email}
            </div>
          )}
          {data.personalDetails.phone && (
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              {data.personalDetails.phone}
            </div>
          )}
          {data.personalDetails.linkedin && (
            <div className="flex items-center">
              <FaLinkedin className="h-4 w-4 mr-1" />
              {data.personalDetails.linkedin.replace(/^https?:\/\//, "")}
            </div>
          )}
          {data.personalDetails.website && (
            <div className="flex items-center">
              <Globe className="h-4 w-4 mr-1" />
              {data.personalDetails.website.replace(/^https?:\/\//, "")}
            </div>
          )}
          {data.personalDetails.location && (
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              {data.personalDetails.location}
            </div>
          )}
        </div>
      </div>

      {/* Professional Summary */}
      {data.personalDetails.summary && (
        <div className="py-6 border-b border-slate-200">
          <h2 className="text-xl font-bold text-secondary mb-3">Professional Summary</h2>
          <p className="text-slate-700 leading-relaxed">
            {data.personalDetails.summary}
          </p>
        </div>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <div className="py-6 border-b border-slate-200">
          <h2 className="text-xl font-bold text-secondary mb-4">Work Experience</h2>
          {data.workExperience.map((experience) => (
            <div key={experience.id} className="mb-6 last:mb-0">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-secondary">
                    {experience.jobTitle || "Job Title"}
                  </h3>
                  <p className="text-primary font-medium">
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
                <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                  {experience.achievements.map((achievement, index) => (
                    achievement && (
                      <li key={index}>{achievement}</li>
                    )
                  ))}
                </ul>
              )}
              {experience.description && (
                <p className="text-slate-700 mt-2">{experience.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="py-6 border-b border-slate-200">
          <h2 className="text-xl font-bold text-secondary mb-4">Education</h2>
          {data.education.map((education) => (
            <div key={education.id} className="mb-4 last:mb-0">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-secondary">
                    {education.degree || "Degree"}
                  </h3>
                  <p className="text-primary font-medium">
                    {education.institution || "Institution"}
                  </p>
                  {education.gpa && (
                    <p className="text-sm text-slate-600">GPA: {education.gpa}</p>
                  )}
                </div>
                <div className="text-sm text-slate-500 text-right">
                  {education.graduationYear && (
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {education.graduationYear}
                    </div>
                  )}
                  {education.location && (
                    <div className="flex items-center mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      {education.location}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {(data.skills.technical.length > 0 || data.skills.soft.length > 0 || data.skills.languages.length > 0) && (
        <div className="py-6 border-b border-slate-200">
          <h2 className="text-xl font-bold text-secondary mb-4">Skills</h2>
          <div className="space-y-3">
            {data.skills.technical.length > 0 && (
              <div>
                <h4 className="font-medium text-slate-700 mb-2">Technical Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {data.skills.technical.map((skill, index) => (
                    <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {data.skills.soft.length > 0 && (
              <div>
                <h4 className="font-medium text-slate-700 mb-2">Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {data.skills.soft.map((skill, index) => (
                    <span key={index} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {data.skills.languages.length > 0 && (
              <div>
                <h4 className="font-medium text-slate-700 mb-2">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {data.skills.languages.map((lang, index) => (
                    <span key={index} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                      {lang.language} - {lang.proficiency}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <div className="py-6 border-b border-slate-200">
          <h2 className="text-xl font-bold text-secondary mb-4">Projects</h2>
          {data.projects.map((project) => (
            <div key={project.id} className="mb-4 last:mb-0">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-secondary">
                  {project.name || "Project Name"}
                </h3>
                {project.completionDate && (
                  <span className="text-sm text-slate-500">
                    {formatDate(project.completionDate)}
                  </span>
                )}
              </div>
              {project.technologies && (
                <p className="text-sm text-primary mb-2">{project.technologies}</p>
              )}
              {project.description && (
                <p className="text-slate-700 text-sm mb-2">{project.description}</p>
              )}
              <div className="flex gap-4 text-sm">
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" 
                     className="text-primary hover:underline flex items-center">
                    <Globe className="h-3 w-3 mr-1" />
                    View Project
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                     className="text-primary hover:underline flex items-center">
                    <FaGithub className="h-3 w-3 mr-1" />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Certifications */}
      {data.certifications.length > 0 && (
        <div className="py-6">
          <h2 className="text-xl font-bold text-secondary mb-4">Certifications</h2>
          <div className="space-y-2">
            {data.certifications.map((cert) => (
              <div key={cert.id} className="flex justify-between items-center">
                <div>
                  <span className="text-slate-700 font-medium">
                    {cert.name || "Certification Name"}
                  </span>
                  <span className="text-slate-500 ml-2">
                    • {cert.issuer || "Issuer"}
                  </span>
                </div>
                <div className="text-sm text-slate-500">
                  {cert.issueDate && formatDate(cert.issueDate)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
