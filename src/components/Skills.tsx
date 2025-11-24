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
  const sectionRef = useRef<HTMLDivElement>(null);
  const [startSequence, setStartSequence] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);

  // observe enter / exit of the section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // restart sequence when section comes back into view
          setVisibleCount(0);
          setStartSequence(true);
        } else {
          // when section leaves viewport, stop and reset
          setStartSequence(false);
          setVisibleCount(0);
        }
      },
      {
        threshold: 0.2, // visible when ~20% of section is in view
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
    }, 80); // delay between each skill

    return () => clearInterval(interval);
  }, [startSequence, visibleCount]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 px-6 md:px-12 lg:px-20 bg-section-bg relative overflow-hidden"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <SectionHeading icon={Code2}>My Skills</SectionHeading>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => {
            const isVisible = index < visibleCount;

            return (
              <Badge
                key={skill}
                variant="secondary"
                className={`text-base py-3 px-6 cursor-default transition-all duration-300
                  ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 scale-95"}
                  hover:bg-primary hover:text-primary-foreground hover:scale-105`}
              >
                {skill}
              </Badge>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
