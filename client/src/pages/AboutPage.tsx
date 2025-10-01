import { MapPin, Users, Calendar, Shield } from "lucide-react";

export default function AboutPage() {
  const cities = [
    { name: "Lagos", events: 24 },
    { name: "Abuja", events: 18 },
    { name: "Port Harcourt", events: 12 },
    { name: "Ibadan", events: 8 },
    { name: "Enugu", events: 10 },
    { name: "Kano", events: 6 },
  ];

  const stats = [
    { icon: Calendar, label: "Events Hosted", value: "500+" },
    { icon: Users, label: "Happy Attendees", value: "50,000+" },
    { icon: MapPin, label: "Cities Covered", value: "6" },
    { icon: Shield, label: "Trusted Partners", value: "100+" },
  ];

  return (
    <div className="min-h-screen pb-12">
      <div className="bg-primary/5 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
            About EventHub Nigeria
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We bring Nigerians together through top-class events
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <p className="font-display font-bold text-3xl mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="font-display font-bold text-3xl mb-6 text-center">
            Our Mission
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              EventHub Nigeria is dedicated to connecting Nigerians through
              unforgettable event experiences. We believe in the power of bringing
              people together, whether it's for music, culture, technology, or
              celebration.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our platform makes it easy to discover and attend amazing events
              across Nigeria's major cities. From Lagos to Kano, we're building a
              community of event lovers and creating memories that last a lifetime.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="font-display font-bold text-3xl mb-6 text-center">
            Cities We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {cities.map((city) => (
              <div
                key={city.name}
                className="bg-card border border-card-border rounded-lg p-4 text-center"
              >
                <MapPin className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="font-semibold">{city.name}</p>
                <p className="text-sm text-muted-foreground">
                  {city.events} events
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display font-bold text-3xl mb-6 text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-card border border-card-border rounded-lg p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">
                Trusted & Secure
              </h3>
              <p className="text-muted-foreground">
                SSL secured platform with verified events and reliable payment
                confirmation system.
              </p>
            </div>

            <div className="bg-card border border-card-border rounded-lg p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">
                Easy Booking
              </h3>
              <p className="text-muted-foreground">
                Simple bank transfer process with instant confirmation via email.
              </p>
            </div>

            <div className="bg-card border border-card-border rounded-lg p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">
                Quality Events
              </h3>
              <p className="text-muted-foreground">
                Carefully curated events from the best organizers across Nigeria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
