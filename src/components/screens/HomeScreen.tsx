import { Button } from "@/components/ui/button";
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  UserPlus, 
  Link2, 
  Share2, 
  RefreshCw,
  Image,
  Youtube,
  CreditCard,
  FileText,
  Check,
  ArrowRight
} from "lucide-react";
import logoImage from "@/assets/sydnytech-logo.png";

interface HomeScreenProps {
  onNavigate: (tab: string) => void;
}

const features = [
  { icon: Phone, label: "Click to Call", color: "bg-emerald-500/20 text-emerald-400" },
  { icon: MessageCircle, label: "Click To WhatsApp", color: "bg-green-500/20 text-green-400" },
  { icon: Mail, label: "Click to Email", color: "bg-blue-500/20 text-blue-400" },
  { icon: MapPin, label: "Click to Navigate", color: "bg-red-500/20 text-red-400" },
  { icon: UserPlus, label: "Add to Contacts", color: "bg-purple-500/20 text-purple-400" },
  { icon: Link2, label: "Website & Social Links", color: "bg-cyan-500/20 text-cyan-400" },
  { icon: Share2, label: "Share Unlimited", color: "bg-orange-500/20 text-orange-400" },
  { icon: RefreshCw, label: "Easy To Update", color: "bg-yellow-500/20 text-yellow-400" },
  { icon: Image, label: "Photo Gallery", color: "bg-pink-500/20 text-pink-400" },
  { icon: Youtube, label: "Youtube Video Gallery", color: "bg-red-500/20 text-red-400" },
  { icon: CreditCard, label: "Payment Section", color: "bg-indigo-500/20 text-indigo-400" },
  { icon: FileText, label: "Enquiry Form", color: "bg-teal-500/20 text-teal-400" },
];

const pricingFeatures = [
  "Share cards with anyone, Unlimited times",
  "Update card Unlimited times",
  "Profile Photo",
  "20 Photos in Gallery",
  "Select design from available templates",
  "5 Videos in Youtube Video Gallery",
  "Products with description and an image",
  "Payment Section",
  "Contact Form Included",
  "Rating and Review",
  "2 PDF Uploads",
  "No of Visitor Count",
];

const HomeScreen = ({ onNavigate }: HomeScreenProps) => {
  const handleCreateCard = () => {
    window.open("https://wa.link/9czb58", "_blank");
  };

  const handleCustomerLogin = () => {
    window.open("https://sydnytech.in/panel/login", "_blank");
  };

  const handleFranchiseLogin = () => {
    window.open("https://sydnytech.in/panel/franchisee-login", "_blank");
  };

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border/50 px-4 py-3">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          <div className="flex items-center gap-2">
            <img src={logoImage} alt="SYDNYTECH" className="w-10 h-10 object-contain" />
            <span className="font-display font-bold text-lg">
              <span className="text-foreground">SYDNY</span>
              <span className="text-primary">TECH</span>
            </span>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" onClick={handleCustomerLogin}>
              Login
            </Button>
            <Button variant="outline" size="sm" onClick={handleFranchiseLogin}>
              Franchise
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-4 pt-8 pb-12 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-lg mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary">Digital Business Cards</span>
          </div>
          
          <h1 className="font-display text-4xl font-bold leading-tight mb-4">
            Inspire your client.{" "}
            <span className="gradient-text">Digitally</span>
          </h1>
          
          <p className="text-muted-foreground mb-8 text-balance">
            sydnytech.in helps you to get a Digital Business Card that is smart, elegant & affordable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="hero" size="lg" onClick={handleCreateCard}>
              Create Your Card
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="glass" size="lg" onClick={() => onNavigate("templates")}>
              View Samples
            </Button>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="px-4 py-10">
        <div className="max-w-lg mx-auto">
          <h2 className="font-display text-2xl font-bold text-center mb-8">
            How it <span className="text-primary">works</span>
          </h2>
          
          <div className="space-y-4">
            {[
              { step: 1, title: "Create your Card", desc: "Design your digital visiting card in 2 minutes" },
              { step: 2, title: "Save to your Device", desc: "Digital Visiting Card is accessible anytime from anywhere" },
              { step: 3, title: "Share with friends", desc: "Through a variety of channels" },
            ].map((item) => (
              <div key={item.step} className="glass-card p-4 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                  <span className="font-display font-bold text-primary">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 py-10 bg-card/30">
        <div className="max-w-lg mx-auto">
          <h2 className="font-display text-2xl font-bold text-center mb-2">
            One card, <span className="text-primary">endless possibilities</span>
          </h2>
          <p className="text-muted-foreground text-center mb-8 text-sm">
            Everything you need in one digital business card
          </p>
          
          <div className="grid grid-cols-3 gap-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={feature.label} 
                  className="glass-card p-3 flex flex-col items-center text-center gap-2 hover:border-primary/30 transition-colors"
                >
                  <div className={`w-10 h-10 rounded-xl ${feature.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-medium text-muted-foreground leading-tight">
                    {feature.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 py-10">
        <div className="max-w-lg mx-auto">
          <h2 className="font-display text-2xl font-bold text-center mb-2">
            Affordable <span className="text-primary">pricing</span>
          </h2>
          <p className="text-muted-foreground text-center mb-8 text-sm">
            Everything included, no hidden fees
          </p>
          
          <div className="glass-card p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-bl-xl">
              POPULAR
            </div>
            
            <div className="text-center mb-6">
              <h3 className="font-display text-xl font-bold mb-2">sydnytech.in</h3>
              <p className="text-muted-foreground text-sm">Complete Digital Business Card</p>
            </div>
            
            <div className="space-y-3 mb-6">
              {pricingFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="glass-card p-4 bg-primary/5 border-primary/20 text-center mb-4">
              <p className="text-sm font-medium mb-1">Franchise Option Available</p>
              <p className="text-xs text-muted-foreground">Call us now to connect</p>
            </div>
            
            <div className="flex gap-3">
              <Button variant="hero" className="flex-1" onClick={() => window.open("tel:+919325739428")}>
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
              <Button variant="glass" className="flex-1" onClick={handleCreateCard}>
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 py-10 bg-card/30">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="font-display text-2xl font-bold mb-4">
            Freedom from <span className="text-primary">Boring Cards</span>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Design your digital visiting card in 2 minutes - it's easy, elegant and affordable. 
            sydnytech.in is always in your pocket, never tears and never runs out. Your Digital 
            Visiting Card can be easily updated with our user-friendly dashboard, so you won't 
            need to re-print a business card again.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
