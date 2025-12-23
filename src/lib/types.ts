export interface MenuItem {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  price: number;
  image: string;
  categoryId: string;
}

export interface Category {
  id: string;
  name: string;
  nameAr: string;
  icon?: string;
}

export type Language = 'en' | 'ar';