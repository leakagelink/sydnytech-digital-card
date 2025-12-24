import { ArrowLeft, HelpCircle, ChevronDown, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      category: "General",
      question: "What is SYDNYTECH Digital Business Card?",
      answer: "SYDNYTECH Digital Business Card is a modern solution that allows you to create, share, and manage your professional identity digitally. Unlike traditional paper cards, our digital cards can be updated anytime, shared instantly via QR code or link, and never run out."
    },
    {
      category: "General",
      question: "How do I create my digital business card?",
      answer: "Creating your digital business card is easy! Simply contact us via WhatsApp or our website, provide your details (name, designation, contact info, social links), choose a template, and we'll create your personalized card within 24-48 hours."
    },
    {
      category: "General",
      question: "What information can I include on my card?",
      answer: "You can include your name, photo, designation, company name, phone numbers, email, website, social media links (WhatsApp, Instagram, Facebook, LinkedIn, YouTube, etc.), address, and even a Google Maps location. We also support custom fields based on your needs."
    },
    {
      category: "Pricing",
      question: "How much does a digital business card cost?",
      answer: "Our pricing varies based on the template and features you choose. We offer affordable plans starting from basic to premium templates with advanced features. Contact us on WhatsApp for the latest pricing and any ongoing offers."
    },
    {
      category: "Pricing",
      question: "Are there any recurring fees?",
      answer: "We offer both one-time purchase and subscription-based plans. One-time purchase cards are valid for a lifetime, while subscription plans include additional features like analytics, multiple cards, and priority support. Choose what works best for you."
    },
    {
      category: "Pricing",
      question: "Do you offer refunds?",
      answer: "Yes, we have a refund policy for digital services. If you're not satisfied within 7 days of purchase and haven't customized your card extensively, you may be eligible for a refund. Please refer to our Refund Policy page for complete details."
    },
    {
      category: "Technical",
      question: "How do I share my digital business card?",
      answer: "You can share your card in multiple ways: 1) Scan the QR code on your card, 2) Share the unique URL link via any messaging app, 3) Use the built-in share button, or 4) Save it to your phone's wallet. Recipients don't need any app to view your card."
    },
    {
      category: "Technical",
      question: "Can I update my card information after it's created?",
      answer: "Absolutely! One of the biggest advantages of digital business cards is that you can update your information anytime. Simply contact our support team with the changes, and we'll update your card. Premium plans allow self-editing through a dashboard."
    },
    {
      category: "Technical",
      question: "Do recipients need to install an app to view my card?",
      answer: "No, recipients don't need any app. Your digital business card opens in any web browser on any device (smartphone, tablet, or computer). They can easily save your contact to their phone with just one tap."
    },
    {
      category: "Technical",
      question: "Is my data secure?",
      answer: "Yes, we take data security seriously. Your information is stored securely and is only visible on your public card page. We don't sell or share your data with third parties. Please read our Privacy Policy for more details."
    },
    {
      category: "Franchise",
      question: "How can I become a SYDNYTECH franchise partner?",
      answer: "We welcome franchise partners across India. As a franchise, you can offer our digital business card services in your area. Contact us on WhatsApp or visit our website to learn about franchise opportunities, investment requirements, and support we provide."
    },
    {
      category: "Franchise",
      question: "What support do franchise partners receive?",
      answer: "Franchise partners receive complete training, marketing materials, dedicated dashboard access, priority support, competitive pricing, and ongoing business guidance. We ensure our partners have everything they need to succeed."
    },
    {
      category: "Support",
      question: "How can I contact customer support?",
      answer: "You can reach our support team via: WhatsApp (+91 93257 39428), Email (support@sydnytech.in), or through our website contact form. We typically respond within a few hours during business hours."
    },
    {
      category: "Support",
      question: "What are your business hours?",
      answer: "Our office hours are Monday to Saturday, 10:00 AM to 7:00 PM (IST). However, WhatsApp support is available 24/7 for urgent queries. We're closed on Sundays and national holidays."
    }
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
            <h1 className="font-display text-xl font-bold">FAQ & Help</h1>
            <p className="text-xs text-muted-foreground">Frequently Asked Questions</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 py-6">
        <div className="max-w-lg mx-auto space-y-6">
          
          {/* Intro */}
          <div className="glass-card p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">
              Find answers to common questions about our digital business card services.
            </p>
          </div>

          {/* FAQ Sections */}
          {categories.map((category) => (
            <section key={category}>
              <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-1">
                {category}
              </h2>
              <div className="space-y-2">
                {faqs
                  .map((faq, index) => ({ ...faq, originalIndex: index }))
                  .filter(faq => faq.category === category)
                  .map((faq) => (
                    <div 
                      key={faq.originalIndex}
                      className="glass-card overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(faq.originalIndex)}
                        className="w-full p-4 flex items-center justify-between text-left"
                      >
                        <span className="font-medium text-sm text-foreground pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown 
                          className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                            openIndex === faq.originalIndex ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      {openIndex === faq.originalIndex && (
                        <div className="px-4 pb-4">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </section>
          ))}

          {/* Still Have Questions */}
          <section className="glass-card p-5 text-center">
            <h3 className="font-semibold text-foreground mb-2">Still have questions?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Can't find what you're looking for? Contact our support team.
            </p>
            <Button 
              variant="hero" 
              className="w-full"
              onClick={() => window.open("https://wa.link/9czb58", "_blank")}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat with Support
            </Button>
          </section>

        </div>
      </div>
    </div>
  );
};

export default FAQ;
