import { useState } from "react";
import PaymentModal from "../PaymentModal";
import { Button } from "@/components/ui/button";

export default function PaymentModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-6">
      <Button onClick={() => setIsOpen(true)}>Open Payment Modal</Button>
      <PaymentModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        eventTitle="Afrobeats Live Concert 2024"
        ticketPrice="₦15,000"
      />
    </div>
  );
}
