export interface TItem {
  variants: TVariants;
  spices: TSpices;
  description: TDescription;
  _id: string;
  itemName: string;
  itemImg: string;
  prices: TPrice[];
  category: TCategory;
  isActive?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TVariants {
  isVariantAvailable: boolean;
  itemVariants: string[];
}

export interface TSpices {
  isSpicyAvailable: boolean;
  spicyLevel: string[];
}

export interface TDescription {
  isItemDesAvailable?: boolean;
  itemDescription?: string;
}

export interface TPrice {
  size?: string;
  priceOnline: number;
  priceTakeaway: number;
  _id: string;
}

export interface TCategory {
  _id: string;
  name: string;
  categoryImg?: string;
  isCategoryDesAvailable?: boolean;
  categoryDes?: string;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}
