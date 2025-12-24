import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TermsOfService = () => {
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
            <h1 className="font-display text-xl font-bold">Terms of Service</h1>
            <p className="text-xs text-muted-foreground">Last updated: December 2024</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 py-6">
        <div className="max-w-lg mx-auto space-y-6 text-sm text-muted-foreground">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Acceptance of Terms</h2>
            <p>
              By accessing or using the SYDNYTECH mobile application, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our app.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Description of Service</h2>
            <p>
              SYDNYTECH provides digital business card creation and management services. Our app allows users to create, customize, and share professional digital business cards.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">User Responsibilities</h2>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Provide accurate and truthful information</li>
              <li>Maintain the confidentiality of your account</li>
              <li>Use the service only for lawful purposes</li>
              <li>Not upload harmful, offensive, or illegal content</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Intellectual Property</h2>
            <p>
              All content, features, and functionality of our app, including but not limited to text, graphics, logos, and software, are the property of SYDNYTECH and are protected by copyright and trademark laws.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">User Content</h2>
            <p>
              You retain ownership of the content you create using our app. By using our service, you grant us a non-exclusive license to use, display, and distribute your content solely for the purpose of providing our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Payment Terms</h2>
            <p>
              Certain features may require payment. All payments are processed securely through authorized payment gateways. Prices are subject to change with prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Limitation of Liability</h2>
            <p>
              SYDNYTECH shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the app. Our total liability shall not exceed the amount paid by you for our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to our app at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users or our business.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the app constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Contact Us</h2>
            <p>
              For questions about these Terms, please contact us at:
            </p>
            <div className="mt-2 p-3 bg-muted rounded-lg">
              <p><strong>SYDNYTECH</strong></p>
              <p>Email: support@sydnytech.in</p>
              <p>Phone: +91 93257 39428</p>
              <p>Website: https://sydnytech.in</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
