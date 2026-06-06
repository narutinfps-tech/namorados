import { CarouselItem, UseCaseItem, PinterestItem, BonusItem, FaqItem } from './types';

// Let's import key generated assets as absolute static references or direct paths.
export const IMAGES = {
  heroScrapbook: '/src/assets/images/hero_scrapbook_layout_1780771698085.png',
  previewsBundle: '/src/assets/images/art_previews_bundle_1780771711929.png',
  digitalVsPrint: '/src/assets/images/digital_vs_print_mockup_1780771724257.png',
  loveEnvelopeGold: '/src/assets/images/love_envelope_gold_1780771739878.png',
};

export const INFINITE_CAROUSEL_IMAGES = [
  'https://i.ibb.co/bMJ4N3qN/TEMPLATE-DIA-DOS-NAMORADOS.png',
  'https://i.ibb.co/shtxH28/Design-sem-nome-7.png',
  'https://i.ibb.co/8DyP9FYs/Design-sem-nome-6.png',
  'https://i.ibb.co/Xv9rp1h/Design-sem-nome-5.png',
  'https://i.ibb.co/tgckg5v/Design-sem-nome-4.png',
  'https://i.ibb.co/8nSY2hT8/Design-sem-nome-3.png',
  'https://i.ibb.co/Wvh49K7s/Design-sem-nome-2.png',
  'https://i.ibb.co/fdp3BHVg/Design-sem-nome-1.png'
];

export const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    id: 'c1',
    title: 'Carta Digital Elegante',
    tag: 'Estilo Pergaminho',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=500',
    description: 'Molde de carta antiga com tipografia serifada e traços dourados, perfeito para textos profundos e declarações de amor.'
  },
  {
    id: 'c2',
    title: 'Stories "Nossa Música"',
    tag: 'Stories Românticos',
    image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&q=80&w=500',
    description: 'Mockup interativo com player de música do Spotify, foto do casal e legenda tocante e editável no Canva.'
  },
  {
    id: 'c3',
    title: 'Varal de Polaroids Vintage',
    tag: 'Pronto para Imprimir',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=500',
    description: 'Molduras de fotos instantâneas clássicas com área para escrever datas, localização e pequenos recortes manuais.'
  },
  {
    id: 'c4',
    title: 'Ingressos do Nosso Amor',
    tag: 'Surpresa Criativa',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=500',
    description: 'Artigos no formato de tickets / vales românticos personalizados com cupons de café na cama, massagem ou noite de filmes.'
  },
  {
    id: 'c5',
    title: 'Quadro Nossa Linha do Tempo',
    tag: 'Presente Físico',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=500',
    description: 'Arte clean organizada com os marcos históricos mais marcantes do namoro ou casamento para emoldurar.'
  },
  {
    id: 'c6',
    title: 'Caixa de Fósforo "Love Match"',
    tag: 'Lembrança Interativa',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=500',
    description: 'Design fofo para recortar e envelopar caixinhas de fósforo com pequenas tiras sanfonadas de fotos dentro.'
  }
];

export const USE_CASES: UseCaseItem[] = [
  {
    id: 'uc1',
    title: 'Poste nos stories',
    badge: 'Digital',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'uc2',
    title: 'Envie pelo WhatsApp',
    badge: 'Instantâneo',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'uc3',
    title: 'Imprima como carta',
    badge: 'Impresso',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'uc4',
    title: 'Monte um quadro',
    badge: 'Decoração',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'uc5',
    title: 'Crie polaroids',
    badge: 'Nostalgia',
    image: 'https://images.unsplash.com/photo-1506241537529-eefda1f64ef3?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'uc6',
    title: 'Entregue como lembrança',
    badge: 'Físico',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=400'
  }
];

