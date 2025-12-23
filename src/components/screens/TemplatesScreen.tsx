import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Share2, Eye, ArrowRight, Phone, Mail, Globe, MapPin } from "lucide-react";
import { toast } from "sonner";

const templates = [
  {
    id: 1,
    name: "Template 1",
    style: "Modern Gradient",
    gradient: "from-cyan-500 via-teal-500 to-emerald-500",
    cardBg: "bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-500",
    accent: "bg-cyan-600",
    textColor: "text-white",
  },
  {
    id: 2,
    name: "Template 2", 
    style: "Dark Elegance",
    gradient: "from-slate-700 via-slate-800 to-slate-900",
    cardBg: "bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900",
    accent: "bg-amber-500",
    textColor: "text-white",
  },
  {
    id: 3,
    name: "Template 3",
    style: "Sunset Vibes",
    gradient: "from-orange-500 via-rose-500 to-pink-500",
    cardBg: "bg-gradient-to-br from-orange-500 via-rose-500 to-pink-500",
    accent: "bg-orange-600",
    textColor: "text-white",
  },
  {
    id: 4,
    name: "Template 4",
    style: "Ocean Blue",
    gradient: "from-blue-500 via-indigo-500 to-violet-500",
    cardBg: "bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500",
    accent: "bg-blue-600",
    textColor: "text-white",
  },
  {
    id: 5,
    name: "Template 5",
    style: "Forest Green",
    gradient: "from-green-600 via-emerald-600 to-teal-600",
    cardBg: "bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600",
    accent: "bg-green-700",
    textColor: "text-white",
  },
  {
    id: 6,
    name: "Template 6",
    style: "Royal Gold",
    gradient: "from-amber-500 via-yellow-500 to-orange-500",
    cardBg: "bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-500",
    accent: "bg-amber-600",
    textColor: "text-slate-900",
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
        navigator.clipboard.writeText("https://sydnytech.in");
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
        <div className="max-w-lg mx-auto grid grid-cols-1 gap-5">
          {templates.map((template) => (
            <div 
              key={template.id}
              className={`glass-card overflow-hidden transition-all duration-300 ${
                selectedTemplate === template.id ? 'ring-2 ring-primary scale-[1.02]' : ''
              }`}
            >
              {/* Card Preview - Realistic Business Card Design */}
              <div className={`relative ${template.cardBg} p-5 min-h-[200px]`}>
                {/* SYDNYTECH Branding - Top Right */}
                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/30">
                  <span className={`text-xs font-display font-bold ${template.textColor}`}>SYDNYTECH</span>
                </div>

                {/* Card Content */}
                <div className="flex flex-col h-full justify-between">
                  {/* Logo & Name Section */}
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-2xl ${template.accent} flex items-center justify-center shadow-lg border-2 border-white/30`}>
                      <span className={`text-xl font-display font-bold ${template.textColor}`}>SY</span>
                    </div>
                    <div>
                      <h3 className={`font-display font-bold text-lg ${template.textColor}`}>Your Name</h3>
                      <p className={`text-sm ${template.textColor} opacity-80`}>Your Designation</p>
                      <p className={`text-xs ${template.textColor} opacity-60 mt-1`}>Company Name</p>
                    </div>
                  </div>

                  {/* Contact Icons Row */}
                  <div className="flex justify-center gap-3 mt-4">
                    {[Phone, Mail, Globe, MapPin].map((Icon, idx) => (
                      <div 
                        key={idx} 
                        className={`w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30`}
                      >
                        <Icon className={`w-5 h-5 ${template.textColor}`} />
                      </div>
                    ))}
                  </div>

                  {/* Bottom Branding */}
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/20">
                    <div>
                      <p className={`text-[10px] ${template.textColor} opacity-60`}>Powered by</p>
                      <p className={`text-xs font-display font-bold ${template.textColor}`}>SYDNYTECH</p>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="glass" 
                        size="icon"
                        className="h-9 w-9 bg-white/20 border-white/30 hover:bg-white/30"
                        onClick={() => handlePreview(template.id)}
                      >
                        <Eye className={`w-4 h-4 ${template.textColor}`} />
                      </Button>
                      <Button 
                        variant="glass" 
                        size="icon"
                        className="h-9 w-9 bg-white/20 border-white/30 hover:bg-white/30"
                        onClick={() => handleShare(template)}
                      >
                        <Share2 className={`w-4 h-4 ${template.textColor}`} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Template Info Bar */}
              <div className="p-4 flex items-center justify-between bg-card">
                <div>
                  <h4 className="font-display font-semibold">{template.name}</h4>
                  <p className="text-xs text-muted-foreground">{template.style}</p>
                </div>
                <Button variant="hero" size="sm" onClick={handleCreateCard}>
                  Use Template
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Expanded Preview */}
              {selectedTemplate === template.id && (
                <div className="p-4 border-t border-border/50 bg-card/50 animate-in slide-in-from-top-2 duration-300">
                  <h5 className="font-semibold text-sm mb-3">Template Features:</h5>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {['Click to Call', 'WhatsApp', 'Email', 'Location', 'Social Links', 'Photo Gallery'].map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button variant="hero" className="w-full" onClick={handleCreateCard}>
                    Create Card with This Template
                    <ArrowRight className="w-4 h-4" />
                  </Button>
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
