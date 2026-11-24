export interface Drink {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'sweet' | 'low-sugar' | 'no-sugar';
  image: string;
}
