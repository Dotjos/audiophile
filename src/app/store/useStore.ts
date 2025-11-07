import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem extends Product {
  quantity: number;
}

interface StoreState {
  cartActive: boolean;
  cart: Record<string, CartItem>;
  menuActive: boolean;
  successFulCheckOut: boolean;
  orderId: string | null; // ✅ New
  setOrderId: (id: string) => void; // ✅ New
  clearOrderId: () => void; // ✅ New
  toggleMenu: () => void;
  toggleCart: () => void;
  closeMenu: () => void;
  closeCart: () => void;
  addToCart: (item: Product, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
  getItemTotal: (id: string) => number;
  getTotalUniqueProducts: () => number;
  getGrandTotal: () => number;
  getCartItems: () => CartItem[];
  toggleSuccessfulCheckOut: () => void;
  resetCheckoutSuccess: () => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cartActive: false,
      cart: {},
      menuActive: false,
      successFulCheckOut: false,
      orderId: null,
      setOrderId: (id) => set({ orderId: id }), // ✅ new
      clearOrderId: () => set({ orderId: null }), // ✅ new

      toggleMenu: () =>
        set((state) => ({
          cartActive: false,
          menuActive: !state.menuActive,
        })),

      toggleCart: () =>
        set((state) => ({
          menuActive: false,
          cartActive: !state.cartActive,
        })),

      closeMenu: () => set({ menuActive: false }),

      closeCart: () => set({ cartActive: false }),

      addToCart: (item, quantity = 1) =>
        set((state) => {
          const existingItem = state.cart[item.id];
          return {
            cart: {
              ...state.cart,
              [item.id]: {
                ...item,
                quantity: existingItem
                  ? existingItem.quantity + quantity
                  : quantity,
              },
            },
          };
        }),

      removeFromCart: (id) =>
        set((state) => {
          const newCart = { ...state.cart };
          delete newCart[id];
          return { cart: newCart };
        }),

      updateQuantity: (id, quantity) =>
        set((state) => {
          if (quantity <= 0) {
            const newCart = { ...state.cart };
            delete newCart[id];
            return { cart: newCart };
          }
          return {
            cart: {
              ...state.cart,
              [id]: { ...state.cart[id], quantity },
            },
          };
        }),

      clearCart: () => set({ cart: {} }),

      // Get total price of ALL items (price * quantity for each item, summed)
      getCartTotal: () => {
        const state = get();
        return Object.values(state.cart).reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },

      // Alias for getCartTotal for clarity
      getGrandTotal: () => {
        return get().getCartTotal();
      },

      // Get total quantity of all items
      getCartItemCount: () => {
        const state = get();
        return Object.values(state.cart).reduce(
          (count, item) => count + item.quantity,
          0
        );
      },

      // Get price for a specific item (price * quantity)
      getItemTotal: (id) => {
        const state = get();
        const item = state.cart[id];
        return item ? item.price * item.quantity : 0;
      },

      // Get number of unique products
      getTotalUniqueProducts: () => {
        const state = get();
        return Object.keys(state.cart).length;
      },

      // Helper to convert cart object to array for easier rendering
      getCartItems: () => {
        const state = get();
        return Object.values(state.cart);
      },

      // Toggle successful checkout state
      toggleSuccessfulCheckOut: () =>
        set((state) => ({
          successFulCheckOut: !state.successFulCheckOut,
        })),

      // Reset checkout success (useful after showing success modal)
      resetCheckoutSuccess: () => set({ successFulCheckOut: false }),
    }),
    {
      name: "cart-storage",
    }
  )
);
