import { FaLinkedin, FaGithub, FaTelegram, FaDiscord } from "react-icons/fa";
import { Globe } from "lucide-react";
import type { ResumeData } from "@shared/schema";

interface ClassicTemplateProps {
  data: ResumeData;
}

export default function ClassicTemplate({ data }: ClassicTemplateProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    try {
      const [year, month] = dateString.split("-");
      const date = new Date(parseInt(year), parseInt(month) - 1);
      return date.toLocaleDateString("en-US", { year: "numeric", month: "long" });
    } catch {
      return dateString;
    }
  };

  return (
    <div className="p-8 text-gray-900 font-serif">
      {/* Header Section */}
      <div className="text-center border-b-2 border-amber-600 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-amber-800 mb-2">
          {data.personalDetails.fullName || "Your Name"}
        </h1>
        <p className="text-lg text-amber-700 font-medium mb-3">
          {data.personalDetails.jobTitle || "Your Job Title"}
        </p>
        <div className="text-sm text-gray-600 space-y-1">
          <div className="flex justify-center space-x-6">
            {data.personalDetails.email && <span>{data.personalDetails.email}</span>}
            {data.personalDetails.phone && <span>{data.personalDetails.phone}</span>}
          </div>
          <div className="flex justify-center space-x-6">
            {data.personalDetails.linkedin && (
              <a href={data.personalDetails.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-amber-700 underline">
                LinkedIn
              </a>
            )}
            {data.personalDetails.github && (
              <a href={data.personalDetails.github} target="_blank" rel="noopener noreferrer" className="hover:text-amber-700 underline">
                GitHub
              </a>
            )}
            {data.personalDetails.telegram && (
              <a href={data.personalDetails.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-amber-700 underline">
                Telegram
              </a>
            )}
            {data.personalDetails.discord && (
              <a href={data.personalDetails.discord} target="_blank" rel="noopener noreferrer" className="hover:text-amber-700 underline">
                Discord
              </a>
            )}
            {data.personalDetails.website && (
              <a href={data.personalDetails.website} target="_blank" rel="noopener noreferrer" className="hover:text-amber-700 underline">
                Website
              </a>
            )}
          </div>
          {data.personalDetails.location && (
            <div className="text-center">{data.personalDetails.location}</div>
          )}
        </div>
      </div>

      {/* Professional Summary */}
      {data.personalDetails.summary && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-amber-800 mb-3 text-center border-b border-amber-300 pb-2">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-gray-700 leading-relaxed text-center italic">
            {data.personalDetails.summary}
          </p>
        </div>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-amber-800 mb-4 text-center border-b border-amber-300 pb-2">
            PROFESSIONAL EXPERIENCE
          </h2>
          {data.workExperience.map((experience) => (
            <div key={experience.id} className="mb-5 last:mb-0">
              <div className="text-center mb-3">
                <h3 className="text-lg font-bold text-gray-900">
                  {experience.jobTitle || "Job Title"}
                </h3>
                <p className="text-amber-700 font-semibold">
                  {experience.company || "Company Name"}
                  {experience.location && ` | ${experience.location}`}
                </p>
                <p className="text-sm text-gray-600 italic">
                  {formatDate(experience.startDate)} - {experience.current ? "Present" : formatDate(experience.endDate || "")}
                </p>
              </div>
              {(experience.achievements.length > 0 && experience.achievements[0]) && (
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  {experience.achievements.map((achievement, index) => (
                    achievement && (
                      <li key={index} className="leading-relaxed">{achievement}</li>
                    )
                  ))}
                </ul>
              )}
              {experience.description && (
                <p className="text-gray-700 mt-2 italic">{experience.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-amber-800 mb-4 text-center border-b border-amber-300 pb-2">
            EDUCATION
          </h2>
          {data.education.map((education) => (
            <div key={education.id} className="mb-4 last:mb-0 text-center">
              <h3 className="text-lg font-bold text-gray-900">
                {education.degree || "Degree"}
              </h3>
              <p className="text-amber-700 font-semibold">
                {education.institution || "Institution"}
                {education.location && ` | ${education.location}`}
              </p>
              <div className="text-sm text-gray-600">
                {education.graduationYear && (
                  <span>Class of {education.graduationYear}</span>
                )}
                {education.gpa && (
                  <span className="ml-4">GPA: {education.gpa}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {(data.skills.technical.length > 0 || data.skills.soft.length > 0) && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-amber-800 mb-4 text-center border-b border-amber-300 pb-2">
            CORE COMPETENCIES
          </h2>
          <div className="space-y-3">
            {data.skills.technical.length > 0 && (
              <div className="text-center">
                <h4 className="font-bold text-gray-700 mb-2">Technical Skills</h4>
                <p className="text-gray-600">
                  {data.skills.technical.join(" • ")}
                </p>
              </div>
            )}
            {data.skills.soft.length > 0 && (
              <div className="text-center">
                <h4 className="font-bold text-gray-700 mb-2">Professional Skills</h4>
                <p className="text-gray-600">
                  {data.skills.soft.join(" • ")}
                </p>
              </div>
            )}
            {data.skills.languages.length > 0 && (
              <div className="text-center">
                <h4 className="font-bold text-gray-700 mb-2">Languages</h4>
                <p className="text-gray-600">
                  {data.skills.languages.map(lang => `${lang.language} (${lang.proficiency})`).join(" • ")}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-amber-800 mb-4 text-center border-b border-amber-300 pb-2">
            NOTABLE PROJECTS
          </h2>
          {data.projects.map((project) => (
            <div key={project.id} className="mb-4 last:mb-0">
              <div className="text-center mb-2">
                <h3 className="text-lg font-bold text-gray-900">
                  {project.name || "Project Name"}
                </h3>
                {project.technologies && (
                  <p className="text-sm text-amber-700 font-semibold">{project.technologies}</p>
                )}
                {project.endDate && !project.current && (
                  <p className="text-sm text-gray-600 italic">
                    Completed: {formatDate(project.endDate)}
                  </p>
                )}
                {project.current && (
                  <p className="text-sm text-green-600 italic font-medium">
                    In Progress
                  </p>
                )}
              </div>
              {project.description && (
                <p className="text-gray-700 text-center mb-2">{project.description}</p>
              )}
              <div className="flex justify-center gap-4 text-sm">
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" 
                     className="text-amber-700 hover:underline font-semibold">
                    View Project
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                     className="text-amber-700 hover:underline font-semibold">
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
        <div className="mb-6">
          <h2 className="text-xl font-bold text-amber-800 mb-4 text-center border-b border-amber-300 pb-2">
            CERTIFICATIONS & ACHIEVEMENTS
          </h2>
          <div className="space-y-2">
            {data.certifications.map((cert) => (
              <div key={cert.id} className="text-center">
                <span className="font-semibold text-gray-900">
                  {cert.name || "Certification Name"}
                </span>
                <span className="text-amber-700 mx-2">•</span>
                <span className="text-gray-600">
                  {cert.issuer || "Issuer"}
                </span>
                {cert.issueDate && (
                  <>
                    <span className="text-amber-700 mx-2">•</span>
                    <span className="text-gray-600">
                      {formatDate(cert.issueDate)}
                    </span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
