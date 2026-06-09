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
  ChevronLeft,
  ChevronRight, 
  ShieldCheck, 
  Calendar,
  Lock,
  Bookmark,
  Share2,
  X,
  Star
} from 'lucide-react';
import { IMAGES, USE_CASES, BONUS_ITEMS, INFINITE_CAROUSEL_IMAGES } from './data';

// Component imports
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

const TESTIMONIALS = [
  {
    name: 'Juliana Silva',
    age: '24 anos',
    city: 'São Paulo - SP',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    text: 'Eu queria algo diferente para o nosso aniversário de namoro e as artes do Kit salvaram! Editei tudo pelo celular em 10 minutos, adicionei nossas fotos e mandei imprimir num papel de gramatura alta. Meu namorado chorou de emoção quando viu! Melhor compra que já fiz.'
  },
  {
    name: 'Mateus Ramos',
    age: '27 anos',
    city: 'Curitiba - PR',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    text: 'Sempre tive muita dificuldade para criar declarações bonitas ou presentes criativos. O Kit facilitou tudo demais. O modelo de Jornal do Amor e os envelopes prontos são lindos. Imprimi tudo em casa e ficou com uma qualidade profissional inacreditável. Vale cada centavo!'
  },
  {
    name: 'Camila & Lucas',
    age: '25 anos',
    city: 'Belo Horizonte - MG',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    text: 'As artes são de extremo bom gosto, bem diferentes desses designs amadores que a gente vê por aí. Os bônus de cartas secretas e raspadinhas de encontro são super divertidos. Estamos usando para dar uma movimentada na rotina e tem sido maravilhoso!'
  },
  {
    name: 'Thiago Almeida',
    age: '29 anos',
    city: 'Rio de Janeiro - RJ',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    text: 'Comprei o Kit Completo de R$ 37,00 e o acesso chegou na hora no meu e-mail. Os templates são muito fáceis de editar no Canva grátis. Fiz uma surpresa no quarto cheia de cartinhas e polaroids que criei lá. Minha esposa amou o detalhe e o capricho.'
  }
];

