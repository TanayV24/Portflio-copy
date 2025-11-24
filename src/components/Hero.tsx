import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import tanayPhoto from "@/assets/tanay-photo.jpg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Animated gradient background with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-gradient"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div 
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div 
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tl from-accent/20 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.7}px)`, animationDelay: "1s" }}
        />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 animate-fade-in-up">
          <div className="flex-shrink-0">
            <div className="w-48 h-56 md:w-56 md:h-64 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 p-1 shadow-2xl hover:scale-105 transition-transform duration-300">
              <img
                src={tanayPhoto}
                alt="Tanay Vakharia"
                className="w-full h-full rounded-3xl object-cover"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Hello, I'm <span className="text-primary">Tanay Vakharia</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Full-stack dev and AI enthusiast just having fun building real projects and learning new things every day.{" "}
              {/*<span className="text-primary font-semibold">full-stack development</span>,{" "}
              <span className="text-primary font-semibold">AI/ML</span>,{" "}
              <span className="text-primary font-semibold">Full stack Web developer</span> and{" "}
              <span className="text-primary font-semibold">software engineering</span>....*/}
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <Button onClick={scrollToContact} size="lg" className="rounded-full min-h-12 px-6">
                <Mail className="mr-2 h-4 w-4" />
                Contact me
              </Button>
              <Button variant="outline" size="lg" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all min-h-12 px-6" asChild>
                <a href="/Tanay_Resume.pdf" download="Tanay_Vakharia_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/tanay-vakharia-3b0632249/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/TanayV24"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Separator line at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default Hero;
