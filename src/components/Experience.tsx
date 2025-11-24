import { Briefcase } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "./SectionHeading";

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
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-20 bg-section-bg">
      <div className="container max-w-6xl mx-auto">
        <SectionHeading icon={Briefcase}>My Experience</SectionHeading>

        <Accordion type="single" collapsible className="space-y-4">
          {experiences.map((exp, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-2xl overflow-hidden bg-card hover-lift"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-start gap-4 text-left w-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{exp.company}</h3>
                    <p className="text-base font-semibold text-primary">
                      {exp.role}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-16">
                  {exp.description.map((item, i) => (
                    <li key={i} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Experience;
