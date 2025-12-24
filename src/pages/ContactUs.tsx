import { ArrowLeft, Mail, Phone, MapPin, Globe, MessageCircle, Clock, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const ContactUs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Required Fields",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Open WhatsApp with the message
    const message = encodeURIComponent(
      `Contact Form Submission\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\nSubject: ${formData.subject.trim() || 'General Inquiry'}\n\nMessage:\n${formData.message.trim()}`
    );
    window.open(`https://wa.me/919325739428?text=${message}`, "_blank");
    
    toast({
      title: "Message Initiated",
      description: "Please complete your message via WhatsApp.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 93257 39428",
      href: "tel:+919325739428",
      color: "bg-green-500/20 text-green-400"
    },
    {
      icon: Mail,
      label: "Email",
      value: "support@sydnytech.in",
      href: "mailto:support@sydnytech.in",
      color: "bg-blue-500/20 text-blue-400"
    },
    {
      icon: Globe,
      label: "Website",
      value: "sydnytech.in",
      href: "https://sydnytech.in",
      color: "bg-purple-500/20 text-purple-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gujarat, India",
      href: "#",
      color: "bg-red-500/20 text-red-400"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border/50 px-4 py-4">
        <div className="max-w-lg mx-auto flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="font-display text-xl font-bold">Contact Us</h1>
            <p className="text-xs text-muted-foreground">We'd love to hear from you</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 py-6">
        <div className="max-w-lg mx-auto space-y-6">
          
          {/* Quick Contact */}
          <section>
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Quick Contact
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="glass-card p-4 hover:border-primary/30 transition-colors block"
                  >
                    <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center mb-2`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-medium text-foreground truncate">{item.value}</p>
                  </a>
                );
              })}
            </div>
          </section>

          {/* WhatsApp Button */}
          <section className="glass-card p-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">Chat with us on WhatsApp</h3>
                <p className="text-sm text-muted-foreground">Get instant support</p>
              </div>
            </div>
            <Button 
              variant="default" 
              className="w-full mt-4 bg-green-600 hover:bg-green-700"
              onClick={() => window.open("https://wa.link/9czb58", "_blank")}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Start WhatsApp Chat
            </Button>
          </section>

          {/* Business Hours */}
          <section className="glass-card p-5">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Business Hours</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monday - Saturday</span>
                <span className="text-foreground font-medium">10:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sunday</span>
                <span className="text-foreground font-medium">Closed</span>
              </div>
              <p className="text-xs text-muted-foreground pt-2">
                * WhatsApp support available 24/7
              </p>
            </div>
          </section>

          {/* Contact Form */}
          <section className="glass-card p-5">
            <h2 className="text-lg font-semibold text-foreground mb-4">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm"
                  required
                  maxLength={100}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm"
                  required
                  maxLength={255}
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm"
                  maxLength={200}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us more about your inquiry..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm resize-none"
                  required
                  maxLength={1000}
                />
              </div>
              <Button type="submit" variant="hero" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </section>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
