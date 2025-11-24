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
import { motion, Variants } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeading from "./SectionHeading";

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

// Framer Motion variants
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 140, damping: 18 },
  },
};

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
    >
      {/* animated background blobs */}
      <motion.div
        className="pointer-events-none absolute -top-24 right-0 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 -left-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
        animate={{ y: [0, 22, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container max-w-6xl mx-auto relative z-10">
        <SectionHeading
          icon={Rocket}
         /* subtitle="Major case studies and supporting builds that highlight full‑stack, AI/ML and embedded work."*/
        >
          Projects
        </SectionHeading>

        {/* Major Projects */}
        <motion.div
          className="mb-20 space-y-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Major Projects
            </h3>
            {/*<p className="text-xs md:text-sm text-muted-foreground max-w-sm text-right">
              High‑impact projects with end‑to‑end ownership, from problem
              framing to deployment and iteration.
            </p>*/}
          </div>

          {majorProjects.map((project, index) => (
            <MajorProjectRow key={project.title} project={project} index={index} />
          ))}
        </motion.div>

        {/* Minor Projects */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="flex items-center justify-between gap-4 mb-6">
            <h3 className="text-2xl md:text-3xl font-semibold">Minor Projects</h3>
            {/*<p className="text-xs md:text-sm text-muted-foreground max-w-xs text-right">
              Smaller tools, experiments and client work that complement the
              major projects.
            </p>*/}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {minorProjects.map((project, index) => (
              <MinorProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

const MajorProjectRow = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const Icon = project.icon;
  const isEven = index % 2 === 0;
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Dialog>
      <motion.div
        ref={ref}
        variants={cardVariant}
        animate={isVisible ? "visible" : "hidden"}
        initial="hidden"
      >
        <Card className="group relative overflow-hidden border-border bg-card/70 dark:bg-card/40 backdrop-blur-md hover:shadow-2xl hover:shadow-primary/15 transition-all duration-300">
          <CardContent className="p-0">
            <div
              className={`flex flex-col ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Thumbnail */}
              <div className="relative w-full md:w-[380px] lg:w-[430px] h-60 md:h-auto bg-gradient-to-br from-primary/15 via-transparent to-primary/25 p-[1px]">
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-primary/25" />
                <div className="relative h-full w-full rounded-2xl overflow-hidden bg-card-light/40 dark:bg-muted/40 border border-border/60 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-0.5 group-hover:scale-[1.02] group-hover:rotate-[0.4deg]">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover opacity-25 group-hover:opacity-45 transition-opacity duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-background/92 via-background/60 to-transparent" />
                  <span className="relative z-10 flex h-full items-center justify-center text-xl md:text-2xl font-semibold text-black dark:text-primary-foreground text-center px-6">
                    {project.shortTitle}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-7 md:p-9 lg:p-10">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl md:text-2xl">
                      {project.title}
                    </CardTitle>
                  </div>
                  {project.status && (
                    <Badge variant="secondary" className="text-xs">
                      {project.status}
                    </Badge>
                  )}
                </div>

                <CardDescription className="text-base mb-4">
                  {project.description}
                </CardDescription>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="px-4 h-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md"
                    >
                      <Eye className="mr-2 h-3 w-3" />
                      Read case study
                    </Button>
                  </DialogTrigger>
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="gap-2 h-10 transition-transform duration-300 group-hover:-translate-y-0.5"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      View source
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <DialogContent className="max-w-3xl">
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
            {project.technologies.map((tech, i) => (
              <Badge key={i} variant="secondary" className="text-sm">
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

const MinorProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const Icon = project.icon;
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Dialog>
      <motion.div
        ref={ref}
        variants={cardVariant}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        style={{ transitionDelay: `${index * 80}ms` }}
      >
        <Card className="group relative h-full overflow-hidden border-border bg-card/70 dark:bg-card/40 backdrop-blur-md hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
          <CardHeader className="pb-3">
            <div className="relative w-full h-32 rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-primary/20 p-[1px] mb-3">
              <div className="relative h-full w-full rounded-xl overflow-hidden bg-card-light/40 dark:bg-muted/40">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-18 group-hover:opacity-35 transition-opacity duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent" />
                <span className="relative z-10 flex h-full items-center justify-center text-[13px] md:text-sm font-semibold text-black dark:text-primary-foreground text-center px-3">
                  {project.shortTitle}
                </span>
              </div>
            </div>
            <div className="flex items-start justify-between gap-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Icon className="h-4 w-4 text-primary" />
                {project.title}
              </CardTitle>
              {project.status && (
                <Badge variant="secondary" className="text-[10px] px-2 py-0.5">
                  {project.status}
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <CardDescription className="text-xs md:text-sm mb-3 line-clamp-3">
              {project.description}
            </CardDescription>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.technologies.map((tech, i) => (
                <Badge key={i} variant="outline" className="text-[11px] px-2">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 h-8 text-xs px-2"
                >
                  <Eye className="mr-1 h-3 w-3" />
                  Details
                </Button>
              </DialogTrigger>
              <Button
                asChild
                size="icon"
                variant="ghost"
                className="h-8 w-8"
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
      </motion.div>

      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <Icon className="h-6 w-6 text-primary" />
            {project.title}
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
            {project.technologies.map((tech, i) => (
              <Badge key={i} variant="secondary" className="text-sm">
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

export default Projects;
