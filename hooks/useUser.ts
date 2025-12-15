import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "@/lib/types";

export interface CartItem {
  item_id: number;
  qty: number;
  size?: string;
}

export interface CurrentUserState {
  user: User | null;
  cart: CartItem[];

  setUser: (user: User | null) => void;
  clearUser: () => void;

  updateCart: (item_id: number, qty: number, size?: string) => void;
  clearCart: () => void;
}

export const useUser = create<CurrentUserState>()(
  persist(
    (set, get) => ({
      user: null,
      cart: [],

      setUser: (user) => set({ user }),

      clearUser: () => set({ user: null, cart: [] }),

      updateCart: (item_id, qty, size) => {
        const cart = get().cart;
        const index = cart.findIndex((i) => i.item_id === item_id && i.size === size);

        if (index === -1) {
          if (qty > 0) {
            set({ cart: [...cart, { item_id, qty, size }] });
          }
          return;
        }

        const newQty = cart[index].qty + qty;

        if (newQty <= 0) {
          set({ cart: cart.filter((i) => i.item_id !== item_id || i.size !== size) });
          return;
        }

        const updated = [...cart];
        updated[index] = { item_id, qty: newQty, size };
        set({ cart: updated });
      },

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "user-storage", // ключ для localStorage
    }
  )
);
