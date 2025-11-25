import {
  Card,
  CardContent,
  CardDescription,
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
  Brain,
  Database,
  Building2,
  BotMessageSquare,
  Server,
  ShoppingBag,
  Sun,
  User,
  FileText,
  Bot,
  Eye,
  Rocket,
  Github,
  GraduationCap,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Project = {
  title: string;
  shortTitle: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  status?: string;
  icon: any;
  github: string;
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
    icon: GraduationCap,
    github: "https://github.com/TanayV24/Career_Guider",
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
    github: "https://github.com/TanayV24/Edulytics",
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
    github: "https://github.com/TanayV24/Ai-Lead-Generator",
  },
  {
    title: "Smart AMC System",
    shortTitle: "AMC System",
    description:
      "NLP-powered concept for automatically classifying and routing municipal complaints.",
    detailedDescription:
      "A smart governance solution using natural language processing to categorize citizen complaints. Automatically routes issues to relevant departments, tracks resolution status, and provides analytics for municipal administration.",
    technologies: ["Node.js", "Flutter"],
    icon: Building2,
    github: "https://github.com/your-username/smart-amc",
  },
  {
    title: "University Chatbot",
    shortTitle: "Chatbot",
    description:
      "NLP chatbot answering institutional FAQs using a Python NN pipeline and JSON data.",
    detailedDescription:
      "An intelligent conversational assistant for university information queries. Built with neural networks for intent classification, entity extraction, and context-aware responses. Handles admission queries, course information, and campus facilities.",
    technologies: ["Python", "NLP"],
    icon: BotMessageSquare,
    github: "https://github.com/TanayV24/University-chatbot",
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
    github: "https://github.com/TanayV24/HRMS",
  },
];

