import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiWhatsapp, SiInstagram, SiX, SiFacebook } from "react-icons/si";

export default function ContactPage() {
  return (
    <div className="min-h-screen pb-12">
      <div className="bg-primary/5 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="font-display font-bold text-2xl mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-muted-foreground">info@eventhub.ng</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <p className="text-muted-foreground">+234 800 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Office</p>
                    <p className="text-muted-foreground">
                      123 Victoria Island, Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl mb-6">
                Connect With Us
              </h2>
              <div className="flex gap-3">
                <Button
                  size="icon"
                  variant="outline"
                  className="w-12 h-12"
                  data-testid="button-whatsapp-contact"
                >
                  <SiWhatsapp className="w-6 h-6" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="w-12 h-12"
                  data-testid="button-instagram-contact"
                >
                  <SiInstagram className="w-6 h-6" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="w-12 h-12"
                  data-testid="button-twitter-contact"
                >
                  <SiX className="w-6 h-6" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="w-12 h-12"
                  data-testid="button-facebook-contact"
                >
                  <SiFacebook className="w-6 h-6" />
                </Button>
              </div>
              <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                <p className="font-semibold mb-2">WhatsApp Business</p>
                <p className="text-sm text-muted-foreground mb-3">
                  Chat with us directly for quick assistance
                </p>
                <Button className="gap-2" data-testid="button-whatsapp-chat">
                  <SiWhatsapp className="w-4 h-4" />
                  Start Chat
                </Button>
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl mb-4">
                Business Hours
              </h2>
              <div className="space-y-2 text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display font-bold text-2xl mb-6">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
