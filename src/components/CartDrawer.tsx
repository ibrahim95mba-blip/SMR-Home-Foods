import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

type CartDrawerProps = {
  open: boolean;
  onClose: () => void;
  onCheckout: () => void;
};

export default function CartDrawer({ open, onClose, onCheckout }: CartDrawerProps) {
  const { items, updateQuantity, removeItem, getTotal, clearCart } = useCart();
  const total = getTotal();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-neutral-950 rounded-t-3xl border-t-2 border-yellow-400/30 transition-transform duration-300 flex flex-col ${
          open ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ maxHeight: '85vh' }}
      >
        {/* Handle */}
        <div className="flex justify-center pt-2.5 pb-1">
          <div className="w-10 h-1 bg-neutral-700 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-yellow-400" strokeWidth={2.5} />
            <h2 className="text-white font-bold text-lg">Your Cart</h2>
            {items.length > 0 && (
              <span className="text-gray-500 text-sm">({items.length})</span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-gray-400" strokeWidth={2.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center mb-4">
                <ShoppingBag className="w-7 h-7 text-gray-600" strokeWidth={2} />
              </div>
              <p className="text-gray-500 font-medium text-sm">Your cart is empty</p>
              <p className="text-gray-600 text-xs mt-1">Add some delicious items to get started</p>
            </div>
          ) : (
            <div className="space-y-2.5">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.mealType}`}
                  className="flex items-center gap-3 bg-neutral-900 rounded-xl p-3 border border-neutral-800"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-sm leading-tight">{item.name}</h4>
                    <p className="text-gray-500 text-[11px] capitalize">{item.mealType}</p>
                    <p className="text-yellow-400 font-bold text-sm mt-0.5">₹{item.price}</p>
                  </div>
                  <div className="flex items-center gap-2 bg-yellow-400 rounded-lg overflow-hidden">
                    <button
                      onClick={() => updateQuantity(item.id, item.mealType, -1)}
                      className="px-2 py-1.5 text-black hover:bg-yellow-300 transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" strokeWidth={2.5} />
                    </button>
                    <span className="text-black font-bold text-sm min-w-[16px] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.mealType, 1)}
                      className="px-2 py-1.5 text-black hover:bg-yellow-300 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              ))}

              <button
                onClick={clearCart}
                className="w-full text-center text-red-400 hover:text-red-300 text-xs font-medium py-2 transition-colors"
              >
                Clear all items
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-5 py-4 border-t border-neutral-800 bg-neutral-950">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-400 text-sm">Delivery</span>
              <span className="text-green-400 font-bold text-sm">FREE</span>
            </div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-white font-semibold text-base">Total</span>
              <span className="text-yellow-400 font-extrabold text-2xl">₹{total}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-base py-3.5 rounded-xl transition-all active:scale-95 shadow-lg shadow-yellow-400/20"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