const minorProjects: Project[] = [
  {
    title: "E-Commerce Shoe Ordering Website",
    shortTitle: "Shoe Ordering",
    description:
      "MERN-based platform enabling authentication, product browsing, and seamless shoe ordering.",
    detailedDescription:
      "A full-featured e-commerce platform built with the MERN stack. Implements user authentication, product catalog with search and filtering, shopping cart functionality, and secure checkout process. Features include user profiles, order history, and admin dashboard for inventory management.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    icon: ShoppingBag,
    github: "https://github.com/TanayV24/shoe-ordering-website",
  },
  {
    title: "Light-Tracking Solar Panel",
    shortTitle: "Solar Panel",
    description:
      "Dual-servo solar tracker maximizing sunlight capture using sensor feedback.",
    detailedDescription:
      "An IoT project implementing automatic solar panel positioning based on light intensity. Uses LDR sensors and servo motors to track the sun's position throughout the day, significantly improving energy capture efficiency.",
    technologies: ["Arduino", "Sensors"],
    icon: Sun,
    github: "https://github.com/your-username/light-tracking-solar-panel",
  },
  {
    title: "Employee Management System",
    shortTitle: "Employee Mgmt",
    description:
      "Java application automating attendance, payroll, and basic HR operations.",
    detailedDescription:
      "A comprehensive desktop application for managing employee records, attendance tracking, and payroll processing. Features include automated salary calculations, leave management, performance tracking, and detailed reporting capabilities with data visualization.",
    technologies: ["Java", "MySQL"],
    icon: User,
    github: "https://github.com/your-username/employee-management",
  },
  {
    title: "Online Exam Portal",
    shortTitle: "Exam Portal",
    description:
      "Android MCQ exam system with Firebase login, storage, and real-time syncing.",
    detailedDescription:
      "A mobile-first examination platform for conducting multiple-choice tests. Includes secure authentication, timed exams, instant result calculation, question bank management, and detailed analytics. Features offline support with Firebase synchronization when connectivity returns.",
    technologies: ["Java", "Firebase"],
    icon: FileText,
    github: "https://github.com/TanayV24/Exam-Online-Portal",
  },
  {
    title: "New User Telecom Prediction",
    shortTitle: "Telecom ML",
    description:
      "ML solution predicting onboarding user behavior for telecom insights.",
    detailedDescription:
      "A predictive analytics system for telecom companies to forecast new user behavior and churn probability. Uses historical data and user demographics to identify high-value customers and predict service plan preferences, enabling targeted marketing strategies.",
    technologies: ["Python", "ML"],
    icon: Database,
    github: "https://github.com/TanayV24/New-user-prediction",
  },
  {
    title: "Obstacle-Avoiding Robot",
    shortTitle: "Robot",
    description:
      "Autonomous robot using ultrasonic sensing for real-time obstacle detection.",
    detailedDescription:
      "An embedded systems project featuring autonomous navigation. The robot uses ultrasonic sensors for distance measurement, servo motors for directional control, and Arduino-based decision-making algorithms to navigate complex environments while avoiding obstacles in real-time.",
    technologies: ["Arduino", "Sensors"],
    icon: Bot,
    github: "https://github.com/your-username/obstacle-avoiding-robot",
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
  hidden: (custom: boolean) => ({ opacity: 0, y: 32, scale: 0.96, x: custom ? -48 : 48 }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 140, damping: 18 },
  },
};

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="relative min-h-screen py-20 px-6 md:px-12 lg:px-20 bg-background overflow-hidden transition-colors duration-300"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
    >
      {/* Background matching Hero/About */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-5 dark:opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(120, 119, 198, 0.2) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(120, 119, 198, 0.2) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-primary/20 via-purple-500/10 to-transparent rounded-full blur-3xl"
          style={{ opacity: 0.4 }}
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tl from-purple-500/20 via-primary/10 to-transparent rounded-full blur-3xl"
          style={{ opacity: 0.4 }}
          animate={{ y: [0, 22, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Main Section Heading - matching About style */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Rocket className="w-6 h-6 text-primary dark:text-white" />
            <span className="text-base font-semibold text-primary dark:text-white uppercase tracking-wider">Projects</span>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-purple-500 to-transparent rounded-full" />
        </div>

        {/* Major Projects */}
        <motion.div
          className="mb-20 space-y-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
              Major Projects
            </h3>
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
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
              Minor Projects
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {minorProjects.map((project, index) => (
              <MinorProjectRow
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Separator matching Hero/About */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent transition-colors duration-300" />
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
        custom={isEven}
        animate={isVisible ? "visible" : "hidden"}
        initial="hidden"
      >
        <Card className="group relative overflow-hidden border-border bg-card/70 dark:bg-card/40 backdrop-blur-md hover:shadow-2xl hover:shadow-foreground/10 dark:hover:shadow-primary/15 transition-all duration-300">
          <CardContent className="p-0 group-hover:scale-[1.01] transition-transform duration-300">
            <div
              className={`flex flex-col ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Icon Thumbnail with hover effect */}
              <div className="relative w-full md:w-[380px] lg:w-[430px] h-60 md:h-auto bg-gradient-to-br from-foreground/5 via-transparent to-foreground/10 dark:from-primary/15 dark:via-transparent dark:to-primary/25 p-[1px]">
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-foreground/15 dark:bg-primary/25" />
                <div className="relative h-full w-full rounded-2xl overflow-hidden bg-muted/30 dark:bg-muted/40 border border-border/60 shadow-sm transition-all duration-500 group-hover:shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-15 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <Icon className="h-24 w-24 md:h-32 md:w-32 text-foreground dark:text-primary" />
                  </div>
                  
                  <span className="relative z-20 flex h-full items-center justify-center text-xl md:text-2xl font-semibold text-foreground dark:text-primary-foreground text-center px-6 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    {project.shortTitle}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-7 md:p-9 lg:p-10 group-hover:font-semibold transition-all duration-300">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-foreground dark:text-primary" />
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

                <CardDescription className="text-base mb-4 group-hover:text-foreground dark:group-hover:text-foreground transition-colors duration-300">
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
            <Icon className="h-6 w-6 text-foreground dark:text-primary" />
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

const MinorProjectRow = ({
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
        custom={isEven}
        animate={isVisible ? "visible" : "hidden"}
        initial="hidden"
      >
        <Card className="group relative h-full overflow-hidden border-border bg-card/70 dark:bg-card/40 backdrop-blur-md hover:shadow-xl hover:shadow-foreground/10 dark:hover:shadow-primary/10 transition-all duration-300">
          <CardContent className="p-0 h-full group-hover:scale-[1.01] transition-transform duration-300">
            <div
              className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-stretch gap-0 h-full`}
            >
              <div className="relative w-full md:w-[200px] lg:w-[220px] h-44 md:h-full bg-gradient-to-br from-foreground/5 via-transparent to-foreground/10 dark:from-primary/15 dark:via-transparent dark:to-primary/25 p-[1px] flex-shrink-0">
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-foreground/15 dark:bg-primary/25" />
                <div className="relative h-full w-full rounded-2xl overflow-hidden bg-muted/30 dark:bg-muted/40 border border-border/60 shadow-sm transition-all duration-500 group-hover:shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-15 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <Icon className="h-16 w-16 md:h-20 md:w-20 text-foreground dark:text-primary" />
                  </div>
                  
                  <span className="relative z-20 flex h-full items-center justify-center text-sm md:text-base font-semibold text-foreground dark:text-primary-foreground text-center px-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    {project.shortTitle}
                  </span>
                </div>
              </div>

              <div className="flex-1 p-4 md:p-6 lg:p-7 group-hover:font-semibold transition-all duration-300">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-foreground dark:text-primary" />
                    <CardTitle className="text-base">
                      {project.title}
                    </CardTitle>
                  </div>
                  {project.status && (
                    <Badge variant="secondary" className="text-xs">
                      {project.status}
                    </Badge>
                  )}
                </div>

                <CardDescription className="text-sm mb-3 line-clamp-3 group-hover:text-foreground dark:group-hover:text-foreground transition-colors duration-300">
                  {project.description}
                </CardDescription>

                <div className="flex flex-wrap gap-2 mb-3">
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
                      className="flex-1 h-9 text-xs px-2"
                    >
                      <Eye className="mr-1 h-3 w-3" />
                      Details
                    </Button>
                  </DialogTrigger>
                  <Button
                    asChild
                    size="icon"
                    variant="ghost"
                    className="h-9 w-9"
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
      </motion.div>

      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <Icon className="h-6 w-6 text-foreground dark:text-primary" />
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
