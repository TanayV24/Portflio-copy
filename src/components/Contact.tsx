import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name should be at least 2 characters." })
    .max(100, { message: "Name must be less than 100 characters." }),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: "Please enter a valid email address." })
    .max(255, { message: "Email must be less than 255 characters." }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message should be at least 10 characters." })
    .max(1000, { message: "Message must be less than 1000 characters." }),
});

const Contact = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const validatedData = contactSchema.parse({ name, email, message });

      const subject = encodeURIComponent("Contact from Portfolio");
      const body = encodeURIComponent(
        `From: ${validatedData.name}\nEmail: ${validatedData.email}\n\nMessage:\n${validatedData.message}`
      );
      const mailtoLink = `mailto:vakhariatanay@gmail.com?subject=${subject}&body=${body}`;

      window.location.href = mailtoLink;

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);

      toast({
        title: "Email client opened",
        description: "Your email client should open with the message pre-filled.",
      });

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstIssue = error.errors[0];
        toast({
          variant: "destructive",
          title: "Validation error",
          description: firstIssue?.message ?? "Please check your input and try again.",
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
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-20 px-6 md:px-12 lg:px-20 bg-background overflow-hidden transition-colors duration-300"
    >
      {/* Background matching other sections */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-5 dark:opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(120, 119, 198, 0.2) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(120, 119, 198, 0.2) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div 
          className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-primary/20 via-purple-500/10 to-transparent rounded-full blur-3xl"
          style={{ opacity: 0.4 }}
        />
        <div 
          className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tl from-purple-500/20 via-primary/10 to-transparent rounded-full blur-3xl"
          style={{ opacity: 0.4 }}
        />
      </div>

      <div className="container max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Mail className="w-6 h-6 text-primary dark:text-white" />
            <span className="text-base font-semibold text-primary dark:text-white uppercase tracking-wider">Contact Me</span>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-purple-500 to-transparent rounded-full mx-auto mb-6" />
          
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Please contact me directly at{" "}
            <a
              href="mailto:vakhariatanay@gmail.com"
              className="text-primary hover:underline font-medium"
            >
              vakhariatanay@gmail.com
            </a>{" "}
            or through this form.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 mb-12">
          {/* Name and Email side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12 text-sm md:text-base bg-card/50 backdrop-blur-sm border-2 border-border focus:border-primary transition-colors"
              maxLength={100}
              required
            />
            
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 text-sm md:text-base bg-card/50 backdrop-blur-sm border-2 border-border focus:border-primary transition-colors"
              maxLength={255}
              required
            />
          </div>

          {/* Message textarea */}
          <Textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[200px] text-sm md:text-base resize-none bg-card/50 backdrop-blur-sm border-2 border-border focus:border-primary transition-colors"
            maxLength={1000}
            required
          />

          {/* Submit button with helper text */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className={`px-8 h-12 transition-all hover:shadow-lg hover:shadow-primary/20 ${
                showSuccess ? "bg-green-600 hover:bg-green-600" : ""
              }`}
            >
              {showSuccess ? (
                <>
                  <span className="animate-bounce">✓</span> Sent!
                </>
              ) : (
                <>
                  {isSubmitting ? "Sending..." : "Send message"}
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
            
            <span className="text-xs md:text-sm text-muted-foreground">
              or ⌘ Enter to send
            </span>
          </div>
        </form>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="mailto:vakhariatanay@gmail.com"
            className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative flex items-center gap-4">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
              </div>
              
              <div>
                <p className="font-semibold text-foreground mb-1">Email</p>
                <p className="text-sm text-muted-foreground">vakhariatanay@gmail.com</p>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </a>

          <div className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative flex items-center gap-4">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
              </div>
              
              <div>
                <p className="font-semibold text-foreground mb-1">Location</p>
                <p className="text-sm text-muted-foreground">Ahmedabad, India</p>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent transition-colors duration-300" />
    </section>
  );
};

export default Contact;
