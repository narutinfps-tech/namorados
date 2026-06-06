import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-4">
      <div className="space-y-4">
        {FAQ_ITEMS.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className="bg-white/80 backdrop-blur-xs rounded-xl border border-vintage-gold/25 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(item.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3 pr-4">
                  <HelpCircle className="w-4 h-4 text-wine-red shrink-0" />
                  <span className="font-serif-elegant font-semibold text-stone-800 text-sm md:text-base">
                    {item.question}
                  </span>
                </div>
                <div className="shrink-0 text-vintage-gold-dark p-1">
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5 pt-1 text-xs md:text-sm text-stone-600 font-sans-clean leading-relaxed border-t border-vintage-beige/40">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
