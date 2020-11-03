export interface Cart {
  [id: string]: CartItem
}

export interface CartItem {
  id: string;
  adults: number;
  children: number;
  currency: string;
  price: number;
}


