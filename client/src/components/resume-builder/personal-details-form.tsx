import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { User, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import type { PersonalDetails } from "@shared/schema";

interface PersonalDetailsFormProps {
  data: PersonalDetails;
  onChange: (data: PersonalDetails) => void;
}

export default function PersonalDetailsForm({ data, onChange }: PersonalDetailsFormProps) {
  const [isOpen, setIsOpen] = useState(true);

  const handleChange = (field: keyof PersonalDetails, value: string) => {
    onChange({
      ...data,
      [field]: value,
    });
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
                <Label htmlFor="linkedin" className="text-sm font-medium text-slate-700">
                  LinkedIn
                </Label>
                <Input
                  id="linkedin"
                  type="url"
                  value={data.linkedin || ''}
                  onChange={(e) => handleChange('linkedin', e.target.value)}
                  placeholder="linkedin.com/in/johndoe"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="website" className="text-sm font-medium text-slate-700">
                  Portfolio/Website
                </Label>
                <Input
                  id="website"
                  type="url"
                  value={data.website || ''}
                  onChange={(e) => handleChange('website', e.target.value)}
                  placeholder="johndoe.dev"
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
