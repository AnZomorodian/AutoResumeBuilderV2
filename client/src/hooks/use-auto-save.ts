import { useState, useEffect, useCallback, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import type { ResumeData } from "@shared/schema";

const AUTO_SAVE_DELAY = 3000; // 3 seconds

export function useAutoSave(
  data: ResumeData,
  saveFunction: (data: ResumeData) => Promise<void>
) {
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dataRef = useRef(data);
  const saveInProgress = useRef(false);

  // Update the data reference when data changes
  useEffect(() => {
    dataRef.current = data;
  }, [data]);

  const performSave = useCallback(async () => {
    if (saveInProgress.current) return;

    try {
      saveInProgress.current = true;
      setIsSaving(true);
      
      await saveFunction(dataRef.current);
      
      setLastSaved(new Date());
    } catch (error) {
      console.error("Auto-save failed:", error);
      toast({
        title: "Auto-save Failed",
        description: "Your changes could not be saved automatically. Please try saving manually.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
      saveInProgress.current = false;
    }
  }, [saveFunction, toast]);

  // Trigger auto-save when data changes
  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Skip auto-save for empty/initial data
    const hasContent = data.personalDetails.fullName || 
                      data.personalDetails.email || 
                      data.workExperience.length > 0 ||
                      data.education.length > 0;
    
    if (!hasContent) return;

    // Set new timeout for auto-save
    timeoutRef.current = setTimeout(() => {
      performSave();
    }, AUTO_SAVE_DELAY);

    // Cleanup timeout on unmount or dependency change
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [data, performSave]);

  // Manual save trigger
  const triggerSave = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    performSave();
  }, [performSave]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    lastSaved,
    isSaving,
    triggerSave,
  };
}
