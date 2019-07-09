export const PRODUCT_DEFAULT: VOProduct = {
  id: '',
  imageUrl: null,
  brand: '',
  title: '',
  model: '',
  addToCart: ''
};

export interface VOProduct {
  id: string;
  imageUrl: string;
  brand: string;
  title: string;
  model: string;
  rating?: number;
  price1?: number;
  cuom1?: string;
  price2?: number;
  cuom2?: string;
  saving?: number;
  was?: number;
  addToCart: string;
  badges?: string[];
  promo?: string;
}
