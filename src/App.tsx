import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Sparkles, 
  Check, 
  Gift, 
  Smartphone, 
  Printer, 
  PenTool, 
  Feather, 
  Award, 
  ChevronRight, 
  ShieldCheck, 
  Calendar,
  Lock,
  Bookmark,
  Share2,
  X
} from 'lucide-react';
import { IMAGES, USE_CASES, BONUS_ITEMS, INFINITE_CAROUSEL_IMAGES } from './data';

// Component imports
import Carousel from './components/Carousel';
import FaqSection from './components/FaqSection';
import CheckoutModal from './components/CheckoutModal';

const SHOWCASE_IMAGES = [
  'https://i.ibb.co/HfkCxZ9V/1.png',
  'https://i.ibb.co/rKx46HFz/2.png',
  'https://i.ibb.co/MymGCTMw/3.png',
  'https://i.ibb.co/Xr1GdmVs/4.png',
  'https://i.ibb.co/qYt14nMG/5.png',
  'https://i.ibb.co/b5pXWdRF/6.png',
  'https://i.ibb.co/nWhzwDx/7.png',
  'https://i.ibb.co/nMDjLjBV/8.png',
  'https://i.ibb.co/fVr8t3dM/9.png'
];

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutPrice, setCheckoutPrice] = useState(37);

  // Countdown timer for scarcity and higher conversions
  const [hours, setHours] = useState(1);
  const [minutes, setMinutes] = useState(48);
  const [seconds, setSeconds] = useState(32);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev > 0) return prev - 1;
        setMinutes((min) => {
          if (min > 0) return min - 1;
          setHours((hr) => (hr > 0 ? hr - 1 : 2));
          return 59;
        });
        return 59;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const openCheckout = (price: number) => {
    setCheckoutPrice(price);
    setIsCheckoutOpen(true);
  };

  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <div className="relative min-h-screen Selection bg-vintage-cream text-elegant-black font-sans-clean antialiased overflow-x-hidden">
      
      {/* Decorative vintage rose dust backdrop elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-burned-rose/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-[1200px] left-0 w-[400px] h-[400px] rounded-full bg-vintage-gold/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[800px] right-0 w-[600px] h-[600px] rounded-full bg-wine-red/5 blur-[120px] pointer-events-none" />

      {/* 🌹 TOP BAR COUNTDOWN */}
      <div className="w-full bg-gradient-to-r from-wine-red to-wine-dark text-vintage-cream text-xs font-mono font-medium tracking-widest text-center py-2 px-4 shadow-sm z-30 sticky top-0 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <span className="flex items-center gap-1.5 uppercase font-semibold text-vintage-gold">
          <Heart className="w-3 h-3 fill-current animate-pulse text-vintage-gold" /> Oferta Especial de Namorados
        </span>
        <span className="opacity-75">|</span>
        <span className="text-[11px]">
          Desconto exclusivo encerra em: <strong className="text-white text-xs">{formattedTime}</strong>
        </span>
        <button 
          onClick={() => openCheckout(37)}
          className="ml-2 bg-vintage-gold hover:bg-white text-stone-950 font-sans text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider transition-all duration-300"
        >
          Aproveitar R$37
        </button>
      </div>

      {/* SEÇÃO 1 — HERO VISUAL */}
      <header className="relative w-full max-w-7xl mx-auto px-6 pt-12 pb-20 md:py-24 text-center">
        
        {/* Scrapbook Ribbon Tag */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#eae4d9]/70 border border-vintage-gold/40 text-vintage-gold-dark rounded-full text-xs font-medium tracking-wide mb-6 uppercase"
        >
          <Sparkles className="w-3.5 h-3.5 fill-current text-vintage-gold" />
          Coleção Exclusiva de Dia dos Namorados
        </motion.div>

        {/* Heading Statement with beautiful typography */}
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="font-serif-elegant font-bold text-4xl sm:text-5xl md:text-6xl text-elegant-black tracking-tight leading-tight mb-6"
          >
            Transforme suas memórias em uma <br/>
            <span className="relative inline-block text-wine-red">
              homenagem inesquecível
              <svg className="absolute bottom-[-10px] left-0 w-full h-[12px] text-vintage-gold opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,7 C30,2 70,2 100,7" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-stone-600 max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-light leading-relaxed mb-6"
          >
            Mais de 50 artes românticas editáveis no Canva para postar, enviar ou imprimir e surpreender quem você ama.
          </motion.p>

          {/* WISTIA PRESENTATION VIDEO (9:20 PORTRAIT IN REFINED SMARTPHONE FRAME) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 mb-10 max-w-[290px] sm:max-w-[330px] mx-auto w-full relative z-10"
          >
            {/* Smartphone Shell Frame */}
            <div className="relative mx-auto border-[10px] sm:border-[12px] border-stone-900 rounded-[40px] sm:rounded-[46px] shadow-2xl bg-stone-900 ring-4 ring-stone-950/20">
              {/* Speaker Receiver & Camera Island */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-stone-950 rounded-full z-30 flex items-center justify-between px-3.5">
                <div className="w-1.5 h-1.5 bg-stone-800 rounded-full" />
                <div className="w-8 h-1 bg-stone-800 rounded-full" />
                <div className="w-2 h-2 bg-[#121c2c] rounded-full ring-1 ring-stone-900/50 flex items-center justify-center">
                  <div className="w-0.5 h-0.5 bg-indigo-500/50 rounded-full" />
                </div>
              </div>

              {/* Inner Screen Display (9:20 Aspect Ratio Matches the Video) */}
              <div className="relative w-full aspect-[9/20] bg-white rounded-[30px] sm:rounded-[34px] overflow-hidden">
                <iframe
                  src="https://fast.wistia.net/embed/iframe/fx6o2lhga7"
                  title="Wistia Video Player"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  frameBorder="0"
                  className="absolute inset-0 w-full h-full bg-white rounded-[30px] sm:rounded-[34px]"
                />
              </div>

              {/* iOS System Indicator Bar (Bottom) */}
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-stone-800 rounded-full z-30" />
            </div>
          </motion.div>

          {/* Action Call for the purchase modal */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <button
              onClick={() => openCheckout(37)}
              className="px-8 py-4 bg-wine-red hover:bg-wine-dark hover:scale-[1.02] text-white rounded-full text-sm md:text-base font-bold tracking-widest uppercase shadow-lg shadow-wine-red/25 hover:shadow-xl transition-all cursor-pointer duration-300 inline-flex items-center gap-3 active:scale-[0.99]"
            >
              <Heart className="w-5 h-5 fill-current" /> Quero criar minha homenagem
            </button>

            <p className="text-xs text-stone-500 font-mono tracking-wide uppercase">
              Acesso imediato • Editável no Canva • Digital e impresso
            </p>
          </motion.div>
        </div>

        {/* Vintage Scrapbook Collage mockup layout for Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 relative mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white/75 backdrop-blur-xs border border-vintage-gold/30 p-4 md:p-8 rounded-2xl shadow-xl"
        >
          {/* Main scrapbook collage image */}
          <div className="md:col-span-7 relative group">
            <div className="absolute top-2 left-1/4 w-28 h-6 bg-[#eae4d9]/90 border border-vintage-gold/10 backdrop-blur-xs rotate-[-3deg] z-10 shadow-xs" />
            <div className="vintage-card rounded-lg overflow-hidden shadow-lg p-3">
              <img
                src={IMAGES.heroScrapbook}
                alt="Kit Memórias do Amor Scrapbook Colage Canvas"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover rounded-xs filter contrast-[98%] sepia-[4%] transition-transform duration-700 hover:scale-[1.01]"
              />
            </div>
            {/* Custom polaroid floating graphic */}
            <div className="absolute -bottom-6 -left-4 w-32 md:w-40 bg-white p-2.5 pb-8 border border-stone-200 shadow-xl rotate-[-8deg] rounded-xs hidden sm:block">
              <img 
                src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=300" 
                alt="Te amo" 
                className="w-full aspect-square object-cover" 
              />
              <span className="font-handwritten text-xl text-center block mt-3 text-wine-red">Nós dois ♡</span>
            </div>
          </div>

          {/* Sincere quick features list in scrapbook look */}
          <div className="md:col-span-5 text-left space-y-6 px-4 py-6">
            <h4 className="font-serif-elegant font-bold text-xl text-elegant-black leading-tight border-b border-vintage-beige pb-3">
              Crie algo único que dure para sempre
            </h4>
            
            <p className="text-stone-600 text-sm leading-relaxed font-sans-clean">
              Esqueça os presentes clichês e descartáveis. Prepare uma declaração de amor que parece ter sido costurada à mão, personalizada com as fotos dos seus melhores dias juntos.
            </p>

            <ul className="space-y-3 font-sans text-xs text-stone-700">
              <li className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#f3efe9] border border-vintage-gold text-vintage-gold-dark flex items-center justify-center font-bold">✓</div>
                <span>Mais de <strong>50 templates exclusivos editáveis</strong></span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#f3efe9] border border-vintage-gold text-vintage-gold-dark flex items-center justify-center font-bold">✓</div>
                <span>Zero complicação: mude tudo com <strong>1 clique</strong></span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#f3efe9] border border-vintage-gold text-vintage-gold-dark flex items-center justify-center font-bold">✓</div>
                <span>Para postar no <strong>stories</strong> ou imprimir em <strong>alta definição</strong></span>
              </li>
            </ul>
          </div>
        </motion.div>
      </header>

      {/* 🎠 SEÇÃO: CARROSSEL INFINITO DE ARTES REAIS */}
      <section className="relative w-full overflow-hidden bg-[#faf7f2] border-t border-b border-vintage-gold/25 py-12">
        <div className="text-center max-w-xl mx-auto mb-8 px-6">
          <span className="inline-flex items-center gap-1.5 text-wine-red text-[11px] font-bold uppercase tracking-widest bg-wine-red/5 px-3 py-1 rounded-full border border-wine-red/10">
            <Sparkles className="w-3 h-3 fill-current text-vintage-gold" /> Prévias Do Ateliê
          </span>
          <h3 className="font-serif-elegant font-bold text-2xl text-stone-900 mt-3">
            Algumas das 50+ artes que você irá receber
          </h3>
          <p className="text-stone-500 text-xs sm:text-sm tracking-wide mt-1">
            Passe o mouse para pausar • Clique na vitrine abaixo para testar a edição ao vivo
          </p>
        </div>

        <div className="relative w-full overflow-hidden py-4 flex select-none">
          {/* Ambient shading gradient covers */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-vintage-cream via-vintage-cream/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-vintage-cream via-vintage-cream/80 to-transparent z-10 pointer-events-none" />

          {/* Endless Marquee Inner flow */}
          <div className="animate-marquee flex gap-4 sm:gap-6 items-center">
            {/* Set 1 */}
            {INFINITE_CAROUSEL_IMAGES.map((imgUrl, i) => (
              <div
                key={`infinite-s1-${i}`}
                className="w-32 sm:w-44 md:w-52 aspect-[3/4] overflow-hidden rounded-lg sm:rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 transform shrink-0 border border-vintage-gold/15 bg-white flex items-center justify-center cursor-pointer"
              >
                <img
                  src={imgUrl}
                  alt={`Arte Exclusiva ${i + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            {/* Set 2 (Duplicated) */}
            {INFINITE_CAROUSEL_IMAGES.map((imgUrl, i) => (
              <div
                key={`infinite-s2-${i}`}
                className="w-32 sm:w-44 md:w-52 aspect-[3/4] overflow-hidden rounded-lg sm:rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 transform shrink-0 border border-vintage-gold/15 bg-white flex items-center justify-center cursor-pointer"
              >
                <img
                  src={imgUrl}
                  alt={`Arte Exclusiva ${i + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 — CARROSSEL DE PRÉVIAS */}
      <section className="bg-vintage-beige/35 border-t border-b border-vintage-beige py-20 relative">
        <div className="w-full max-w-7xl mx-auto px-6 text-center">
          <span className="font-handwritten text-3xl font-medium text-wine-red block mb-3">
            Explorar Ateliê
          </span>
          <h2 className="font-serif-elegant font-bold text-3xl sm:text-4xl text-elegant-black tracking-tight mb-4">
            Escolha, edite e surpreenda
          </h2>
          <div className="w-16 h-1 bg-vintage-gold mx-auto mb-10" />

          {/* Interactive Carousel */}
          <Carousel />

          <p className="text-stone-500 text-xs sm:text-sm mt-8 max-w-lg mx-auto leading-relaxed">
            🌿 Tudo pronto para personalizar com suas próprias fotos, nomes, datas especiais e as frases que marcaram a jornada de vocês.
          </p>
        </div>
      </section>

      {/* SEÇÃO 3 — USOS DO KIT */}
      <section className="py-20 w-full max-w-6xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[10px] font-bold text-vintage-gold-dark uppercase tracking-widest block mb-2">
            Múltiplos Formatos
          </span>
          <h2 className="font-serif-elegant font-bold text-2xl sm:text-3xl text-elegant-black leading-tight">
            Uma única compra, infinitas formas de declarar seu amor
          </h2>
          <div className="w-12 h-0.5 bg-wine-red mx-auto mt-4" />
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {USE_CASES.map((item, index) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-3 pb-5 rounded-xl border border-vintage-beige shadow-sm hover:shadow-lg transition-all text-center relative group"
            >
              {/* Image with vintage style borders */}
              <div className="relative aspect-square overflow-hidden rounded-lg mb-4 bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-2 right-2 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-stone-700 text-[9px] font-bold uppercase tracking-wider border border-stone-200">
                  {item.badge}
                </span>
              </div>
              <h4 className="font-serif-elegant font-bold text-xs sm:text-sm md:text-base text-stone-900 leading-tight">
                {item.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEÇÃO 4 — GALERIA VISUAL (PINTEREST STYLE) */}
      <section className="bg-white py-20 border-t border-b border-vintage-beige/50">
        <div className="w-full max-w-5xl mx-auto px-6 text-center mb-12">
          <span className="font-handwritten text-4xl text-wine-red font-medium block mb-2">
            Vitrine do Amor
          </span>
          <h2 className="font-serif-elegant font-bold text-3xl text-elegant-black leading-normal">
            Uma homenagem com cara de lembrança guardada
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm max-w-2xl mx-auto mt-3 leading-relaxed">
            Modelos inspirados em cartas, fotos antigas, bilhetes, molduras, flores e pequenos detalhes que contam uma história real de cumplicidade.
          </p>
          <div className="w-12 h-1 bg-vintage-gold mx-auto mt-6" />
        </div>

        {/* Showcase Images list (one under another) */}
        <div className="flex flex-col items-center gap-12 max-w-4xl mx-auto px-4 sm:px-6">
          {SHOWCASE_IMAGES.map((imgUrl, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="w-full bg-[#faf8f5] p-3 sm:p-5 pb-6 sm:pb-8 rounded-3xl border border-vintage-gold/20 shadow-xl overflow-hidden relative group"
            >
              {/* Retro decorative tape details at the top of the "Polaroid" mockup frame */}
              {index % 2 === 0 ? (
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-6.5 bg-vintage-gold/15 rotate-[1deg] z-10 shadow-sm" style={{ backdropFilter: 'blur(1px)' }} />
              ) : (
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-6.5 bg-stone-200/50 -rotate-[1.5deg] z-10 shadow-sm" style={{ backdropFilter: 'blur(1px)' }} />
              )}
              
              <div className="relative mt-5 overflow-hidden rounded-2xl bg-white border border-stone-100 shadow-inner">
                <img
                  src={imgUrl}
                  alt={`Modelo de Arte ${index + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.01]"
                />
              </div>
              <div className="text-center mt-5 sm:mt-6">
                <span className="font-sans text-[10px] sm:text-xs font-bold text-wine-red uppercase tracking-widest block mb-1">
                  Modelo {index + 1} de 50
                </span>
                <span className="font-serif-elegant text-stone-800 text-sm sm:text-base font-medium tracking-tight">
                  Template Romântico Totalmente Editável no Canva
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEÇÃO 5 — DIGITAL E IMPRESSO */}
      <section className="py-20 w-full max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          
          {/* Block 1: Digital */}
          <div className="bg-white rounded-2xl border border-vintage-beige overflow-hidden shadow-md flex flex-col justify-between p-6 md:p-8 transition-all hover:shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-full bg-wine-red/5 flex items-center justify-center text-wine-red mb-6 border border-wine-red/10">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="font-serif-elegant font-bold text-xl md:text-2xl text-stone-950 mb-3">
                Use no digital
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm font-sans-clean leading-relaxed mb-6">
                Personalize e envie pelo WhatsApp, publique nos stories do Instagram ou crie uma linda sequência romântica cronológica para emocionar todos os seus seguidores.
              </p>
            </div>
            
            <div className="mt-4 pt-4 border-t border-stone-150">
              <img
                src={IMAGES.digitalVsPrint}
                alt="Use canva templates no digital"
                referrerPolicy="no-referrer"
                className="w-full aspect-[16/10] object-cover rounded-lg border border-stone-200"
              />
            </div>
          </div>

          {/* Block 2: Printed Keppsakes */}
          <div className="bg-white rounded-2xl border border-vintage-beige overflow-hidden shadow-md flex flex-col justify-between p-6 md:p-8 transition-all hover:shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-full bg-vintage-gold/10 flex items-center justify-center text-vintage-gold-dark mb-6 border border-vintage-gold/20">
                <Printer className="w-6 h-6" />
              </div>
              <h3 className="font-serif-elegant font-bold text-xl md:text-2xl text-stone-950 mb-3">
                Ou transforme em presente físico
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm font-sans-clean leading-relaxed mb-6">
                Baixe em PDF ou imagem e imprima como folha de carta rústica, cartão postal, monte um belo quadro de cabeceira, uma revelação polaroid ou lembrança para embalar.
              </p>
            </div>
            
            <div className="mt-4 pt-4 border-t border-stone-150">
              <img
                src={IMAGES.loveEnvelopeGold}
                alt="Imprima cartas e lembranças de namoro"
                referrerPolicy="no-referrer"
                className="w-full aspect-[16/10] object-cover rounded-lg border border-stone-200"
              />
            </div>
          </div>

        </div>
      </section>

      {/* SEÇÃO 6 — O QUE VEM NO KIT */}
      <section className="bg-vintage-beige/30 py-20 border-t border-b border-vintage-beige">
        <div className="w-full max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Checklist elements */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-bold text-wine-red uppercase tracking-widest block">
                Conteúdo da Caixa
              </span>
              <h2 className="font-serif-elegant font-bold text-3xl text-elegant-black leading-tight">
                O que você recebe no Kit Memórias do Amor
              </h2>
              <p className="text-stone-600 text-sm font-sans-clean leading-relaxed mb-8">
                Tudo o que você precisa para criar a homenagem mais romântica do ano em poucos minutos. Um pacote completo de sensibilidade digital.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-xs text-stone-800">
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">✓</div>
                  <span>Mais de <strong>50 artes</strong> românticas editáveis</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">✓</div>
                  <span>Modelos prontos no <strong>Canva Grátis</strong></span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">✓</div>
                  <span>Artes para <strong>stories, feed e WhatsApp</strong></span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">✓</div>
                  <span>Moldes de <strong>cartas românticas</strong></span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">✓</div>
                  <span>Moldes de <strong>quadros e cartões</strong></span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">✓</div>
                  <span><strong>Polaroids</strong> e molduras customizáveis</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">✓</div>
                  <span>Elementos <strong>vintage scrapbook</strong> para decorar</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">✓</div>
                  <span><strong>Frases prontas</strong> de declaração</span>
                </div>
                <div className="flex items-start gap-2.5 sm:col-span-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">✓</div>
                  <span><strong>Acesso imediato</strong> por e-mail após a confirmação</span>
                </div>
              </div>
            </div>

            {/* Collage Showcase Image beside list */}
            <div className="lg:col-span-6 relative">
              <div className="absolute top-2 left-6 px-4 py-1 bg-white border border-vintage-gold/25 shadow-xs rotate-[-2deg] z-10 text-[9px] font-mono tracking-widest text-[#a98048]">
                📸 Kit Templates Canva 2.0
              </div>
              <div className="vintage-card rounded-2xl overflow-hidden p-3 shadow-xl">
                <img
                  src={IMAGES.previewsBundle}
                  alt="Pacote de artes Canva Kit Memórias do Amor"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 7 — BÔNUS */}
      <section className="py-20 w-full max-w-5xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="font-handwritten text-4xl text-wine-red font-medium block">
            Mimos Exclusivos
          </span>
          <h2 className="font-serif-elegant font-bold text-2xl sm:text-3xl text-elegant-black leading-tight mt-1">
            Bônus para deixar sua surpresa ainda mais especial
          </h2>
          <div className="w-12 h-0.5 bg-vintage-gold mx-auto mt-4" />
        </div>

        {/* 3 cards with delicate styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BONUS_ITEMS.map((bonus, index) => (
            <div
              key={bonus.id}
              className="bg-white p-6 rounded-2xl border border-vintage-gold/15 shadow-xs relative overflow-hidden flex flex-col justify-between"
            >
              {/* Paper strip tag */}
              <div className="absolute top-0 right-0 bg-[#eae4d9]/50 text-vintage-gold-dark text-[8.5px] font-bold font-mono px-3 py-1 uppercase tracking-widest border-bl border-vintage-gold/20">
                {bonus.badge}
              </div>

              <div>
                <div className="w-9 h-9 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-wine-red mb-5 mt-1">
                  {index === 0 && <Feather className="w-4.5 h-4.5" />}
                  {index === 1 && <Printer className="w-4.5 h-4.5" />}
                  {index === 2 && <Gift className="w-4.5 h-4.5" />}
                </div>
                <h4 className="font-serif-elegant font-bold text-stone-900 text-base md:text-lg mb-2">
                  {bonus.title}
                </h4>
                <p className="text-stone-600 text-xs sm:text-sm font-sans-clean leading-relaxed">
                  {bonus.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-emerald-800 text-xs font-bold font-mono">
                <Check className="w-3.5 h-3.5" /> GRÁTIS NO KIT
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO 8 — OFERTA (PRICING BLOCK) */}
      <section id="pricing-section" className="py-20 bg-[#1e1b18] text-[#faf7f2] relative overflow-hidden">
        
        {/* Abstract vintage lines background overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#cea972_1px,transparent_1px)] [background-size:16px_16px] opacity-5 pointer-events-none" />

        <div className="w-full max-w-4xl mx-auto px-6 text-center relative z-10">
          
          <Heart className="w-10 h-10 text-wine-red fill-current mx-auto mb-6 animate-pulse" />

          {/* Two-column pricing selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left mt-8">
            
            {/* Card 1: Versão Essencial (R$ 10) */}
            <div className="border border-[#e1d8cb]/20 p-6 sm:p-8 rounded-3xl bg-black/40 backdrop-blur-md relative flex flex-col justify-between hover:border-vintage-gold/20 transition-all duration-300">
              <div>
                <span className="text-[#a98048] text-[9px] font-mono tracking-widest uppercase font-bold block mb-2">OPÇÃO ESSENCIAL</span>
                <h3 className="font-serif-elegant font-bold text-2xl text-white mb-2">Versão Essencial</h3>
                <p className="text-stone-400 text-xs font-sans-clean leading-relaxed mb-6">
                  Perfeito para quem quer uma surpresa rápida e minimalista com as artes essenciais de namoro.
                </p>
                
                <div className="w-12 h-[1px] bg-vintage-gold/20 mb-6" />
                
                <ul className="space-y-3 font-sans text-xs text-stone-300 mb-8">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-vintage-gold shrink-0" />
                    <span><strong>15+ templates fundamentais</strong> (Stories e Feed)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-vintage-gold shrink-0" />
                    <span>100% Editável no Canva Grátis</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-vintage-gold shrink-0" />
                    <span>Personalize fotos, textos e frases</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-vintage-gold shrink-0" />
                    <span>Acesso imediato por e-mail</span>
                  </li>
                  <li className="flex items-center gap-2.5 opacity-40">
                    <X className="w-4 h-4 text-stone-500 shrink-0" />
                    <span className="line-through">Sem os 3 bônus exclusivos</span>
                  </li>
                  <li className="flex items-center gap-2.5 opacity-40">
                    <X className="w-4 h-4 text-stone-500 shrink-0" />
                    <span className="line-through">Sem moldes de cartas e envelopes</span>
                  </li>
                </ul>
              </div>
              
              <div>
                {/* Price block */}
                <div className="mb-5 border-t border-white/5 pt-5">
                  <div className="text-2xl font-serif-elegant font-bold text-vintage-gold">
                    Apenas <strong className="text-white">R$ 10,00</strong>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mt-1">
                    ⚡ Pagamento único pelo Pix
                  </span>
                </div>
                
                <button
                  onClick={() => openCheckout(10)}
                  className="w-full py-3 bg-[#3a3530] hover:bg-[#4d4741] text-white rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer active:scale-[0.99]"
                >
                  Garantir por R$ 10,00
                </button>
              </div>
            </div>

            {/* Card 2: Kit Completo Deluxe (R$ 37) */}
            <div className="border-2 border-vintage-gold p-6 sm:p-8 rounded-3xl bg-[#28211b] backdrop-blur-md relative flex flex-col justify-between shadow-xl shadow-black/40 hover:scale-[1.01] transition-all duration-300">
              {/* Highlight ribbon indicator */}
              <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 bg-vintage-gold text-stone-950 text-[10px] font-bold uppercase tracking-widest py-1 px-5 rounded-full shadow-md whitespace-nowrap">
                🏆 O MAIS ESCOLHIDO E COMPLETO
              </div>
              
              <div className="pt-2">
                <span className="text-wine-red text-[9px] font-mono tracking-widest uppercase font-bold block mb-2">COLEÇÃO TOTAL + TODOS OS BÔNUS</span>
                <h3 className="font-serif-elegant font-bold text-2xl text-white mb-2">Kit Completo Deluxe</h3>
                <p className="text-stone-300 text-xs font-sans-clean leading-relaxed mb-6">
                  Nossa coleção oficial consagrada com mais de 50 artes completas e todos os mimos exclusivos.
                </p>
                
                <div className="w-12 h-[1px] bg-vintage-gold/30 mb-6" />
                
                <ul className="space-y-3 font-sans text-xs text-stone-200 mb-8">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>50+ templates completos</strong> (Feed, Stories, WhatsApp)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Moldes de Cartas e Envelopes</strong> românticos</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Moldes de Quadros e Postais</strong> editáveis</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Elementos vintage scrapbook (Polaroids e adesivos)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>3 BÔNUS EXTRA INCLUSOS GRÁTIS</strong></span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Acesso Vitalício Garantido + Suporte</span>
                  </li>
                </ul>
              </div>
              
              <div>
                {/* Price block */}
                <div className="mb-5 border-t border-white/10 pt-5">
                  <span className="text-stone-400 line-through text-[11px]">De R$ 67,00</span>
                  <div className="text-2xl sm:text-3xl font-serif-elegant font-bold text-vintage-gold mt-0.5">
                    Apenas <strong className="text-white">R$ 37,00</strong>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block mt-1">
                    ⚡ Tudo liberado imediatamente por e-mail
                  </span>
                </div>
                
                <button
                  onClick={() => openCheckout(37)}
                  className="w-full py-3.5 bg-wine-red hover:bg-[#a12323] text-white rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-md shadow-wine-red/25 cursor-pointer active:scale-[0.99]"
                >
                  Quero o Kit Completo
                </button>
              </div>
            </div>

          </div>

          <p className="text-stone-500 text-[10px] sm:text-xs mt-6">
            🔒 Compra 100% protegida com criptografia SSL avançada de 256 bits.
          </p>
        </div>
      </section>

      {/* SEÇÃO 9 — PERGUNTAS RÁPIDAS (FAQ) */}
      <section className="py-20 w-full max-w-5xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-[10px] font-bold text-[#a98048] uppercase tracking-widest block mb-2">
            Esclareça suas dúvidas
          </span>
          <h2 className="font-serif-elegant font-bold text-3xl text-stone-900">
            Perguntas Frequentes
          </h2>
          <div className="w-12 h-0.5 bg-vintage-gold mx-auto mt-4" />
        </div>

        {/* Interactive Accordion Section */}
        <FaqSection />
      </section>

      {/* SEÇÃO FINAL (EMOCIONAL) */}
      <section className="bg-vintage-beige py-20 border-t border-b border-vintage-gold/20 text-center relative">
        <div className="w-full max-w-3xl mx-auto px-6">
          <Heart className="w-8 h-8 text-wine-red fill-current mx-auto mb-4 opacity-80" />
          
          <h2 className="font-serif-elegant font-bold text-3xl sm:text-4xl text-elegant-black leading-tight max-w-2xl mx-auto mb-4">
            Surpreenda quem você ama com algo que parece feito do coração.
          </h2>
          <p className="text-stone-600 text-xs sm:text-base font-sans leading-relaxed max-w-xl mx-auto mb-10">
            Escolha um modelo, adicione suas memórias e frases românticas, e crie um presente ou post inesquecível para este Dia dos Namorados.
          </p>

          <button
            onClick={() => openCheckout(37)}
            className="px-8 py-4 bg-wine-red hover:bg-wine-dark text-white rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase shadow-md transition-all duration-300 cursor-pointer hover:scale-[1.01]"
          >
            Quero meu Kit Memórias do Amor
          </button>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-[#1e1b18] text-stone-400 py-12 border-t border-stone-800 text-xs text-center font-sans-clean px-6">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="font-semibold text-stone-300">
            Kit Memórias do Amor © 2026
          </p>
          <p className="max-w-2xl mx-auto leading-relaxed text-[11px] opacity-75">
            Informações simples importante: Produto 100% digital e editável dentro da plataforma gratuita do Canva. Nenhum produto físico, quadro, envelope, papel ou material impresso será enviado para o seu endereço físico por correio. O comprador poderá baixar os layouts prontos em arquivo digital de alta qualidade e deverá providenciar a revelação fotográfica ou impressão por conta própria, caso assim prefira.
          </p>
          <div className="flex justify-center gap-4 text-stone-500 pt-2 text-[10px] font-mono">
            <span>Privacidade</span>
            <span>•</span>
            <span>Termos de Uso</span>
            <span>•</span>
            <span>Canva Partner Setup</span>
          </div>
        </div>
      </footer>

      {/* CHECKOUT MODAL DRAWER OVERLAY */}
      <AnimatePresence>
        {isCheckoutOpen && (
          <CheckoutModal 
            isOpen={isCheckoutOpen} 
            onClose={() => setIsCheckoutOpen(false)} 
            initialPrice={checkoutPrice}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
