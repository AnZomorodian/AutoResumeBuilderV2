import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Award, Plus, Trash2, GripVertical } from "lucide-react";
import { nanoid } from "nanoid";
import type { Certification } from "@shared/schema";

interface CertificationsFormProps {
  data: Certification[];
  onChange: (data: Certification[]) => void;
}

export default function CertificationsForm({ data, onChange }: CertificationsFormProps) {
  const addCertification = () => {
    const newCertification: Certification = {
      id: nanoid(),
      name: "",
      issuer: "",
      issueDate: "",
      expirationDate: "",
      credentialId: "",
      url: "",
    };
    onChange([...data, newCertification]);
  };

  const removeCertification = (id: string) => {
    onChange(data.filter(cert => cert.id !== id));
  };

  const updateCertification = (id: string, field: keyof Certification, value: any) => {
    onChange(data.map(cert => 
      cert.id === id ? { ...cert, [field]: value } : cert
    ));
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-secondary flex items-center">
            <Award className="h-5 w-5 mr-2 text-primary" />
            Certifications
          </h2>
          <Button onClick={addCertification} size="sm">
            <Plus className="h-4 w-4 mr-1" />
            Add Certification
          </Button>
        </div>

        <div className="space-y-4">
          {data.map((certification, index) => (
            <div key={certification.id} className="border border-slate-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <GripVertical className="h-4 w-4 text-slate-400 mr-3 cursor-grab" />
                  <span className="font-medium text-slate-700">Certification #{index + 1}</span>
                </div>
                <Button
                  onClick={() => removeCertification(certification.id)}
                  variant="ghost"
                  size="sm"
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-slate-700">Certification Name *</Label>
                  <Input
                    value={certification.name}
                    onChange={(e) => updateCertification(certification.id, 'name', e.target.value)}
                    placeholder="AWS Certified Solutions Architect"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label className="text-sm font-medium text-slate-700">Issuing Organization *</Label>
                  <Input
                    value={certification.issuer}
                    onChange={(e) => updateCertification(certification.id, 'issuer', e.target.value)}
                    placeholder="Amazon Web Services"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-slate-700">Issue Date</Label>
                  <Input
                    type="month"
                    value={certification.issueDate || ''}
                    onChange={(e) => updateCertification(certification.id, 'issueDate', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-slate-700">Expiration Date</Label>
                  <Input
                    type="month"
                    value={certification.expirationDate || ''}
                    onChange={(e) => updateCertification(certification.id, 'expirationDate', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-slate-700">Credential ID</Label>
                  <Input
                    value={certification.credentialId || ''}
                    onChange={(e) => updateCertification(certification.id, 'credentialId', e.target.value)}
                    placeholder="ABC123DEF456"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-slate-700">Verification URL</Label>
                  <Input
                    type="url"
                    value={certification.url || ''}
                    onChange={(e) => updateCertification(certification.id, 'url', e.target.value)}
                    placeholder="https://verify.aws.com/123456"
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
          ))}

          {data.length === 0 && (
            <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center text-slate-500">
              <Award className="h-8 w-8 mx-auto mb-2" />
              <p>Add your certifications and achievements</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
