import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase(1), 300);
    const timer2 = setTimeout(() => setPhase(2), 800);
    const timer3 = setTimeout(() => setPhase(3), 1500);
    const timer4 = setTimeout(onComplete, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div 
          className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-primary/20 blur-3xl transition-all duration-1000 ${
            phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        />
        <div 
          className={`absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-accent/20 blur-3xl transition-all duration-1000 delay-300 ${
            phase >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        />
      </div>

      {/* Logo container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo icon */}
        <div 
          className={`relative mb-6 transition-all duration-700 ${
            phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        >
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-2xl shadow-primary/40">
            <span className="text-4xl font-display font-bold text-primary-foreground">SY</span>
          </div>
          {/* Glow ring */}
          <div 
            className={`absolute inset-0 rounded-3xl border-2 border-primary/50 transition-all duration-1000 ${
              phase >= 2 ? 'scale-125 opacity-0' : 'scale-100 opacity-100'
            }`}
          />
        </div>

        {/* Brand name */}
        <h1 
          className={`font-display text-4xl font-bold tracking-tight transition-all duration-700 delay-200 ${
            phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-foreground">SYDNY</span>
          <span className="text-primary">TECH</span>
        </h1>

        {/* Tagline */}
        <p 
          className={`mt-3 text-muted-foreground font-body text-sm transition-all duration-700 delay-500 ${
            phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Digital Business Cards
        </p>

        {/* Loading indicator */}
        <div 
          className={`mt-8 flex gap-1.5 transition-all duration-500 delay-700 ${
            phase >= 3 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-primary animate-pulse"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
