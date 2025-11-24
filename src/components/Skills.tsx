import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "./SectionHeading";
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
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / window.innerHeight;
        setScrollY(scrollProgress * 50);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-20 bg-section-bg relative overflow-hidden" ref={sectionRef}>
      {/* Parallax background */}
      <div 
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"
        style={{ transform: `translateY(${scrollY}px)` }}
      />
      <div 
        className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl"
        style={{ transform: `translateY(${-scrollY}px)` }}
      />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <SectionHeading icon={Code2}>My Skills</SectionHeading>

        <div
          className={`flex flex-wrap justify-center gap-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-base py-3 px-6 hover:bg-primary hover:text-primary-foreground transition-all cursor-default hover:scale-105"
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
