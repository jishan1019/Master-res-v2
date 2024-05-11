export type TFoodOrDrinksItem = {
  itemId: string;
  itemName: string;
  singleItemPrice: number;
  singleItemQty: number;
  priceId: string;
  categoryId: string | undefined;
  itemType?: "food" | "drink";
};

export type TTotalPriceQty = {
  totalQty: number;
  totalPrice: number;
};

export type TBasketInitialState = {
  isBasketOpen: boolean;
  foodItems: TFoodOrDrinksItem[];
  drinksItems: TFoodOrDrinksItem[];
};
