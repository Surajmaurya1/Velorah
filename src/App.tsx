import React from 'react';
import VideoBackground from './components/VideoBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Fullscreen Video Background */}
      <VideoBackground />
      
      {/* Content Layer */}
      <div className="relative min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <Hero />
        </div>
      </div>
    </main>
  );
}

export default App;
