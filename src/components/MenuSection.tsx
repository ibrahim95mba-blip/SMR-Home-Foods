import { useState } from 'react';
import { Plus, Minus, Clock } from 'lucide-react';
import { MEAL_MENUS, type MealType } from '@/data/menu';
import { useCart } from '@/context/CartContext';

const TABS: { key: MealType; label: string; icon: string }[] = [
  { key: 'breakfast', label: 'Breakfast', icon: '🌅' },
  { key: 'lunch', label: 'Lunch', icon: '☀️' },
  { key: 'dinner', label: 'Dinner', icon: '🌙' },
];

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<MealType>('breakfast');
  const { items, addItem, updateQuantity } = useCart();

  const menu = MEAL_MENUS.find((m) => m.type === activeTab)!;

  const getQty = (id: string) =>
    items.find((i) => i.id === id && i.mealType === activeTab)?.quantity ?? 0;

  return (
    <div>
      {/* Tab bar */}
      <div className="sticky top-[64px] z-30 bg-black/95 backdrop-blur-md -mx-4 px-4 pt-3 pb-2 border-b border-yellow-400/10">
        <div className="flex gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 flex flex-col items-center gap-0.5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === tab.key
                  ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/20'
                  : 'bg-neutral-900 text-gray-400 border border-neutral-800'
              }`}
            >
              <span className="text-base">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex items-center justify-center gap-1.5 mt-2">
          <Clock className="w-3 h-3 text-yellow-400" strokeWidth={2.5} />
          <span className="text-yellow-400/80 text-[11px] font-medium">
            Delivery: {menu.slot}
          </span>
        </div>
      </div>

      {/* Menu items */}
      <div className="space-y-3 mt-4">
        {menu.items.map((item) => {
          const qty = getQty(item.id);
          return (
            <div
              key={item.id}
              className="flex gap-3 bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-yellow-400/30 transition-colors"
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
                  <p className="text-gray-500 text-xs mt-0.5 leading-snug">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-1.5">
                  <span className="text-yellow-400 font-extrabold text-lg">
                    ₹{item.price}
                  </span>

                  {qty === 0 ? (
                    <button
                      onClick={() => addItem(item, activeTab)}
                      className="flex items-center gap-1 bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-sm px-3.5 py-1.5 rounded-lg transition-all active:scale-95 shadow-md shadow-yellow-400/20"
                    >
                      <Plus className="w-4 h-4" strokeWidth={2.5} />
                      ADD
                    </button>
                  ) : (
                    <div className="flex items-center gap-2.5 bg-yellow-400 rounded-lg overflow-hidden shadow-md shadow-yellow-400/20">
                      <button
                        onClick={() => updateQuantity(item.id, activeTab, -1)}
                        className="px-2 py-1.5 text-black hover:bg-yellow-300 transition-colors"
                      >
                        <Minus className="w-4 h-4" strokeWidth={2.5} />
                      </button>
                      <span className="text-black font-bold text-sm min-w-[16px] text-center">
                        {qty}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, activeTab, 1)}
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
