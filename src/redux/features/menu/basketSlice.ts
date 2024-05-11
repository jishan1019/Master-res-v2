import { TBasketInitialState } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: TBasketInitialState = {
  isBasketOpen: false,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setIsBasketOpen: (state) => {
      state.isBasketOpen = !state.isBasketOpen;
    },
  },
});

export const { setIsBasketOpen } = basketSlice.actions;

export default basketSlice.reducer;
