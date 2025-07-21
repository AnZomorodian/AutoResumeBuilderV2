import type { ResumeData } from "@shared/schema";

interface MinimalTemplateProps {
  data: ResumeData;
}

export default function MinimalTemplate({ data }: MinimalTemplateProps) {
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
    <div className="p-8 text-gray-800 font-light">
      {/* Header Section */}
      <div className="border-b border-gray-300 pb-4 mb-6">
        <h1 className="text-2xl font-light text-gray-900 mb-1">
          {data.personalDetails.fullName || "Your Name"}
        </h1>
        <p className="text-gray-600 mb-2">
          {data.personalDetails.jobTitle || "Your Job Title"}
        </p>
        <div className="text-sm text-gray-500 space-y-1">
          {data.personalDetails.email && <div>{data.personalDetails.email}</div>}
          {data.personalDetails.phone && <div>{data.personalDetails.phone}</div>}
          {data.personalDetails.linkedin && (
            <div>{data.personalDetails.linkedin.replace(/^https?:\/\//, "")}</div>
          )}
          {data.personalDetails.website && (
            <div>{data.personalDetails.website.replace(/^https?:\/\//, "")}</div>
          )}
          {data.personalDetails.location && <div>{data.personalDetails.location}</div>}
        </div>
      </div>

      {/* Professional Summary */}
      {data.personalDetails.summary && (
        <div className="mb-6">
          <h2 className="text-lg font-light text-gray-900 mb-2 border-b border-gray-200 pb-1">
            Summary
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            {data.personalDetails.summary}
          </p>
        </div>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-light text-gray-900 mb-3 border-b border-gray-200 pb-1">
            Experience
          </h2>
          {data.workExperience.map((experience) => (
            <div key={experience.id} className="mb-4 last:mb-0">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-medium text-gray-900">
                  {experience.jobTitle || "Job Title"}
                </h3>
                <span className="text-xs text-gray-500">
                  {formatDate(experience.startDate)} - {experience.current ? "Present" : formatDate(experience.endDate || "")}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                {experience.company || "Company Name"}
                {experience.location && ` • ${experience.location}`}
              </p>
              {(experience.achievements.length > 0 && experience.achievements[0]) && (
                <ul className="text-sm text-gray-700 space-y-1">
                  {experience.achievements.map((achievement, index) => (
                    achievement && (
                      <li key={index} className="leading-relaxed">• {achievement}</li>
                    )
                  ))}
                </ul>
              )}
              {experience.description && (
                <p className="text-sm text-gray-700 mt-2">{experience.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-light text-gray-900 mb-3 border-b border-gray-200 pb-1">
            Education
          </h2>
          {data.education.map((education) => (
            <div key={education.id} className="mb-3 last:mb-0">
              <div className="flex justify-between items-baseline">
                <div>
                  <h3 className="font-medium text-gray-900">
                    {education.degree || "Degree"}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {education.institution || "Institution"}
                    {education.location && ` • ${education.location}`}
                  </p>
                  {education.gpa && (
                    <p className="text-xs text-gray-500">GPA: {education.gpa}</p>
                  )}
                </div>
                {education.graduationYear && (
                  <span className="text-xs text-gray-500">
                    {education.graduationYear}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {(data.skills.technical.length > 0 || data.skills.soft.length > 0) && (
        <div className="mb-6">
          <h2 className="text-lg font-light text-gray-900 mb-3 border-b border-gray-200 pb-1">
            Skills
          </h2>
          <div className="space-y-2 text-sm">
            {data.skills.technical.length > 0 && (
              <div>
                <span className="font-medium text-gray-700">Technical: </span>
                <span className="text-gray-600">{data.skills.technical.join(", ")}</span>
              </div>
            )}
            {data.skills.soft.length > 0 && (
              <div>
                <span className="font-medium text-gray-700">Soft Skills: </span>
                <span className="text-gray-600">{data.skills.soft.join(", ")}</span>
              </div>
            )}
            {data.skills.languages.length > 0 && (
              <div>
                <span className="font-medium text-gray-700">Languages: </span>
                <span className="text-gray-600">
                  {data.skills.languages.map(lang => `${lang.language} (${lang.proficiency})`).join(", ")}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-light text-gray-900 mb-3 border-b border-gray-200 pb-1">
            Projects
          </h2>
          {data.projects.map((project) => (
            <div key={project.id} className="mb-3 last:mb-0">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-medium text-gray-900">
                  {project.name || "Project Name"}
                </h3>
                {project.completionDate && (
                  <span className="text-xs text-gray-500">
                    {formatDate(project.completionDate)}
                  </span>
                )}
              </div>
              {project.technologies && (
                <p className="text-xs text-gray-500 mb-1">{project.technologies}</p>
              )}
              {project.description && (
                <p className="text-sm text-gray-700 mb-1">{project.description}</p>
              )}
              <div className="flex gap-3 text-xs text-gray-500">
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" 
                     className="hover:underline">
                    View Project
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                     className="hover:underline">
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
          <h2 className="text-lg font-light text-gray-900 mb-3 border-b border-gray-200 pb-1">
            Certifications
          </h2>
          <div className="space-y-1">
            {data.certifications.map((cert) => (
              <div key={cert.id} className="flex justify-between items-center text-sm">
                <span className="text-gray-700">
                  {cert.name || "Certification Name"} • {cert.issuer || "Issuer"}
                </span>
                {cert.issueDate && (
                  <span className="text-xs text-gray-500">
                    {formatDate(cert.issueDate)}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
