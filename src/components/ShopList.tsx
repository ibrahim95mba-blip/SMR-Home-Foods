import { ChevronLeft, Star, MapPin, Clock } from 'lucide-react';
import { getShopsByCategory, type ShopCategoryType, SHOP_CATEGORIES } from '@/data/menu';

type ShopListProps = {
  categoryType: ShopCategoryType;
  onBack: () => void;
  onSelectShop: (shopId: string) => void;
};

export default function ShopList({ categoryType, onBack, onSelectShop }: ShopListProps) {
  const shops = getShopsByCategory(categoryType);
  const cat = SHOP_CATEGORIES.find((c) => c.type === categoryType)!;
  const Icon = cat.icon;

  return (
    <div>
      {/* Back + title */}
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={onBack}
          className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center transition-colors hover:bg-neutral-800"
        >
          <ChevronLeft className="w-5 h-5 text-gray-400" strokeWidth={2.5} />
        </button>
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-lg ${cat.iconBg} flex items-center justify-center`}>
            <Icon className={`w-4 h-4 ${cat.iconColor}`} strokeWidth={2.5} />
          </div>
          <div>
            <h2 className="text-white font-bold text-lg leading-tight">{cat.label}</h2>
            <p className="text-gray-500 text-xs">{shops.length} shops available</p>
          </div>
        </div>
      </div>

      {/* Shop cards */}
      <div className="space-y-3">
        {shops.map((shop) => (
          <button
            key={shop.id}
            onClick={() => {
              (window as any).currentShopName = shop.name;
              onSelectShop(shop.id);
            }}
            className="w-full text-left bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all active:scale-98"          >
            {/* Cover image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={shop.coverImage}
                alt={shop.name}
                className="w-full h-full object-contain bg-neutral-900"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
              <div className="absolute bottom-2 left-3 right-3 flex items-end justify-between">
                <div>
                  <h3 className="text-white font-bold text-base leading-tight">{shop.name}</h3>
                  <p className="text-gray-300 text-xs">{shop.tagline}</p>
                </div>
                <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" strokeWidth={2.5} />
                  <span className="text-white text-xs font-bold">{shop.rating}</span>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs">
                <div className="flex items-center gap-1 text-gray-500">
                  <MapPin className="w-3 h-3" strokeWidth={2.5} />
                  <span>{shop.address}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-gray-500 text-xs">
                <Clock className="w-3 h-3" strokeWidth={2.5} />
                <span>{shop.deliveryNote}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
