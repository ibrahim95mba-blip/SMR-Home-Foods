import { ChevronRight } from 'lucide-react';
import { SHOP_CATEGORIES, getShopsByCategory, type ShopCategoryType } from '@/data/menu';

type CategoryGridProps = {
  onSelect: (type: ShopCategoryType) => void;
};

export default function CategoryGrid({ onSelect }: CategoryGridProps) {
  return (
    <div>
      <h2 className="text-white font-bold text-lg px-1 mb-3">Browse by Category</h2>
      <div className="grid grid-cols-2 gap-3">
        {SHOP_CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const shopCount = getShopsByCategory(cat.type).length;
          return (
            <button
              key={cat.type}
              onClick={() => onSelect(cat.type)}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${cat.gradient} p-4 text-left transition-all active:scale-95 shadow-lg`}
            >
              <div className="absolute -right-4 -bottom-4 opacity-20">
                <Icon className="w-24 h-24 text-white" strokeWidth={1.5} />
              </div>
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-white font-bold text-base leading-tight">{cat.label}</h3>
                <p className="text-white/80 text-xs mt-0.5 leading-snug">{cat.description}</p>
                <div className="flex items-center gap-1 mt-2">
                  <span className="text-white/90 text-xs font-semibold">{shopCount} shops</span>
                  <ChevronRight className="w-3.5 h-3.5 text-white/90" strokeWidth={2.5} />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
