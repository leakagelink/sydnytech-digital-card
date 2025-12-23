import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Share2, Eye, ArrowRight, Phone, Mail, Globe, MapPin, Star, Crown, Sparkles, Briefcase, Palette, X, Check, Zap, Building2, Gem } from "lucide-react";
import { toast } from "sonner";

const templates = [
  // Modern Gradient Templates
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
    pattern: null,
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
    pattern: null,
  },
  // NEW: Pattern & Design Templates
  {
    id: 16,
    name: "Geometric Pro",
    style: "Corporate",
    category: "corporate",
    icon: Building2,
    cardBg: "bg-slate-900",
    accent: "bg-blue-500",
    textColor: "text-white",
    badgeBg: "bg-blue-500/20",
    pattern: "geometric",
  },
  {
    id: 17,
    name: "Wave Business",
    style: "Modern",
    category: "modern",
    icon: Zap,
    cardBg: "bg-gradient-to-b from-indigo-900 to-slate-900",
    accent: "bg-indigo-400",
    textColor: "text-white",
    badgeBg: "bg-indigo-400/20",
    pattern: "waves",
  },
  {
    id: 18,
    name: "Diamond Elite",
    style: "Luxury",
    category: "luxury",
    icon: Gem,
    cardBg: "bg-gradient-to-br from-zinc-900 via-neutral-900 to-stone-900",
    accent: "bg-amber-400",
    textColor: "text-white",
    badgeBg: "bg-amber-400/20",
    pattern: "diamond",
  },
  {
    id: 19,
    name: "Circuit Tech",
    style: "Tech",
    category: "creative",
    icon: Zap,
    cardBg: "bg-slate-950",
    accent: "bg-emerald-400",
    textColor: "text-white",
    badgeBg: "bg-emerald-400/20",
    pattern: "circuit",
  },
  {
    id: 20,
    name: "Marble Classic",
    style: "Luxury",
    category: "luxury",
    icon: Crown,
    cardBg: "bg-gradient-to-br from-gray-100 via-white to-gray-200",
    accent: "bg-slate-800",
    textColor: "text-slate-800",
    badgeBg: "bg-slate-800/10",
    pattern: "marble",
  },
  {
    id: 21,
    name: "Dots Professional",
    style: "Minimal",
    category: "minimal",
    icon: Star,
    cardBg: "bg-white",
    accent: "bg-rose-500",
    textColor: "text-slate-800",
    badgeBg: "bg-rose-500/10",
    pattern: "dots",
  },
  {
    id: 22,
    name: "Lines Corporate",
    style: "Corporate",
    category: "corporate",
    icon: Briefcase,
    cardBg: "bg-gradient-to-br from-blue-900 to-blue-950",
    accent: "bg-sky-400",
    textColor: "text-white",
    badgeBg: "bg-sky-400/20",
    pattern: "lines",
  },
  {
    id: 23,
    name: "Hexagon Tech",
    style: "Tech",
    category: "creative",
    icon: Zap,
    cardBg: "bg-gradient-to-br from-violet-950 to-purple-950",
    accent: "bg-violet-400",
    textColor: "text-white",
    badgeBg: "bg-violet-400/20",
    pattern: "hexagon",
  },
  {
    id: 24,
    name: "Gold Stripe",
    style: "Premium",
    category: "premium",
    icon: Crown,
    cardBg: "bg-zinc-900",
    accent: "bg-yellow-500",
    textColor: "text-white",
    badgeBg: "bg-yellow-500/20",
    pattern: "stripes",
  },
  {
    id: 25,
    name: "Mesh Gradient",
    style: "Creative",
    category: "creative",
    icon: Palette,
    cardBg: "bg-slate-900",
    accent: "bg-pink-500",
    textColor: "text-white",
    badgeBg: "bg-pink-500/20",
    pattern: "mesh",
  },
  // Original templates
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
    pattern: null,
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
    pattern: null,
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
    pattern: null,
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
    pattern: null,
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
    pattern: null,
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
    pattern: null,
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
    pattern: null,
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
    pattern: null,
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
    pattern: null,
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
    pattern: null,
  },
];

const categories = [
  { id: "all", label: "All", icon: Sparkles },
  { id: "minimal", label: "Minimal", icon: Star },
  { id: "corporate", label: "Corporate", icon: Briefcase },
  { id: "creative", label: "Creative", icon: Palette },
  { id: "premium", label: "Premium", icon: Crown },
  { id: "luxury", label: "Luxury", icon: Gem },
];

