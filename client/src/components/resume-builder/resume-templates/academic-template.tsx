import { Mail, Phone, MapPin, Globe, Calendar, Award, BookOpen } from "lucide-react";
import { FaGithub, FaLinkedin, FaTelegram, FaDiscord } from "react-icons/fa";
import type { ResumeData } from "@shared/schema";

interface AcademicTemplateProps {
  data: ResumeData;
}

export default function AcademicTemplate({ data }: AcademicTemplateProps) {
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
    <div className="max-w-4xl mx-auto bg-white text-gray-900 font-serif leading-relaxed">
      {/* Header */}
      <div className="text-center border-b-2 border-gray-300 pb-8 mb-8">
        <div className="flex items-center justify-center mb-6">
          {data.personalDetails.profileImage && (
            <img
              src={data.personalDetails.profileImage}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 mr-8"
            />
          )}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              {data.personalDetails.fullName || "Your Name"}
            </h1>
            <p className="text-xl text-gray-700 mb-4">
              {data.personalDetails.jobTitle || "Academic Professional"}
            </p>
            
            {/* Contact Information */}
            <div className="text-sm text-gray-600 space-y-1">
              {data.personalDetails.email && (
                <div className="flex items-center justify-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <a href={`mailto:${data.personalDetails.email}`} className="hover:text-blue-600">
                    {data.personalDetails.email}
                  </a>
                </div>
              )}
              {data.personalDetails.phone && (
                <div className="flex items-center justify-center">
                  <Phone className="h-4 w-4 mr-2" />
                  {data.personalDetails.phone}
                </div>
              )}
              {data.personalDetails.location && (
                <div className="flex items-center justify-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {data.personalDetails.location}
                </div>
              )}
            </div>

            {/* Academic Links */}
            <div className="flex items-center justify-center space-x-4 mt-4">
              {data.personalDetails.website && (
                <a href={data.personalDetails.website} target="_blank" rel="noopener noreferrer" 
                   className="text-blue-600 hover:text-blue-800 flex items-center text-sm">
                  <Globe className="h-4 w-4 mr-1" />
                  Academic Website
                </a>
              )}
              {data.personalDetails.linkedin && (
                <a href={data.personalDetails.linkedin} target="_blank" rel="noopener noreferrer"
                   className="text-blue-600 hover:text-blue-800">
                  <FaLinkedin className="h-4 w-4" />
                </a>
              )}
              {data.personalDetails.github && (
                <a href={data.personalDetails.github} target="_blank" rel="noopener noreferrer"
                   className="text-blue-600 hover:text-blue-800">
                  <FaGithub className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Research Interests / Summary */}
      {data.personalDetails.summary && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
            Research Interests
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            {data.personalDetails.summary}
          </p>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2 flex items-center">
            <BookOpen className="h-6 w-6 mr-2" />
            Education
          </h2>
          <div className="space-y-6">
            {data.education.map((education) => (
              <div key={education.id}>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {education.degree || "Degree"}
                      {education.fieldOfStudy && `, ${education.fieldOfStudy}`}
                    </h3>
                    <p className="text-gray-700 font-medium">
                      {education.institution || "Institution"}
                    </p>
                    {education.location && (
                      <p className="text-gray-600 text-sm">{education.location}</p>
                    )}
                  </div>
                  <div className="text-right text-gray-600">
                    {education.graduationYear && (
                      <div>{education.graduationYear}</div>
                    )}
                    {education.gpa && (
                      <div className="text-sm">GPA: {education.gpa}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Academic Experience / Work Experience */}
      {data.workExperience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
            Academic & Professional Experience
          </h2>
          <div className="space-y-6">
            {data.workExperience.map((experience) => (
              <div key={experience.id}>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {experience.jobTitle || "Position Title"}
                    </h3>
                    <p className="text-gray-700 font-medium">
                      {experience.company || "Institution/Organization"}
                    </p>
                    {experience.location && (
                      <p className="text-gray-600 text-sm">{experience.location}</p>
                    )}
                  </div>
                  <div className="text-gray-600 text-sm text-right">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatDate(experience.startDate)} - {
                        experience.current ? "Present" : formatDate(experience.endDate || "")
                      }
                    </div>
                  </div>
                </div>
                
                {experience.description && (
                  <p className="text-gray-700 mb-3 text-justify">{experience.description}</p>
                )}
                
                {experience.achievements.length > 0 && (
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {experience.achievements.map((achievement, index) => (
                      achievement && (
                        <li key={index} className="text-sm">{achievement}</li>
                      )
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Research Projects */}
      {data.projects.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
            Research Projects & Publications
          </h2>
          <div className="space-y-6">
            {data.projects.map((project) => (
              <div key={project.id}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 flex-1">
                    {project.name || "Project Title"}
                  </h3>
                  <div className="text-gray-600 text-sm">
                    {project.endDate && !project.current && formatDate(project.endDate)}
                    {project.current && (
                      <span className="text-blue-600 font-medium">Ongoing</span>
                    )}
                  </div>
                </div>
                
                {project.technologies && (
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Methods/Tools:</strong> {project.technologies}
                  </p>
                )}
                
                {project.description && (
                  <p className="text-gray-700 mb-3 text-justify">{project.description}</p>
                )}
                
                <div className="flex space-x-4 text-sm">
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" 
                       className="text-blue-600 hover:text-blue-800 hover:underline">
                      View Publication/Project
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                       className="text-blue-600 hover:text-blue-800 hover:underline">
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills & Competencies */}
      {(data.skills.technical.length > 0 || data.skills.soft.length > 0 || data.skills.languages.length > 0) && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
            Skills & Competencies
          </h2>
          <div className="space-y-4">
            {data.skills.technical.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Technical Skills</h3>
                <p className="text-gray-700">{data.skills.technical.join(" • ")}</p>
              </div>
            )}
            
            {data.skills.soft.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Professional Skills</h3>
                <p className="text-gray-700">{data.skills.soft.join(" • ")}</p>
              </div>
            )}
            
            {data.skills.languages.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Languages</h3>
                <div className="space-y-1">
                  {data.skills.languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center text-gray-700">
                      <span>{lang.language}</span>
                      <span className="text-sm text-gray-600">{lang.proficiency}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Awards & Certifications */}
      {data.certifications.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2 flex items-center">
            <Award className="h-6 w-6 mr-2" />
            Awards & Certifications
          </h2>
          <div className="space-y-4">
            {data.certifications.map((cert) => (
              <div key={cert.id} className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {cert.name || "Certification/Award"}
                  </h3>
                  <p className="text-gray-700">{cert.issuer || "Issuing Organization"}</p>
                </div>
                {cert.issueDate && (
                  <div className="text-gray-600 text-sm">
                    {formatDate(cert.issueDate)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}