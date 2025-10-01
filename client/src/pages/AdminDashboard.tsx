import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Download, Eye, CheckCircle, XCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"events" | "bookings">("events");
  const { toast } = useToast();

  const bookings = [
    {
      id: "1",
      eventName: "Afrobeats Live Concert",
      customerName: "John Doe",
      email: "john@example.com",
      status: "pending",
      amount: "₦15,000",
      date: "2024-12-10",
    },
    {
      id: "2",
      eventName: "Tech Innovation Summit",
      customerName: "Jane Smith",
      email: "jane@example.com",
      status: "confirmed",
      amount: "₦25,000",
      date: "2024-12-09",
    },
  ];

  const handleExport = () => {
    toast({
      title: "Export Started",
      description: "Attendee list is being downloaded",
    });
    console.log("Exporting attendee list");
  };

  const handleApprove = (id: string) => {
    toast({
      title: "Booking Approved",
      description: "Confirmation email has been sent",
    });
    console.log("Approved booking:", id);
  };

  const handleReject = (id: string) => {
    toast({
      title: "Booking Rejected",
      description: "Customer has been notified",
    });
    console.log("Rejected booking:", id);
  };

  return (
    <div className="min-h-screen pb-12">
      <div className="bg-primary/5 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="font-display font-bold text-4xl mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage events and bookings</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <div className="flex gap-2 mb-8">
          <Button
            variant={activeTab === "events" ? "default" : "outline"}
            onClick={() => setActiveTab("events")}
            data-testid="button-tab-events"
          >
            Events
          </Button>
          <Button
            variant={activeTab === "bookings" ? "default" : "outline"}
            onClick={() => setActiveTab("bookings")}
            data-testid="button-tab-bookings"
          >
            Bookings
          </Button>
        </div>

        {activeTab === "events" && (
          <div className="space-y-6">
            <div className="bg-card border border-card-border rounded-2xl p-6">
              <h2 className="font-display font-semibold text-xl mb-6">
                Add New Event
              </h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="event-title">Event Title</Label>
                  <Input
                    id="event-title"
                    placeholder="Enter event title"
                    data-testid="input-event-title"
                  />
                </div>

                <div>
                  <Label htmlFor="event-category">Category</Label>
                  <Select>
                    <SelectTrigger id="event-category" data-testid="select-event-category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="concert">Concert</SelectItem>
                      <SelectItem value="tech">Tech</SelectItem>
                      <SelectItem value="wedding">Wedding Expo</SelectItem>
                      <SelectItem value="sports">Sports</SelectItem>
                      <SelectItem value="cultural">Cultural</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="event-date">Date & Time</Label>
                  <Input
                    id="event-date"
                    type="datetime-local"
                    data-testid="input-event-date"
                  />
                </div>

                <div>
                  <Label htmlFor="event-location">Location</Label>
                  <Input
                    id="event-location"
                    placeholder="Enter location"
                    data-testid="input-event-location"
                  />
                </div>

                <div>
                  <Label htmlFor="event-price">Ticket Price (₦)</Label>
                  <Input
                    id="event-price"
                    type="number"
                    placeholder="Enter price"
                    data-testid="input-event-price"
                  />
                </div>

                <div>
                  <Label htmlFor="event-city">City</Label>
                  <Select>
                    <SelectTrigger id="event-city" data-testid="select-event-city">
                      <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lagos">Lagos</SelectItem>
                      <SelectItem value="abuja">Abuja</SelectItem>
                      <SelectItem value="ph">Port Harcourt</SelectItem>
                      <SelectItem value="ibadan">Ibadan</SelectItem>
                      <SelectItem value="enugu">Enugu</SelectItem>
                      <SelectItem value="kano">Kano</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="event-description">Description</Label>
                  <Textarea
                    id="event-description"
                    placeholder="Enter event description"
                    rows={4}
                    data-testid="input-event-description"
                  />
                </div>

                <div className="md:col-span-2">
                  <Button type="submit" className="gap-2" data-testid="button-add-event">
                    <Plus className="w-4 h-4" />
                    Add Event
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

        {activeTab === "bookings" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="font-display font-semibold text-xl">
                Recent Bookings
              </h2>
              <Button
                variant="outline"
                className="gap-2"
                onClick={handleExport}
                data-testid="button-export-attendees"
              >
                <Download className="w-4 h-4" />
                Export List
              </Button>
            </div>

            <div className="bg-card border border-card-border rounded-2xl overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Event</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell className="font-medium">
                        {booking.eventName}
                      </TableCell>
                      <TableCell>{booking.customerName}</TableCell>
                      <TableCell>{booking.email}</TableCell>
                      <TableCell>{booking.amount}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            booking.status === "confirmed"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {booking.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            size="icon"
                            variant="ghost"
                            data-testid={`button-view-proof-${booking.id}`}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          {booking.status === "pending" && (
                            <>
                              <Button
                                size="icon"
                                variant="ghost"
                                onClick={() => handleApprove(booking.id)}
                                data-testid={`button-approve-${booking.id}`}
                              >
                                <CheckCircle className="w-4 h-4 text-green-600" />
                              </Button>
                              <Button
                                size="icon"
                                variant="ghost"
                                onClick={() => handleReject(booking.id)}
                                data-testid={`button-reject-${booking.id}`}
                              >
                                <XCircle className="w-4 h-4 text-red-600" />
                              </Button>
                            </>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
