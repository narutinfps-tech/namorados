import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Check, ShieldCheck, CreditCard, Landmark, Send, Calendar, Heart, AlertCircle, Sparkles } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPrice?: number;
}

export default function CheckoutModal({ isOpen, onClose, initialPrice = 37 }: CheckoutModalProps) {
  const [selectedProduct, setSelectedProduct] = useState<'standard' | 'premium' | 'budget'>(
    initialPrice === 10 ? 'budget' : initialPrice === 47 ? 'premium' : 'standard'
  );
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'cartao'>('pix');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('narutinfps@gmail.com');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [installments, setInstallments] = useState('1');

  const [paymentStatus, setPaymentStatus] = useState<'editing' | 'processing' | 'success'>('editing');

  if (!isOpen) return null;

  const prices = {
    standard: 37,
    premium: 47,
    budget: 10,
  };

  const getPrice = () => {
    return prices[selectedProduct];
  };

  const getProductName = () => {
    switch (selectedProduct) {
      case 'premium': return 'Kit Memórias do Amor + Masterclass Canvástica';
      case 'budget': return 'Kit Memórias do Amor - Versão Essencial';
      default: return 'Kit Memórias do Amor - Edição Dia dos Namorados';
    }
  };

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) {
      alert('Por favor, preencha seu nome e e-mail para receber as artes!');
      return;
    }

    setPaymentStatus('processing');
    setTimeout(() => {
      setPaymentStatus('success');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 min-h-screen z-[100] flex items-center justify-center p-3 bg-elegant-black/90 backdrop-blur-xs overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl w-full max-w-lg overflow-hidden border border-vintage-gold shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-wine-red text-white py-3 px-6 text-center text-xs font-mono tracking-widest uppercase flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-vintage-gold" /> Compra Segura Protegida
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-10 right-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-all cursor-pointer z-20"
          aria-label="Fechar checkout"
        >
          <X className="w-4 h-4" />
        </button>

        {paymentStatus === 'editing' && (
          <div className="p-6 md:p-8">
            <h3 className="font-serif-elegant font-bold text-xl md:text-2xl text-stone-900 border-b border-vintage-beige pb-3">
              Finalizar Homenagem 💌
            </h3>

            {/* Package Choices */}
            <div className="mt-4 space-y-2">
              <label className="text-[10px] font-bold text-stone-500 uppercase tracking-widest block mb-2">
                Escolha a sua oferta preferida:
              </label>

              {/* Standard option */}
              <div
                onClick={() => setSelectedProduct('standard')}
                className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                  selectedProduct === 'standard'
                    ? 'border-wine-red bg-wine-red/5 ring-1 ring-wine-red'
                    : 'border-stone-200 bg-stone-50 hover:bg-stone-100/70'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <div className={`mt-1 p-0.5 rounded-full border ${selectedProduct === 'standard' ? 'border-wine-red text-wine-red' : 'border-stone-400'}`}>
                    <div className={`w-2.5 h-2.5 rounded-full ${selectedProduct === 'standard' ? 'bg-wine-red' : 'bg-transparent'}`} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-stone-800">Kit Completo (Membros)</h5>
                    <p className="text-[10px] text-stone-500 font-sans-clean">Mais de 50 artes + Todos os bônus inclusos</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-stone-400 line-through">R$ 67</span>
                  <p className="text-sm font-bold text-wine-red">R$ 37</p>
                </div>
              </div>

              {/* Premium upgrade option */}
              <div
                onClick={() => setSelectedProduct('premium')}
                className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all relative overflow-hidden ${
                  selectedProduct === 'premium'
                    ? 'border-vintage-gold bg-vintage-gold/5 ring-1 ring-vintage-gold'
                    : 'border-stone-200 bg-stone-50 hover:bg-stone-100/70'
                }`}
              >
                <div className="absolute top-0 right-0 bg-vintage-gold text-white text-[8px] font-bold px-2 py-0.5 uppercase tracking-wider rounded-bl-sm">
                  Mais Vendida 👑
                </div>
                <div className="flex items-start gap-2.5">
                  <div className={`mt-1 p-0.5 rounded-full border ${selectedProduct === 'premium' ? 'border-vintage-gold text-vintage-gold' : 'border-stone-400'}`}>
                    <div className={`w-2.5 h-2.5 rounded-full ${selectedProduct === 'premium' ? 'bg-vintage-gold' : 'bg-transparent'}`} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-stone-800">Kit Gold Especial</h5>
                    <p className="text-[10px] text-stone-500 font-sans-clean">Artes + Bônus + Acesso Vitalício Garantido</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-stone-400 line-through">R$ 97</span>
                  <p className="text-sm font-bold text-vintage-gold-dark">R$ 47</p>
                </div>
              </div>

              {/* Budget Option */}
              <div
                onClick={() => setSelectedProduct('budget')}
                className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                  selectedProduct === 'budget'
                    ? 'border-stone-700 bg-stone-900/5 ring-1 ring-stone-700'
                    : 'border-stone-200 bg-stone-50 hover:bg-stone-100/70'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <div className={`mt-1 p-0.5 rounded-full border ${selectedProduct === 'budget' ? 'border-stone-700 text-stone-700' : 'border-stone-400'}`}>
                    <div className={`w-2.5 h-2.5 rounded-full ${selectedProduct === 'budget' ? 'bg-stone-700' : 'bg-transparent'}`} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-stone-800">Versão Essencial Digital</h5>
                    <p className="text-[10px] text-stone-500 font-sans-clean">Artes principais editáveis rápidas</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-stone-700">R$ 10</p>
                </div>
              </div>
            </div>

            {/* Custom Payment Form */}
            <form onSubmit={handleSimulatePayment} className="mt-5 space-y-4">
              {/* Core contacts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3 py-2 border border-stone-200 rounded-lg text-xs font-sans bg-[#faf7f2]/40 focus:outline-none focus:ring-1 focus:ring-wine-red text-stone-800"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-1">
                    Seu E-mail (Recebimento)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ex@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-stone-200 rounded-lg text-xs font-sans bg-[#faf7f2]/40 focus:outline-none focus:ring-1 focus:ring-wine-red text-stone-800"
                  />
                </div>
              </div>

              {/* Payment selection tabs */}
              <div className="bg-stone-100 p-1 rounded-xl grid grid-cols-2 gap-1 my-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('pix')}
                  className={`py-2 rounded-lg text-[11px] font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                    paymentMethod === 'pix' ? 'bg-white text-wine-red shadow-xs' : 'text-stone-500'
                  }`}
                >
                  <Landmark className="w-3.5 h-3.5" /> Pix Instantâneo
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('cartao')}
                  className={`py-2 rounded-lg text-[11px] font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                    paymentMethod === 'cartao' ? 'bg-white text-wine-red shadow-xs' : 'text-stone-500'
                  }`}
                >
                  <CreditCard className="w-3.5 h-3.5" /> Cartão de Crédito
                </button>
              </div>

              {/* Conditionally rendering payment details */}
              {paymentMethod === 'pix' ? (
                <div className="bg-emerald-50/50 border border-emerald-200 p-4 rounded-xl text-center">
                  <div className="flex justify-center mb-1">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[9px] font-bold uppercase tracking-widest leading-none">
                      Aprovação imediata ⚡
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-600 font-sans-clean leading-relaxed mt-1">
                    Pague via Pix nas próximas horas para liberar o acesso imediatamente em seu e-mail.
                  </p>
                </div>
              ) : (
                <div className="bg-stone-50 border border-stone-100 p-4 rounded-xl space-y-3">
                  <div>
                    <label className="block text-[9px] font-bold text-stone-500 uppercase tracking-widest mb-1">
                      Número do Cartão
                    </label>
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 '))}
                      className="w-full px-3 py-2 border border-stone-200 rounded-md text-xs font-mono bg-white text-stone-800"
                      maxLength={19}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[9px] font-bold text-stone-500 uppercase tracking-widest mb-1">
                        Validade
                      </label>
                      <input
                        type="text"
                        placeholder="MM/AA"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        className="w-full px-3 py-2 border border-stone-200 rounded-md text-xs bg-white text-stone-800"
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] font-bold text-stone-500 uppercase tracking-widest mb-1">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        value={cardCvv}
                        onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, ''))}
                        className="w-full px-3 py-2 border border-stone-200 rounded-md text-xs bg-white text-stone-800"
                        maxLength={4}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[9px] font-bold text-stone-500 uppercase tracking-widest mb-1">
                      Parcelamento
                    </label>
                    <select
                      value={installments}
                      onChange={(e) => setInstallments(e.target.value)}
                      className="w-full px-2 py-2 border border-stone-200 rounded-md text-xs bg-white text-stone-800"
                    >
                      <option value="1">1x de R$ {getPrice()},00 (Sem juros)</option>
                      <option value="2">2x de R$ {(getPrice() / 2).toFixed(2)} (Sem juros)</option>
                      <option value="3">3x de R$ {(getPrice() / 3).toFixed(2)} (Sem juros)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Order total bottom line */}
              <div className="bg-[#faf7f2] border-t border-b border-vintage-beige/50 p-3.5 flex items-center justify-between my-2 rounded-lg">
                <span className="text-xs text-stone-500">Valor Total do Pedido:</span>
                <div className="text-right">
                  <span className="text-[10px] text-stone-400 font-sans font-medium line-through mr-1.5">
                    R$ {prices[selectedProduct] + 30},00
                  </span>
                  <span className="text-base font-bold text-wine-red">
                    R$ {getPrice()},00
                  </span>
                </div>
              </div>

              {/* Active Button */}
              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-wine-red to-wine-dark hover:scale-[1.01] active:scale-[0.99] text-white rounded-xl text-xs font-semibold uppercase tracking-wider shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 fill-current text-vintage-gold" />
                {paymentMethod === 'pix' ? 'Gerar Pix e Garantir Cupom' : 'Aprovar Cartão e Receber Acesso'}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[9px] text-stone-500 text-center mt-3">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Ambiente Criptografado e Certificado pelo Banco Central</span>
              </div>
            </form>
          </div>
        )}

        {paymentStatus === 'processing' && (
          <div className="p-12 text-center flex flex-col items-center justify-center min-h-[350px]">
            <div className="relative mb-6">
              <div className="w-14 h-14 rounded-full border-4 border-vintage-beige border-t-wine-red animate-spin" />
              <Heart className="w-6 h-6 text-wine-red absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse fill-current" />
            </div>
            <h4 className="font-serif-elegant font-bold text-lg text-stone-950 mb-2">
              Validando e Processando...
            </h4>
            <p className="text-xs text-stone-500 font-sans max-w-xs leading-relaxed">
              Estamos integrando os servidores do Canva e preparando sua caixa de surpresas no e-mail <strong>{email}</strong>
            </p>
          </div>
        )}

        {paymentStatus === 'success' && (
          <div className="p-8 text-center flex flex-col items-center justify-center min-h-[400px]">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-6 shadow-md shadow-emerald-100 animate-bounce">
              <Check className="w-7 h-7" />
            </div>

            <h4 className="font-serif-elegant font-bold text-xl md:text-2xl text-stone-900 mb-1">
              Obrigado pelo seu Amor! 🌹
            </h4>
            <p className="text-xs text-stone-400 font-mono tracking-wider uppercase mb-5">
              ID do pedido: #MA-{Math.floor(Math.random() * 900000 + 100000)}
            </p>

            <div className="bg-vintage-cream border border-vintage-gold/30 rounded-xl p-5 mb-6 max-w-sm w-full text-left">
              <h5 className="text-xs font-bold text-stone-800 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-vintage-gold fill-current" />
                Instruções de Acesso Imediato:
              </h5>
              <p className="text-[11px] text-stone-600 mt-2 leading-relaxed">
                1. Enviamos um e-mail de boas-vindas para <strong>{email}</strong> com as credenciais.
              </p>
              <p className="text-[11px] text-stone-600 mt-1 leading-relaxed">
                2. Clique no botão dourado abaixo para carregar todos os 50 designs diretamente no seu painel pessoal do Canva.
              </p>
            </div>

            <div className="space-y-2.5 w-full">
              <a
                href="https://canva.com/join"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-vintage-gold hover:bg-vintage-gold-dark text-stone-950 rounded-xl text-xs font-semibold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 fill-current text-white" /> Abrir Templates no Canva Grátis
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 bg-stone-50 hover:bg-stone-100 text-stone-600 rounded-lg text-xxs font-medium uppercase tracking-wider transition-all cursor-pointer"
              >
                Voltar para a vitrine
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
