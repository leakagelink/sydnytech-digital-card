import { ArrowLeft, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Disclaimer = () => {
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
            <h1 className="font-display text-xl font-bold">Disclaimer</h1>
            <p className="text-xs text-muted-foreground">Last updated: December 2024</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 py-6">
        <div className="max-w-lg mx-auto space-y-6 text-sm text-muted-foreground">
          
          {/* Notice */}
          <div className="glass-card p-4 border-l-4 border-l-primary">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-foreground">
                Please read this disclaimer carefully before using our services.
              </p>
            </div>
          </div>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">General Information</h2>
            <p>
              The information provided by SYDNYTECH ("we," "us," or "our") on our mobile application and website is for general informational purposes only. All information is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">No Professional Advice</h2>
            <p>
              The app content does not constitute professional advice (legal, financial, medical, or otherwise). Before making any decisions or taking any actions that may affect your business or personal matters, you should consult a qualified professional advisor.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">External Links</h2>
            <p>
              Our application may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Service Availability</h2>
            <p>
              We strive to provide uninterrupted service, but we do not guarantee that our app will be available at all times. We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">User-Generated Content</h2>
            <p>
              Users are solely responsible for the content they create, including digital business cards and any associated information. SYDNYTECH does not review, endorse, or verify user-generated content and assumes no liability for the accuracy or legality of such content.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Limitation of Liability</h2>
            <p>
              Under no circumstances shall SYDNYTECH, its directors, employees, or partners be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
              <li>Your access to or use of or inability to access or use the service</li>
              <li>Any conduct or content of any third party on the service</li>
              <li>Any content obtained from the service</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Errors and Omissions</h2>
            <p>
              While we strive to ensure that the information in this app is correct, there may be errors or omissions. We do not warrant that the app or its contents will be uninterrupted or error-free. We may make changes to the features, functionality, or content of the app at any time.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Fair Use</h2>
            <p>
              This app may contain copyrighted material, the use of which may not have been specifically authorized by the copyright owner. We believe this constitutes a "fair use" of any such copyrighted material as provided for in the Copyright Act. If you wish to use copyrighted material from this app for purposes that go beyond fair use, you must obtain permission from the copyright owner.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Views Expressed</h2>
            <p>
              Any views or opinions represented in this app belong solely to the content creators and do not represent those of people, institutions, or organizations that SYDNYTECH may or may not be associated with in a professional or personal capacity unless explicitly stated.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Consent</h2>
            <p>
              By using our app, you hereby consent to our disclaimer and agree to its terms. If you do not agree with this disclaimer, please discontinue using our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Contact Us</h2>
            <p>
              If you require any more information or have any questions about our disclaimer, please contact us:
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

export default Disclaimer;
