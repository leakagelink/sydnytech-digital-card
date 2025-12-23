import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Share2, Eye, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const templates = [
  {
    id: 1,
    name: "Template 1",
    style: "Modern Gradient",
    gradient: "from-cyan-500 via-teal-500 to-emerald-500",
    accent: "bg-cyan-500",
  },
  {
    id: 2,
    name: "Template 2",
    style: "Dark Elegance",
    gradient: "from-slate-700 via-slate-800 to-slate-900",
    accent: "bg-slate-600",
  },
  {
    id: 3,
    name: "Template 3",
    style: "Sunset Vibes",
    gradient: "from-orange-500 via-rose-500 to-pink-500",
    accent: "bg-orange-500",
  },
  {
    id: 4,
    name: "Template 4",
    style: "Ocean Blue",
    gradient: "from-blue-500 via-indigo-500 to-violet-500",
    accent: "bg-blue-500",
  },
  {
    id: 5,
    name: "Template 5",
    style: "Forest Green",
    gradient: "from-green-600 via-emerald-600 to-teal-600",
    accent: "bg-green-600",
  },
  {
    id: 6,
    name: "Template 6",
    style: "Royal Purple",
    gradient: "from-purple-600 via-violet-600 to-indigo-600",
    accent: "bg-purple-600",
  },
];

const TemplatesScreen = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

  const handleShare = async (template: typeof templates[0]) => {
    const shareData = {
      title: `SYDNYTECH - ${template.name}`,
      text: `Check out this beautiful digital business card template from SYDNYTECH!`,
      url: "https://sydnytech.in",
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        toast.success("Link copied to clipboard!");
      }
    } else {
      navigator.clipboard.writeText("https://sydnytech.in");
      toast.success("Link copied to clipboard!");
    }
  };

  const handlePreview = (id: number) => {
    setSelectedTemplate(selectedTemplate === id ? null : id);
  };

  const handleCreateCard = () => {
    window.open("https://wa.me/919325739428?text=Hi%2C%20I%20want%20to%20create%20a%20digital%20business%20card", "_blank");
  };

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border/50 px-4 py-4">
        <div className="max-w-lg mx-auto">
          <h1 className="font-display text-2xl font-bold">
            vCard <span className="text-primary">Templates</span>
          </h1>
          <p className="text-sm text-muted-foreground">Choose your perfect design</p>
        </div>
      </header>

      {/* Templates Grid */}
      <section className="px-4 py-6">
        <div className="max-w-lg mx-auto space-y-4">
          {templates.map((template) => (
            <div 
              key={template.id}
              className={`glass-card overflow-hidden transition-all duration-300 ${
                selectedTemplate === template.id ? 'ring-2 ring-primary' : ''
              }`}
            >
              {/* Card Preview */}
              <div className={`relative h-48 bg-gradient-to-br ${template.gradient} p-5`}>
                {/* Mock card content */}
                <div className="absolute top-4 right-4 bg-background/20 backdrop-blur-sm rounded-lg px-2 py-1">
                  <span className="text-[10px] font-bold text-foreground/90">SYDNYTECH</span>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <div className={`w-12 h-12 rounded-xl ${template.accent} mb-3 flex items-center justify-center`}>
                        <span className="text-lg font-bold text-foreground">SY</span>
                      </div>
                      <h3 className="font-display font-bold text-lg text-foreground">{template.name}</h3>
                      <p className="text-xs text-foreground/70">{template.style}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="glass" 
                        size="icon"
                        onClick={() => handlePreview(template.id)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="glass" 
                        size="icon"
                        onClick={() => handleShare(template)}
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded Preview */}
              {selectedTemplate === template.id && (
                <div className="p-4 border-t border-border/50 bg-card/50 animate-in slide-in-from-top-2 duration-300">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${template.accent}`} />
                      <div>
                        <p className="font-semibold text-sm">Your Name</p>
                        <p className="text-xs text-muted-foreground">Your Designation</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {['Call', 'WhatsApp', 'Email', 'Location'].map((action) => (
                        <div key={action} className="glass-card p-2 text-center">
                          <span className="text-[9px] text-muted-foreground">{action}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="hero" className="w-full" onClick={handleCreateCard}>
                      Use This Template
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-6">
        <div className="max-w-lg mx-auto">
          <div className="glass-card p-6 text-center bg-primary/5 border-primary/20">
            <h3 className="font-display font-bold text-lg mb-2">
              Can't find what you're looking for?
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              We offer custom designs tailored to your brand
            </p>
            <Button variant="hero" onClick={handleCreateCard}>
              Get Custom Design
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TemplatesScreen;
