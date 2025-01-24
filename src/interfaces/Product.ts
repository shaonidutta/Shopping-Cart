export interface Product {
    id: number;
    orderStatus: string;
    productName: string;
    quantity: number;
    configurations: { name: string }[];
    addOns?: { price: number; detail: string }[];
  }