import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { User, ChevronUp, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState, useRef } from "react";
import { HelpTooltip } from "@/components/ui/help-tooltip";
import type { PersonalDetails } from "@shared/schema";

interface PersonalDetailsFormProps {
  data: PersonalDetails;
  onChange: (data: PersonalDetails) => void;
}

export default function PersonalDetailsForm({ data, onChange }: PersonalDetailsFormProps) {
  const [isOpen, setIsOpen] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (field: keyof PersonalDetails, value: string) => {
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
                    <Button
                      onClick={removeImage}
                      variant="ghost"
                      size="sm"
                      className="absolute -top-2 -right-2 h-6 w-6 p-0 bg-red-500 text-white rounded-full hover:bg-red-600"
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ) : (
                  <div className="w-20 h-20 border-2 border-dashed border-slate-300 rounded-full flex items-center justify-center">
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
                    onClick={() => fileInputRef.current?.click()}
                    variant="outline"
                    size="sm"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Photo
                  </Button>
                  <p className="text-xs text-slate-500 mt-2">
                    Recommended: 400x400px, JPG or PNG
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName" className="text-sm font-medium text-slate-700">
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  value={data.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  placeholder="John Doe"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="jobTitle" className="text-sm font-medium text-slate-700">
                  Job Title *
                </Label>
                <Input
                  id="jobTitle"
                  value={data.jobTitle}
                  onChange={(e) => handleChange('jobTitle', e.target.value)}
                  placeholder="Software Engineer"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={data.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="john.doe@email.com"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-slate-700">
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={data.phone || ''}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  className="mt-1"
                />
              </div>
              
              <div>
                <div className="flex items-center space-x-2">
                  <Label htmlFor="linkedin" className="text-sm font-medium text-slate-700">
                    LinkedIn
                  </Label>
                  <HelpTooltip content="Your LinkedIn profile URL. This will be clickable in your resume." />
                </div>
                <Input
                  id="linkedin"
                  type="url"
                  value={data.linkedin || ''}
                  onChange={(e) => handleChange('linkedin', e.target.value)}
                  placeholder="https://linkedin.com/in/johndoe"
                  className="mt-1"
                />
              </div>
              
              <div>
                <div className="flex items-center space-x-2">
                  <Label htmlFor="website" className="text-sm font-medium text-slate-700">
                    Portfolio/Website
                  </Label>
                  <HelpTooltip content="Your personal website or portfolio URL. This will be clickable in your resume." />
                </div>
                <Input
                  id="website"
                  type="url"
                  value={data.website || ''}
                  onChange={(e) => handleChange('website', e.target.value)}
                  placeholder="https://johndoe.dev"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="github" className="text-sm font-medium text-slate-700">
                  GitHub
                </Label>
                <Input
                  id="github"
                  type="url"
                  value={data.github || ''}
                  onChange={(e) => handleChange('github', e.target.value)}
                  placeholder="https://github.com/johndoe"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="location" className="text-sm font-medium text-slate-700">
                  Location
                </Label>
                <Input
                  id="location"
                  value={data.location || ''}
                  onChange={(e) => handleChange('location', e.target.value)}
                  placeholder="New York, NY"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="telegram" className="text-sm font-medium text-slate-700">
                  Telegram
                </Label>
                <Input
                  id="telegram"
                  value={data.telegram || ''}
                  onChange={(e) => handleChange('telegram', e.target.value)}
                  placeholder="@johndoe or telegram link"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="discord" className="text-sm font-medium text-slate-700">
                  Discord
                </Label>
                <Input
                  id="discord"
                  value={data.discord || ''}
                  onChange={(e) => handleChange('discord', e.target.value)}
                  placeholder="johndoe#1234"
                  className="mt-1"
                />
              </div>
            </div>
            
            <div className="mt-4">
              <Label htmlFor="summary" className="text-sm font-medium text-slate-700">
                Professional Summary
              </Label>
              <Textarea
                id="summary"
                rows={4}
                value={data.summary || ''}
                onChange={(e) => handleChange('summary', e.target.value)}
                placeholder="Write a brief professional summary highlighting your key achievements and career goals..."
                className="mt-1 resize-none"
              />
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}
