import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

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
  return (
    <section id="research" className="py-24 px-6 md:px-12 lg:px-20">
      <div className="container max-w-6xl mx-auto">
        <SectionHeading icon={BookOpen}>Research</SectionHeading>

        <div className="space-y-6">
          {research.map((item, index) => (
            <Card
              key={index}
              className="hover-lift border-border transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                      <CardDescription className="text-base">
                        {item.description}
                      </CardDescription>
                      <p className="text-sm text-muted-foreground mt-2">{item.year}</p>
                    </div>
                  </div>
                  <Badge variant={item.status === "Ongoing" ? "secondary" : "default"}>
                    {item.status}
                  </Badge>
                </div>
              </CardHeader>
              {item.link && (
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => window.open(item.link, '_blank')}
                  className="w-full sm:w-auto ml-20 mb-6"
                >
                  View Published
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
