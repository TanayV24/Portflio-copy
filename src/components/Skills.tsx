import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Code2 } from "lucide-react";

const skills = [
  "Python",
  "C",
  "C++",
  "Java",
  "JavaScript",
  "HTML5",
  "CSS",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "FastAPI",
  "MongoDB",
  "SQL",
  "Supabase",
  "Arduino Uno",
  "Sensors",
  "Model Evaluation",
  "ML",
  "NLP",
  "Playwright",
  "Apify",
  "AWS Cloud",
  "Microsoft Azure",
  "Figma",
  "Prototyping",
  "UI/UX Principles",
  "Arduino",
  "CMD Scripting",
  "Microsoft Office",
  "VS Code",
  "Docker",
  "Git",
  "GitHub",
  "Linux",
];

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [startSequence, setStartSequence] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);

  // observe enter / exit of the section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount(0);
          setStartSequence(true);
        } else {
          setStartSequence(false);
          setVisibleCount(0);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // drive the one‑after‑another animation
  useEffect(() => {
    if (!startSequence) return;
    if (visibleCount >= skills.length) return;

    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= skills.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [startSequence, visibleCount]);

  return (
    <section
      id="skills"
      ref={sectionRef}
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

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Header matching About/Projects style */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Code2 className="w-6 h-6 text-primary dark:text-white" />
            <span className="text-base font-semibold text-primary dark:text-white uppercase tracking-wider">My Skills</span>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-purple-500 to-transparent rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {skills.map((skill, index) => {
            const isVisible = index < visibleCount;

            return (
              <Badge
                key={skill}
                variant="secondary"
                className={`text-sm md:text-base py-2 md:py-3 px-4 md:px-6 cursor-default transition-all duration-300
                  ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 scale-95"}
                  hover:bg-primary hover:text-primary-foreground hover:scale-105`}
              >
                {skill}
              </Badge>
            );
          })}
        </div>
      </div>

      {/* Bottom Separator matching other sections */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent transition-colors duration-300" />
    </section>
  );
};

export default Skills;
