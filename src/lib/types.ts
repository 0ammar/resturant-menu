export interface Category {
  id: string;
  name: string;
  nameAr: string;
}

export interface Product {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  price: number;
  image: string;
  categoryId: string;
}

export interface BrandSettings {
  primaryColor: string;
  logoUrl: string;
}

export type Language = 'en' | 'ar';

export type MenuItem = Product;