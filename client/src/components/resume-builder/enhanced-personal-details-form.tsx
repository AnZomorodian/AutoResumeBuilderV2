import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, ChevronUp, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState, useRef } from "react";
import { HelpTooltip } from "@/components/ui/help-tooltip";
import { genderOptions, nationalityOptions, type PersonalDetails } from "@shared/schema";

interface EnhancedPersonalDetailsFormProps {
  data: PersonalDetails;
  onChange: (data: PersonalDetails) => void;
}

export default function EnhancedPersonalDetailsForm({ data, onChange }: EnhancedPersonalDetailsFormProps) {
  const [isOpen, setIsOpen] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (field: keyof PersonalDetails, value: string | number) => {
    onChange({
      ...data,
      [field]: value,
    });
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        handleChange('profileImage', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    handleChange('profileImage', '');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-secondary flex items-center">
              <User className="h-5 w-5 mr-2 text-primary" />
              Personal Details
            </h2>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <ChevronUp className={`h-4 w-4 transition-transform ${isOpen ? '' : 'rotate-180'}`} />
              </Button>
            </CollapsibleTrigger>
          </div>
          
          <CollapsibleContent>
            {/* Profile Image Section */}
            <div className="mb-6">
              <Label className="text-sm font-medium text-slate-700 mb-3 block">
                Profile Photo (Optional)
              </Label>
              <div className="flex items-center space-x-4">
                {data.profileImage ? (
                  <div className="relative">
                    <img
                      src={data.profileImage}
                      alt="Profile"
                      className="w-20 h-20 rounded-full object-cover border-2 border-slate-200"
                    />
                    <button
                      onClick={removeImage}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ) : (
                  <div className="w-20 h-20 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center">
                    <User className="h-8 w-8 text-slate-400" />
                  </div>
                )}
                <div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Photo
                  </Button>
                  <p className="text-xs text-slate-500 mt-1">JPG, PNG up to 5MB</p>
                </div>
              </div>
            </div>

            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <Label className="text-sm font-medium text-slate-700 flex items-center">
                  Full Name *
                  <HelpTooltip content="Your complete name as it appears on official documents" />
                </Label>
                <Input
                  value={data.fullName || ""}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  placeholder="John Doe"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label className="text-sm font-medium text-slate-700 flex items-center">
                  Job Title *
                  <HelpTooltip content="Your current or desired job position" />
                </Label>
                <Input
                  value={data.jobTitle || ""}
                  onChange={(e) => handleChange('jobTitle', e.target.value)}
                  placeholder="Software Engineer"
                  className="mt-1"
                />
              </div>
            </div>

            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <Label className="text-sm font-medium text-slate-700">
                  Gender (Optional)
                </Label>
                <Select value={data.gender || ""} onValueChange={(value) => handleChange('gender', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    {genderOptions.map((option) => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-medium text-slate-700">
                  Age (Optional)
                </Label>
                <Input
                  type="number"
                  min="16"
                  max="100"
                  value={data.age || ""}
                  onChange={(e) => handleChange('age', parseInt(e.target.value) || "")}
                  placeholder="25"
                  className="mt-1"
                />
              </div>

              <div>
                <Label className="text-sm font-medium text-slate-700">
                  Nationality (Optional)
                </Label>
                <Select value={data.nationality || ""} onValueChange={(value) => handleChange('nationality', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select nationality" />
                  </SelectTrigger>
                  <SelectContent>
                    {nationalityOptions.map((option) => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <Label className="text-sm font-medium text-slate-700 flex items-center">
                  Email *
                  <HelpTooltip content="Professional email address for contact" />
                </Label>
                <Input
                  type="email"
                  value={data.email || ""}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="john@example.com"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label className="text-sm font-medium text-slate-700">Phone</Label>
                <Input
                  value={data.phone || ""}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  className="mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <Label className="text-sm font-medium text-slate-700">Location</Label>
                <Input
                  value={data.location || ""}
                  onChange={(e) => handleChange('location', e.target.value)}
                  placeholder="New York, NY"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label className="text-sm font-medium text-slate-700">Website</Label>
                <Input
                  value={data.website || ""}
                  onChange={(e) => handleChange('website', e.target.value)}
                  placeholder="https://johndoe.com"
                  className="mt-1"
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <Label className="text-sm font-medium text-slate-700">LinkedIn</Label>
                <Input
                  value={data.linkedin || ""}
                  onChange={(e) => handleChange('linkedin', e.target.value)}
                  placeholder="https://linkedin.com/in/johndoe"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label className="text-sm font-medium text-slate-700">GitHub</Label>
                <Input
                  value={data.github || ""}
                  onChange={(e) => handleChange('github', e.target.value)}
                  placeholder="https://github.com/johndoe"
                  className="mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <Label className="text-sm font-medium text-slate-700">Telegram</Label>
                <Input
                  value={data.telegram || ""}
                  onChange={(e) => handleChange('telegram', e.target.value)}
                  placeholder="https://t.me/johndoe"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label className="text-sm font-medium text-slate-700">Discord</Label>
                <Input
                  value={data.discord || ""}
                  onChange={(e) => handleChange('discord', e.target.value)}
                  placeholder="johndoe#1234"
                  className="mt-1"
                />
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <Label className="text-sm font-medium text-slate-700 flex items-center mb-2">
                Professional Summary
                <HelpTooltip content="A brief overview of your skills, experience, and career goals" />
              </Label>
              <Textarea
                value={data.summary || ""}
                onChange={(e) => handleChange('summary', e.target.value)}
                placeholder="Write a compelling summary that highlights your key strengths and career objectives..."
                className="min-h-[100px]"
                maxLength={500}
              />
              <p className="text-xs text-slate-500 mt-1">
                {(data.summary || "").length}/500 characters
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}