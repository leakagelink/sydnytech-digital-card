import { ArrowLeft, Trash2, Mail, Phone, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const DataDeletion = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast({
        title: "Email Required",
        description: "Please enter your registered email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Open WhatsApp with data deletion request
    const message = encodeURIComponent(
      `Data Deletion Request\n\nEmail: ${email.trim()}\nReason: ${reason.trim() || 'Not specified'}\n\nI request the complete deletion of my personal data from SYDNYTECH services.`
    );
    window.open(`https://wa.me/919325739428?text=${message}`, "_blank");
    
    toast({
      title: "Request Initiated",
      description: "Please complete your request via WhatsApp. We will process it within 30 days.",
    });
    
    setIsSubmitting(false);
    setEmail("");
    setReason("");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border/50 px-4 py-4">
        <div className="max-w-lg mx-auto flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="font-display text-xl font-bold">Data Deletion</h1>
            <p className="text-xs text-muted-foreground">Request your data removal</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 py-6">
        <div className="max-w-lg mx-auto space-y-6">
          
          {/* Info Card */}
          <div className="glass-card p-4 border-l-4 border-l-primary">
            <div className="flex gap-3">
              <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold text-foreground mb-1">Important Information</p>
                <p>
                  As per Google Play Store policies and data protection regulations, you have the right to request deletion of your personal data. Once deleted, this action cannot be undone.
                </p>
              </div>
            </div>
          </div>

          {/* What Gets Deleted */}
          <section className="glass-card p-5">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <Trash2 className="w-5 h-5 text-destructive" />
              What Data Will Be Deleted
            </h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>Your profile information (name, email, phone number)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>Digital business card data and templates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>Usage history and preferences</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>Any uploaded images or files</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>Payment history (if applicable)</span>
              </li>
            </ul>
          </section>

          {/* Request Form */}
          <section className="glass-card p-5">
            <h2 className="text-lg font-semibold text-foreground mb-4">Submit Deletion Request</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Registered Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm"
                  required
                  maxLength={255}
                />
              </div>
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-foreground mb-2">
                  Reason for Deletion (Optional)
                </label>
                <textarea
                  id="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Please let us know why you're requesting data deletion..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm resize-none"
                  maxLength={500}
                />
              </div>
              <Button 
                type="submit" 
                variant="destructive" 
                className="w-full"
                disabled={isSubmitting}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                {isSubmitting ? "Processing..." : "Submit Deletion Request"}
              </Button>
            </form>
          </section>

          {/* Processing Time */}
          <section className="text-sm text-muted-foreground space-y-3">
            <h3 className="font-semibold text-foreground">Processing Time</h3>
            <p>
              Your data deletion request will be processed within <strong>30 days</strong> of submission. 
              You will receive a confirmation email once the deletion is complete.
            </p>
          </section>

          {/* Alternative Contact */}
          <section className="glass-card p-5">
            <h3 className="font-semibold text-foreground mb-3">Alternative Contact Methods</h3>
            <div className="space-y-3 text-sm">
              <a 
                href="mailto:support@sydnytech.in?subject=Data Deletion Request" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                support@sydnytech.in
              </a>
              <a 
                href="tel:+919325739428" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 93257 39428
              </a>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default DataDeletion;
