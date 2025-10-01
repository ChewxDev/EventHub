import { Link } from "wouter";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const cities = ["Lagos", "Abuja", "Port Harcourt", "Ibadan", "Enugu", "Kano"];
  
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-card border-t mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">E</span>
              </div>
              <span className="font-display font-bold text-xl">EventHub</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Connecting Nigeria through unforgettable events.
            </p>
            <div className="flex gap-2 mt-4">
              <Button size="icon" variant="ghost" data-testid="button-facebook">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="button-instagram">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="button-twitter">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="button-whatsapp">
                <SiWhatsapp className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Cities</h4>
            <ul className="space-y-2">
              {cities.map((city) => (
                <li key={city}>
                  <button className="text-muted-foreground hover:text-foreground text-sm">
                    {city}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Trust & Security</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>🔒 SSL Secured</p>
              <p>✓ Verified Events</p>
              <p>📧 Email Confirmation</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 EventHub Nigeria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
