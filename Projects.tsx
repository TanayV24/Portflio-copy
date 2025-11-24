import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Code2,
  Brain,
  Briefcase,
  Smartphone,
  Database,
  Cpu,
  Server,
  Sun,
  Eye,
  Rocket,
  Github,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeading from "./SectionHeading";

// project images
import aiLeadImg from "@/assets/projects/ai-lead-generator.jpg";
import careerImg from "@/assets/projects/career-guidance.jpg";
import ecommerceImg from "@/assets/projects/ecommerce-shoe.jpg";
import edulyticsImg from "@/assets/projects/edulytics.jpg";
import employeeMgmtImg from "@/assets/projects/employee-management.jpg";
import examPortalImg from "@/assets/projects/exam-portal.jpg";
import hrmsImg from "@/assets/projects/hrms.jpg";
import obstacleRobotImg from "@/assets/projects/obstacle-robot.jpg";
import smartAmcImg from "@/assets/projects/smart-amc.jpg";
import solarPanelImg from "@/assets/projects/solar-panel.jpg";
import telecomPredictionImg from "@/assets/projects/telecom-prediction.jpg";
import universityChatbotImg from "@/assets/projects/university-chatbot.jpg";

type Project = {
  title: string;
  shortTitle: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  status?: string;
  icon: any;
  github: string;
  image?: string;
};

const majorProjects: Project[] = [
  {
    title: "Career Guidance System",
    shortTitle: "Career Guidance",
    description:
      "ML model that predicts suitable career paths based on user inputs and assessment data.",
    detailedDescription:
      "An intelligent career recommendation system using machine learning algorithms to analyze student aptitude, interests, and academic performance. The system processes user responses through multiple ML models to provide personalized career path suggestions with confidence scores and detailed career information.",
    technologies: ["Python", "ML"],
    status: "Ongoing",
    icon: Brain,
    github: "https://github.com/your-username/career-guidance",
    image: careerImg,
  },
  {
    title: "Edulytics",
    shortTitle: "Edulytics",
    description:
      "AI-based smart scheduler and attendance system for institutions and student study planning.",
    detailedDescription:
      "An intelligent educational platform combining automated scheduling, attendance tracking, and personalized study planning. Features AI-powered timetable optimization, student performance analytics, and adaptive learning recommendations.",
    technologies: ["Full Stack"],
    status: "Ongoing",
    icon: Brain,
    github: "https://github.com/your-username/edulytics",
    image: edulyticsImg,
  },
  {
    title: "AI Lead Generator",
    shortTitle: "Lead Generator",
    description:
      "Automated web-scraping and analytics pipeline with dashboard visualization.",
    detailedDescription:
      "A business intelligence tool that automatically discovers and qualifies sales leads. Implements web scraping with Apify, data enrichment through multiple APIs, lead scoring algorithms, and interactive dashboards for sales teams.",
    technologies: ["Apify", "Playwright", "FastAPI", "Next.js"],
    icon: Database,
    github: "https://github.com/your-username/ai-lead-generator",
    image: aiLeadImg,
  },
  {
    title: "Smart AMC System",
    shortTitle: "AMC System",
    description:
      "NLP-powered concept for automatically classifying and routing municipal complaints.",
    detailedDescription:
      "A smart governance solution using natural language processing to categorize citizen complaints. Automatically routes issues to relevant departments, tracks resolution status, and provides analytics for municipal administration.",
    technologies: ["Node.js", "Flutter"],
    icon: Code2,
    github: "https://github.com/your-username/smart-amc",
    image: smartAmcImg,
  },
  {
    title: "University Chatbot",
    shortTitle: "Chatbot",
    description:
      "NLP chatbot answering institutional FAQs using a Python NN pipeline and JSON data.",
    detailedDescription:
      "An intelligent conversational assistant for university information queries. Built with neural networks for intent classification, entity extraction, and context-aware responses. Handles admission queries, course information, and campus facilities.",
    technologies: ["Python", "NLP"],
    icon: Brain,
    github: "https://github.com/your-username/university-chatbot",
    image: universityChatbotImg,
  },
  {
    title: "HRMS System",
    shortTitle: "HRMS",
    description:
      "Skill-based task assignment system with basic HR dashboard functionalities.",
    detailedDescription:
      "A human resource management platform featuring skill-based task allocation, employee performance tracking, and comprehensive HR analytics. Includes automated task assignment based on employee skills and availability.",
    technologies: ["Python", "Web Stack"],
    icon: Server,
    github: "https://github.com/your-username/hrms-system",
    image: hrmsImg,
  },
];

