import { LucideIcon } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SectionHeadingProps {
  icon?: LucideIcon;
  children: React.ReactNode;
  subtitle?: React.ReactNode;
}

const SectionHeading = ({ icon: Icon, children, subtitle }: SectionHeadingProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className="text-center mb-12">
      <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent inline-flex items-center gap-3 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}>
        {Icon && (
          <Icon className={`h-10 w-10 text-primary transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-45"
          }`} />
        )}
        {children}
      </h2>
      {subtitle && (
        <p className={`text-center text-muted-foreground mt-4 text-lg transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
