import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, CheckCircle } from "lucide-react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle: string;
  ticketPrice: string;
}

export default function PaymentModal({
  isOpen,
  onClose,
  eventTitle,
  ticketPrice,
}: PaymentModalProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Payment proof submitted:", { name, email, file: selectedFile?.name });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md" data-testid="modal-payment">
        <DialogHeader>
          <DialogTitle className="font-display">Reserve Your Ticket</DialogTitle>
          <DialogDescription>{eventTitle}</DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <CheckCircle className="w-16 h-16 mx-auto text-primary" />
            <h3 className="font-display font-semibold text-xl">Booking Confirmed!</h3>
            <p className="text-muted-foreground">
              Check your email for confirmation details.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-primary/10 p-4 rounded-lg space-y-2">
              <h4 className="font-semibold">Bank Transfer Details</h4>
              <div className="text-sm space-y-1">
                <p>
                  <span className="text-muted-foreground">Account Name:</span>{" "}
                  <span className="font-semibold">EventHub Nigeria Ltd.</span>
                </p>
                <p>
                  <span className="text-muted-foreground">Bank:</span>{" "}
                  <span className="font-semibold">GTBank</span>
                </p>
                <p>
                  <span className="text-muted-foreground">Account Number:</span>{" "}
                  <span className="font-semibold">0123456789</span>
                </p>
                <p>
                  <span className="text-muted-foreground">Amount:</span>{" "}
                  <span className="font-semibold text-primary">{ticketPrice}</span>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  data-testid="input-name"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  data-testid="input-email"
                />
              </div>

              <div>
                <Label htmlFor="receipt">Upload Payment Proof</Label>
                <div className="mt-2">
                  <label
                    htmlFor="receipt"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover-elevate"
                  >
                    {selectedFile ? (
                      <div className="text-center">
                        <CheckCircle className="w-8 h-8 mx-auto mb-2 text-primary" />
                        <p className="text-sm font-medium">{selectedFile.name}</p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">
                          Click to upload screenshot
                        </p>
                      </div>
                    )}
                    <input
                      id="receipt"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileChange}
                      required
                      data-testid="input-file"
                    />
                  </label>
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full" data-testid="button-submit-payment">
              Confirm Booking
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
