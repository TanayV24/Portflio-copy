import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Research from "@/components/Research";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import PageLoader from "@/components/PageLoader";

const Index = () => {
  return (
    <div className="min-h-screen">
      <PageLoader />
      <Navigation />
      <div className="space-y-0">
        <section className="animate-fade-in-up">
          <Hero />
        </section>
        <section className="animate-fade-in-up [animation-delay:100ms]">
          <About />
        </section>
        <section className="animate-fade-in-up [animation-delay:200ms]">
          <Projects />
        </section>
        <section className="animate-fade-in-up [animation-delay:300ms]">
          <Skills />
        </section>
        <section className="animate-fade-in-up [animation-delay:400ms]">
          <Experience />
        </section>
        <section className="animate-fade-in-up [animation-delay:500ms]">
          <Certificates />
        </section>
        <section className="animate-fade-in-up [animation-delay:600ms]">
          <Research />
        </section>
        <section className="animate-fade-in-up [animation-delay:700ms]">
          <Contact />
        </section>
      </div>
      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default Index;
