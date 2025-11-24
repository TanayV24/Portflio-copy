import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import SectionHeading from "./SectionHeading";

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
  return (
    <section id="certificates" className="py-24 px-6 md:px-12 lg:px-20 bg-section-bg">
      <div className="container max-w-6xl mx-auto">
        <SectionHeading icon={Award}>Certificates</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="hover-lift border-border transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{cert.title}</CardTitle>
                <CardDescription className="text-base">
                  {cert.issuer} • {cert.date}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
