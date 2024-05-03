import { TTokenUser, TUser } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: TTokenUser | null;
  token: string;
  updatedUser?: TUser | null;
}

const initialState: AuthState = {
  user: null,
  token: "",
  updatedUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthState>) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    setUpdatedUser: (state, action: PayloadAction<TUser>) => {
      state.updatedUser = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = "";
      state.updatedUser = null;
    },
  },
});

export const { setUser, logout, setToken, setUpdatedUser } = authSlice.actions;

export const selectUser = (state: { auth: AuthState }) => state.auth.updatedUser as TUser;

export default authSlice.reducer; 
