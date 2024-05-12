import { TBasketInitialState, TFoodOrDrinksItem } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: TBasketInitialState = {
  isBasketOpen: false,
  foodItems: [],
  drinksItems: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setIsBasketOpen: (state) => {
      state.isBasketOpen = !state.isBasketOpen;
    },

    setFoodItems: (state, action: PayloadAction<TFoodOrDrinksItem>) => {
      const existingItemIndex = state.foodItems.findIndex(
        (item) => item.itemId === action.payload.itemId
      );
      if (existingItemIndex !== -1) {
        state.foodItems[existingItemIndex].singleItemQty +=
          action.payload.singleItemQty;
      } else {
        state.foodItems.push(action.payload);
      }
    },

    setDrinkItems: (state, action: PayloadAction<TFoodOrDrinksItem>) => {
      const existingItemIndex = state.drinksItems.findIndex(
        (item) => item.itemId === action.payload.itemId
      );
      if (existingItemIndex !== -1) {
        state.drinksItems[existingItemIndex].singleItemQty +=
          action.payload.singleItemQty;
      } else {
        state.drinksItems.push(action.payload);
      }
    },

    setIncreaseQuantity: (
      state,
      action: PayloadAction<{ itemId: string; itemType: string }>
    ) => {
      const { itemId, itemType } = action.payload;
      const itemsArray =
        itemType === "food" ? state.foodItems : state.drinksItems;
      const existingItemIndex = itemsArray.findIndex(
        (item) => item.itemId === itemId
      );

      if (existingItemIndex !== -1) {
        itemsArray[existingItemIndex].singleItemQty += 1;
      }
    },

    setDecreaseQuantity: (
      state,
      action: PayloadAction<{ itemId: string; itemType: string }>
    ) => {
      const { itemId, itemType } = action.payload;
      const itemsArray =
        itemType === "food" ? state.foodItems : state.drinksItems;
      const existingItemIndex = itemsArray.findIndex(
        (item) => item.itemId === itemId
      );

      if (
        existingItemIndex !== -1 &&
        itemsArray[existingItemIndex].singleItemQty > 1
      ) {
        itemsArray[existingItemIndex].singleItemQty -= 1;
      } else {
        itemsArray.splice(existingItemIndex, 1);
      }
    },
  },
});

export const {
  setIsBasketOpen,
  setFoodItems,
  setDrinkItems,
  setIncreaseQuantity,
  setDecreaseQuantity,
} = basketSlice.actions;

export default basketSlice.reducer;