const PURCHASE_NOTIFICATIONS = [
  { name: 'Ana Souza', city: 'São Paulo - SP', action: 'acabou de garantir o Kit! 🌹', time: 'Agora mesmo' },
  { name: 'Bernardo Martins', city: 'Belo Horizonte - MG', action: 'comprou o Combo Completo 🎁', time: 'Há 1 min' },
  { name: 'Carla Dias', city: 'Rio de Janeiro - RJ', action: 'acabou de adquirir o Kit 💌', time: 'Agora mesmo' },
  { name: 'Daniel Alves', city: 'Porto Alegre - RS', action: 'garantiu o Kit com Bônus! ✨', time: 'Há 2 min' },
  { name: 'Elena Costa', city: 'Brasília - DF', action: 'comprou o Kit de R$ 37 ❤️', time: 'Agora mesmo' },
  { name: 'Felipe Ramos', city: 'Curitiba - PR', action: 'acabou de garantir o seu! 🥰', time: 'Há 3 min' },
  { name: 'Gisele Neves', city: 'Salvador - BA', action: 'comprou o Combo Completo 🎁', time: 'Agora mesmo' },
  { name: 'Henrique Lima', city: 'Recife - PE', action: 'garantiu o Kit de R$ 37 💞', time: 'Há 1 min' },
  { name: 'Isabela Rocha', city: 'Fortaleza - CE', action: 'acabou de adquirir o Kit 💕', time: 'Agora mesmo' },
  { name: 'João Valente', city: 'Campinas - SP', action: 'garantiu o presente perfeito! 💝', time: 'Agora mesmo' },
  { name: 'Laura Fontes', city: 'Florianópolis - SC', action: 'comprou o Combo Completo 🎁', time: 'Há 2 min' },
];

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutPrice, setCheckoutPrice] = useState(37);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Sales Simulation Notifications Setup
  const [activeNotification, setActiveNotification] = useState<typeof PURCHASE_NOTIFICATIONS[0] | null>(null);
  const [notificationsDisabled, setNotificationsDisabled] = useState(false);

  useEffect(() => {
    if (notificationsDisabled) return;

    let notificationTimeout: NodeJS.Timeout;
    let cycleInterval: NodeJS.Timeout;

    // Show a notification every 14 seconds (visible for 5.5 seconds, hidden for 8.5 seconds)
    const runCycle = () => {
      const randomIndex = Math.floor(Math.random() * PURCHASE_NOTIFICATIONS.length);
      setActiveNotification(PURCHASE_NOTIFICATIONS[randomIndex]);

      // Dismiss after 5.5 seconds (quick and non-intrusive)
      notificationTimeout = setTimeout(() => {
        setActiveNotification(null);
      }, 5500);
    };

    // First trigger after 4 seconds
    const firstTimeout = setTimeout(() => {
      runCycle();
      cycleInterval = setInterval(runCycle, 14000);
    }, 4000);

    return () => {
      clearTimeout(firstTimeout);
      clearTimeout(notificationTimeout);
      clearInterval(cycleInterval);
    };
  }, [notificationsDisabled]);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(slideTimer);
  }, []);

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
    let baseUrl = "";
    if (price === 37) {
      baseUrl = "https://pay.wiapy.com/2sdhbAnLqC";
    } else if (price === 10) {
      baseUrl = "https://pay.wiapy.com/YVWVqlcWL";
    }

    if (baseUrl) {
      const currentParams = window.location.search;
      if (currentParams) {
        const separator = baseUrl.includes("?") ? "&" : "?";
        window.location.href = `${baseUrl}${separator}${currentParams.replace(/^\?/, "")}`;
      } else {
        window.location.href = baseUrl;
      }
      return;
    }

    setCheckoutPrice(price);
    setIsCheckoutOpen(true);
  };

  const getCheckoutUrl = (price: number) => {
    let baseUrl = "";
    if (price === 37) {
      baseUrl = "https://pay.wiapy.com/2sdhbAnLqC";
    } else if (price === 10) {
      baseUrl = "https://pay.wiapy.com/YVWVqlcWL";
    }
    
    if (baseUrl && typeof window !== "undefined") {
      const currentParams = window.location.search;
      if (currentParams) {
        const separator = baseUrl.includes("?") ? "&" : "?";
        return `${baseUrl}${separator}${currentParams.replace(/^\?/, "")}`;
      }
    }
    return baseUrl;
  };

  const scrollToOffers = () => {
    const element = document.getElementById('pricing-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <div className="relative min-h-screen Selection bg-vintage-cream text-elegant-black font-sans-clean antialiased overflow-x-hidden">
      
      {/* Sales alert notifications in the top right, with low space profile and close ("X") option */}
      <AnimatePresence>
        {activeNotification && !notificationsDisabled && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-12 right-4 sm:right-6 z-[9999] max-w-[280px] sm:max-w-xs bg-white/95 backdrop-blur-md text-stone-900 border border-vintage-gold/25 rounded-xl shadow-xl p-3 pr-8 flex items-center gap-2.5"
          >
            <div className="w-7 h-7 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-bold text-stone-800 tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
                {activeNotification.name} ({activeNotification.city})
              </p>
              <p className="text-[10px] text-stone-600 leading-tight">
                {activeNotification.action}
              </p>
              <span className="text-[8px] font-mono text-stone-400 block mt-0.5">
                {activeNotification.time}
              </span>
            </div>
            <button
              onClick={() => {
                setNotificationsDisabled(true);
                setActiveNotification(null);
              }}
              title="Fechar notificação"
              className="absolute top-2 right-2 text-stone-400 hover:text-stone-700 transition cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

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
          onClick={scrollToOffers}
          className="ml-2 bg-vintage-gold hover:bg-white text-stone-950 font-sans text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider transition-all duration-300 cursor-pointer"
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
              onClick={scrollToOffers}
              className="px-8 py-4 bg-wine-red hover:bg-wine-dark hover:scale-[1.02] text-white rounded-full text-sm md:text-base font-bold tracking-widest uppercase shadow-lg shadow-wine-red/25 hover:shadow-xl transition-all cursor-pointer duration-300 inline-flex items-center gap-3 active:scale-[0.99]"
            >
              <Heart className="w-5 h-5 fill-current" /> Quero criar minha homenagem
            </button>

            <p className="text-[11px] text-stone-500 font-mono tracking-wide uppercase">
              Acesso imediato por E-mail e WhatsApp • Editável no Canva • Digital e impresso
            </p>
          </motion.div>
        </div>

        {/* Vintage Scrapbook Collage mockup layout for Hero - Now purely premium text card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 relative mx-auto max-w-2xl bg-white/75 backdrop-blur-xs border border-vintage-gold/30 p-6 md:p-10 rounded-2xl shadow-xl text-center"
        >
          {/* Sincere quick features list in scrapbook look */}
          <div className="space-y-6">
            <h4 className="font-serif-elegant font-bold text-xl sm:text-2xl text-elegant-black leading-tight border-b border-vintage-beige pb-4 inline-block px-4">
              Crie algo único que dure para sempre
            </h4>
            
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans-clean max-w-lg mx-auto">
              Esqueça os presentes clichês e descartáveis. Prepare uma declaração de amor que parece ter sido costurada à mão, personalizada com as fotos dos seus melhores dias juntos.
            </p>

            <ul className="space-y-3.5 font-sans text-xs sm:text-sm text-stone-700 max-w-md mx-auto text-left border-t border-vintage-beige/50 pt-5">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#f3efe9] border border-vintage-gold text-vintage-gold-dark flex items-center justify-center font-bold shrink-0 mt-0.5">✓</div>
                <span>Mais de <strong>50 templates exclusivos editáveis</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#f3efe9] border border-vintage-gold text-vintage-gold-dark flex items-center justify-center font-bold shrink-0 mt-0.5">✓</div>
                <span>Zero complicação: mude tudo com <strong>1 clique</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#f3efe9] border border-vintage-gold text-vintage-gold-dark flex items-center justify-center font-bold shrink-0 mt-0.5">✓</div>
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
            Arraste para o lado • Toque na vitrine abaixo para testar a edição ao vivo
          </p>
        </div>

        <div className="relative w-full overflow-hidden py-4 flex select-none">
          {/* Ambient shading gradient covers - much narrower & subtler to keep images super sharp and not foggy */}
          <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-16 md:w-28 bg-gradient-to-r from-vintage-cream via-vintage-cream/10 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-16 md:w-28 bg-gradient-to-l from-vintage-cream via-vintage-cream/10 to-transparent z-10 pointer-events-none" />

          {/* Endless Marquee Inner flow */}
          <div className="animate-marquee flex gap-4 sm:gap-6 items-center">
            {/* Set 1 */}
            {INFINITE_CAROUSEL_IMAGES.map((imgUrl, i) => (
              <div
                key={`infinite-s1-${i}`}
                onClick={() => setLightboxImage(imgUrl)}
                className="w-52 sm:w-64 md:w-72 aspect-[3/4] overflow-hidden rounded-lg sm:rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 transform shrink-0 border border-vintage-gold/15 bg-white flex items-center justify-center cursor-pointer"
              >
                <img
                  src={imgUrl}
                  alt={`Arte Exclusiva ${i + 1}`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            {/* Set 2 (Duplicated) */}
            {INFINITE_CAROUSEL_IMAGES.map((imgUrl, i) => (
              <div
                key={`infinite-s2-${i}`}
                onClick={() => setLightboxImage(imgUrl)}
                className="w-52 sm:w-64 md:w-72 aspect-[3/4] overflow-hidden rounded-lg sm:rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 transform shrink-0 border border-vintage-gold/15 bg-white flex items-center justify-center cursor-pointer"
              >
                <img
                  src={imgUrl}
                  alt={`Arte Exclusiva ${i + 1}`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
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
            <div
              key={index}
              onClick={() => setLightboxImage(imgUrl)}
              className="w-full bg-[#faf8f5] p-3 sm:p-5 pb-6 sm:pb-8 rounded-3xl border border-vintage-gold/20 shadow-xl overflow-hidden relative group cursor-pointer hover:shadow-2xl transition-all duration-300"
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
                  loading="lazy"
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
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO 5 — DIGITAL E IMPRESSO */}
      <section className="py-20 w-full max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          
          {/* Block 1: Digital */}
          <div className="bg-white rounded-2xl border border-vintage-beige overflow-hidden shadow-md flex flex-col justify-between p-6 md:p-8 transition-all hover:shadow-xl">
            <div>
              <h3 className="font-serif-elegant font-bold text-xl md:text-2xl text-stone-950 mb-3 text-center">
                Use no digital
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm font-sans-clean leading-relaxed mb-6 text-center">
                Personalize e envie pelo WhatsApp, publique nos stories do Instagram ou crie uma linda sequência romântica cronológica para emocionar todos os seus seguidores.
              </p>
            </div>
            
            <div className="mt-4 pt-4 border-t border-stone-150 flex flex-col items-center">
              {/* Mini Smartphone Mockup for the Wistia Video */}
              <div className="w-full max-w-[135px] sm:max-w-[150px] mx-auto relative">
                {/* Smartphone Shell Frame */}
                <div className="relative border-[6px] border-stone-900 rounded-[24px] shadow-md bg-stone-900 ring-1 ring-stone-950/10">
                  {/* Speaker Receiver & Camera Island */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-2 bg-stone-950 rounded-full z-30 flex items-center justify-between px-1.5">
                    <div className="w-0.5 h-0.5 bg-stone-800 rounded-full" />
                    <div className="w-3 h-0.5 bg-stone-800 rounded-full" />
                    <div className="w-0.5 h-0.5 bg-[#121c2c] rounded-full" />
                  </div>

                  {/* Inner Screen Display (9:19 Aspect Ratio Matches the Portrait Video) */}
                  <div className="relative w-full aspect-[9/19] bg-white rounded-[18px] overflow-hidden">
                    <iframe
                      src="https://fast.wistia.net/embed/iframe/b0p70390w2"
                      title="Demonstração Usabilidade Digital"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                      frameBorder="0"
                      className="absolute inset-0 w-full h-full bg-white rounded-[18px]"
                    />
                  </div>

                  {/* iOS System Indicator Bar (Bottom) */}
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-stone-800 rounded-full z-30" />
                </div>
              </div>
            </div>
          </div>

          {/* Block 2: Printed Keppsakes */}
          <div className="bg-white rounded-2xl border border-vintage-beige overflow-hidden shadow-md flex flex-col justify-between p-6 md:p-8 transition-all hover:shadow-xl">
            <div>
              <h3 className="font-serif-elegant font-bold text-xl md:text-2xl text-stone-950 mb-3 text-center">
                Ou transforme em presente físico
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm font-sans-clean leading-relaxed mb-6 text-center">
                Baixe em PDF ou imagem e imprima como folha de carta rústica, cartão postal, monte um belo quadro de cabeceira, uma revelação polaroid ou lembrança para embalar.
              </p>
            </div>
            
            <div className="mt-4 pt-4 border-t border-stone-150">
              <img
                src="https://i.postimg.cc/5ykTD174/Chat-GPT-Image-6-de-jun-de-2026-18-46-32.png"
                alt="Imprima cartas e lembranças de namoro"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full aspect-[16/10] object-cover rounded-lg border border-stone-200"
              />
            </div>
          </div>

        </div>
      </section>

      {/* SEÇÃO 6 — O QUE VEM NO KIT */}
      <section className="bg-vintage-beige/30 py-20 border-t border-b border-vintage-beige">
        <div className="w-full max-w-3xl mx-auto px-6">
          <div className="space-y-8 text-center">
            
            {/* Checklist elements */}
            <div className="space-y-6">
              <span className="text-[10px] font-bold text-wine-red uppercase tracking-widest block">
                Conteúdo da Caixa
              </span>
              <h2 className="font-serif-elegant font-bold text-2xl sm:text-3xl text-elegant-black leading-tight">
                O que você recebe no Kit Memórias do Amor
              </h2>
              <p className="text-stone-600 text-sm font-sans-clean leading-relaxed max-w-lg mx-auto">
                Tudo o que você precisa para criar a homenagem mais romântica do ano em poucos minutos. Um pacote completo de sensibilidade digital.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-xs text-stone-800 text-left max-w-2xl mx-auto bg-white/70 backdrop-blur-xs border border-vintage-gold/15 p-6 sm:p-8 rounded-2xl shadow-sm mt-6">
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
                <div className="flex items-start gap-2.5 sm:col-span-2 border-t border-vintage-beige/50 pt-3 mt-1">
                  <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">✓</div>
                  <span><strong>Acesso imediato</strong> entregue no seu E-mail e WhatsApp pós a confirmação</span>
                </div>
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

              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-wine-red mb-5 mt-1 mx-auto">
                  {index === 0 && <Feather className="w-4.5 h-4.5" />}
                  {index === 1 && <Printer className="w-4.5 h-4.5" />}
                  {index === 2 && <Gift className="w-4.5 h-4.5" />}
                </div>
                <h4 className="font-serif-elegant font-bold text-stone-900 text-base md:text-lg mb-2 text-center">
                  {bonus.title}
                </h4>
                <p className="text-stone-600 text-xs sm:text-sm font-sans-clean leading-relaxed text-center">
                  {bonus.description}
                </p>

                {bonus.image && (
                  <div className="mt-4 overflow-hidden rounded-xl border border-vintage-gold/20 bg-stone-50 w-full">
                    <img
                      src={bonus.image}
                      alt={bonus.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
              </div>

              <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-center gap-1.5 text-emerald-800 text-xs font-bold font-mono">
                <Check className="w-3.5 h-3.5" /> GRÁTIS NO KIT
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 💌 SEÇÃO DE CARTAS ROMÂNTICAS - NOVO CARROSSEL INFINITO */}
      <section className="bg-gradient-to-b from-[#faf7f2]/10 to-[#f3efe9]/40 border-t border-b border-vintage-gold/20 py-20 relative overflow-hidden">
        {/* Background paper stamp element for vintage aesthetics */}
        <div className="absolute top-10 right-10 opacity-[0.03] select-none pointer-events-none font-serif-elegant font-bold text-9xl">
          Love
        </div>
        
        <div className="w-full max-w-7xl mx-auto px-6 text-center mb-12">
          <span className="font-handwritten text-4xl text-wine-red font-medium block mb-2">
            Coleção Especial
          </span>
          <h2 className="font-serif-elegant font-bold text-3xl text-stone-900 tracking-tight leading-tight">
            Cartas de Amor Vintage Editáveis
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm max-w-xl mx-auto mt-3 leading-relaxed font-sans-clean">
            Moldes de cartas exclusivas inspirados em romances clássicos, com selos, rascunhos, envelopes antigos e fontes manuscritas. Tudo já diagramado e pronto para você colocar as suas fotos e palavras.
          </p>
          <div className="w-12 h-1 bg-vintage-gold mx-auto mt-6" />
        </div>

        {/* Endless Marquee Inner flow (Specific to the 8 Custom Love Letters) */}
        <div className="relative w-full overflow-hidden py-6 flex select-none">
          {/* Ambient shading gradient covers - much narrower & subtler to keep images super sharp and not foggy */}
          <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-16 md:w-28 bg-gradient-to-r from-vintage-cream via-vintage-cream/10 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-16 md:w-28 bg-gradient-to-l from-vintage-cream via-vintage-cream/10 to-transparent z-10 pointer-events-none" />

          {/* Endless Marquee Inner flow */}
          <div className="animate-marquee flex gap-6 sm:gap-8 items-center">
            {/* Set 1 */}
            {INFINITE_CAROUSEL_IMAGES.map((imgUrl, i) => (
              <div
                key={`custom-letter-s1-${i}`}
                onClick={() => setLightboxImage(imgUrl)}
                className="w-64 sm:w-76 md:w-96 aspect-[3/4] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 transform shrink-0 border border-vintage-gold/25 bg-white flex flex-col justify-between p-3 cursor-pointer group"
              >
                <div className="w-full h-full overflow-hidden rounded-xl relative bg-stone-50">
                  <img
                    src={imgUrl}
                    alt={`Molde de Carta Premium ${i + 1}`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Glassmorphic watermark tab */}
                  <span className="absolute bottom-2.5 left-2.5 px-3 py-1 bg-white/95 backdrop-blur-md rounded-lg text-[#580d0d] text-[10px] sm:text-xs font-bold border border-vintage-gold/20 shadow-sm">
                    Molde de Carta {i + 1}
                  </span>
                </div>
              </div>
            ))}
            {/* Set 2 (Duplicated for continuous seamless scrolling) */}
            {INFINITE_CAROUSEL_IMAGES.map((imgUrl, i) => (
              <div
                key={`custom-letter-s2-${i}`}
                onClick={() => setLightboxImage(imgUrl)}
                className="w-64 sm:w-76 md:w-96 aspect-[3/4] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 transform shrink-0 border border-vintage-gold/25 bg-white flex flex-col justify-between p-3 cursor-pointer group"
              >
                <div className="w-full h-full overflow-hidden rounded-xl relative bg-stone-50">
                  <img
                    src={imgUrl}
                    alt={`Molde de Carta Premium ${i + 1}`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Glassmorphic watermark tab */}
                  <span className="absolute bottom-2.5 left-2.5 px-3 py-1 bg-white/95 backdrop-blur-md rounded-lg text-[#580d0d] text-[10px] sm:text-xs font-bold border border-vintage-gold/20 shadow-sm">
                    Molde de Carta {i + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-[11px] sm:text-xs text-stone-500 font-mono uppercase tracking-widest flex items-center justify-center gap-1.5 px-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Disponíveis para editar com suas fotos e textos no Canva Grátis
          </p>
        </div>
      </section>

      {/* SEÇÃO 8 — OFERTA (PRICING BLOCK) */}
      <section id="pricing-section" className="py-20 bg-[#1e1b18] text-[#faf7f2] relative overflow-hidden">
        
        {/* Abstract vintage lines background overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#cea972_1px,transparent_1px)] [background-size:16px_16px] opacity-5 pointer-events-none" />

        <div className="w-full max-w-4xl mx-auto px-6 text-center relative z-10">
          
          <Heart className="w-10 h-10 text-wine-red fill-current mx-auto mb-6 animate-pulse" />

          {/* Canva Free Sample Banner */}
          <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-amber-50/5 border border-vintage-gold/20 flex flex-col md:flex-row items-center justify-between text-left gap-6 max-w-3xl mx-auto relative overflow-hidden">
            {/* Delicate gold badge on top corner */}
            <div className="absolute top-0 right-0 bg-vintage-gold text-stone-950 text-[8px] font-bold font-mono px-3 py-1 uppercase tracking-widest rounded-bl-xl shadow-xs">
              100% Grátis
            </div>
            
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-vintage-gold/20 border border-[#cea972]/30 text-vintage-gold-dark text-[10px] font-bold rounded-md uppercase tracking-wider">
                  Amostra Grátis
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <h3 className="font-serif-elegant font-bold text-lg sm:text-xl text-[#faf7f2] leading-snug">
                Quer testar antes de escolher?
              </h3>
              <p className="text-stone-300 text-xs font-sans-clean leading-relaxed max-w-xl">
                Preparamos uma amostra especial com <strong className="text-vintage-gold">8 artes editáveis gratuitas</strong> para você experimentar. Crie, edite e sinta como é fácil e rápido direto no Canva.
              </p>
            </div>
            
            <div className="shrink-0 w-full md:w-auto">
              <a
                href="https://canva.link/2oseupl7p3hiyfe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-vintage-gold hover:bg-white text-stone-950 font-sans text-xs font-bold rounded-full uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] cursor-pointer"
              >
                <span>Baixar Amostra Grátis</span>
                <ChevronRight className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>

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
                    <span>Acesso imediato por E-mail e WhatsApp</span>
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
                
                <a
                  href={getCheckoutUrl(10)}
                  className="w-full block text-center py-3 bg-[#3a3530] hover:bg-[#4d4741] text-white rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer active:scale-[0.99]"
                >
                  Garantir por R$ 10,00
                </a>
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
                  <li className="space-y-2 border-t border-white/10 pt-3 mt-3">
                    <div className="flex items-center gap-2.5 text-vintage-gold">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="font-bold text-xs tracking-wider uppercase">🎁 Inclusos 3 Bônus Exclusivos Grátis:</span>
                    </div>
                    <div className="bg-[#322921]/60 rounded-xl p-3 border border-vintage-gold/15 space-y-2 font-sans text-[11px] text-stone-200">
                      <div className="flex items-start gap-1.5">
                        <span className="text-emerald-400 font-bold shrink-0">➜ Bônus 1:</span>
                        <span><strong>Cartinhas de Amor Dobráveis</strong> (Moldes prontos para imprimir e surpreender)</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <span className="text-emerald-400 font-bold shrink-0">➜ Bônus 2:</span>
                        <span><strong>Guia de Impressão Perfeita</strong> (Melhores papéis, tamanhos e configurações de impressora)</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <span className="text-emerald-400 font-bold shrink-0">➜ Bônus 3:</span>
                        <span><strong>Manual de Surpresas no Quarto</strong> (Ideias criativas e baratas de decoração apaixonante)</span>
                      </div>
                    </div>
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
                    ⚡ Tudo liberado imediatamente por E-mail e WhatsApp
                  </span>
                </div>
                
                <a
                  href={getCheckoutUrl(37)}
                  className="w-full block text-center py-3.5 bg-wine-red hover:bg-[#a12323] text-white rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-md shadow-wine-red/25 cursor-pointer active:scale-[0.99]"
                >
                  Quero o Kit Completo
                </a>
              </div>
            </div>

          </div>

          {/* TESTIMONIALS CAROUSEL (Real feedback below the cards) */}
          <div className="mt-16 max-w-2xl mx-auto text-center relative z-10">
            <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-vintage-gold block mb-1">
              DEPOIMENTOS DE QUEM JÁ ADQUIRIU
            </span>
            <h3 className="font-serif-elegant font-bold text-xl sm:text-2xl text-white mb-6">
              O que dizem os namorados apaixonados
            </h3>

            {/* Carousel Frame */}
            <div className="relative min-h-[225px] bg-black/30 border border-[#e1d8cb]/10 rounded-3xl p-6 sm:p-8 backdrop-blur-sm overflow-hidden flex flex-col justify-between group">
              
              {/* Star Rating in Gold */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(TESTIMONIALS[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-vintage-gold fill-current" />
                ))}
              </div>

              {/* Slide Content with AnimatePresence for smooth transitions */}
              <div className="relative px-6 sm:px-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center"
                  >
                    <p className="text-stone-300 text-xs sm:text-sm font-sans-clean leading-relaxed italic mb-6">
                      "{TESTIMONIALS[currentTestimonial].text}"
                    </p>

                    {/* Profile & Location */}
                    <div className="flex items-center gap-3">
                      <img
                        src={TESTIMONIALS[currentTestimonial].avatar}
                        alt={TESTIMONIALS[currentTestimonial].name}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-10 h-10 rounded-full object-cover border border-vintage-gold/50"
                      />
                      <div className="text-left">
                        <span className="font-serif-elegant font-bold text-sm text-white block">
                          {TESTIMONIALS[currentTestimonial].name}
                        </span>
                        <span className="font-sans text-[10px] text-stone-400 block">
                          {TESTIMONIALS[currentTestimonial].age} • {TESTIMONIALS[currentTestimonial].city}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Left/Right Click Nav Handlers */}
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white flex items-center justify-center transition-all cursor-pointer opacity-70 group-hover:opacity-100"
                aria-label="Depoimento Anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white flex items-center justify-center transition-all cursor-pointer opacity-70 group-hover:opacity-100"
                aria-label="Próximo Depoimento"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Dots Selectors Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                      i === currentTestimonial ? 'bg-vintage-gold w-4' : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>

          <p className="text-stone-500 text-[10px] sm:text-xs mt-8">
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

          {/* Guarantee Seal to Boost Conversions - Light Theme version */}
          <div
            className="mb-12 max-w-xl mx-auto bg-white border border-vintage-gold/30 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 text-left shadow-md"
          >
            {/* Guarantee Badge Stamp Design */}
            <div className="relative shrink-0 flex items-center justify-center w-24 h-24 rounded-full border-4 border-vintage-gold bg-[#1e1b18] text-vintage-gold shadow-md">
              <div className="absolute inset-1.5 border border-dashed border-vintage-gold/50 rounded-full" />
              <div className="text-center z-10 flex flex-col items-center justify-center">
                <span className="font-serif-elegant font-black text-2xl leading-none text-white block">7</span>
                <span className="font-sans text-[8px] font-bold uppercase tracking-widest leading-none mt-0.5 text-vintage-gold">DIAS DE</span>
                <span className="font-sans text-[9px] font-extrabold uppercase tracking-wide leading-none mt-0.5 text-white">GARANTIA</span>
              </div>
              {/* Star decorations */}
              <div className="absolute top-1 left-1.5 text-[6px]">★</div>
              <div className="absolute top-1 right-1.5 text-[6px]">★</div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <ShieldCheck className="w-5 h-5 text-vintage-gold shrink-0" />
                <h4 className="font-serif-elegant font-bold text-stone-900 text-base sm:text-lg">
                  Garantia Incondicional de 7 Dias
                </h4>
              </div>
              <p className="text-stone-600 text-xs sm:text-sm font-sans-clean leading-relaxed">
                Você tem 7 dias inteiros para testar e usar todas as artes no Canva. Se por qualquer motivo não se apaixonar pelos modelos, nós devolvemos seu dinheiro integralmente, sem perguntas ou burocracia.
              </p>
            </div>
          </div>

          <a
            href={getCheckoutUrl(37)}
            className="inline-block px-8 py-4 bg-wine-red hover:bg-wine-dark text-white rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase shadow-md transition-all duration-300 cursor-pointer hover:scale-[1.01]"
          >
            Quero meu Kit Memórias do Amor
          </a>
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

      {/* LIGHTBOX FOR HIGH-RESOLUTION IMAGE ZOOM */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[99999] p-4 sm:p-6 flex flex-col items-center justify-center backdrop-blur-md"
          >
            {/* Close button with high contrast */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all border border-white/25 shadow-lg active:scale-95 z-[100]"
              aria-label="Fechar visualização"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Main Image Container with zoom ability */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative max-w-full max-h-[75vh] sm:max-h-[80vh] flex items-center justify-center p-2 bg-stone-900/60 rounded-2xl border border-white/10"
            >
              <img
                src={lightboxImage}
                alt="Visualização em Alta Definição"
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[70vh] sm:max-h-[75vh] object-contain rounded-lg shadow-2xl selection:bg-transparent"
                style={{ imageRendering: 'auto' }}
              />
            </motion.div>

            {/* Info and action bar */}
            <div className="mt-6 text-center text-white/95 space-y-3 px-4 z-[100]">
              <p className="text-sm sm:text-base font-serif-elegant text-vintage-gold tracking-wide">
                Visualização em Alta Definição (100% Crisp & Nítido)
              </p>
              <p className="text-xs text-stone-300 max-w-md font-sans-clean leading-relaxed">
                Este é o design real em alta resolução. No Canva gratuito você poderá editar todos os elementos (textos, fontes, fotos e cores) mantendo essa nitidez incrível.
              </p>
              <div className="flex gap-3 justify-center pt-2">
                <button
                  onClick={() => {
                    window.open(lightboxImage, '_blank');
                  }}
                  className="px-5 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-semibold border border-white/25 transition-all flex items-center gap-2"
                >
                  Ver Link Original ↗
                </button>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="px-5 py-2 rounded-xl bg-vintage-gold hover:bg-opacity-90 text-stone-900 text-xs font-bold transition-all"
                >
                  Fechar Janela
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