// Pattern components
const PatternOverlay = ({ pattern, textColor }: { pattern: string | null; textColor: string }) => {
  if (!pattern) return null;
  
  const isLight = textColor.includes("slate-8") || textColor.includes("amber-9") || textColor.includes("rose-9") || textColor.includes("stone-7");
  const patternColor = isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.06)";
  const accentColor = isLight ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)";
  
  switch (pattern) {
    case "geometric":
      return (
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="geo" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke={patternColor} strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#geo)"/>
          </svg>
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-500/20 blur-2xl rounded-full" />
        </div>
      );
    case "waves":
      return (
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill={accentColor} d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
          </svg>
          <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill={patternColor} d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
          </svg>
        </div>
      );
    case "diamond":
      return (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-4 right-4 w-16 h-16 border border-amber-400/30 rotate-45" />
          <div className="absolute top-8 right-8 w-12 h-12 border border-amber-400/20 rotate-45" />
          <div className="absolute bottom-8 left-4 w-20 h-20 border border-amber-400/20 rotate-45" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-amber-400/10 rotate-45" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
        </div>
      );
    case "circuit":
      return (
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="2" fill="currentColor" className="text-emerald-400"/>
                <path d="M5 5 L25 5 L25 25 M25 25 L45 25" stroke="currentColor" strokeWidth="1" fill="none" className="text-emerald-400"/>
                <circle cx="25" cy="25" r="2" fill="currentColor" className="text-emerald-400"/>
                <circle cx="45" cy="25" r="2" fill="currentColor" className="text-emerald-400"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400/50 via-emerald-400/20 to-transparent" />
          <div className="absolute bottom-0 right-0 w-1/2 h-0.5 bg-gradient-to-l from-emerald-400/50 via-emerald-400/20 to-transparent" />
        </div>
      );
    case "marble":
      return (
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-300 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-400/50 via-transparent to-transparent" />
        </div>
      );
    case "dots":
      return (
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="rgba(244,63,94,0.15)"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)"/>
          </svg>
          <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/10 blur-2xl rounded-full" />
        </div>
      );
    case "lines":
      return (
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="lines" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="20" stroke="rgba(56,189,248,0.1)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lines)"/>
          </svg>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400/50 via-sky-400/20 to-transparent" />
        </div>
      );
    case "hexagon":
      return (
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hex" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(0.5)">
                <path d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-violet-400"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex)"/>
          </svg>
          <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/20 blur-3xl rounded-full" />
        </div>
      );
    case "stripes":
      return (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-yellow-500/40 via-yellow-500/20 to-transparent" />
          <div className="absolute top-0 left-4 w-0.5 h-3/4 bg-yellow-500/20" />
          <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/30 to-yellow-500/50" />
          <div className="absolute top-1/4 right-8 w-0.5 h-1/2 bg-yellow-500/20" />
        </div>
      );
    case "mesh":
      return (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/30 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/30 blur-3xl rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/20 blur-3xl rounded-full" />
        </div>
      );
    default:
      return null;
  }
};

