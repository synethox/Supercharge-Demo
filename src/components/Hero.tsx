import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  // Funktion für das Scrollen zum Ende des Hero-Elements
  const scrollToEndOfElement = () => {
    const element = document.getElementById('hero-end');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Funktion für das Scrollen bis das dritte Element oben ist
  const scrollToThirdElement = () => {
    const hero = document.getElementById('hero-end');
    const features = document.getElementById('features-end');
    if (hero && features) {
      const scrollToPosition = features.offsetTop;
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div id="hero" className="relative h-[90vh]">
      {/* Hintergrund mit Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            'url("https://t4.ftcdn.net/jpg/06/31/31/37/360_F_631313702_frWxRE0tTxJxQHoMyQV0cXVTpi0r2kMq.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-900/30"></div>
      </div>

      {/* Hauptinhalt */}
      <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4 sm:px-6 lg:px-8">
        <div>
          {/* Überschriften */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Supercharge
            <span className="block text-2xl md:text-4xl mt-2">
              your everyday life
            </span>
          </h1>

          {/* Beschreibung */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8">
            Entdecken Sie nachhaltige Energielösungen für Ihr Zuhause. Von
            Solarpanelen bis zu Elektrofahrzeugen - alles für eine grünere
            Zukunft.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={scrollToEndOfElement}
              className="bg-white text-slate-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              Produkte entdecken
            </button>
            <button
              onClick={scrollToThirdElement}
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition"
            >
              Mehr erfahren
            </button>
          </div>
        </div>
      </div>

      {/* Chevron Down Icon */}
      <div
        onClick={scrollToEndOfElement}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <ChevronDown className="text-white" size={32} />
      </div>

      {/* Unsichtbare Ziele für das Scrollen */}
      <div id="hero-end" className="h-[10vh]"></div>
      <div id="features-end" className="h-[10vh]"></div>
    </div>
  );
};

export default Hero;
