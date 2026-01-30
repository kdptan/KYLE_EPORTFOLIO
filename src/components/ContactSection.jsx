import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "✓ Message sent successfully!",
        description: "Thanks for reaching out! I'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      e.target.reset();
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.12),transparent_55%)] pointer-events-none" aria-hidden="true"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" aria-hidden="true"></div>
      <div className="absolute -left-2 top-24 h-40 w-1 bg-gradient-to-b from-primary to-transparent rounded-full opacity-70" aria-hidden="true"></div>
      <div className="absolute -right-2 bottom-24 h-32 w-1 bg-gradient-to-t from-primary to-transparent rounded-full opacity-60" aria-hidden="true"></div>
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center justify-center gap-3 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Get In <span className="text-primary"> Touch</span>
          </h2>
        </div>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Got an exciting project in mind? I'd love to hear about it. Let's connect and create something amazing together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent pointer-events-none" aria-hidden="true"></div>
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-4 justify-center">
              <div className="flex items-start space-x-4 rounded-lg p-3 transition-all hover:-translate-y-1 hover:bg-primary/5">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium"> Email</h4>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/30">
                      Preferred
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    kyledanieltan2018@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 rounded-lg p-3 transition-all hover:-translate-y-1 hover:bg-primary/5">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium"> Phone</h4>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/30">
                      Fast reply
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    +63 966 860 0501
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 rounded-lg p-3 transition-all hover:-translate-y-1 hover:bg-primary/5">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium"> Location</h4>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/30">
                      Local
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    Philippines, Davao City
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="#" target="_blank" className="transition-transform hover:-translate-y-1">
                  <Linkedin />
                </a>
                <a href="#" target="_blank" className="transition-transform hover:-translate-y-1">
                  <Twitter />
                </a>
                <a href="#" target="_blank" className="transition-transform hover:-translate-y-1">
                  <Instagram />
                </a>
                <a href="#" target="_blank" className="transition-transform hover:-translate-y-1">
                  <Twitch />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
          >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="JohnDoe@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, i would like to talk about...."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
