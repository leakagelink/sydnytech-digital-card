import { Button } from "@/components/ui/button";
import { 
  LogIn, 
  Users, 
  ExternalLink, 
  Star, 
  HelpCircle,
  FileText,
  Shield,
  MessageCircle,
  Info,
  RefreshCcw,
  ChevronRight,
  Trash2,
  Phone,
  AlertTriangle
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import logoImage from "@/assets/sydnytech-logo.png";

const MoreScreen = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      section: "Account",
      items: [
        { 
          icon: LogIn, 
          label: "Customer Login", 
          desc: "Access your dashboard",
          action: () => window.open("https://sydnytech.in/panel/login", "_blank"),
          color: "bg-primary/20 text-primary",
          isExternal: true
        },
        { 
          icon: Users, 
          label: "Franchise Login", 
          desc: "Franchise partner access",
          action: () => window.open("https://sydnytech.in/panel/franchisee-login", "_blank"),
          color: "bg-accent/20 text-accent",
          isExternal: true
        },
      ]
    },
    {
      section: "Support",
      items: [
        { 
          icon: Phone, 
          label: "Contact Us", 
          desc: "Get in touch with us",
          action: () => navigate("/contact-us"),
          color: "bg-primary/20 text-primary",
          isExternal: false
        },
        { 
          icon: MessageCircle, 
          label: "WhatsApp Support", 
          desc: "Chat with us directly",
          action: () => window.open("https://wa.link/9czb58", "_blank"),
          color: "bg-green-500/20 text-green-400",
          isExternal: true
        },
        { 
          icon: HelpCircle, 
          label: "FAQ & Help", 
          desc: "Frequently asked questions",
          action: () => navigate("/faq"),
          color: "bg-blue-500/20 text-blue-400",
          isExternal: false
        },
      ]
    },
    {
      section: "Legal & Policies",
      items: [
        { 
          icon: Shield, 
          label: "Privacy Policy", 
          desc: "How we protect your data",
          action: () => navigate("/privacy-policy"),
          color: "bg-purple-500/20 text-purple-400",
          isExternal: false
        },
        { 
          icon: FileText, 
          label: "Terms of Service", 
          desc: "Terms and conditions",
          action: () => navigate("/terms-of-service"),
          color: "bg-slate-500/20 text-slate-400",
          isExternal: false
        },
        { 
          icon: RefreshCcw, 
          label: "Refund Policy", 
          desc: "Cancellation and refunds",
          action: () => navigate("/refund-policy"),
          color: "bg-orange-500/20 text-orange-400",
          isExternal: false
        },
        { 
          icon: AlertTriangle, 
          label: "Disclaimer", 
          desc: "Important legal notices",
          action: () => navigate("/disclaimer"),
          color: "bg-yellow-500/20 text-yellow-400",
          isExternal: false
        },
        { 
          icon: Trash2, 
          label: "Data Deletion", 
          desc: "Request data removal",
          action: () => navigate("/data-deletion"),
          color: "bg-red-500/20 text-red-400",
          isExternal: false
        },
      ]
    },
    {
      section: "More",
      items: [
        { 
          icon: Info, 
          label: "About Us", 
          desc: "Know more about SYDNYTECH",
          action: () => navigate("/about-us"),
          color: "bg-cyan-500/20 text-cyan-400",
          isExternal: false
        },
        { 
          icon: Star, 
          label: "Rate Us", 
          desc: "Share your feedback",
          action: () => window.open("https://sydnytech.in", "_blank"),
          color: "bg-yellow-500/20 text-yellow-400",
          isExternal: true
        },
      ]
    }
  ];

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border/50 px-4 py-4">
        <div className="max-w-lg mx-auto">
          <h1 className="font-display text-2xl font-bold">
            More <span className="text-primary">Options</span>
          </h1>
          <p className="text-sm text-muted-foreground">Settings and quick links</p>
        </div>
      </header>

      {/* Menu Sections */}
      <div className="px-4 py-6">
        <div className="max-w-lg mx-auto space-y-6">
          {menuItems.map((section) => (
            <div key={section.section}>
              <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-1">
                {section.section}
              </h2>
              <div className="space-y-2">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      onClick={item.action}
                      className="w-full glass-card p-4 flex items-center gap-4 hover:border-primary/30 transition-colors text-left"
                    >
                      <div className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                      {item.isExternal ? (
                        <ExternalLink className="w-4 h-4 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* App Info */}
      <section className="px-4 py-6">
        <div className="max-w-lg mx-auto">
          <div className="glass-card p-6 text-center">
            <img src={logoImage} alt="SYDNYTECH" className="w-20 h-20 object-contain mx-auto mb-4" />
            <h3 className="font-display font-bold text-lg mb-1">SYDNYTECH</h3>
            <p className="text-sm text-muted-foreground mb-4">Digital Business Cards</p>
            <p className="text-xs text-muted-foreground">Version 1.0.0</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-4">
        <div className="max-w-lg mx-auto">
          <Button 
            variant="hero" 
            className="w-full"
            onClick={() => window.open("https://wa.link/9czb58", "_blank")}
          >
            Create Your Card Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MoreScreen;
