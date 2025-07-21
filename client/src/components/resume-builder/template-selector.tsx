import { Card, CardContent } from "@/components/ui/card";

interface TemplateSelectorProps {
  selectedTemplate: string;
  onTemplateChange: (template: string) => void;
}

const templates = [
  {
    id: "modern",
    name: "Modern",
    description: "Clean and contemporary design",
    color: "blue",
    gradient: "from-blue-50 to-blue-100",
    headerColor: "bg-blue-500",
    lineColors: "bg-blue-400 bg-blue-300 bg-blue-300",
    textColor: "text-blue-700",
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Simple and elegant layout", 
    color: "gray",
    gradient: "from-gray-50 to-gray-100",
    headerColor: "bg-gray-500",
    lineColors: "bg-gray-400 bg-gray-300 bg-gray-300",
    textColor: "text-gray-700",
  },
  {
    id: "creative",
    name: "Creative",
    description: "Bold and expressive design",
    color: "emerald",
    gradient: "from-emerald-50 to-emerald-100",
    headerColor: "bg-emerald-500",
    lineColors: "bg-emerald-400 bg-emerald-300 bg-emerald-300",
    textColor: "text-emerald-700",
  },
  {
    id: "classic",
    name: "Classic",
    description: "Traditional professional format",
    color: "amber",
    gradient: "from-amber-50 to-amber-100",
    headerColor: "bg-amber-500",
    lineColors: "bg-amber-400 bg-amber-300 bg-amber-300",
    textColor: "text-amber-700",
  },
  {
    id: "executive",
    name: "Executive",
    description: "Sophisticated corporate style",
    color: "purple",
    gradient: "from-purple-50 to-purple-100",
    headerColor: "bg-purple-500",
    lineColors: "bg-purple-400 bg-purple-300 bg-purple-300",
    textColor: "text-purple-700",
  },
  {
    id: "tech",
    name: "Tech Pro",
    description: "Dark theme for developers",
    color: "indigo",
    gradient: "from-indigo-50 to-indigo-100",
    headerColor: "bg-indigo-500",
    lineColors: "bg-indigo-400 bg-indigo-300 bg-indigo-300",
    textColor: "text-indigo-700",
  },
  {
    id: "academic",
    name: "Academic",
    description: "Professional academic format",
    color: "teal",
    gradient: "from-teal-50 to-teal-100",
    headerColor: "bg-teal-500",
    lineColors: "bg-teal-400 bg-teal-300 bg-teal-300",
    textColor: "text-teal-700",
  },
];

export default function TemplateSelector({ selectedTemplate, onTemplateChange }: TemplateSelectorProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-secondary">Choose Template</h2>
          <span className="text-sm text-slate-500">{templates.length} templates available</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {templates.map((template) => {
            const isActive = selectedTemplate === template.id;
            const [line1Color, line2Color, line3Color] = template.lineColors.split(' ');
            
            return (
              <div
                key={template.id}
                onClick={() => onTemplateChange(template.id)}
                className={`
                  bg-gradient-to-br ${template.gradient} border-2 rounded-lg p-4 text-center cursor-pointer
                  transition-all duration-300 hover:transform hover:-translate-y-1
                  ${isActive 
                    ? 'border-primary shadow-lg shadow-primary/20' 
                    : 'border-slate-200 hover:border-slate-300'
                  }
                `}
              >
                <div className={`${template.headerColor} h-16 w-full rounded mb-3`}></div>
                <div className="space-y-2">
                  <div className={`${line1Color} h-2 w-3/4 mx-auto rounded`}></div>
                  <div className={`${line2Color} h-1 w-full rounded`}></div>
                  <div className={`${line3Color} h-1 w-5/6 mx-auto rounded`}></div>
                </div>
                <p className={`text-sm font-medium mt-3 ${template.textColor}`}>
                  {template.name}
                </p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
