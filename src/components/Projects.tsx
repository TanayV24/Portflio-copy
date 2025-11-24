import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Code2, Brain, Briefcase, Smartphone, Database, Cpu, Server, Sun, Eye, Rocket } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeading from "./SectionHeading";

const majorProjects = [
  {
    title: "Career Guidance System",
    shortTitle: "Career Guidance",
    description: "ML model that predicts suitable career paths based on user inputs and assessment data.",
    detailedDescription: "An intelligent career recommendation system using machine learning algorithms to analyze student aptitude, interests, and academic performance. The system processes user responses through multiple ML models to provide personalized career path suggestions with confidence scores and detailed career information.",
    technologies: ["Python", "ML"],
    status: "Ongoing",
    icon: Brain,
  },
  {
    title: "Edulytics",
    shortTitle: "Edulytics",
    description: "AI-based smart scheduler and attendance system for institutions and student study planning.",
    detailedDescription: "An intelligent educational platform combining automated scheduling, attendance tracking, and personalized study planning. Features AI-powered timetable optimization, student performance analytics, and adaptive learning recommendations.",
    technologies: ["Full Stack"],
    status: "Ongoing",
    icon: Brain,
  },
  {
    title: "AI Lead Generator",
    shortTitle: "Lead Generator",
    description: "Automated web-scraping and analytics pipeline with dashboard visualization.",
    detailedDescription: "A business intelligence tool that automatically discovers and qualifies sales leads. Implements web scraping with Apify, data enrichment through multiple APIs, lead scoring algorithms, and interactive dashboards for sales teams.",
    technologies: ["Apify", "Playwright", "FastAPI", "Next.js"],
    icon: Database,
  },
  {
    title: "Smart AMC System",
    shortTitle: "AMC System",
    description: "NLP-powered concept for automatically classifying and routing municipal complaints.",
    detailedDescription: "A smart governance solution using natural language processing to categorize citizen complaints. Automatically routes issues to relevant departments, tracks resolution status, and provides analytics for municipal administration.",
    technologies: ["Node.js", "Flutter"],
    icon: Code2,
  },
  {
    title: "University Chatbot",
    shortTitle: "Chatbot",
    description: "NLP chatbot answering institutional FAQs using a Python NN pipeline and JSON data.",
    detailedDescription: "An intelligent conversational assistant for university information queries. Built with neural networks for intent classification, entity extraction, and context-aware responses. Handles admission queries, course information, and campus facilities.",
    technologies: ["Python", "NLP"],
    icon: Brain,
  },
  {
    title: "HRMS System",
    shortTitle: "HRMS",
    description: "Skill-based task assignment system with basic HR dashboard functionalities.",
    detailedDescription: "A human resource management platform featuring skill-based task allocation, employee performance tracking, and comprehensive HR analytics. Includes automated task assignment based on employee skills and availability.",
    technologies: ["Python", "Web Stack"],
    icon: Server,
  },
];

