import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Share2, Eye, ArrowRight, Phone, Mail, Globe, MapPin, Star, Crown, Sparkles, Briefcase, Palette } from "lucide-react";
import { toast } from "sonner";

const templates = [
  {
    id: 1,
    name: "Modern Gradient",
    style: "Trending",
    category: "modern",
    icon: Sparkles,
    cardBg: "bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-500",
    accent: "bg-cyan-600",
    textColor: "text-white",
    badgeBg: "bg-white/20",
  },
  {
    id: 2,
    name: "Dark Elegance",
    style: "Premium",
    category: "premium",
    icon: Crown,
    cardBg: "bg-gradient-to-br from-slate-800 via-slate-900 to-zinc-900",
    accent: "bg-amber-500",
    textColor: "text-white",
    badgeBg: "bg-amber-500/20",
  },
  {
    id: 3,
    name: "Sunset Vibes",
    style: "Creative",
    category: "creative",
    icon: Palette,
    cardBg: "bg-gradient-to-br from-orange-500 via-rose-500 to-pink-500",
    accent: "bg-orange-600",
    textColor: "text-white",
    badgeBg: "bg-white/20",
  },
  {
    id: 4,
    name: "Ocean Blue",
    style: "Corporate",
    category: "corporate",
    icon: Briefcase,
    cardBg: "bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800",
    accent: "bg-blue-500",
    textColor: "text-white",
    badgeBg: "bg-white/20",
  },
  {
    id: 5,
    name: "Minimal White",
    style: "Minimal",
    category: "minimal",
    icon: Star,
    cardBg: "bg-gradient-to-br from-gray-50 via-white to-gray-100",
    accent: "bg-slate-800",
    textColor: "text-slate-800",
    badgeBg: "bg-slate-800/10",
  },
  {
    id: 6,
    name: "Royal Gold",
    style: "Luxury",
    category: "luxury",
    icon: Crown,
    cardBg: "bg-gradient-to-br from-amber-600 via-yellow-500 to-amber-400",
    accent: "bg-amber-800",
    textColor: "text-amber-900",
    badgeBg: "bg-amber-900/20",
  },
  {
    id: 7,
    name: "Forest Green",
    style: "Corporate",
    category: "corporate",
    icon: Briefcase,
    cardBg: "bg-gradient-to-br from-emerald-700 via-green-700 to-teal-800",
    accent: "bg-emerald-500",
    textColor: "text-white",
    badgeBg: "bg-white/20",
  },
  {
    id: 8,
    name: "Clean Slate",
    style: "Minimal",
    category: "minimal",
    icon: Star,
    cardBg: "bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200",
    accent: "bg-indigo-600",
    textColor: "text-slate-700",
    badgeBg: "bg-indigo-600/10",
  },
  {
    id: 9,
    name: "Purple Haze",
    style: "Creative",
    category: "creative",
    icon: Palette,
    cardBg: "bg-gradient-to-br from-purple-600 via-violet-600 to-fuchsia-600",
    accent: "bg-purple-500",
    textColor: "text-white",
    badgeBg: "bg-white/20",
  },
  {
    id: 10,
    name: "Executive Black",
    style: "Premium",
    category: "premium",
    icon: Crown,
    cardBg: "bg-gradient-to-br from-zinc-900 via-neutral-900 to-black",
    accent: "bg-white",
    textColor: "text-white",
    badgeBg: "bg-white/10",
  },
  {
    id: 11,
    name: "Rose Gold",
    style: "Luxury",
    category: "luxury",
    icon: Crown,
    cardBg: "bg-gradient-to-br from-rose-300 via-pink-300 to-rose-400",
    accent: "bg-rose-600",
    textColor: "text-rose-900",
    badgeBg: "bg-rose-900/20",
  },
  {
    id: 12,
    name: "Navy Professional",
    style: "Corporate",
    category: "corporate",
    icon: Briefcase,
    cardBg: "bg-gradient-to-br from-slate-700 via-blue-900 to-slate-800",
    accent: "bg-sky-400",
    textColor: "text-white",
    badgeBg: "bg-sky-400/20",
  },
  {
    id: 13,
    name: "Neon Glow",
    style: "Creative",
    category: "creative",
    icon: Palette,
    cardBg: "bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900",
    accent: "bg-cyan-400",
    textColor: "text-white",
    badgeBg: "bg-cyan-400/20",
  },
  {
    id: 14,
    name: "Pearl White",
    style: "Minimal",
    category: "minimal",
    icon: Star,
    cardBg: "bg-gradient-to-br from-stone-100 via-neutral-50 to-zinc-100",
    accent: "bg-stone-600",
    textColor: "text-stone-700",
    badgeBg: "bg-stone-600/10",
  },
  {
    id: 15,
    name: "Platinum Elite",
    style: "Luxury",
    category: "luxury",
    icon: Crown,
    cardBg: "bg-gradient-to-br from-gray-300 via-slate-200 to-gray-400",
    accent: "bg-slate-700",
    textColor: "text-slate-800",
    badgeBg: "bg-slate-800/15",
  },
];