const TemplatesScreen = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [previewMode, setPreviewMode] = useState<number | null>(null);
  const [previewData, setPreviewData] = useState({
    name: "",
    designation: "",
    company: "",
  });

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

  const handleLivePreview = (id: number) => {
    setPreviewMode(id);
    setPreviewData({ name: "", designation: "", company: "" });
  };

  const handleCreateCard = () => {
    const message = previewData.name 
      ? `Hi, I want to create a digital business card. My details: Name: ${previewData.name}, Designation: ${previewData.designation || "N/A"}, Company: ${previewData.company || "N/A"}`
      : "Hi, I want to create a digital business card";
    window.open(`https://wa.me/919325739428?text=${encodeURIComponent(message)}`, "_blank");
  };

  const getDisplayName = (templateId: number) => {
    if (previewMode === templateId && previewData.name) {
      return previewData.name;
    }
    return "Your Name";
  };

  const getDisplayDesignation = (templateId: number) => {
    if (previewMode === templateId && previewData.designation) {
      return previewData.designation;
    }
    return "Your Designation";
  };

  const getDisplayCompany = (templateId: number) => {
    if (previewMode === templateId && previewData.company) {
      return previewData.company;
    }
    return "Company Name";
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
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30" 
                      : "bg-muted/50 text-muted-foreground hover:bg-muted"
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
            const isInPreviewMode = previewMode === template.id;
            
            return (
              <div 
                key={template.id}
                className={`glass-card overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 ${
                  selectedTemplate === template.id || isInPreviewMode ? "ring-2 ring-primary scale-[1.02]" : ""
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Live Preview Input Form */}
                {isInPreviewMode && (
                  <div className="p-4 bg-primary/10 border-b border-primary/20 animate-in slide-in-from-top-2 duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">Live Preview Mode</span>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-7 w-7"
                        onClick={() => setPreviewMode(null)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <Input
                        placeholder="Enter your name"
                        value={previewData.name}
                        onChange={(e) => setPreviewData(prev => ({ ...prev, name: e.target.value.slice(0, 50) }))}
                        className="bg-background/50 border-primary/30 focus:border-primary h-9 text-sm"
                        maxLength={50}
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <Input
                          placeholder="Designation"
                          value={previewData.designation}
                          onChange={(e) => setPreviewData(prev => ({ ...prev, designation: e.target.value.slice(0, 30) }))}
                          className="bg-background/50 border-primary/30 focus:border-primary h-9 text-sm"
                          maxLength={30}
                        />
                        <Input
                          placeholder="Company"
                          value={previewData.company}
                          onChange={(e) => setPreviewData(prev => ({ ...prev, company: e.target.value.slice(0, 30) }))}
                          className="bg-background/50 border-primary/30 focus:border-primary h-9 text-sm"
                          maxLength={30}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Card Preview - Realistic Business Card Design */}
                <div className={`relative ${template.cardBg} p-5 min-h-[220px] transition-all duration-300 overflow-hidden`}>
                  {/* Pattern Overlay */}
                  <PatternOverlay pattern={template.pattern} textColor={template.textColor} />
                  
                  {/* Category Badge - Top Left */}
                  <div className={`absolute top-3 left-3 z-10 ${template.badgeBg} backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/20 flex items-center gap-1.5`}>
                    <CategoryIcon className={`w-3 h-3 ${template.textColor}`} />
                    <span className={`text-[10px] font-semibold ${template.textColor}`}>{template.style}</span>
                  </div>

                  {/* SYDNYTECH Branding - Top Right */}
                  <div className={`absolute top-3 right-3 z-10 ${template.badgeBg} backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/20`}>
                    <span className={`text-xs font-display font-bold ${template.textColor}`}>SYDNYTECH</span>
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col h-full justify-between pt-8">
                    {/* Logo & Name Section */}
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 rounded-2xl ${template.accent} flex items-center justify-center shadow-lg border-2 border-white/30 transition-transform duration-300 ${isInPreviewMode ? "scale-110" : ""}`}>
                        <span className={`text-xl font-display font-bold ${template.category === "minimal" || template.category === "luxury" && template.textColor !== "text-white" ? "text-white" : template.textColor === "text-white" ? "text-slate-900" : "text-white"}`}>
                          {isInPreviewMode && previewData.name ? previewData.name.charAt(0).toUpperCase() : "SY"}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className={`font-display font-bold text-lg ${template.textColor} truncate transition-all duration-300 ${isInPreviewMode && previewData.name ? "scale-105 origin-left" : ""}`}>
                          {getDisplayName(template.id)}
                        </h3>
                        <p className={`text-sm ${template.textColor} opacity-80 truncate`}>
                          {getDisplayDesignation(template.id)}
                        </p>
                        <p className={`text-xs ${template.textColor} opacity-60 mt-1 truncate`}>
                          {getDisplayCompany(template.id)}
                        </p>
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
                    <div className={`flex items-center justify-between mt-4 pt-3 border-t ${template.textColor === "text-white" ? "border-white/20" : "border-slate-300/50"}`}>
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
                  <div className="flex gap-2">
                    {!isInPreviewMode ? (
                      <>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleLivePreview(template.id)}
                          className="gap-1"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          Try It
                        </Button>
                        <Button variant="hero" size="sm" onClick={handleCreateCard}>
                          Use
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </>
                    ) : (
                      <Button variant="hero" size="sm" onClick={handleCreateCard} className="gap-1">
                        <Check className="w-4 h-4" />
                        Create Card
                      </Button>
                    )}
                  </div>
                </div>

                {/* Expanded Preview */}
                {selectedTemplate === template.id && !isInPreviewMode && (
                  <div className="p-4 border-t border-border/50 bg-card/50 animate-in slide-in-from-top-2 duration-300">
                    <h5 className="font-semibold text-sm mb-3">Template Features:</h5>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {["Click to Call", "WhatsApp", "Email", "Location", "Social Links", "Photo Gallery", "Video Gallery", "Payment Section"].map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button variant="hero" className="w-full" onClick={() => handleLivePreview(template.id)}>
                      Try with Your Name
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
              Can not find what you are looking for?
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
