import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { Resume, InsertResume, UpdateResume } from "@shared/schema";

export function useResumeData(resumeId?: number) {
  const queryClient = useQueryClient();

  // Fetch current resume
  const { data: currentResume, isLoading } = useQuery({
    queryKey: ["/api/resumes", resumeId],
    queryFn: async () => {
      if (!resumeId) return null;
      const response = await fetch(`/api/resumes/${resumeId}`);
      if (!response.ok) {
        if (response.status === 404) return null;
        throw new Error("Failed to fetch resume");
      }
      return response.json() as Promise<Resume>;
    },
    enabled: !!resumeId,
  });

  // Create new resume
  const createResumeMutation = useMutation({
    mutationFn: async (data: InsertResume) => {
      const response = await apiRequest("POST", "/api/resumes", data);
      return response.json() as Promise<Resume>;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/resumes"] });
    },
  });

  // Update existing resume
  const updateResumeMutation = useMutation({
    mutationFn: async (data: UpdateResume) => {
      if (!resumeId) throw new Error("No resume ID provided");
      const response = await apiRequest("PATCH", `/api/resumes/${resumeId}`, data);
      return response.json() as Promise<Resume>;
    },
    onSuccess: (updatedResume) => {
      queryClient.setQueryData(["/api/resumes", resumeId], updatedResume);
      queryClient.invalidateQueries({ queryKey: ["/api/resumes"] });
    },
  });

  return {
    currentResume,
    isLoading,
    saveResume: createResumeMutation.mutateAsync,
    updateResume: updateResumeMutation.mutateAsync,
    isSaving: createResumeMutation.isPending || updateResumeMutation.isPending,
    error: createResumeMutation.error || updateResumeMutation.error,
  };
}

export function useResumeList() {
  const { data: resumes, isLoading } = useQuery({
    queryKey: ["/api/resumes"],
    queryFn: async () => {
      const response = await fetch("/api/resumes");
      if (!response.ok) throw new Error("Failed to fetch resumes");
      return response.json() as Promise<Resume[]>;
    },
  });

  return {
    resumes: resumes || [],
    isLoading,
  };
}
