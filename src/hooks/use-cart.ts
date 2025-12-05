import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type CartStore = {
  cart: {id:string, quantity:number}[];
  _hasHydrated:boolean;
  refetchTriggler:number;
  setHasHydrated:() => void;
  addItem: (id:string, quantity:number) => void;
  changeQuantity: (id:string, quantity:number) => void;
  removeItem: (id:string) => void;
  emptyCart: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      _hasHydrated: false,
      refetchTriggler:0,
      addItem: (id, quantity) => {
        if(get().cart.find((item) => item.id === id)){
          return 
        }
        return set({ cart: [...get().cart, {id, quantity}], refetchTriggler:get().refetchTriggler+1})
      },
      removeItem: (id) => {
        if(get().cart.find((item) => item.id === id)){
          return set({ cart: get().cart.filter((item) => item.id !== id), refetchTriggler:get().refetchTriggler+1 })
        }
        return 
      },
      changeQuantity:(id, quantity) => set({cart:get().cart.map((item) => item.id === id ? { ...item, quantity:item.quantity+quantity } : item )}),
      emptyCart: () => set({ cart: [] }),
      setHasHydrated: () => set({ _hasHydrated: true }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
       onRehydrateStorage: () => (state) => {
        state?.setHasHydrated();  
      },
    }
  )
);
