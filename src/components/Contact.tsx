import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, MapPin } from "lucide-react";
import { z } from "zod";
import SectionHeading from "./SectionHeading";

const contactSchema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  message: z
    .string()
    .trim()
    .min(1, { message: "Message cannot be empty" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

const Contact = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const characterLimit = 1000;
  const remainingChars = characterLimit - message.length;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate the form data
      const validatedData = contactSchema.parse({ email, message });

      // Create mailto link with validated data
      const subject = encodeURIComponent("Contact from Portfolio");
      const body = encodeURIComponent(
        `From: ${validatedData.email}\n\nMessage:\n${validatedData.message}`
      );
      const mailtoLink = `mailto:vakhariatanay@gmail.com?subject=${subject}&body=${body}`;

      // Open email client
      window.location.href = mailtoLink;

      // Show success animation
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);

      toast({
        title: "Email client opened",
        description: "Your email client should open with the message pre-filled.",
      });

      // Clear form
      setEmail("");
      setMessage("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          variant: "destructive",
          title: "Validation Error",
          description: error.errors[0].message,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Something went wrong. Please try again.",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background -z-10" />
      <div className="container max-w-6xl mx-auto">
        <SectionHeading 
          icon={Mail} 
          subtitle={
            <>
              Please contact me directly at{" "}
              <a
                href="mailto:vakhariatanay@gmail.com"
                className="text-primary hover:underline font-medium"
              >
                vakhariatanay@gmail.com
              </a>{" "}
              or through this form.
            </>
          }
        >
          Contact Me
        </SectionHeading>

        <form onSubmit={handleSubmit} className="space-y-6 mb-16">
          <div>
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 text-base"
              required
              maxLength={255}
            />
          </div>

          <div className="relative">
            <Textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[280px] text-base resize-none"
              required
              maxLength={1000}
            />
            <div className={`text-sm mt-2 ${remainingChars < 100 ? 'text-destructive' : 'text-muted-foreground'}`}>
              {remainingChars} characters remaining
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className={`w-auto px-8 min-h-12 transition-all ${showSuccess ? 'bg-green-600 hover:bg-green-600' : ''}`}
          >
            {showSuccess ? (
              <>
                <span className="animate-bounce">✓</span> Sent!
              </>
            ) : (
              <>
                {isSubmitting ? 'Sending...' : 'Submit'}
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="mailto:vakhariatanay@gmail.com"
            className="flex items-center gap-3 p-4 rounded-lg bg-card hover:bg-accent transition-colors border border-border"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-sm text-muted-foreground">vakhariatanay@gmail.com</p>
            </div>
          </a>

          <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-sm text-muted-foreground">Ahmedabad, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
