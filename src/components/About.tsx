

import SectionHeading from "./SectionHeading";
import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-20 bg-section-bg relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tl from-accent/20 via-primary/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <SectionHeading icon={User}>About Me</SectionHeading>

        <div className="prose prose-lg max-w-none text-center">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            Hi! I'm a Computer Science Engineering student at{" "}
            <span className="text-foreground font-semibold">Indus University</span> who loves building real,
            practical tech—whether it's a full-stack application, an AI-powered tool, or an automated
            system that makes life a little easier. I enjoy working across the stack and exploring how
            software, data, and intelligent systems come together to solve meaningful problems.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            I'm passionate about creating products that aren't just functional, but genuinely helpful
            and enjoyable to use. Whether I'm designing a system from scratch or improving an existing
            one, I'm always excited about transforming ideas into smooth, scalable, and user-friendly solutions.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            <span className="italic">Fun fact</span>: I have a PhD in accidentally breaking things that were working five minutes ago.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
