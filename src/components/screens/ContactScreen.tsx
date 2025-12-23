import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const ContactScreen = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Open WhatsApp with the message
    const whatsappMessage = `Name: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919325739428?text=${whatsappMessage}`, "_blank");
    
    toast.success("Message sent successfully!");
    setFormData({ name: "", phone: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border/50 px-4 py-4">
        <div className="max-w-lg mx-auto">
          <h1 className="font-display text-2xl font-bold">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-sm text-muted-foreground">We'd love to hear from you</p>
        </div>
      </header>

      {/* Contact Info Cards */}
      <section className="px-4 py-6">
        <div className="max-w-lg mx-auto space-y-3">
          <a 
            href="tel:+919325739428"
            className="glass-card p-4 flex items-center gap-4 hover:border-primary/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Phone</p>
              <p className="font-semibold">+91-9325739428</p>
            </div>
          </a>

          <a 
            href="mailto:sydnytech@gmail.com"
            className="glass-card p-4 flex items-center gap-4 hover:border-primary/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="font-semibold">sydnytech@gmail.com</p>
            </div>
          </a>

          <a 
            href="https://maps.google.com/?q=Keshav+nagar+manjari+road+pune+411036"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-4 flex items-center gap-4 hover:border-primary/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Address</p>
              <p className="font-semibold text-sm">B2, Keshav nagar, Manjari road, Pune 411036</p>
            </div>
          </a>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="px-4 py-4">
        <div className="max-w-lg mx-auto">
          <div className="flex gap-3">
            <Button 
              variant="hero" 
              className="flex-1"
              onClick={() => window.open("tel:+919325739428")}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
            <Button 
              variant="accent" 
              className="flex-1"
              onClick={() => window.open("https://wa.me/919325739428", "_blank")}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-4 py-6">
        <div className="max-w-lg mx-auto">
          <div className="glass-card p-6">
            <h2 className="font-display font-bold text-lg mb-6">Send us a message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-muted/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <div>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Enter Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-muted/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-muted/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Enter Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-muted/50 border-border/50 focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                variant="hero" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactScreen;