export const PINTEREST_ITEMS: PinterestItem[] = [
  {
    id: 'p1',
    title: 'Calendário de Amor Infinito',
    subtitle: 'Nossa data marcada com coração',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=500',
    styleClass: 'md:h-[320px] h-[220px]',
    category: 'Mural'
  },
  {
    id: 'p2',
    title: 'Envelope Craft Selado',
    subtitle: 'Artesanal e rústico',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=500',
    styleClass: 'md:h-[240px] h-[180px]',
    category: 'Mural'
  },
  {
    id: 'p3',
    title: 'Instax Retro Moment',
    subtitle: 'Quadro de encaixe no Canva',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=500',
    styleClass: 'md:h-[400px] h-[280px]',
    category: 'Polaroid'
  },
  {
    id: 'p4',
    title: 'Sombra dos Nossos Dias',
    subtitle: 'Filtro vintage analógico',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=500',
    styleClass: 'md:h-[280px] h-[200px]',
    category: 'Stories'
  },
  {
    id: 'p5',
    title: 'Cupom de Romance Express',
    subtitle: 'Vale beijos e jantares',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=500',
    styleClass: 'md:h-[350px] h-[240px]',
    category: 'Impresso'
  },
  {
    id: 'p6',
    title: 'Capítulo de Livro Antigo',
    subtitle: 'Página de diário de nós dois',
    image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&q=80&w=500',
    styleClass: 'md:h-[260px] h-[190px]',
    category: 'Cartas'
  },
  {
    id: 'p7',
    title: 'Aroma e Flores Secas',
    subtitle: 'Layout com toque botânico',
    image: 'https://images.unsplash.com/photo-1506241537529-eefda1f64ef3?auto=format&fit=crop&q=80&w=500',
    styleClass: 'md:h-[310px] h-[230px]',
    category: 'Lembrança'
  },
  {
    id: 'p8',
    title: 'Instantes de Carinho',
    subtitle: 'Grid minimalista clean',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=500',
    styleClass: 'md:h-[380px] h-[270px]',
    category: 'Polaroid'
  }
];

export const BONUS_ITEMS: BonusItem[] = [
  {
    id: 'b1',
    title: 'Cartinhas românticas prontas',
    badge: 'BÔNUS 01',
    description: 'Textos prontos e emocionantes estruturados especificamente para namorado, namorada, marido, esposa ou noivos.',
    iconName: 'HeartHandshake'
  },
  {
    id: 'b2',
    title: 'Guia de impressão',
    badge: 'BÔNUS 02',
    description: 'Orientações simples e práticas sobre papéis adequados, tamanhos corretos e configurações de impressora para cartas, polaroids e quadros ficarem profissionais.',
    iconName: 'Printer'
  },
  {
    id: 'b3',
    title: 'Ideias de surpresa',
    badge: 'BÔNUS 03',
    description: 'Ideias criativas e baratas de como preparar a entrega física das artes para surpreender e arrancar lágrimas de emoção.',
    iconName: 'Sparkles'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq1',
    question: 'Preciso saber usar o Canva?',
    answer: 'Não! Os modelos já estão totalmente estruturados. Você só precisa trocar as fotos, nomes, datas ou sentimentos que desejar. É tão prático quanto mexer em uma rede social.'
  },
  {
    id: 'faq2',
    question: 'Posso imprimir as artes?',
    answer: 'Com certeza! Todas as artes foram planejadas também para o meio físico. Você pode baixar em alta qualidade (PDF para Impressão ou PNG) e mandar revelar como folha de carta, cartão com envelope, revelar direto como polaroid ou colocar em uma moldura de quadro.'
  },
  {
    id: 'faq3',
    question: 'Como e quando recebo o acesso?',
    answer: 'O recebimento é instantâneo. Assim que o pagamento for aprovado (via Pix ou Cartão), você receberá um e-mail com os links que dão acesso direto aos templates dentro da sua conta do Canva (gratuita ou Pro).'
  },
  {
    id: 'faq4',
    question: 'Posso colocar fotos do casal?',
    answer: 'Sim, todos os templates possuem molduras interativas. Basta arrastar a sua foto preferida do casal diretamente para dentro do espaço reservado no Canva.'
  }
];
