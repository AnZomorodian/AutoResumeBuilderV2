import type { ResumeData } from "@shared/schema";

export async function exportToPDF(resumeData: ResumeData, template: string): Promise<void> {
  try {
    // Create a new window with the resume content
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      throw new Error('Failed to open print window. Please allow popups for this site.');
    }

    // Generate HTML content for the resume
    const htmlContent = generateResumeHTML(resumeData, template);
    
    printWindow.document.write(htmlContent);
    printWindow.document.close();

    // Wait for content to load
    printWindow.onload = () => {
      // Trigger print dialog
      printWindow.focus();
      printWindow.print();
      
      // Close the window after printing
      setTimeout(() => {
        printWindow.close();
      }, 1000);
    };

  } catch (error) {
    console.error('PDF export failed:', error);
    throw error;
  }
}

function generateResumeHTML(data: ResumeData, template: string): string {
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

  const styles = getTemplateStyles(template);
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${data.personalDetails.fullName || 'Resume'} - Resume</title>
      <style>
        ${styles}
        @media print {
          body { margin: 0; padding: 20px; }
          .no-print { display: none; }
          .page-break { page-break-before: always; }
        }
      </style>
    </head>
    <body>
      <div class="resume-container ${template}">
        ${generateResumeContent(data, template, formatDate)}
      </div>
    </body>
    </html>
  `;
}

function getTemplateStyles(template: string): string {
  const baseStyles = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Arial', sans-serif;
      line-height: 1.6;
      color: #333;
      background: white;
    }
    
    .resume-container {
      max-width: 210mm;
      min-height: 297mm;
      margin: 0 auto;
      background: white;
      padding: 20mm;
    }
    
    h1, h2, h3, h4 {
      margin-bottom: 0.5em;
    }
    
    h1 {
      font-size: 28px;
      font-weight: bold;
    }
    
    h2 {
      font-size: 20px;
      font-weight: bold;
      border-bottom: 2px solid;
      padding-bottom: 5px;
      margin-bottom: 15px;
    }
    
    h3 {
      font-size: 16px;
      font-weight: bold;
    }
    
    p, li {
      margin-bottom: 8px;
    }
    
    .header {
      text-align: center;
      margin-bottom: 30px;
      padding-bottom: 20px;
    }
    
    .contact-info {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
      margin-top: 10px;
      font-size: 14px;
    }
    
    .section {
      margin-bottom: 25px;
    }
    
    .experience-item, .education-item, .project-item {
      margin-bottom: 20px;
    }
    
    .experience-header, .education-header, .project-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 10px;
    }
    
    .date-location {
      text-align: right;
      font-size: 14px;
      color: #666;
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
    }
    
    .skill-category h4 {
      margin-bottom: 8px;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    .skill-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    
    .skill-tag {
      padding: 4px 12px;
      border-radius: 15px;
      font-size: 12px;
      font-weight: 500;
    }
    
    ul {
      list-style-type: disc;
      margin-left: 20px;
    }
    
    .certifications-list {
      display: grid;
      gap: 10px;
    }
    
    .cert-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 0;
      border-bottom: 1px solid #eee;
    }
  `;

  const templateSpecificStyles = {
    modern: `
      .modern h2 { color: #3B82F6; border-color: #3B82F6; }
      .modern .header { border-bottom: 3px solid #3B82F6; }
      .modern .skill-tag { background: rgba(59, 130, 246, 0.1); color: #3B82F6; }
    `,
    minimal: `
      .minimal h2 { color: #374151; border-color: #D1D5DB; }
      .minimal .header { border-bottom: 1px solid #D1D5DB; }
      .minimal .skill-tag { background: #F3F4F6; color: #374151; }
    `,
    classic: `
      .classic { font-family: 'Times New Roman', serif; }
      .classic h2 { color: #D97706; border-color: #D97706; }
      .classic .header { border-bottom: 3px solid #D97706; }
      .classic .skill-tag { background: rgba(217, 119, 6, 0.1); color: #D97706; }
    `,
    creative: `
      .creative h2 { color: #059669; border-color: #059669; }
      .creative .header { border-bottom: 3px solid #059669; }
      .creative .skill-tag { background: rgba(5, 150, 105, 0.1); color: #059669; }
    `,
    executive: `
      .executive h2 { color: #7C3AED; border-color: #7C3AED; }
      .executive .header { border-bottom: 3px solid #7C3AED; }
      .executive .skill-tag { background: rgba(124, 58, 237, 0.1); color: #7C3AED; }
    `
  };

  return baseStyles + (templateSpecificStyles[template as keyof typeof templateSpecificStyles] || templateSpecificStyles.modern);
}