const minorProjects = [
  {
    title: "E-Commerce Shoe Ordering Website",
    shortTitle: "Shoe ordering website",
    description: "MERN-based platform enabling authentication, product browsing, and seamless shoe ordering.",
    detailedDescription: "A full-featured e-commerce platform built with the MERN stack. Implements user authentication, product catalog with search and filtering, shopping cart functionality, and secure checkout process. Features include user profiles, order history, and admin dashboard for inventory management.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    icon: Code2,
  },
  {
    title: "Light-Tracking Solar Panel",
    shortTitle: "Solar Panel",
    description: "Dual-servo solar tracker maximizing sunlight capture using sensor feedback.",
    detailedDescription: "An IoT project implementing automatic solar panel positioning based on light intensity. Uses LDR sensors and servo motors to track the sun's position throughout the day, significantly improving energy capture efficiency.",
    technologies: ["Arduino", "Sensors", "Solar Panel"],
    icon: Sun,
  },
  {
    title: "Employee Management System",
    shortTitle: "Employee Management",
    description: "Java application automating attendance, payroll, and basic HR operations.",
    detailedDescription: "A comprehensive desktop application for managing employee records, attendance tracking, and payroll processing. Features include automated salary calculations, leave management, performance tracking, and detailed reporting capabilities with data visualization.",
    technologies: ["Java", "MySQL"],
    icon: Briefcase,
  },
  {
    title: "Online Exam Portal",
    shortTitle: "Exam Portal",
    description: "Android MCQ exam system with Firebase login, storage, and real-time syncing.",
    detailedDescription: "A mobile-first examination platform for conducting multiple-choice tests. Includes secure authentication, timed exams, instant result calculation, question bank management, and detailed analytics. Features offline support with Firebase synchronization when connectivity returns.",
    technologies: ["Java", "Firebase"],
    icon: Smartphone,
  },
  {
    title: "New User Telecom Prediction",
    shortTitle: "Telecom Prediction",
    description: "ML solution predicting onboarding user behavior for telecom insights.",
    detailedDescription: "A predictive analytics system for telecom companies to forecast new user behavior and churn probability. Uses historical data and user demographics to identify high-value customers and predict service plan preferences, enabling targeted marketing strategies.",
    technologies: ["Python", "ML"],
    icon: Database,
  },
  {
    title: "Obstacle-Avoiding Robot",
    shortTitle: "Robot",
    description: "Autonomous robot using ultrasonic sensing for real-time obstacle detection.",
    detailedDescription: "An embedded systems project featuring autonomous navigation. The robot uses ultrasonic sensors for distance measurement, servo motors for directional control, and Arduino-based decision-making algorithms to navigate complex environments while avoiding obstacles in real-time.",
    technologies: ["Arduino", "Sensors"],
    icon: Cpu,
  },
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const Icon = project.icon;
  const [isHovered, setIsHovered] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Dialog>
      <div ref={ref}>
        <Card
          className={`group relative overflow-hidden border-border transition-all duration-700 bg-card/50 dark:bg-card/30 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
          style={{ transitionDelay: `${index * 150}ms` }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
        <CardHeader className="relative">
          {/* Thumbnail */}
          <div className="w-full h-40 rounded-xl mb-4 flex items-center justify-center overflow-hidden transition-all duration-500 bg-white dark:bg-white">
            <div className={`transition-all duration-500 ${
              isHovered ? 'scale-100' : 'scale-150'
            }`}>
              <span className={`font-playball text-black transition-all duration-500 italic ${
                isHovered ? 'text-4xl md:text-5xl' : 'text-7xl md:text-8xl'
              } whitespace-nowrap`}>
                {project.shortTitle}
              </span>
            </div>
          </div>

          <div className="flex items-start justify-between mb-2">
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
          <CardDescription className="text-base">{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech: string, techIndex: number) => (
              <Badge key={techIndex} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="w-full min-h-12 md:min-h-10">
              <Eye className="mr-2 h-3 w-3" />
              Show Details
            </Button>
          </DialogTrigger>
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
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, techIndex: number) => (
              <Badge key={techIndex} variant="secondary" className="text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <SectionHeading icon={Rocket} subtitle="A collection of projects showcasing my skills in full-stack development, AI/ML, and embedded systems">
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
              const [isHovered, setIsHovered] = useState(false);
              const { ref, isVisible } = useScrollAnimation();
              const isEven = index % 2 === 0;
              
              return (
                <Dialog key={index}>
                  <div ref={ref}>
                    <Card
                      className={`group relative overflow-hidden border-border transition-all duration-700 bg-card/50 dark:bg-card/30 ${
                        isVisible 
                          ? "opacity-100 translate-x-0" 
                          : isEven 
                            ? "opacity-0 -translate-x-20" 
                            : "opacity-0 translate-x-20"
                      }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                    <CardContent className="p-0">
                      <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                        {/* Thumbnail */}
                        <div className="relative w-full md:w-[400px] lg:w-[450px] h-64 md:h-auto flex items-center justify-center overflow-hidden transition-all duration-500 bg-white dark:bg-white rounded-t-xl md:rounded-none">
                          <div className={`transition-all duration-500 ${
                            isHovered ? 'scale-100' : 'scale-150'
                          }`}>
                            <span className={`font-playball text-black transition-all duration-500 italic ${
                              isHovered ? 'text-5xl md:text-6xl' : 'text-7xl md:text-8xl lg:text-9xl'
                            } whitespace-nowrap`}>
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
                              <Badge variant="secondary" className="ml-2 flex-shrink-0">
                                {project.status}
                              </Badge>
                            )}
                          </div>
                          <CardDescription className="text-base mb-6">{project.description}</CardDescription>
                          
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech: string, techIndex: number) => (
                              <Badge key={techIndex} variant="outline">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" className="min-h-12 md:min-h-10 px-6">
                              <Eye className="mr-2 h-3 w-3" />
                              Show Details
                            </Button>
                          </DialogTrigger>
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
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech: string, techIndex: number) => (
                          <Badge key={techIndex} variant="secondary" className="text-sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
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
