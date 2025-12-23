import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  Globe, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  Share2,
  Download,
  ExternalLink,
  Building2,
  Calendar,
  Briefcase,
  Star
} from "lucide-react";
import { toast } from "sonner";

const socialLinks = [
  { 
    icon: Facebook, 
    label: "Facebook", 
    desc: "Follow us for updates",
    url: "https://www.facebook.com/profile.php?id=61553951990614",
    color: "bg-blue-600/20 text-blue-400"
  },
  { 
    icon: Instagram, 
    label: "Instagram", 
    desc: "Follow our journey",
    url: "https://www.instagram.com/sydnytech/",
    color: "bg-pink-600/20 text-pink-400"
  },
  { 
    icon: Linkedin, 
    label: "LinkedIn", 
    desc: "Connect on LinkedIn",
    url: "https://www.linkedin.com/in/sydnytech-solutions-02746b28a",
    color: "bg-blue-500/20 text-blue-400"
  },
  { 
    icon: Youtube, 
    label: "Youtube", 
    desc: "Watch our latest videos",
    url: "https://www.youtube.com/@sydnytech",
    color: "bg-red-600/20 text-red-400"
  },
];

const specialities = [
  "Complete client satisfaction",
  "Ethical business policies",
  "Live In Touch With Our Customers",
  "Transparent dealings",
  "Wide connectivity",
  "We listen, We understand, We provide Solution",
  "A great experience with Happy clients",
];

const ProfileScreen = () => {
  const handleShare = async () => {
    const shareData = {
      title: "SYDNYTECH - Digital Business Cards",
      text: "Check out SYDNYTECH for amazing digital business card solutions!",
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

  const handleSaveContact = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:SYDNYTECH
ORG:SYDNYTECH
TEL:+919325739428
TEL:+918421821806
EMAIL:Sydnytech@gmail.com
URL:https://sydnytech.in
ADR:;;Keshav nagar;Pune;Maharashtra;411036;India
END:VCARD`;

    const blob = new Blob([vCard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "SYDNYTECH.vcf";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Contact saved!");
  };

  return (
    <div className="min-h-screen pb-24">
      {/* Hero Header */}
      <div className="relative">
        <div className="h-32 bg-gradient-to-br from-primary via-primary/80 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        <div className="relative px-4 -mt-16">
          <div className="max-w-lg mx-auto">
            <div className="glass-card p-5">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
                  <span className="text-2xl font-display font-bold text-primary-foreground">SY</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h1 className="font-display text-xl font-bold">SYDNYTECH</h1>
                  <p className="text-sm text-muted-foreground">Digital Marketing Solutions</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center gap-1 text-xs text-primary">
                      <Star className="w-3 h-3 fill-primary" />
                      <span>4.9</span>
                    </div>
                    <span className="text-muted-foreground text-xs">•</span>
                    <span className="text-xs text-muted-foreground">Est. 2023</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 mt-4">
                <Button variant="hero" className="flex-1" onClick={handleSaveContact}>
                  <Download className="w-4 h-4" />
                  Save Card
                </Button>
                <Button variant="glass" className="flex-1" onClick={handleShare}>
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <section className="px-4 py-6">
        <div className="max-w-lg mx-auto">
          <h2 className="font-display font-bold text-lg mb-4">Our Team</h2>
          <div className="space-y-3">
            {[
              { name: "Mr. Siddhesh Gawarshettiwar", role: "Director" },
              { name: "Mrs. Ashlesha Pimpalwar", role: "Co-founder" },
            ].map((member) => (
              <div key={member.name} className="glass-card p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-display font-bold text-primary">
                    {member.name.split(' ')[1]?.[0] || member.name[0]}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sm">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="px-4 py-4">
        <div className="max-w-lg mx-auto">
          <h2 className="font-display font-bold text-lg mb-4">Contact Info</h2>
          <div className="space-y-2">
            {[
              { icon: Phone, label: "+91-9325739428", action: "tel:+919325739428" },
              { icon: Phone, label: "+91-8421821806", action: "tel:+918421821806" },
              { icon: Mail, label: "Sydnytech@gmail.com", action: "mailto:Sydnytech@gmail.com" },
              { icon: Globe, label: "Sydnytech.com", action: "https://sydnytech.in" },
              { icon: MapPin, label: "Keshav nagar, Pune, Maharashtra 411036", action: "https://maps.google.com/?q=Keshav+nagar+pune+411036" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a 
                  key={item.label}
                  href={item.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 flex items-center gap-3 hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm flex-1 truncate">{item.label}</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="px-4 py-6">
        <div className="max-w-lg mx-auto">
          <h2 className="font-display font-bold text-lg mb-4">Connect With Us</h2>
          <div className="grid grid-cols-2 gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 hover:border-primary/30 transition-colors"
                >
                  <div className={`w-10 h-10 rounded-xl ${link.color} flex items-center justify-center mb-3`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="font-semibold text-sm">{link.label}</p>
                  <p className="text-[10px] text-muted-foreground">{link.desc}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="px-4 py-6 bg-card/30">
        <div className="max-w-lg mx-auto">
          <h2 className="font-display font-bold text-lg mb-4">About Us</h2>
          <div className="glass-card p-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-[10px] text-muted-foreground">Company</p>
                  <p className="text-sm font-medium">SYDNYTECH</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-[10px] text-muted-foreground">Established</p>
                  <p className="text-sm font-medium">2023</p>
                </div>
              </div>
              <div className="flex items-center gap-2 col-span-2">
                <Briefcase className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-[10px] text-muted-foreground">Business</p>
                  <p className="text-sm font-medium">Digital Marketing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialities */}
      <section className="px-4 py-6">
        <div className="max-w-lg mx-auto">
          <h2 className="font-display font-bold text-lg mb-4">Our Specialities</h2>
          <div className="space-y-2">
            {specialities.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 glass-card">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Star className="w-3 h-3 text-primary" />
                </div>
                <p className="text-sm text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Description */}
      <section className="px-4 py-6 bg-card/30">
        <div className="max-w-lg mx-auto">
          <h2 className="font-display font-bold text-lg mb-4">All In One Panel Features</h2>
          <div className="glass-card p-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              You can buy Single Service. Also We are providing All In One Panel. In Our Panel, 
              we will provide you user ID and You can Edit Card as per your choice by using our 
              templates and you can also change colors. You will get Customized Social Media 
              Banners & Graphics For your Business. Also we have added many customized Festival 
              Images. All you can use to make your Business a Big Brand.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileScreen;
