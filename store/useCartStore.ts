import { create } from "zustand";
import { persist } from "zustand/middleware";

export type cartItem = {
  _id: string;
  base_price: number;
  quantity: number;
  name: string;
  image: string;
};
interface cartStore {
  items: cartItem[];

  addToCart: (product: cartItem) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

const useCartStore = create<cartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.items.findIndex(
            (item) => item._id === product._id
          );
          if (existingItem !== -1) {
            const updatedItems = [...state.items];
            updatedItems[existingItem].quantity += 1;
            return { items: updatedItems };
          } else {
            return { items: [...state.items, { ...product }] };
          }
        }),
      clearCart: () => set(() => ({ items: [] })),
      removeFromCart: (productId) =>
        set(({ items }) => ({
          items: items.filter((item) => item._id !== productId),
        })),
      getTotalPrice: () =>
        get().items.reduce(
          (total, currentItem) =>
            total + currentItem.quantity * currentItem.base_price,
          0
        ),
    }),
    { name: "cart-storage" }
  )
);

export default useCartStore;