const minorProjects: Project[] = [
  {
    title: "E-Commerce Shoe Ordering Website",
    shortTitle: "Shoe ordering website",
    description:
      "MERN-based platform enabling authentication, product browsing, and seamless shoe ordering.",
    detailedDescription:
      "A full-featured e-commerce platform built with the MERN stack. Implements user authentication, product catalog with search and filtering, shopping cart functionality, and secure checkout process. Features include user profiles, order history, and admin dashboard for inventory management.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    icon: Code2,
    github: "https://github.com/your-username/ecommerce-shoe",
    image: ecommerceImg,
  },
  {
    title: "Light-Tracking Solar Panel",
    shortTitle: "Light-Tracking Solar Panel",
    description:
      "Dual-servo solar tracker maximizing sunlight capture using sensor feedback.",
    detailedDescription:
      "An IoT project implementing automatic solar panel positioning based on light intensity. Uses LDR sensors and servo motors to track the sun's position throughout the day, significantly improving energy capture efficiency.",
    technologies: ["Arduino", "Sensors"],
    icon: Sun,
    github: "https://github.com/your-username/light-tracking-solar-panel",
    image: solarPanelImg,
  },
  {
    title: "Employee Management System",
    shortTitle: "Employee Management",
    description:
      "Java application automating attendance, payroll, and basic HR operations.",
    detailedDescription:
      "A comprehensive desktop application for managing employee records, attendance tracking, and payroll processing. Features include automated salary calculations, leave management, performance tracking, and detailed reporting capabilities with data visualization.",
    technologies: ["Java", "MySQL"],
    icon: Briefcase,
    github: "https://github.com/your-username/employee-management",
    image: employeeMgmtImg,
  },
  {
    title: "Online Exam Portal",
    shortTitle: "Exam Portal",
    description:
      "Android MCQ exam system with Firebase login, storage, and real-time syncing.",
    detailedDescription:
      "A mobile-first examination platform for conducting multiple-choice tests. Includes secure authentication, timed exams, instant result calculation, question bank management, and detailed analytics. Features offline support with Firebase synchronization when connectivity returns.",
    technologies: ["Java", "Firebase"],
    icon: Smartphone,
    github: "https://github.com/your-username/online-exam-portal",
    image: examPortalImg,
  },
  {
    title: "New User Telecom Prediction",
    shortTitle: "Telecom Prediction",
    description:
      "ML solution predicting onboarding user behavior for telecom insights.",
    detailedDescription:
      "A predictive analytics system for telecom companies to forecast new user behavior and churn probability. Uses historical data and user demographics to identify high-value customers and predict service plan preferences, enabling targeted marketing strategies.",
    technologies: ["Python", "ML"],
    icon: Database,
    github: "https://github.com/your-username/telecom-prediction",
    image: telecomPredictionImg,
  },
  {
    title: "Obstacle-Avoiding Robot",
    shortTitle: "Robot",
    description:
      "Autonomous robot using ultrasonic sensing for real-time obstacle detection.",
    detailedDescription:
      "An embedded systems project featuring autonomous navigation. The robot uses ultrasonic sensors for distance measurement, servo motors for directional control, and Arduino-based decision-making algorithms to navigate complex environments while avoiding obstacles in real-time.",
    technologies: ["Arduino", "Sensors"],
    icon: Cpu,
    github: "https://github.com/your-username/obstacle-avoiding-robot",
    image: obstacleRobotImg,
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const Icon = project.icon;
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Dialog>
      <div ref={ref}>
        <Card
          className={`group relative overflow-hidden border-border bg-card/50 dark:bg-card/30
            transition-transform transition-shadow duration-300
            hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          style={{ transitionDelay: `${index * 150}ms` }}
        >
          <CardHeader className="relative">
            {/* Thumbnail with image + glass effect */}
            <div className="relative w-full h-40 md:h-48 rounded-2xl bg-gradient-to-br from-primary/15 via-transparent to-primary/25 p-[1px]">
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-primary/20" />
              <div
                className="relative flex h-full w-full items-center justify-center rounded-2xl
                  overflow-hidden bg-card-light/40 dark:bg-muted/40
                  backdrop-blur-md border border-border/60
                  shadow-sm transition-all duration-500
                  group-hover:shadow-xl group-hover:-translate-y-0.5 group-hover:scale-[1.02]"
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-30 group-hover:opacity-45 transition-opacity duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/55 to-transparent" />
                <span
                  className="relative z-10 text-xl md:text-2xl font-semibold text-black dark:text-primary-foreground text-center tracking-wide
                    drop-shadow-sm transition-transform duration-500 group-hover:scale-110"
                >
                  {project.shortTitle}
                </span>
              </div>
            </div>

            <div className="flex items-start justify-between mb-2 mt-4">
              <CardTitle className="text-xl flex items-center gap-2">
                <Icon className="h-5 w-5 text-primary flex-shrink-0" />
                {project.title}
              </CardTitle>
              {project.status && (
                <Badge variant="secondary" className="ml-2 flex-shrink-0">
                  {project.status}
                </Badge>
              )}
            </div>
            <CardDescription className="text-base">
              {project.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4 transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:-translate-y-0.5">
              {project.technologies.map((tech, techIndex) => (
                <Badge key={techIndex} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full min-h-12 md:min-h-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md"
                >
                  <Eye className="mr-2 h-3 w-3" />
                  Show Details
                </Button>
              </DialogTrigger>

              <Button
                asChild
                variant="ghost"
                size="icon"
                className="min-h-12 md:min-h-10 transition-transform duration-300 group-hover:-translate-y-0.5"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View on GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <Icon className="h-6 w-6 text-primary" />
            {project.title}
            {project.status && (
              <Badge variant="secondary" className="ml-2">
                {project.status}
              </Badge>
            )}
          </DialogTitle>
          <DialogDescription className="text-base pt-4">
            {project.detailedDescription}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <Badge key={techIndex} variant="secondary" className="text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <Button asChild variant="outline" size="sm">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              View Source on GitHub
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden"
    >
      <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <SectionHeading
          icon={Rocket}
          subtitle="A collection of projects showcasing my skills in full-stack development, AI/ML, and embedded systems"
        >
          My Projects
        </SectionHeading>

        {/* Major Projects */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 relative inline-block left-1/2 -translate-x-1/2">
            Major Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full"></span>
          </h3>
          <div className="space-y-8 max-w-6xl mx-auto">
            {majorProjects.map((project, index) => {
              const Icon = project.icon;
              const { ref, isVisible } = useScrollAnimation();
              const isEven = index % 2 === 0;

              return (
                <Dialog key={index}>
                  <div ref={ref}>
                    <Card
                      className={`group relative overflow-hidden border-border bg-card/50 dark:bg-card/30
                        transition-transform transition-shadow duration-300
                        hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 ${
                          isVisible
                            ? "opacity-100 translate-x-0"
                            : isEven
                            ? "opacity-0 -translate-x-20"
                            : "opacity-0 translate-x-20"
                        }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <CardContent className="p-0">
                        <div
                          className={`flex flex-col ${
                            isEven ? "md:flex-row" : "md:flex-row-reverse"
                          }`}
                        >
                          {/* Thumbnail with image + glass */}
                          <div className="relative w-full md:w-[400px] lg:w-[450px] h-64 md:h-auto rounded-2xl bg-gradient-to-br from-primary/15 via-transparent to-primary/25 p-[1px]">
                            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-primary/20" />
                            <div
                              className="relative flex h-full w-full items-center justify-center rounded-2xl
                                overflow-hidden bg-card-light/40 dark:bg-muted/40
                                backdrop-blur-md border border-border/60
                                shadow-sm transition-all duration-500
                                group-hover:shadow-xl group-hover:-translate-y-0.5 group-hover:scale-[1.02] group-hover:rotate-[0.5deg]"
                            >
                              {project.image && (
                                <img
                                  src={project.image}
                                  alt={project.title}
                                  className="absolute inset-0 h-full w-full object-cover opacity-30 group-hover:opacity-45 transition-opacity duration-500"
                                />
                              )}
                              <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/50 to-transparent" />
                              <span
                                className="relative z-10 text-2xl md:text-3xl font-semibold text-black dark:text-primary-foreground text-center tracking-wide
                                  drop-shadow-sm transition-transform duration-500 group-hover:scale-110"
                              >
                                {project.shortTitle}
                              </span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 p-8 md:p-10 lg:p-12">
                            <div className="flex items-start justify-between mb-2">
                              <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                                <Icon className="h-5 w-5 text-primary flex-shrink-0" />
                                {project.title}
                              </CardTitle>
                              {project.status && (
                                <Badge
                                  variant="secondary"
                                  className="ml-2 flex-shrink-0"
                                >
                                  {project.status}
                                </Badge>
                              )}
                            </div>
                            <CardDescription className="text-base mb-6">
                              {project.description}
                            </CardDescription>

                            <div className="flex flex-wrap gap-2 mb-6 transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:-translate-y-0.5">
                              {project.technologies.map((tech, techIndex) => (
                                <Badge key={techIndex} variant="outline">
                                  {tech}
                                </Badge>
                              ))}
                            </div>

                            <div className="flex gap-2">
                              <DialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="min-h-12 md:min-h-10 px-6 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md"
                                >
                                  <Eye className="mr-2 h-3 w-3" />
                                  Show Details
                                </Button>
                              </DialogTrigger>

                              <Button
                                asChild
                                variant="ghost"
                                size="icon"
                                className="min-h-12 md:min-h-10 transition-transform duration-300 group-hover:-translate-y-0.5"
                              >
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label="View on GitHub"
                                >
                                  <Github className="h-4 w-4" />
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl flex items-center gap-2">
                        <Icon className="h-6 w-6 text-primary" />
                        {project.title}
                        {project.status && (
                          <Badge variant="secondary" className="ml-2">
                            {project.status}
                          </Badge>
                        )}
                      </DialogTitle>
                      <DialogDescription className="text-base pt-4">
                        {project.detailedDescription}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-sm"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          View Source on GitHub
                        </a>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              );
            })}
          </div>
        </div>

        {/* Minor Projects */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 relative inline-block left-1/2 -translate-x-1/2">
            Minor Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full"></span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {minorProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;