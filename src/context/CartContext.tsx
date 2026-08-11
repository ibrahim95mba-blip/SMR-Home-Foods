import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { MenuItem, MealType } from '@/data/menu';

export type CartItem = MenuItem & { quantity: number; mealType: MealType };

type CartContextType = {
  items: CartItem[];
  addItem: (item: MenuItem, mealType: MealType) => void;
  removeItem: (id: string, mealType: MealType) => void;
  updateQuantity: (id: string, mealType: MealType, delta: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getCount: () => number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((item: MenuItem, mealType: MealType) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id && i.mealType === mealType);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id && i.mealType === mealType
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...item, quantity: 1, mealType }];
    });
  }, []);

  const removeItem = useCallback((id: string, mealType: MealType) => {
    setItems((prev) => prev.filter((i) => !(i.id === id && i.mealType === mealType)));
  }, []);

  const updateQuantity = useCallback((id: string, mealType: MealType, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) =>
          i.id === id && i.mealType === mealType
            ? { ...i, quantity: i.quantity + delta }
            : i
        )
        .filter((i) => i.quantity > 0)
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const getTotal = useCallback(
    () => items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [items]
  );

  const getCount = useCallback(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, getTotal, getCount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
