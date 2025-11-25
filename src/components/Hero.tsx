import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import tanayPhoto from "@/assets/tanay-photo.jpg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [decryptedText, setDecryptedText] = useState("");
  const [decryptedText2, setDecryptedText2] = useState("");
  const [descriptionComplete, setDescriptionComplete] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef(null);

  const fullText1 = "Full-stack developer passionate about building real-world projects and exploring cutting-edge AI technologies.";
  const fullText2 = "When I'm not crafting code, you'll catch me dominating on the court, strategizing in games, or enjoying quality time with friends.";
  const name = "Tanay Vakharia";

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight;
        const scrolled = window.scrollY;
        const progress = Math.max(0, Math.min(scrolled / (heroHeight * 0.5), 1));
        setScrollProgress(progress);
      }
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`";
    let currentIndex = 0;
    let iterations = 0;

    const decrypt = () => {
      if (currentIndex < fullText1.length) {
        setDecryptedText(
          fullText1
            .split("")
            .map((char, index) => {
              if (index < currentIndex) {
                return char;
              }
              if (index === currentIndex) {
                return iterations < 1 ? chars[Math.floor(Math.random() * chars.length)] : char;
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        iterations++;
        if (iterations >= 1) {
          currentIndex++;
          iterations = 0;
        }

        setTimeout(decrypt, 15);
      } else if (currentIndex === fullText1.length) {
        setTimeout(() => {
          currentIndex = 0;
          iterations = 0;
          decryptSecond();
        }, 200);
        currentIndex++;
      }
    };

    const decryptSecond = () => {
      if (currentIndex < fullText2.length) {
        setDecryptedText2(
          fullText2
            .split("")
            .map((char, index) => {
              if (index < currentIndex) {
                return char;
              }
              if (index === currentIndex) {
                return iterations < 1 ? chars[Math.floor(Math.random() * chars.length)] : char;
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        iterations++;
        if (iterations >= 1) {
          currentIndex++;
          iterations = 0;
        }

        setTimeout(decryptSecond, 15);
      } else if (currentIndex === fullText2.length) {
        setTimeout(() => setDescriptionComplete(true), 200);
      }
    };

    setTimeout(decrypt, 6000);
  }, [mounted, fullText1, fullText2]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getExitTransform = (type, index = 0) => {
    const progress = scrollProgress;
    
    if (progress === 0) return {};
    
    switch(type) {
      case 'name':
        return {
          transform: `translateX(${-300 * progress}px)`,
          opacity: Math.max(0, 1 - progress * 1.5),
        };
      case 'photo':
        return {
          transform: `translateX(${200 * progress}px) scale(${1 - 0.4 * progress})`,
          opacity: Math.max(0, 1 - progress * 1.5),
        };
      case 'description':
        return {
          transform: `translateY(${80 * progress}px) scaleY(${1 - 0.6 * progress})`,
          opacity: Math.max(0, 1 - progress * 1.5),
        };
      case 'button-left':
        return {
          transform: `translateX(${-200 * progress}px) rotate(${-10 * progress}deg)`,
          opacity: Math.max(0, 1 - progress * 1.5),
        };
      case 'button-right':
        return {
          transform: `translateX(${200 * progress}px) rotate(${10 * progress}deg)`,
          opacity: Math.max(0, 1 - progress * 1.5),
        };
      case 'mockup':
        const isLeft = index % 2 === 0;
        const speed = 1 + (index * 0.2);
        const direction = isLeft ? -1 : 1;
        const distance = 200 * speed * progress;
        const rotation = (isLeft ? -20 : 20) * progress;
        
        return {
          transform: `translateX(${direction * distance}px) rotate(${rotation}deg) scale(${1 - 0.3 * progress})`,
          opacity: Math.max(0, 1 - progress * 1.5),
        };
      default:
        return {};
    }
  };

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 md:pt-20 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden bg-background transition-colors duration-300"
    >
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-5 dark:opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(120, 119, 198, 0.2) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(120, 119, 198, 0.2) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
      </div>

      <style>{`
        @keyframes letterReveal {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        .letter-reveal {
          display: inline-block;
          opacity: 0;
          animation: letterReveal 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .name-line {
          opacity: 0;
          animation: letterReveal 0.6s ease-out forwards;
          animation-delay: calc(1.5s + ${name.length} * 0.1s + 0.2s);
        }

        @keyframes liquidMorph {
          0% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            transform: scale(0.8) rotate(-10deg);
            opacity: 0;
            filter: blur(20px);
          }
          50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
            filter: blur(10px);
          }
          100% {
            border-radius: 1rem;
            transform: scale(1) rotate(0deg);
            opacity: 1;
            filter: blur(0);
          }
        }

        .liquid-morph {
          opacity: 0;
          animation: liquidMorph 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) 4.5s both;
        }

        @keyframes dotsReveal {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        .dots-container {
          opacity: 0;
          animation: dotsReveal 0.5s ease-out 6s forwards;
        }

        @keyframes particleExplode {
          0% {
            opacity: 0;
            transform: translate(var(--tx), var(--ty)) scale(0) rotate(var(--rotate));
            filter: blur(10px);
          }
          60% {
            filter: blur(5px);
          }
          100% {
            opacity: 1;
            transform: translate(0, 0) scale(1) rotate(0deg);
            filter: blur(0);
          }
        }

        .particle-explode {
          opacity: 0 !important;
        }

        .particle-explode.active {
          animation: particleExplode 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 1 !important;
        }

        .exit-animate {
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), 
                      opacity 0.4s ease-out !important;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .decrypt-cursor {
          display: inline-block;
          width: 2px;
          height: 1em;
          background: currentColor;
          margin-left: 2px;
          animation: blink 0.7s infinite;
        }

        @keyframes moveUp {
          0% { transform: translateY(0); opacity: 0.5; }
          100% { transform: translateY(-30px); opacity: 0; }
        }
        @keyframes moveDown {
          0% { transform: translateY(0); opacity: 0.5; }
          100% { transform: translateY(30px); opacity: 0; }
        }
        @keyframes moveLeft {
          0% { transform: translateX(0); opacity: 0.5; }
          100% { transform: translateX(-30px); opacity: 0; }
        }
        @keyframes moveRight {
          0% { transform: translateX(0); opacity: 0.5; }
          100% { transform: translateX(30px); opacity: 0; }
        }
        
        .dot-up { animation: moveUp 4s ease-out infinite; }
        .dot-down { animation: moveDown 4s ease-out infinite; }
        .dot-left { animation: moveLeft 4s ease-out infinite; }
        .dot-right { animation: moveRight 4s ease-out infinite; }

        /* Mobile responsive mockups */
        @media (max-width: 768px) {
          .mockup-card {
            transform: scale(0.85) !important;
          }
        }
      `}</style>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="space-y-8">
          
          {/* Name and Photo Row */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 exit-animate" style={getExitTransform('name')}>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight transition-colors duration-300">
                {name.split("").map((letter, index) => (
                  <span
                    key={index}
                    className="letter-reveal"
                    style={{
                      animationDelay: `${1.5 + index * 0.1}s`,
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </h1>
              <div className="name-line mt-2 h-1 w-24 sm:w-32 bg-gradient-to-r from-primary via-purple-500 to-transparent rounded-full" />
            </div>
            
            {/* Photo */}
            <div className="relative self-end sm:self-auto exit-animate" style={getExitTransform('photo')}>
              <div className="dots-container absolute inset-0 -m-6 sm:-m-8 overflow-visible dark:hidden">
                {[...Array(12)].map((_, row) => 
                  [...Array(12)].map((_, col) => {
                    const centerRow = 6;
                    const centerCol = 6;
                    const distanceFromCenter = Math.sqrt(
                      Math.pow(row - centerRow, 2) + Math.pow(col - centerCol, 2)
                    );
                    const delay = distanceFromCenter * 0.15;
                    
                    let animationClass = '';
                    if (row < centerRow && col < centerCol) {
                      animationClass = Math.abs(row - centerRow) > Math.abs(col - centerCol) ? 'dot-up' : 'dot-left';
                    } else if (row < centerRow && col >= centerCol) {
                      animationClass = Math.abs(row - centerRow) > Math.abs(col - centerCol) ? 'dot-up' : 'dot-right';
                    } else if (row >= centerRow && col < centerCol) {
                      animationClass = Math.abs(row - centerRow) > Math.abs(col - centerCol) ? 'dot-down' : 'dot-left';
                    } else {
                      animationClass = Math.abs(row - centerRow) > Math.abs(col - centerCol) ? 'dot-down' : 'dot-right';
                    }
                    
                    return (
                      <div
                        key={`light-${row}-${col}`}
                        className={`absolute w-0.5 h-0.5 rounded-full bg-slate-400 ${animationClass}`}
                        style={{
                          top: `${row * 8.5}%`,
                          left: `${col * 8.5}%`,
                          animationDelay: `${delay}s`,
                        }}
                      />
                    );
                  })
                )}
              </div>

              <div className="dots-container absolute inset-0 -m-6 sm:-m-8 overflow-visible hidden dark:block">
                {[...Array(12)].map((_, row) => 
                  [...Array(12)].map((_, col) => {
                    const centerRow = 6;
                    const centerCol = 6;
                    const distanceFromCenter = Math.sqrt(
                      Math.pow(row - centerRow, 2) + Math.pow(col - centerCol, 2)
                    );
                    const delay = distanceFromCenter * 0.15;
                    
                    let animationClass = '';
                    if (row < centerRow && col < centerCol) {
                      animationClass = Math.abs(row - centerRow) > Math.abs(col - centerCol) ? 'dot-up' : 'dot-left';
                    } else if (row < centerRow && col >= centerCol) {
                      animationClass = Math.abs(row - centerRow) > Math.abs(col - centerCol) ? 'dot-up' : 'dot-right';
                    } else if (row >= centerRow && col < centerCol) {
                      animationClass = Math.abs(row - centerRow) > Math.abs(col - centerCol) ? 'dot-down' : 'dot-left';
                    } else {
                      animationClass = Math.abs(row - centerRow) > Math.abs(col - centerCol) ? 'dot-down' : 'dot-right';
                    }
                    
                    return (
                      <div
                        key={`dark-${row}-${col}`}
                        className={`absolute w-0.5 h-0.5 rounded-full ${animationClass}`}
                        style={{
                          top: `${row * 8.5}%`,
                          left: `${col * 8.5}%`,
                          animationDelay: `${delay}s`,
                          backgroundColor: 'hsl(0 0% 60%)',
                        }}
                      />
                    );
                  })
                )}
              </div>
              
              <div className="relative group z-10">
                <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 liquid-morph" />
                <div className="relative w-24 h-32 sm:w-28 sm:h-36 md:w-32 md:h-40 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-[hsl(0_0%_15%)] dark:to-[hsl(0_0%_10%)] p-1 border border-slate-300 dark:border-border shadow-2xl transform transition-all duration-500 group-hover:scale-105 liquid-morph overflow-hidden">
                  <img
                    src={tanayPhoto}
                    alt="Tanay Vakharia"
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl exit-animate" style={getExitTransform('description')}>
            <p className="text-xs sm:text-sm md:text-sm text-muted-foreground leading-relaxed transition-colors duration-300 font-mono">
              <span className="font-medium text-foreground">
                {decryptedText}
                {decryptedText.length < fullText1.length && decryptedText.length > 0 && <span className="decrypt-cursor" />}
              </span>
              <br />
              <span className="italic mt-1 inline-block">
                {decryptedText2}
                {decryptedText2.length < fullText2.length && decryptedText.length >= fullText1.length && (
                  <span className="decrypt-cursor" />
                )}
              </span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-2">
            <div className="exit-animate" style={getExitTransform('button-left')}>
              <Button 
                onClick={scrollToContact} 
                size="sm"
                className={`particle-explode ${descriptionComplete ? 'active' : ''} group rounded-full px-3 sm:px-4 py-2 sm:py-3 text-xs font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]`}
                style={{
                  ['--tx' as string]: '-100px',
                  ['--ty' as string]: '-50px',
                  ['--rotate' as string]: '-45deg',
                  animationDelay: '0s'
                }}
              >
                <Mail className="mr-1.5 sm:mr-2 h-3 w-3" />
                Let&apos;s Connect
              </Button>
            </div>
            
            <div className="exit-animate" style={getExitTransform('button-left')}>
              <Button 
                variant="outline" 
                size="sm"
                className={`particle-explode ${descriptionComplete ? 'active' : ''} rounded-full px-3 sm:px-4 py-2 sm:py-3 text-xs font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105`}
                style={{
                  ['--tx' as string]: '-80px',
                  ['--ty' as string]: '30px',
                  ['--rotate' as string]: '30deg',
                  animationDelay: '0.05s'
                }}
                asChild
              >
                <a href="/Tanay_Resume.pdf" download="Tanay_Vakharia_Resume.pdf">
                  <Download className="mr-1.5 sm:mr-2 h-3 w-3" />
                  Download CV
                </a>
              </Button>
            </div>

            <div className="flex gap-2">
              <div className="exit-animate" style={getExitTransform('button-right')}>
                <a
                  href="https://www.linkedin.com/in/tanay-vakharia-3b0632249/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`particle-explode ${descriptionComplete ? 'active' : ''} w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-secondary border-2 border-border backdrop-blur-sm flex items-center justify-center hover:bg-accent hover:border-primary transition-all duration-300 hover:scale-110`}
                  style={{
                    ['--tx' as string]: '60px',
                    ['--ty' as string]: '-40px',
                    ['--rotate' as string]: '60deg',
                    animationDelay: '0.1s'
                  }}
                >
                  <Linkedin className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-foreground" />
                </a>
              </div>
              <div className="exit-animate" style={getExitTransform('button-right')}>
                <a
                  href="https://github.com/TanayV24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`particle-explode ${descriptionComplete ? 'active' : ''} w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-secondary border-2 border-border backdrop-blur-sm flex items-center justify-center hover:bg-accent hover:border-primary transition-all duration-300 hover:scale-110`}
                  style={{
                    ['--tx' as string]: '80px',
                    ['--ty' as string]: '20px',
                    ['--rotate' as string]: '-30deg',
                    animationDelay: '0.15s'
                  }}
                >
                  <Github className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* Mockups - TILTED */}
          <div className="pt-6 sm:pt-8 -mx-12 sm:-mx-24 md:-mx-36 lg:-mx-48 px-4 sm:px-6 md:px-12 lg:px-20 overflow-x-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5" style={{ perspective: '1000px' }}>
              
              {/* VS Code - TILTED LEFT */}
              <div 
                className={`mockup-card particle-explode ${descriptionComplete ? 'active' : ''} exit-animate w-full h-36 sm:h-42 bg-gradient-to-br from-slate-800 to-slate-900 dark:from-[hsl(0_0%_13%)] dark:to-[hsl(0_0%_10%)] border-2 border-slate-700 dark:border-border rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-3 sm:p-4 flex flex-col justify-between transform -rotate-6 hover:rotate-0 hover:scale-110 hover:shadow-[0_20px_50px_rgba(139,92,246,0.3)] group transition-all duration-300`}
                style={{
                  ...getExitTransform('mockup', 0),
                  transformStyle: 'preserve-3d',
                  ['--tx' as string]: '-150px',
                  ['--ty' as string]: '100px',
                  ['--rotate' as string]: '-90deg',
                  animationDelay: '0.2s'
                }}
              >
                <div className="flex gap-1.5 mb-2">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500 group-hover:bg-red-400 transition-colors shadow-lg" />
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500 group-hover:bg-yellow-400 transition-colors shadow-lg" />
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500 group-hover:bg-green-400 transition-colors shadow-lg" />
                </div>
                <div className="flex-1 space-y-1.5 sm:space-y-2">
                  <div className="h-1 sm:h-1.5 w-5/6 bg-slate-700 dark:bg-[hsl(0_0%_18%)] rounded animate-pulse" />
                  <div className="h-1 sm:h-1.5 w-4/6 bg-primary/70 rounded shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                  <div className="h-1 sm:h-1.5 w-3/6 bg-slate-600 dark:bg-[hsl(0_0%_15%)] rounded" />
                  <div className="h-1 sm:h-1.5 w-5/6 bg-slate-700 dark:bg-[hsl(0_0%_18%)] rounded animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="h-1 sm:h-1.5 w-2/6 bg-purple-500/60 rounded shadow-[0_0_10px_rgba(168,85,247,0.4)]" />
                </div>
                <div className="mt-1 sm:mt-2 h-1.5 sm:h-2 bg-primary/20 rounded flex items-center px-1.5 sm:px-2">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
                </div>
              </div>

              {/* Dashboard - TILTED RIGHT */}
              <div 
                className={`mockup-card particle-explode ${descriptionComplete ? 'active' : ''} exit-animate w-full h-36 sm:h-42 bg-gradient-to-br from-white to-slate-100 dark:from-card dark:to-[hsl(0_0%_13%)] border-2 border-slate-300 dark:border-border rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-3 sm:p-4 transform rotate-4 hover:rotate-0 hover:scale-110 hover:shadow-[0_20px_50px_rgba(139,92,246,0.3)] group transition-all duration-300`}
                style={{
                  ...getExitTransform('mockup', 1),
                  transformStyle: 'preserve-3d',
                  ['--tx' as string]: '-100px',
                  ['--ty' as string]: '120px',
                  ['--rotate' as string]: '45deg',
                  animationDelay: '0.25s'
                }}
              >
                <div className="h-2 sm:h-3 w-2/3 bg-primary/50 dark:bg-primary/60 rounded mb-2 animate-pulse shadow-lg" />
                <div className="flex gap-1 sm:gap-1.5 items-end h-16 sm:h-20">
                  <div className="w-1/4 bg-slate-300 dark:bg-muted rounded-t-lg transition-all duration-500 group-hover:h-14 shadow-lg" style={{ height: '40%' }} />
                  <div className="w-1/4 bg-primary/80 rounded-t-lg transition-all duration-500 group-hover:h-24 shadow-[0_0_15px_rgba(139,92,246,0.5)]" style={{ height: '70%' }} />
                  <div className="w-1/4 bg-slate-300 dark:bg-muted rounded-t-lg transition-all duration-500 group-hover:h-20 shadow-lg" style={{ height: '50%' }} />
                  <div className="w-1/4 bg-purple-500/70 rounded-t-lg transition-all duration-500 group-hover:h-18 shadow-[0_0_15px_rgba(168,85,247,0.5)]" style={{ height: '60%' }} />
                </div>
                <div className="h-1 sm:h-1.5 w-4/5 bg-slate-200 dark:bg-[hsl(0_0%_18%)] mt-1 sm:mt-2 rounded" />
              </div>

              {/* Terminal - TILTED LEFT */}
              <div 
                className={`mockup-card particle-explode ${descriptionComplete ? 'active' : ''} exit-animate w-full h-32 sm:h-36 bg-gradient-to-br from-black to-slate-950 dark:from-[hsl(0_0%_7%)] dark:to-black border-2 border-slate-800 dark:border-border rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-3 sm:p-4 flex flex-col justify-between transform -rotate-3 hover:rotate-0 hover:scale-110 hover:shadow-[0_20px_50px_rgba(74,222,128,0.3)] group transition-all duration-300`}
                style={{
                  ...getExitTransform('mockup', 2),
                  transformStyle: 'preserve-3d',
                  ['--tx' as string]: '-50px',
                  ['--ty' as string]: '140px',
                  ['--rotate' as string]: '-60deg',
                  animationDelay: '0.3s'
                }}
              >
                <div className="flex-1 space-y-1.5 sm:space-y-2 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-xs animate-pulse">$</span>
                    <div className="h-1 sm:h-1.5 w-3/5 bg-green-400/80 rounded shadow-[0_0_10px_rgba(74,222,128,0.6)]" />
                  </div>
                  <div className="h-1 sm:h-1.5 w-4/5 bg-blue-400/70 rounded animate-pulse shadow-[0_0_10px_rgba(96,165,250,0.5)]" style={{ animationDelay: '0.3s' }} />
                  <div className="h-1 sm:h-1.5 w-2/5 bg-yellow-400/60 rounded shadow-[0_0_10px_rgba(250,204,21,0.4)]" />
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-green-400 text-xs animate-pulse" style={{ animationDelay: '0.6s' }}>$</span>
                    <div className="w-1.5 h-3 sm:w-2 sm:h-4 bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
                  </div>
                </div>
                <div className="h-1 sm:h-1.5 w-2/5 bg-gray-700/70 rounded mt-1" />
              </div>

              {/* Browser - TILTED RIGHT */}
              <div 
                className={`mockup-card particle-explode ${descriptionComplete ? 'active' : ''} exit-animate w-full h-36 sm:h-42 bg-gradient-to-br from-white to-slate-50 dark:from-card dark:to-[hsl(0_0%_13%)] border-2 border-slate-300 dark:border-border rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-3 sm:p-4 flex flex-col transform rotate-5 hover:rotate-0 hover:scale-110 hover:shadow-[0_20px_50px_rgba(139,92,246,0.3)] group transition-all duration-300`}
                style={{
                  ...getExitTransform('mockup', 3),
                  transformStyle: 'preserve-3d',
                  ['--tx' as string]: '50px',
                  ['--ty' as string]: '110px',
                  ['--rotate' as string]: '75deg',
                  animationDelay: '0.35s'
                }}
              >
                <div className="flex items-center gap-2 mb-2 pb-2 border-b-2 border-slate-200 dark:border-border">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-slate-400 shadow-sm" />
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-slate-400 shadow-sm" />
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-slate-400 shadow-sm" />
                  </div>
                  <div className="h-1.5 sm:h-2 flex-1 bg-slate-200 dark:bg-muted rounded" />
                </div>
                <div className="flex-1 space-y-1.5 sm:space-y-2">
                  <div className="h-8 sm:h-10 bg-primary/20 rounded shadow-inner" />
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="h-10 sm:h-14 w-1/2 bg-slate-200 dark:bg-muted rounded shadow-lg" />
                    <div className="h-10 sm:h-14 w-1/2 bg-slate-200 dark:bg-muted rounded shadow-lg" />
                  </div>
                </div>
              </div>

              {/* Mobile App - TILTED LEFT */}
              <div 
                className={`mockup-card particle-explode ${descriptionComplete ? 'active' : ''} exit-animate w-full h-40 sm:h-48 bg-gradient-to-br from-slate-900 to-black dark:from-[hsl(0_0%_7%)] dark:to-black border-[4px] sm:border-[6px] border-slate-800 dark:border-border rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-2 sm:p-2.5 flex flex-col transform -rotate-4 hover:rotate-0 hover:scale-110 hover:shadow-[0_20px_50px_rgba(139,92,246,0.4)] group transition-all duration-300`}
                style={{
                  ...getExitTransform('mockup', 4),
                  transformStyle: 'preserve-3d',
                  ['--tx' as string]: '120px',
                  ['--ty' as string]: '90px',
                  ['--rotate' as string]: '-45deg',
                  animationDelay: '0.4s'
                }}
              >
                <div className="flex justify-center mb-1.5 sm:mb-2">
                  <div className="w-10 sm:w-14 h-0.5 sm:h-1 bg-slate-700 dark:bg-[hsl(0_0%_18%)] rounded-full shadow-lg" />
                </div>
                <div className="flex-1 space-y-1.5 sm:space-y-2">
                  <div className="h-2 sm:h-3 w-3/4 bg-primary/60 rounded mx-auto shadow-[0_0_15px_rgba(139,92,246,0.5)]" />
                  <div className="grid grid-cols-3 gap-1 sm:gap-1.5 mt-2 sm:mt-3">
                    <div className="aspect-square bg-slate-800 dark:bg-[hsl(0_0%_13%)] rounded-lg shadow-lg transform transition-transform group-hover:scale-95" />
                    <div className="aspect-square bg-purple-500/60 rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.5)] transform transition-transform group-hover:scale-105" />
                    <div className="aspect-square bg-slate-800 dark:bg-[hsl(0_0%_13%)] rounded-lg shadow-lg transform transition-transform group-hover:scale-95" />
                    <div className="aspect-square bg-slate-800 dark:bg-[hsl(0_0%_13%)] rounded-lg shadow-lg transform transition-transform group-hover:scale-95" />
                    <div className="aspect-square bg-slate-800 dark:bg-[hsl(0_0%_13%)] rounded-lg shadow-lg transform transition-transform group-hover:scale-95" />
                    <div className="aspect-square bg-primary/70 rounded-lg shadow-[0_0_15px_rgba(139,92,246,0.5)] transform transition-transform group-hover:scale-105" />
                  </div>
                </div>
                <div className="h-5 sm:h-7 bg-slate-800 dark:bg-[hsl(0_0%_13%)] rounded-lg mt-1.5 sm:mt-2 shadow-lg" />
              </div>

              {/* Database - TILTED RIGHT */}
              <div 
                className={`mockup-card particle-explode ${descriptionComplete ? 'active' : ''} exit-animate w-full h-36 sm:h-42 bg-gradient-to-br from-slate-800 via-slate-900 to-black dark:from-[hsl(0_0%_13%)] dark:via-[hsl(0_0%_10%)] dark:to-black border-2 border-slate-700 dark:border-border rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-3 sm:p-4 flex flex-col justify-between transform rotate-6 hover:rotate-0 hover:scale-110 hover:shadow-[0_20px_50px_rgba(74,222,128,0.3)] group transition-all duration-300`}
                style={{
                  ...getExitTransform('mockup', 5),
                  transformStyle: 'preserve-3d',
                  ['--tx' as string]: '150px',
                  ['--ty' as string]: '130px',
                  ['--rotate' as string]: '90deg',
                  animationDelay: '0.45s'
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded bg-primary/30 flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-primary rounded-sm shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                  </div>
                  <div className="h-1.5 sm:h-2 w-1/2 bg-slate-700 dark:bg-[hsl(0_0%_18%)] rounded" />
                </div>
                <div className="flex-1 space-y-1 sm:space-y-1.5">
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="w-3 sm:w-4 h-1 sm:h-1.5 bg-blue-400/70 rounded shadow-[0_0_8px_rgba(96,165,250,0.5)]" />
                    <div className="flex-1 h-1 sm:h-1.5 bg-slate-700 dark:bg-[hsl(0_0%_18%)] rounded" />
                  </div>
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="w-3 sm:w-4 h-1 sm:h-1.5 bg-green-400/70 rounded shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
                    <div className="flex-1 h-1 sm:h-1.5 bg-slate-700 dark:bg-[hsl(0_0%_18%)] rounded" />
                  </div>
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="w-3 sm:w-4 h-1 sm:h-1.5 bg-yellow-400/70 rounded shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
                    <div className="flex-1 h-1 sm:h-1.5 bg-slate-700 dark:bg-[hsl(0_0%_18%)] rounded" />
                  </div>
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="w-3 sm:w-4 h-1 sm:h-1.5 bg-purple-400/70 rounded shadow-[0_0_8px_rgba(192,132,252,0.5)]" />
                    <div className="flex-1 h-1 sm:h-1.5 bg-slate-700 dark:bg-[hsl(0_0%_18%)] rounded" />
                  </div>
                </div>
                <div className="h-1 sm:h-1.5 w-full bg-green-500/30 rounded mt-1 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.4)]" style={{ animationDelay: '0.5s' }} />
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent transition-colors duration-300" />
    </section>
  );
};

export default Hero;
