import { pgTable, text, serial, integer, boolean, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const resumes = pgTable("resumes", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  template: text("template").notNull().default("modern"),
  personalDetails: jsonb("personal_details"),
  workExperience: jsonb("work_experience"),
  education: jsonb("education"), 
  skills: jsonb("skills"),
  projects: jsonb("projects"),
  certifications: jsonb("certifications"),
  languages: jsonb("languages"),
  customSections: jsonb("custom_sections"),
  isPublic: boolean("is_public").default(false),
  shareId: text("share_id").unique(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Zod schemas for validation
export const personalDetailsSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  jobTitle: z.string().min(1, "Job title is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  linkedin: z.string().optional(),
  website: z.string().optional(),
  github: z.string().optional(),
  telegram: z.string().optional(),
  discord: z.string().optional(),
  location: z.string().optional(),
  summary: z.string().optional(),
  profileImage: z.string().optional(),
});

export const workExperienceSchema = z.object({
  id: z.string(),
  jobTitle: z.string().min(1, "Job title is required"),
  company: z.string().min(1, "Company is required"),
  location: z.string().optional(),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().optional(),
  current: z.boolean().default(false),
  achievements: z.array(z.string()).default([]),
  description: z.string().optional(),
});

export const degreeOptions = [
  "High School Diploma",
  "Associate Degree",
  "Bachelor's Degree",
  "Master's Degree",
  "PhD",
  "Professional Degree",
  "Certificate",
  "Diploma",
  "Other"
] as const;

export const educationSchema = z.object({
  id: z.string(),
  degree: z.enum(degreeOptions),
  fieldOfStudy: z.string().optional(),
  institution: z.string().min(1, "Institution is required"),
  location: z.string().optional(),
  graduationYear: z.number().optional(),
  gpa: z.string().optional(),
  honors: z.string().optional(),
});

export const skillsSchema = z.object({
  technical: z.array(z.string()).default([]),
  soft: z.array(z.string()).default([]),
  languages: z.array(z.object({
    language: z.string(),
    proficiency: z.enum(["Native", "Fluent", "Intermediate", "Basic"]),
  })).default([]),
});

export const projectSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Project name is required"),
  description: z.string().optional(),
  technologies: z.array(z.string()).default([]),
  url: z.string().optional(),
  github: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  current: z.boolean().default(false),
  highlights: z.array(z.string()).default([]),
  category: z.string().optional(),
});

export const certificationSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Certification name is required"),
  issuer: z.string().min(1, "Issuer is required"),
  issueDate: z.string().optional(),
  expirationDate: z.string().optional(),
  credentialId: z.string().optional(),
  url: z.string().optional(),
  skills: z.array(z.string()).default([]),
  status: z.enum(["Active", "Expired", "In Progress"]).default("Active"),
});

export const resumeDataSchema = z.object({
  personalDetails: personalDetailsSchema,
  workExperience: z.array(workExperienceSchema).default([]),
  education: z.array(educationSchema).default([]),
  skills: skillsSchema,
  projects: z.array(projectSchema).default([]),
  certifications: z.array(certificationSchema).default([]),
});

export const insertResumeSchema = createInsertSchema(resumes).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const updateResumeSchema = insertResumeSchema.partial();

export type PersonalDetails = z.infer<typeof personalDetailsSchema>;
export type WorkExperience = z.infer<typeof workExperienceSchema>;
export type Education = z.infer<typeof educationSchema>;
export type Skills = z.infer<typeof skillsSchema>;
export type Project = z.infer<typeof projectSchema>;
export type Certification = z.infer<typeof certificationSchema>;
export type ResumeData = z.infer<typeof resumeDataSchema>;
export type Resume = typeof resumes.$inferSelect;
export type InsertResume = z.infer<typeof insertResumeSchema>;
export type UpdateResume = z.infer<typeof updateResumeSchema>;
export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});
