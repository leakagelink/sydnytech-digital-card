import { ArrowLeft, Globe, Phone, Mail, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/sydnytech-logo.png";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border/50 px-4 py-4">
        <div className="max-w-lg mx-auto flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="font-display text-xl font-bold">About Us</h1>
            <p className="text-xs text-muted-foreground">Know more about SYDNYTECH</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 py-6">
        <div className="max-w-lg mx-auto space-y-6">
          {/* Logo Section */}
          <section className="text-center py-6">
            <img src={logoImage} alt="SYDNYTECH" className="w-24 h-24 object-contain mx-auto mb-4" />
            <h2 className="font-display text-2xl font-bold">SYDNYTECH</h2>
            <p className="text-primary font-medium">Growth Beyond Infinity</p>
          </section>

          {/* About Section */}
          <section className="glass-card p-5">
            <h3 className="text-lg font-semibold text-foreground mb-3">Who We Are</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              SYDNYTECH is a leading digital solutions company specializing in creating innovative digital business cards and NFC-enabled products. We help businesses and professionals make lasting impressions with modern, eco-friendly networking solutions.
            </p>
          </section>

          {/* Mission Section */}
          <section className="glass-card p-5">
            <h3 className="text-lg font-semibold text-foreground mb-3">Our Mission</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To revolutionize professional networking by providing smart, sustainable, and stylish digital business cards that help individuals and businesses grow beyond traditional boundaries.
            </p>
          </section>

          {/* What We Offer */}
          <section className="glass-card p-5">
            <h3 className="text-lg font-semibold text-foreground mb-3">What We Offer</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Premium Digital Business Cards with QR codes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>NFC-enabled Smart Cards for instant contact sharing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Custom card designs tailored to your brand</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Analytics dashboard to track card views and engagement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Franchise opportunities across India</span>
              </li>
            </ul>
          </section>

          {/* Contact Section */}
          <section className="glass-card p-5">
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
            <div className="space-y-3 text-sm">
              <a href="tel:+919325739428" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91 93257 39428</span>
              </a>
              <a href="mailto:support@sydnytech.in" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>support@sydnytech.in</span>
              </a>
              <a href="https://sydnytech.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Globe className="w-4 h-4" />
                <span>www.sydnytech.in</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>India</span>
              </div>
            </div>
          </section>

          {/* App Version */}
          <section className="text-center py-4">
            <p className="text-xs text-muted-foreground">App Version 1.0.0</p>
            <p className="text-xs text-muted-foreground">© 2024 SYDNYTECH. All rights reserved.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
