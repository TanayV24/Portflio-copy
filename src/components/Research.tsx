import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ExternalLink } from "lucide-react";

const research = [
  {
    title: "CAREER COUNSELING BOT USING MACHINE LEARNING AND NLP",
    description: "A comprehensive research on developing an intelligent career counseling system using machine learning algorithms and natural language processing to provide personalized career guidance based on student aptitude, interests, and assessment data.",
    year: "2025",
    status: "Published",
    link: "https://www.researchgate.net/publication/394875683_CAREER_COUNCILING_BOT_USING_MACHINE_LEARNING_AND_NLP",
  },
];

const Research = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="research"
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
            <BookOpen className="w-6 h-6 text-primary dark:text-white" />
            <span className="text-base font-semibold text-primary dark:text-white uppercase tracking-wider">Research</span>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-purple-500 to-transparent rounded-full" />
        </div>

        {/* Research Papers */}
        <div className="space-y-6">
          {research.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="group relative overflow-hidden border-2 border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Sliding accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-purple-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />

                <CardContent className="relative p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <BookOpen className="h-7 w-7 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                        <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                          {item.title}
                        </h3>
                        <Badge 
                          variant={item.status === "Ongoing" ? "secondary" : "default"}
                          className="self-start"
                        >
                          {item.status}
                        </Badge>
                      </div>

                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3">
                        {item.description}
                      </p>

                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs md:text-sm text-muted-foreground/80">
                          Published: {item.year}
                        </span>
                      </div>

                      {/* Button */}
                      {item.link && (
                        <Button
                          variant="default"
                          size="sm"
                          onClick={() => window.open(item.link, '_blank')}
                          className="group/btn transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                        >
                          View Publication
                          <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Button>
                      )}
                    </div>
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

export default Research;
