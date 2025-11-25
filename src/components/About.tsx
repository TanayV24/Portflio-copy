import { useState, useEffect, useRef } from "react";
import { User } from "lucide-react";

const About = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight && rect.bottom > 0) {
          setIsVisible(true);
          const progress = Math.max(0, Math.min((windowHeight - rect.top) / windowHeight, 1));
          setScrollProgress(progress);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getEntranceStyle = (type: string, index = 0) => {
    const progress = scrollProgress;
    
    if (!isVisible) {
      switch(type) {
        case 'heading':
          return { transform: 'translateY(50px)', opacity: 0 };
        case 'left':
          return { transform: `translateX(-${150 * (1 + index * 0.1)}px) scale(0.95)`, opacity: 0 };
        case 'right':
          return { transform: `translateX(${150 * (1 + index * 0.1)}px) scale(0.95)`, opacity: 0 };
        default:
          return {};
      }
    }

    switch(type) {
      case 'heading':
        return {
          transform: `translateY(${50 * (1 - progress)}px)`,
          opacity: progress,
          transition: 'all 0.6s ease-out',
        };
      case 'left':
        return {
          transform: `translateX(-${150 * (1 + index * 0.1) * (1 - progress)}px) scale(${0.95 + 0.05 * progress})`,
          opacity: progress,
          transition: 'all 0.6s ease-out',
          transitionDelay: `${index * 0.1}s`,
        };
      case 'right':
        return {
          transform: `translateX(${150 * (1 + index * 0.1) * (1 - progress)}px) scale(${0.95 + 0.05 * progress})`,
          opacity: progress,
          transition: 'all 0.6s ease-out',
          transitionDelay: `${index * 0.1}s`,
        };
      default:
        return {};
    }
  };

  const cards = [
    {
      title: "Builder",
      description: "From concept to deployment, creating solutions that work."
    },
    {
      title: "Innovator",
      description: "Always exploring new tools and pushing boundaries."
    },
    {
      title: "Problem Solver",
      description: "Turning challenges into opportunities, one bug at a time."
    },
  ];

  return (
    <section 
      ref={aboutRef}
      id="about" 
      className="relative min-h-screen flex items-center justify-center py-20 px-6 md:px-12 lg:px-20 bg-background overflow-hidden transition-colors duration-300"
    >
      {/* Background */}
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
          style={{
            opacity: 0.4,
          }}
        />
        <div 
          className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tl from-purple-500/20 via-primary/10 to-transparent rounded-full blur-3xl"
          style={{
            opacity: 0.4,
          }}
        />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-16" style={getEntranceStyle('heading')}>
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <User className="w-6 h-6 text-primary dark:text-white" />
            <span className="text-base font-semibold text-primary dark:text-white uppercase tracking-wider">About Me</span>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-purple-500 to-transparent rounded-full" />
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Side - Story */}
          <div className="space-y-8" style={getEntranceStyle('left', 0)}>
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-purple-500 to-transparent rounded-full" />
              <div className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  <span className="text-foreground font-semibold">Computer Science Engineering student</span> at{" "}
                  <span className="relative inline-block text-foreground font-semibold">
                    Indus University
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-purple-500" />
                  </span>
                  , passionate about building real-world tech solutions.
                </p>
                
                <p>
                  Whether it's a <span className="text-foreground font-medium">full-stack application</span>, an{" "}
                  <span className="text-foreground font-medium">AI-powered tool</span>, or an{" "}
                  <span className="text-foreground font-medium">automated system</span>—I love creating products that make a difference.
                </p>
                
                <p>
                  From designing systems from scratch to improving existing ones, I'm always excited about transforming ideas into{" "}
                  <span className="text-foreground font-semibold">smooth, scalable, and user-friendly solutions</span>.
                </p>
              </div>
            </div>

            {/* Fun Fact Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
              <span className="text-xl">☕</span>
              <p className="text-xs md:text-sm text-foreground italic">
                I have a PhD in accidentally breaking things that were working five minutes ago.
              </p>
            </div>
          </div>

          {/* Right Side - Cards */}
          <div className="space-y-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="group relative"
                style={getEntranceStyle('right', index)}
              >
                <div className="relative p-5 md:p-6 rounded-2xl bg-card border-2 border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Sliding Accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-purple-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  
                  <div className="relative z-10">
                    {/* Title */}
                    <h3 className="text-base md:text-lg font-bold text-foreground mb-2">{card.title}</h3>
                    
                    {/* Description */}
                    <p className="text-xs md:text-sm text-muted-foreground">{card.description}</p>
                  </div>

                  {/* Bottom Highlight */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent transition-colors duration-300" />
    </section>
  );
};

export default About;