const categories = [
  { id: "all", label: "All", icon: Sparkles },
  { id: "minimal", label: "Minimal", icon: Star },
  { id: "corporate", label: "Corporate", icon: Briefcase },
  { id: "creative", label: "Creative", icon: Palette },
  { id: "premium", label: "Premium", icon: Crown },
  { id: "luxury", label: "Luxury", icon: Crown },
];

const TemplatesScreen = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTemplates = activeCategory === "all" 
    ? templates 
    : templates.filter(t => t.category === activeCategory);

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
          <p className="text-sm text-muted-foreground">{templates.length} beautiful designs to choose from</p>
        </div>
      </header>

      {/* Category Filter */}
      <section className="px-4 py-4 sticky top-[73px] z-20 bg-background/80 backdrop-blur-xl">
        <div className="max-w-lg mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    isActive 
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30' 
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="px-4 py-4">
        <div className="max-w-lg mx-auto grid grid-cols-1 gap-5">
          {filteredTemplates.map((template, index) => {
            const CategoryIcon = template.icon;
            return (
              <div 
                key={template.id}
                className={`glass-card overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 ${
                  selectedTemplate === template.id ? 'ring-2 ring-primary scale-[1.02]' : ''
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Card Preview - Realistic Business Card Design */}
                <div className={`relative ${template.cardBg} p-5 min-h-[200px]`}>
                  {/* Category Badge - Top Left */}
                  <div className={`absolute top-3 left-3 ${template.badgeBg} backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/20 flex items-center gap-1.5`}>
                    <CategoryIcon className={`w-3 h-3 ${template.textColor}`} />
                    <span className={`text-[10px] font-semibold ${template.textColor}`}>{template.style}</span>
                  </div>

                  {/* SYDNYTECH Branding - Top Right */}
                  <div className={`absolute top-3 right-3 ${template.badgeBg} backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/20`}>
                    <span className={`text-xs font-display font-bold ${template.textColor}`}>SYDNYTECH</span>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col h-full justify-between pt-8">
                    {/* Logo & Name Section */}
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 rounded-2xl ${template.accent} flex items-center justify-center shadow-lg border-2 border-white/30`}>
                        <span className={`text-xl font-display font-bold ${template.category === 'minimal' || template.category === 'luxury' ? 'text-white' : template.textColor === 'text-white' ? 'text-slate-900' : 'text-white'}`}>SY</span>
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
                          className={`w-10 h-10 rounded-xl ${template.badgeBg} backdrop-blur-sm flex items-center justify-center border border-white/20`}
                        >
                          <Icon className={`w-5 h-5 ${template.textColor}`} />
                        </div>
                      ))}
                    </div>

                    {/* Bottom Branding */}
                    <div className={`flex items-center justify-between mt-4 pt-3 border-t ${template.textColor === 'text-white' ? 'border-white/20' : 'border-slate-300/50'}`}>
                      <div>
                        <p className={`text-[10px] ${template.textColor} opacity-60`}>Powered by</p>
                        <p className={`text-xs font-display font-bold ${template.textColor}`}>SYDNYTECH</p>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="glass" 
                          size="icon"
                          className={`h-9 w-9 ${template.badgeBg} border-white/20 hover:bg-white/30`}
                          onClick={() => handlePreview(template.id)}
                        >
                          <Eye className={`w-4 h-4 ${template.textColor}`} />
                        </Button>
                        <Button 
                          variant="glass" 
                          size="icon"
                          className={`h-9 w-9 ${template.badgeBg} border-white/20 hover:bg-white/30`}
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
                    <p className="text-xs text-muted-foreground">{template.style} Style</p>
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
                      {['Click to Call', 'WhatsApp', 'Email', 'Location', 'Social Links', 'Photo Gallery', 'Video Gallery', 'Payment Section'].map((feature) => (
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
            );
          })}
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
