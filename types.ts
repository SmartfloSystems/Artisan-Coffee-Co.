export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  roastLevel: 'Light' | 'Medium' | 'Dark';
  origin: string;
  tags?: string[];
  isBestSeller?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}