import { useState } from 'react';
import { Plus, Minus, Clock } from 'lucide-react';
import { getShopById } from '@/data/menu';
import { useCart } from '@/context/CartContext';

export default function MenuSection({ shopId }: { shopId: string }) {
  const shop = getShopById(shopId);
  const [activeCategory, setActiveCategory] = useState(shop?.categories[0].id ?? '');
  const { items, addItem, updateQuantity } = useCart();

  if (!shop) {
    return <p className="text-gray-500 text-sm text-center py-10">Shop not found.</p>;
  }

  const category = shop.categories.find((c) => c.id === activeCategory) ?? shop.categories[0];

  const getQty = (id: string) =>
    items.find((i) => i.id === id && i.shopId === shop.id)?.quantity ?? 0;

  return (
    <div>
      {/* Category tabs */}
      <div className="sticky top-[64px] z-30 bg-black/95 backdrop-blur-md -mx-4 px-4 pt-3 pb-2 border-b border-neutral-800/50">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {shop.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/20'
                  : 'bg-neutral-900 text-gray-400 border border-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="flex items-center justify-center gap-1.5 mt-2">
          <Clock className="w-3 h-3 text-neutral-500" strokeWidth={2.5} />
          <span className="text-gray-500 text-[11px] font-medium">{shop.deliveryNote}</span>
        </div>
      </div>

      {/* Menu items */}
      <div className="space-y-3 mt-4">
        {category.items.map((item) => {
          const qty = getQty(item.id);
          return (
            <div
              key={item.id}
              className="flex gap-3 bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-colors"
            >
              <div className="relative w-28 h-28 shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex-1 py-3 pr-3 flex flex-col justify-between min-w-0">
                <div>
                  <h3 className="text-white font-bold text-base leading-tight">{item.name}</h3>
                  <p className="text-gray-500 text-xs mt-0.5 leading-snug">{item.description}</p>
                </div>
                <div className="flex items-center justify-between mt-1.5">
                  <span className="text-yellow-400 font-extrabold text-lg">₹{item.price}</span>

                  {qty === 0 ? (
                    <button
                      onClick={() => addItem(item, 'lunch', shopId)}
                      className="flex items-center gap-1 bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-sm px-3.5 py-1.5 rounded-lg transition-all active:scale-95 shadow-md shadow-yellow-400/20"
                    >
                      <Plus className="w-4 h-4" strokeWidth={2.5} />
                      ADD
                    </button>
                  ) : (
                    <div className="flex items-center gap-2.5 bg-yellow-400 rounded-lg overflow-hidden shadow-md shadow-yellow-400/20">
                      <button
                        onClick={() => updateQuantity(item.id, 'lunch', shop.id, -1)}
                        className="px-2 py-1.5 text-black hover:bg-yellow-300 transition-colors"
                      >
                        <Minus className="w-4 h-4" strokeWidth={2.5} />
                      </button>
                      <span className="text-black font-bold text-sm min-w-[16px] text-center">
                        {qty}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 'lunch', shop.id, 1)}
                        className="px-2 py-1.5 text-black hover:bg-yellow-300 transition-colors"
                      >
                        <Plus className="w-4 h-4" strokeWidth={2.5} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