function generateResumeContent(data: ResumeData, template: string, formatDate: (date: string) => string): string {
  const { personalDetails, workExperience, education, skills, projects, certifications } = data;

  let content = `
    <div class="header">
      <h1>${personalDetails.fullName || 'Your Name'}</h1>
      <p style="font-size: 18px; color: #666; margin: 5px 0;">${personalDetails.jobTitle || 'Your Job Title'}</p>
      <div class="contact-info">
        ${personalDetails.email ? `<span>${personalDetails.email}</span>` : ''}
        ${personalDetails.phone ? `<span>${personalDetails.phone}</span>` : ''}
        ${personalDetails.linkedin ? `<span>${personalDetails.linkedin.replace(/^https?:\/\//, '')}</span>` : ''}
        ${personalDetails.website ? `<span>${personalDetails.website.replace(/^https?:\/\//, '')}</span>` : ''}
        ${personalDetails.location ? `<span>${personalDetails.location}</span>` : ''}
      </div>
    </div>
  `;

  if (personalDetails.summary) {
    content += `
      <div class="section">
        <h2>Professional Summary</h2>
        <p>${personalDetails.summary}</p>
      </div>
    `;
  }

  if (workExperience.length > 0) {
    content += `
      <div class="section">
        <h2>Work Experience</h2>
        ${workExperience.map(exp => `
          <div class="experience-item">
            <div class="experience-header">
              <div>
                <h3>${exp.jobTitle || 'Job Title'}</h3>
                <p style="color: #666; font-weight: 600;">${exp.company || 'Company'}</p>
              </div>
              <div class="date-location">
                <p>${formatDate(exp.startDate)} - ${exp.current ? 'Present' : formatDate(exp.endDate || '')}</p>
                ${exp.location ? `<p>${exp.location}</p>` : ''}
              </div>
            </div>
            ${exp.achievements.length > 0 && exp.achievements[0] ? `
              <ul>
                ${exp.achievements.filter(a => a).map(achievement => `<li>${achievement}</li>`).join('')}
              </ul>
            ` : ''}
            ${exp.description ? `<p style="font-style: italic; margin-top: 10px;">${exp.description}</p>` : ''}
          </div>
        `).join('')}
      </div>
    `;
  }

  if (education.length > 0) {
    content += `
      <div class="section">
        <h2>Education</h2>
        ${education.map(edu => `
          <div class="education-item">
            <div class="education-header">
              <div>
                <h3>${edu.degree || 'Degree'}</h3>
                <p style="color: #666; font-weight: 600;">${edu.institution || 'Institution'}</p>
                ${edu.gpa ? `<p style="font-size: 14px;">GPA: ${edu.gpa}</p>` : ''}
              </div>
              <div class="date-location">
                ${edu.graduationYear ? `<p>${edu.graduationYear}</p>` : ''}
                ${edu.location ? `<p>${edu.location}</p>` : ''}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  if (skills.technical.length > 0 || skills.soft.length > 0 || skills.languages.length > 0) {
    content += `
      <div class="section">
        <h2>Skills</h2>
        <div class="skills-grid">
          ${skills.technical.length > 0 ? `
            <div class="skill-category">
              <h4>Technical Skills</h4>
              <div class="skill-tags">
                ${skills.technical.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
              </div>
            </div>
          ` : ''}
          ${skills.soft.length > 0 ? `
            <div class="skill-category">
              <h4>Soft Skills</h4>
              <div class="skill-tags">
                ${skills.soft.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
              </div>
            </div>
          ` : ''}
          ${skills.languages.length > 0 ? `
            <div class="skill-category">
              <h4>Languages</h4>
              <div class="skill-tags">
                ${skills.languages.map(lang => `<span class="skill-tag">${lang.language} (${lang.proficiency})</span>`).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  if (projects.length > 0) {
    content += `
      <div class="section">
        <h2>Projects</h2>
        ${projects.map(project => `
          <div class="project-item">
            <div class="project-header">
              <div>
                <h3>${project.name || 'Project Name'}</h3>
                ${project.technologies ? `<p style="color: #666; font-size: 14px;">${project.technologies}</p>` : ''}
              </div>
              ${project.completionDate ? `
                <div class="date-location">
                  <p>${formatDate(project.completionDate)}</p>
                </div>
              ` : ''}
            </div>
            ${project.description ? `<p>${project.description}</p>` : ''}
          </div>
        `).join('')}
      </div>
    `;
  }

  if (certifications.length > 0) {
    content += `
      <div class="section">
        <h2>Certifications</h2>
        <div class="certifications-list">
          ${certifications.map(cert => `
            <div class="cert-item">
              <div>
                <strong>${cert.name || 'Certification'}</strong>
                <p style="color: #666; font-size: 14px;">${cert.issuer || 'Issuer'}</p>
              </div>
              ${cert.issueDate ? `<span style="font-size: 14px; color: #666;">${formatDate(cert.issueDate)}</span>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  return content;
}
