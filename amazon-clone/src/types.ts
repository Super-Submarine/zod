export interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  prime: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
