import React from 'react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  return (
    <nav className="relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-8 py-6 flex flex-row items-center justify-between">
        <div 
          className="text-3xl tracking-tight text-foreground font-display"
        >
          Velorah<sup className="text-xs">®</sup>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a href="#" className="text-sm text-foreground transition-colors font-medium">Home</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Studio</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Journal</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Reach Us</a>
        </div>

        <button 
          className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform duration-300"
        >
          Begin Journey
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
