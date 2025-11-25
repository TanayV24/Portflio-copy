import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const certificates = [
  {
    title: "AWS Cloud Computing",
    issuer: "Amazon Web Services",
    date: "2025",
  },
  {
    title: "AWS Machine Learning",
    issuer: "Amazon Web Services",
    date: "2025",
  },
  {
    title: "AWS NLP",
    issuer: "Amazon Web Services",
    date: "2025",
  },
  {
    title: "Coding Bootcamp",
    issuer: "Royals Softech",
    date: "2023",
  },
  {
    title: "Web Development Course",
    issuer: "Aecademour",
    date: "2023",
  },
];

const Certificates = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cardElements = document.querySelectorAll('.cert-card');
    cardElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="certificates"
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
            <Award className="w-6 h-6 text-primary dark:text-white" />
            <span className="text-base font-semibold text-primary dark:text-white uppercase tracking-wider">Certificates</span>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-purple-500 to-transparent rounded-full" />
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              data-index={index}
              className={`cert-card transition-all duration-500 ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="group relative h-full overflow-hidden border-2 border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Sliding accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-purple-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />

                <CardContent className="relative p-6">
                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                    <span>{cert.issuer}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                    <span>{cert.date}</span>
                  </div>
                </CardContent>

                {/* Bottom highlight */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent transition-colors duration-300" />
    </section>
  );
};

export default Certificates;
