export interface CarouselItem {
  id: string;
  title: string;
  tag: string;
  image: string;
  description: string;
}

export interface UseCaseItem {
  id: string;
  title: string;
  image: string;
  badge: string;
}

export interface PinterestItem {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  styleClass: string; // Tailwind heights for Masonry effect
  category: string;
}

export interface BonusItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  iconName: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
