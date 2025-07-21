import { 
  users, 
  resumes, 
  type User, 
  type InsertUser, 
  type Resume, 
  type InsertResume, 
  type UpdateResume 
} from "@shared/schema";
import { nanoid } from "nanoid";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getResume(id: number): Promise<Resume | undefined>;
  getResumeByShareId(shareId: string): Promise<Resume | undefined>;
  getUserResumes(userId?: number): Promise<Resume[]>;
  createResume(resume: InsertResume): Promise<Resume>;
  updateResume(id: number, updates: UpdateResume): Promise<Resume | undefined>;
  deleteResume(id: number): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private resumes: Map<number, Resume>;
  private currentUserId: number;
  private currentResumeId: number;

  constructor() {
    this.users = new Map();
    this.resumes = new Map();
    this.currentUserId = 1;
    this.currentResumeId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getResume(id: number): Promise<Resume | undefined> {
    return this.resumes.get(id);
  }

  async getResumeByShareId(shareId: string): Promise<Resume | undefined> {
    return Array.from(this.resumes.values()).find(
      (resume) => resume.shareId === shareId,
    );
  }

  async getUserResumes(userId?: number): Promise<Resume[]> {
    // For now, return all resumes since we don't have user association in memory storage
    return Array.from(this.resumes.values());
  }

  async createResume(insertResume: InsertResume): Promise<Resume> {
    const id = this.currentResumeId++;
    const now = new Date();
    const resume: Resume = {
      ...insertResume,
      id,
      shareId: insertResume.shareId || nanoid(10),
      createdAt: now,
      updatedAt: now,
    };
    this.resumes.set(id, resume);
    return resume;
  }

  async updateResume(id: number, updates: UpdateResume): Promise<Resume | undefined> {
    const existingResume = this.resumes.get(id);
    if (!existingResume) {
      return undefined;
    }

    const updatedResume: Resume = {
      ...existingResume,
      ...updates,
      updatedAt: new Date(),
    };
    
    this.resumes.set(id, updatedResume);
    return updatedResume;
  }

  async deleteResume(id: number): Promise<boolean> {
    return this.resumes.delete(id);
  }
}

export const storage = new MemStorage();
