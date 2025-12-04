import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type CartStore = {
  cart: {id:string, quantity:number}[];
  addItem: (id:string, quantity:number) => void;
  changeQuantity: (id:string, quantity:number) => void;
  removeItem: (id:string) => void;
  emptyCart: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      addItem: (id, quantity) => {
        if(get().cart.find((item) => item.id === id)){
          return 
        }
        return set({ cart: [...get().cart, {id, quantity}] })
      },
      removeItem: (id) => {
        if(get().cart.find((item) => item.id === id)){
          return set({ cart: get().cart.filter((item) => item.id !== id) })
        }
        return 
      },
      changeQuantity:(id, quantity) => set({cart:get().cart.map((item) => item.id === id ? { ...item, quantity:item.quantity+quantity } : item )}),
      emptyCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
