import { useEffect, useState } from "react";
import logoImage from "@/assets/sydnytech-logo.png";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 600),
      setTimeout(() => setPhase(3), 1000),
      setTimeout(() => setPhase(4), 1400),
      setTimeout(() => setPhase(5), 1800),
      setTimeout(onComplete, 2800),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Rotating gradient orbs */}
        <div 
          className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full transition-all duration-1000 ${
            phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{
            background: 'radial-gradient(circle, hsl(174 72% 46% / 0.3) 0%, transparent 70%)',
            animation: phase >= 1 ? 'pulse 3s ease-in-out infinite' : 'none',
          }}
        />
        
        {/* Secondary orb */}
        <div 
          className={`absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full transition-all duration-1000 delay-200 ${
            phase >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{
            background: 'radial-gradient(circle, hsl(16 85% 60% / 0.2) 0%, transparent 70%)',
            animation: phase >= 2 ? 'float 4s ease-in-out infinite' : 'none',
          }}
        />

        {/* Floating particles */}
        {phase >= 2 && (
          <>
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-primary/40 rounded-full"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                  animation: `floatParticle ${3 + Math.random() * 2}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </>
        )}

        {/* Grid pattern */}
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 ${
            phase >= 1 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(174 72% 46% / 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(174 72% 46% / 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="hsl(174 72% 46% / 0.5)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          {phase >= 3 && (
            <>
              <line
                x1="0" y1="30%" x2="100%" y2="30%"
                stroke="url(#lineGradient)"
                strokeWidth="1"
                className="animate-[slideRight_2s_ease-in-out_infinite]"
              />
              <line
                x1="0" y1="70%" x2="100%" y2="70%"
                stroke="url(#lineGradient)"
                strokeWidth="1"
                className="animate-[slideLeft_2s_ease-in-out_infinite]"
                style={{ animationDelay: '0.5s' }}
              />
            </>
          )}
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Container with Glow */}
        <div 
          className={`relative mb-8 transition-all duration-700 ${
            phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        >
          {/* Outer glow ring */}
          <div 
            className={`absolute inset-0 rounded-3xl transition-all duration-1000 ${
              phase >= 2 ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              background: 'conic-gradient(from 0deg, hsl(174 72% 46%), hsl(16 85% 60%), hsl(174 72% 46%))',
              padding: '3px',
              animation: phase >= 2 ? 'spin 4s linear infinite' : 'none',
              transform: 'scale(1.15)',
              filter: 'blur(8px)',
            }}
          />
          
          {/* Animated border ring */}
          <div 
            className={`absolute -inset-2 rounded-[28px] transition-all duration-700 ${
              phase >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            style={{
              background: 'conic-gradient(from 0deg, transparent, hsl(174 72% 46%), transparent)',
              animation: phase >= 2 ? 'spin 3s linear infinite' : 'none',
            }}
          />

          {/* Logo box */}
          <div className="relative w-32 h-32 rounded-3xl bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-2xl overflow-hidden border border-border/30">
            {/* Inner shine effect */}
            <div 
              className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent transition-transform duration-1000 ${
                phase >= 3 ? 'translate-x-full' : '-translate-x-full'
              }`}
              style={{ transform: phase >= 3 ? 'translateX(100%)' : 'translateX(-100%)' }}
            />
            
            {/* Logo image */}
            <img 
              src={logoImage}
              alt="SYDNYTECH Logo"
              className={`w-28 h-28 object-contain transition-all duration-500 ${
                phase >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
            />
          </div>
          
          {/* Pulse rings */}
          {phase >= 3 && (
            <>
              <div className="absolute inset-0 rounded-3xl border-2 border-primary/30 animate-[pingOut_2s_ease-out_infinite]" />
              <div className="absolute inset-0 rounded-3xl border-2 border-primary/20 animate-[pingOut_2s_ease-out_infinite_0.5s]" />
            </>
          )}
        </div>

        {/* Brand Name with Letter Animation */}
        <div 
          className={`relative overflow-hidden transition-all duration-700 ${
            phase >= 3 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h1 className="font-display text-5xl font-bold tracking-tight flex">
            {"SYDNY".split("").map((letter, i) => (
              <span
                key={i}
                className={`inline-block transition-all duration-500 text-foreground ${
                  phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {letter}
              </span>
            ))}
            {"TECH".split("").map((letter, i) => (
              <span
                key={i + 5}
                className={`inline-block transition-all duration-500 text-primary ${
                  phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(i + 5) * 80}ms` }}
              >
                {letter}
              </span>
            ))}
          </h1>
          
          {/* Underline animation */}
          <div 
            className={`h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full mt-2 transition-all duration-700 ${
              phase >= 4 ? 'w-full opacity-100' : 'w-0 opacity-0'
            }`}
          />
        </div>

        {/* Tagline */}
        <p 
          className={`mt-4 text-muted-foreground font-body text-lg transition-all duration-700 ${
            phase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Digital Business Cards
        </p>

        {/* Feature badges */}
        <div 
          className={`flex gap-3 mt-6 transition-all duration-700 ${
            phase >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {["Smart", "Elegant", "Affordable"].map((text, i) => (
            <div
              key={text}
              className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {text}
            </div>
          ))}
        </div>

        {/* Loading bar */}
        <div 
          className={`mt-10 w-48 h-1 bg-muted/30 rounded-full overflow-hidden transition-opacity duration-500 ${
            phase >= 4 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
            style={{ width: phase >= 5 ? '100%' : '0%' }}
          />
        </div>

        {/* Loading text */}
        <p 
          className={`mt-3 text-xs text-muted-foreground transition-opacity duration-500 ${
            phase >= 4 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {phase >= 5 ? 'Welcome!' : 'Loading...'}
        </p>
      </div>

      {/* Corner decorations */}
      <div 
        className={`absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/30 rounded-tl-3xl transition-all duration-700 ${
          phase >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
      />
      <div 
        className={`absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary/30 rounded-tr-3xl transition-all duration-700 ${
          phase >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
      />
      <div 
        className={`absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary/30 rounded-bl-3xl transition-all duration-700 ${
          phase >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
      />
      <div 
        className={`absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/30 rounded-br-3xl transition-all duration-700 ${
          phase >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
      />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
          50% { transform: translateY(-30px) scale(1.5); opacity: 0.8; }
        }
        @keyframes spin {
          from { transform: rotate(0deg) scale(1.15); }
          to { transform: rotate(360deg) scale(1.15); }
        }
        @keyframes pingOut {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes slideRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes slideLeft {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
