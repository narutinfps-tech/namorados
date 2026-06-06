import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PINTEREST_ITEMS } from '../data';
import { Eye, Edit3, X, Sparkles, Heart } from 'lucide-react';

export default function MasonryGallery() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [activePreviewItem, setActivePreviewItem] = useState<typeof PINTEREST_ITEMS[0] | null>(null);

  // Live personalization playground states
  const [coupleName1, setCoupleName1] = useState('Mariana');
  const [coupleName2, setCoupleName2] = useState('Rodrigo');
  const [specialDate, setSpecialDate] = useState('12 de Junho de 2021');
  const [messageText, setMessageText] = useState('Você é meu pedaço favorito do mundo.');

  const categories = ['Todos', 'Polaroid', 'Stories', 'Cartas', 'Impresso'];

  const filteredItems = selectedCategory === 'Todos'
    ? PINTEREST_ITEMS
    : PINTEREST_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6">
      {/* Category selector tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer ${
              selectedCategory === category
                ? 'bg-wine-red text-white shadow-md shadow-wine-red/25 border-wine-red'
                : 'bg-white text-stone-600 border border-vintage-gold/30 hover:bg-vintage-beige/30'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry / Columns Layout */}
      <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="break-inside-avoid relative overflow-hidden group cursor-pointer bg-white p-3 pb-8 rounded-sm shadow-md hover:shadow-xl border border-vintage-beige transition-all duration-300"
            onClick={() => {
              setActivePreviewItem(item);
            }}
          >
            {/* Vintage style paperclip or stamp effect */}
            {index % 3 === 0 && (
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-3 bg-vintage-gold/40 rotate-[10deg] opacity-75 z-20" />
            )}
            {index % 4 === 1 && (
              <div className="absolute -top-1 right-2 w-5 h-5 rounded-full bg-rose-250/10 flex items-center justify-center text-rose-500 text-xs rotate-[-15deg] z-20">
                <Heart className="w-3.5 h-3.5 fill-current text-wine-red/40" />
              </div>
            )}

            <div className="relative overflow-hidden rounded-xs aspect-auto">
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className={`w-full object-cover transition-all duration-700 group-hover:scale-105 ${item.styleClass}`}
              />
              {/* Quick Hover Overlay */}
              <div className="absolute inset-0 bg-elegant-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                <div className="p-2 rounded-full bg-white/95 text-wine-red shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Edit3 className="w-4 h-4" />
                </div>
                <div className="px-3 py-1.5 rounded-full bg-wine-red text-white text-[10px] font-sans font-semibold tracking-widest uppercase transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  Testar Edição
                </div>
              </div>
            </div>

            {/* Polaroid handwritten caption title */}
            <div className="mt-4 text-center">
              <h4 className="font-serif-elegant font-bold text-sm text-stone-800 tracking-tight leading-tight group-hover:text-wine-red transition-colors">
                {item.title}
              </h4>
              {item.subtitle && (
                <p className="font-handwritten text-lg text-burned-rose leading-none mt-1">
                  {item.subtitle}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Canva Simulator Modal */}
      <AnimatePresence>
        {activePreviewItem && (
          <div className="fixed inset-0 min-h-screen z-50 flex items-center justify-center p-4 bg-elegant-black/85 backdrop-blur-xs overflow-y-auto">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-vintage-cream rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden border border-vintage-gold shadow-2xl relative grid grid-cols-1 md:grid-cols-12"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Floating Close Button */}
              <button
                onClick={() => setActivePreviewItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#1e1b18]/10 hover:bg-[#1e1b18]/20 transition-all cursor-pointer"
                aria-label="Minimizar"
              >
                <X className="w-5 h-5 text-stone-700" />
              </button>

              {/* Column 1: Polaroid Preview Playground */}
              <div className="col-span-1 md:col-span-7 bg-[#eae4d9]/50 p-6 md:p-10 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-vintage-beige max-h-[85vh] overflow-y-auto">
                <div className="text-center mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-wine-red/10 text-wine-red text-xxs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3 h-3 fill-current" /> Simulador de Personalização Canva
                  </span>
                </div>

                {/* Simulated Paper Polaroid */}
                <motion.div 
                  layout
                  className="bg-white p-5 pb-14 rounded-sm shadow-xl max-w-sm w-full border border-stone-200/60 relative"
                >
                  {/* Picture space */}
                  <div className="relative aspect-square overflow-hidden bg-stone-100 rounded-xs">
                    <img
                      src={activePreviewItem.image}
                      alt="Polaroid Editable Template"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    {/* Simulated image clip/glow */}
                    <div className="absolute inset-0 shadow-inner pointer-events-none" />
                  </div>

                  {/* Editable Dynamic Elements On Product Mockup */}
                  <div className="absolute bottom-4 left-6 right-6 text-center text-stone-800">
                    <div className="font-handwritten text-3xl font-medium tracking-wide text-wine-red truncate">
                      {coupleName1} + {coupleName2}
                    </div>
                    <div className="font-mono text-[9px] text-stone-500 tracking-widest mt-1">
                      {specialDate}
                    </div>
                    <div className="font-sans text-[11px] italic text-stone-600 truncate mt-1">
                      "{messageText}"
                    </div>
                  </div>
                </motion.div>

                <p className="text-center text-[11px] text-stone-500 font-sans-clean mt-4 italic">
                  * Legenda atualiza ao vivo conforme você digita ao lado
                </p>
              </div>

              {/* Column 2: Editor Sidebar controls */}
              <div className="col-span-1 md:col-span-5 p-6 md:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
                <div>
                  <span className="text-[10px] uppercase font-bold text-vintage-gold-dark tracking-wider">
                    Experimente e Teste
                  </span>
                  <h3 className="font-serif-elegant font-semibold text-lg md:text-xl text-elegant-black mt-1">
                    Como é fácil personalizar
                  </h3>
                  <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                    Você pode alterar textos, fotos, cores e elementos diretamente no Canva Grátis com poucos cliques!
                  </p>

                  <div className="w-full h-[1px] bg-vintage-beige my-5" />

                  {/* Form fields */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-widest mb-1.5">
                        Nome 1
                      </label>
                      <input
                        type="text"
                        value={coupleName1}
                        onChange={(e) => setCoupleName1(e.target.value)}
                        className="w-full px-3 py-2 border border-vintage-gold/30 rounded-lg text-sm bg-white focus:outline-none focus:ring-1 focus:ring-wine-red text-stone-800"
                        maxLength={15}
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-widest mb-1.5">
                        Nome 2
                      </label>
                      <input
                        type="text"
                        value={coupleName2}
                        onChange={(e) => setCoupleName2(e.target.value)}
                        className="w-full px-3 py-2 border border-vintage-gold/30 rounded-lg text-sm bg-white focus:outline-none focus:ring-1 focus:ring-wine-red text-stone-800"
                        maxLength={15}
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-widest mb-1.5">
                        Data Especial
                      </label>
                      <input
                        type="text"
                        value={specialDate}
                        onChange={(e) => setSpecialDate(e.target.value)}
                        className="w-full px-3 py-2 border border-vintage-gold/30 rounded-lg text-sm bg-white focus:outline-none focus:ring-1 focus:ring-wine-red text-stone-800"
                        maxLength={30}
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-widest mb-1.5">
                        Frase Curta de Amor
                      </label>
                      <textarea
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        className="w-full px-3 py-2 border border-vintage-gold/30 rounded-lg text-xs bg-white focus:outline-none focus:ring-1 focus:ring-wine-red text-stone-800 h-16 resize-none"
                        maxLength={65}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="#pricing-section"
                    onClick={() => setActivePreviewItem(null)}
                    className="w-full py-3 bg-wine-red hover:bg-wine-dark hover:scale-[1.01] text-white block text-center rounded-xl text-xs font-semibold uppercase tracking-wider shadow-md transition-all cursor-pointer"
                  >
                    Garantir Meu Acesso
                  </a>
                  <p className="text-center text-[10px] text-stone-500 mt-2">
                    Acesso imediato com mais de 50 artes prontas!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
