import { create } from "zustand";
import type { LoginFields } from "../utils/validator";
import { actionLogin } from "../api/auth";
import { persist } from "zustand/middleware";

type PayloadState = {
  success: boolean;
  role?: string;
  message?: string;
};

type User = {
  id: number;
  role: string;
}

type AuthState = {
  token: string | null;
  user: User | null;
  loginWithZustand: (data: LoginFields) => Promise<PayloadState>;
  logoutWithZustand: () => void;
};

// 1. Create store
const authStore = (set: any) => ({
  token: null,
  user: null,
  loginWithZustand: async (data: LoginFields) => {
    try {
      const res = await actionLogin(data);
      const { payload, token } = res.data;
      set({ token, user: payload });
      return { success: true, role: payload.role, message: res.data.message };
      // return res;
    } catch (error: any) {
      console.log(error);
      return { success: false, message: error.response?.data?.message };
    }
  },
  logoutWithZustand: () => {
    set({ token: null, user: null });
  }
});

// 2. Use store
// Similar to useContext()
const useAuthStore = create<AuthState>()(
  persist<AuthState>(authStore, { name: "auth-storage" })
);

export default useAuthStore;
