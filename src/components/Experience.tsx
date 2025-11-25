import { useState, useEffect, useRef } from "react";
import { Briefcase, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "Multitrade Softech Pvt. Ltd.",
    role: "Software Intern",
    period: "Jul 2025 – Jan 2026",
    description: [
      "Built and debugged C++ desktop application features using Microsoft Foundation Classes (MFC) for UI development.",
      "Assisted seniors in enhancing the eKYC workflow using JavaScript, HTML, and C++, improving usability, validation flow, and overall system reliability.",
    ],
  },
  {
    company: "Milan Patel's Web Studio",
    role: "MERN Stack Developer",
    period: "Jan 2025 – Jul 2025",
    description: [
      "Developed full-stack MERN features for client projects, including APIs, dashboards, and interactive frontends.",
      "Optimized application performance and improved user experience through clean UI components and efficient backend logic.",
    ],
  },
  {
    company: "Brainy Beam",
    role: "AI/ML Intern",
    period: "Dec 2024 – Jan 2025",
    description: [
      "Trained and evaluated basic ML models across various datasets to understand practical applications of algorithms.",
      "Performed data preprocessing and feature engineering to improve model performance and reliability.",
    ],
  },
  {
    company: "Prodigy InfoTech",
    role: "Web Development Intern",
    period: "Jun 2024 – Jun 2024",
    description: [
      "Built reusable JavaScript components to support scalable and maintainable web interfaces.",
      "Fixed UI/UX layout issues and improved visual consistency across multiple pages.",
    ],
  },
  {
    company: "Academor",
    role: "Web Development Intern",
    period: "Feb 2023 – Mar 2023",
    description: [
      "Developed responsive UI components using HTML, CSS, JavaScript, and React for ongoing web modules.",
      "Assisted in design workflows and contributed to iterative feature enhancements and UI improvements.",
    ],
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleDetails, setVisibleDetails] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll animation for details
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleDetails((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const detailElements = document.querySelectorAll('.detail-item');
    detailElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeIndex]);

  return (
    <section
      id="experience"
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
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Briefcase className="w-6 h-6 text-primary dark:text-white" />
            <span className="text-base font-semibold text-primary dark:text-white uppercase tracking-wider">My Experience</span>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-purple-500 to-transparent rounded-full" />
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-[2fr,3fr] gap-12">
          
          {/* Left Side - Table-like List (no borders) */}
          <div className="space-y-1">
            {experiences.map((exp, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`group relative p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-primary/10 border-l-4 border-primary'
                    : 'hover:bg-card/50 border-l-4 border-transparent'
                }`}
              >
                {/* Sliding indicator */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-purple-500 transition-transform duration-300 ${
                    activeIndex === index ? 'scale-y-100' : 'scale-y-0'
                  }`}
                />

                <div className="relative">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-sm md:text-base font-semibold mb-1 transition-colors duration-300 ${
                          activeIndex === index ? 'text-primary' : 'text-foreground group-hover:text-primary'
                        }`}
                      >
                        {exp.company}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground mb-1">
                        {exp.role}
                      </p>
                      <p className="text-xs text-muted-foreground/80">
                        {exp.period}
                      </p>
                    </div>
                    
                    <ChevronRight
                      className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                        activeIndex === index
                          ? 'text-primary rotate-90'
                          : 'text-muted-foreground group-hover:text-primary group-hover:translate-x-1'
                      }`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Details with scroll animation */}
          <div className="relative">
            <div className="sticky top-24">
              {/* Background card */}
              <div className="relative p-6 md:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border-2 border-border transition-all duration-300">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-2xl" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Company header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/30">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-foreground">
                          {experiences[activeIndex].company}
                        </h3>
                        <p className="text-sm text-primary font-medium">
                          {experiences[activeIndex].role}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground ml-14">
                      {experiences[activeIndex].period}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-gradient-to-r from-border via-primary/30 to-border mb-6" />

                  {/* Description list with scroll animation */}
                  <ul className="space-y-4">
                    {experiences[activeIndex].description.map((item, i) => (
                      <li
                        key={i}
                        data-index={i}
                        className={`detail-item flex items-start gap-3 text-sm md:text-base text-muted-foreground leading-relaxed transition-all duration-500 ${
                          visibleDetails.includes(i)
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 translate-x-4'
                        }`}
                        style={{ transitionDelay: `${i * 100}ms` }}
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-b-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent transition-colors duration-300" />
    </section>
  );
};

export default Experience;
