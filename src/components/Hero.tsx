import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 py-[90px]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h1 
          className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] font-normal font-display text-foreground animate-fade-rise"
        >
          Where <em className="not-italic text-muted-foreground">dreams</em> rise <br className="hidden md:block" />
          <em className="not-italic text-muted-foreground">through the silence.</em>
        </h1>
        
        <p 
          className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay"
        >
          We're designing tools for deep thinkers, bold creators, and quiet rebels. 
          Amid the chaos, we build digital spaces for sharp focus and inspired work.
        </p>

        <button 
          className="liquid-glass rounded-full px-14 py-5 text-base text-foreground mt-12 hover:scale-[1.03] transition-transform duration-300 animate-fade-rise-delay-2 cursor-pointer"
        >
          Begin Journey
        </button>
      </div>
    </section>
  );
};

export default Hero;
