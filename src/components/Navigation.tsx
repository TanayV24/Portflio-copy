import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section
      const sections = ["home", "about", "projects", "skills", "experience", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = ["Home", "About", "Projects", "Skills", "Experience", "Contact"];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 pointer-events-none">
      <div className="container mx-auto px-6 flex justify-center">
        {/* Desktop Navigation - Floating Pill */}
        <div className="hidden lg:block pointer-events-auto">
          <div className="flex items-center gap-2 bg-card/80 backdrop-blur-md rounded-full px-3 py-2 shadow-lg border border-border/30">
            {navItems.map((item) => (
              <Button
                key={item}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`rounded-full transition-all px-4 ${
                  activeSection === item.toLowerCase()
                    ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                    : "hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>

        {/* Mobile Navigation - Floating */}
        <div className="lg:hidden w-full pointer-events-auto">
          <div className="flex items-center justify-between bg-card/80 backdrop-blur-md rounded-full px-5 py-3 shadow-lg border border-border/30">
            <span className="text-lg font-bold text-primary">Tanay Vakharia</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-full"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="mt-3 bg-card/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-border/30">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Button
                    key={item}
                    variant="ghost"
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`w-full justify-start rounded-lg min-h-12 ${
                      activeSection === item.toLowerCase()
                        ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                        : ""
                    }`}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
