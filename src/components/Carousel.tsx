import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Pin } from 'lucide-react';
import { CAROUSEL_ITEMS } from '../data';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? CAROUSEL_ITEMS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === CAROUSEL_ITEMS.length - 1 ? 0 : prev + 1));
  };

  return (
    <div id="carousel-section" className="relative w-full max-w-5xl mx-auto px-4 py-8">
      {/* Tape & Staple Vintage Touches */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 px-6 py-1 bg-white/60 backdrop-blur-xs border border-vintage-gold/30 shadow-xs rotate-[-1deg] text-[10px] font-mono uppercase tracking-widest text-[#a98048] z-10">
        📌 Arraste ou clique para ver as prévias
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-[#faf7f2] border border-[#e1d8cb] p-6 md:p-12 shadow-md">
        {/* Decorative corner borders */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-vintage-gold" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-vintage-gold" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-vintage-gold" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-vintage-gold" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[400px]">
          {/* Active Image Container */}
          <div className="md:col-span-7 flex justify-center items-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 25, rotate: -1 }}
                animate={{ opacity: 1, x: 0, rotate: 1 }}
                exit={{ opacity: 0, x: -25, rotate: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="relative bg-white p-4 pb-12 shadow-xl border border-vintage-beige/60 max-w-sm w-full select-none"
              >
                {/* Simulated Tape */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#eae4d9]/80 border-l border-r border-vintage-gold/20 backdrop-blur-xs rotate-[-2deg] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                </div>

                <img
                  src={CAROUSEL_ITEMS[currentIndex].image}
                  alt={CAROUSEL_ITEMS[currentIndex].title}
                  referrerPolicy="no-referrer"
                  className="w-full aspect-square object-cover rounded-sm grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                />

                {/* Hand-written styled caption inside polaroid */}
                <div className="absolute bottom-3 left-4 right-4 text-center">
                  <span className="font-handwritten text-2xl text-wine-red font-medium tracking-wide">
                    {CAROUSEL_ITEMS[currentIndex].tag}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Text Info Column */}
          <div className="md:col-span-5 flex flex-col justify-between h-full p-2 text-left">
            <div>
              <span className="text-xs uppercase font-semibold text-vintage-gold-dark tracking-widest block mb-1">
                Modelo Editável
              </span>
              <h3 className="font-serif-elegant text-2xl md:text-3xl text-elegant-black font-semibold leading-tight mb-4">
                {CAROUSEL_ITEMS[currentIndex].title}
              </h3>
              
              <div className="w-12 h-[2px] bg-wine-red/40 mb-4" />

              <p className="text-sm text-stone-600 font-sans-clean leading-relaxed">
                {CAROUSEL_ITEMS[currentIndex].description}
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between">
              {/* Pagination indicators */}
              <div className="flex gap-1.5">
                {CAROUSEL_ITEMS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex 
                        ? 'w-6 bg-wine-red' 
                        : 'w-2 bg-vintage-gold/40 hover:bg-vintage-gold/70'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Navigation buttons */}
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-vintage-gold/40 flex items-center justify-center text-vintage-gold-dark bg-white hover:bg-wine-red hover:text-white hover:border-wine-red transition-all shadow-xs cursor-pointer"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border border-vintage-gold/40 flex items-center justify-center text-vintage-gold-dark bg-white hover:bg-wine-red hover:text-white hover:border-wine-red transition-all shadow-xs cursor-pointer"
                  aria-label="Próximo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
