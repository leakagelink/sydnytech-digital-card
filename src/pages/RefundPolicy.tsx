import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const RefundPolicy = () => {
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
            <h1 className="font-display text-xl font-bold">Refund Policy</h1>
            <p className="text-xs text-muted-foreground">Last updated: December 2024</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 py-6">
        <div className="max-w-lg mx-auto space-y-6 text-sm text-muted-foreground">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Refund Policy Overview</h2>
            <p>
              At SYDNYTECH, we strive to ensure complete customer satisfaction. This Refund Policy outlines the terms and conditions for refunds on our digital business card services and products.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Digital Services</h2>
            <p className="mb-2">For digital business card services:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Refund requests must be made within 7 days of purchase</li>
              <li>Refunds are applicable only if the service has not been activated or used</li>
              <li>Once a digital card is created and activated, refunds are not applicable</li>
              <li>Subscription renewals can be cancelled anytime to avoid future charges</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Physical Products (NFC Cards)</h2>
            <p className="mb-2">For physical NFC cards and products:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Return requests must be made within 7 days of delivery</li>
              <li>Products must be unused and in original packaging</li>
              <li>Custom-designed cards are non-refundable once production begins</li>
              <li>Damaged or defective products will be replaced free of charge</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Non-Refundable Items</h2>
            <p className="mb-2">The following are not eligible for refunds:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Customized or personalized products after production</li>
              <li>Services that have been fully rendered</li>
              <li>Digital cards that have been activated and shared</li>
              <li>Promotional or discounted purchases (unless defective)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">How to Request a Refund</h2>
            <p className="mb-2">To request a refund:</p>
            <ol className="list-decimal list-inside space-y-1 ml-2">
              <li>Contact our support team via WhatsApp or email</li>
              <li>Provide your order ID and reason for refund</li>
              <li>Include any relevant photos or documentation</li>
              <li>Our team will review your request within 48 hours</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Refund Processing</h2>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Approved refunds will be processed within 7-10 business days</li>
              <li>Refunds will be credited to the original payment method</li>
              <li>Bank processing time may add additional 3-5 business days</li>
              <li>A confirmation email will be sent once the refund is processed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Cancellation Policy</h2>
            <p>
              You may cancel your subscription at any time through your account settings. Cancellation will take effect at the end of your current billing period. No partial refunds are provided for unused portions of subscription periods.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Contact Us</h2>
            <p>
              For refund-related queries, please contact us:
            </p>
            <div className="mt-2 p-3 bg-muted rounded-lg">
              <p><strong>SYDNYTECH Support</strong></p>
              <p>Email: support@sydnytech.in</p>
              <p>Phone: +91 93257 39428</p>
              <p>WhatsApp: +91 93257 39428</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
