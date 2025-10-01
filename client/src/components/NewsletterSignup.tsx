import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <div className="bg-primary/5 rounded-2xl p-8">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <Mail className="w-12 h-12 mx-auto text-primary" />
        <h3 className="font-display font-bold text-2xl">
          Stay Updated on Events
        </h3>
        <p className="text-muted-foreground">
          Get updates on upcoming events in your city. No spam, just great events!
        </p>
        
        {subscribed ? (
          <div className="text-primary font-semibold">
            ✓ Successfully subscribed! Check your email.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              data-testid="input-newsletter-email"
            />
            <Button type="submit" data-testid="button-newsletter-subscribe">
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
