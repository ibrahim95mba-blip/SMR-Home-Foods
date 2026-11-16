import { Bike, AlarmClock, Store, MapPin } from 'lucide-react';
import { DELIVERY_AREA, DELIVERY_MAX_KM, DELIVERY_CHARGE } from '@/data/delivery';

export default function Banners() {
  return (
    <div className="space-y-3">
      {/* Free delivery banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 shadow-xl shadow-yellow-400/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-black" />
          <div className="absolute -left-10 -bottom-10 w-32 h-32 rounded-full bg-black" />
        </div>
        <div className="relative px-5 py-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center shrink-0">
            <Store className="w-6 h-6 text-yellow-400" strokeWidth={2.5} />
          </div>
          <div>
            <h2 className="text-black font-extrabold text-base leading-tight">
              One App, Multiple Shops
            </h2>
            <p className="text-black/70 text-xs font-medium">
              Home foods, hotels, coffee shops & meat shops all in one place
            </p>
          </div>
        </div>
      </div>

      {/* Delivery area */}
      <div className="relative overflow-hidden rounded-2xl bg-black border border-yellow-400/30 shadow-lg">
        <div className="px-5 py-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-yellow-400/15 flex items-center justify-center shrink-0">
            <MapPin className="w-6 h-6 text-yellow-400" strokeWidth={2.5} />
          </div>
          <div>
            <h2 className="text-yellow-400 font-bold text-base leading-tight">
              Delivery in {DELIVERY_AREA} only
            </h2>
            <p className="text-gray-400 text-xs font-medium">
              Within {DELIVERY_MAX_KM} km · Delivery charge ₹{DELIVERY_CHARGE}
            </p>
          </div>
          <Bike className="w-7 h-7 text-yellow-400/40 ml-auto shrink-0" strokeWidth={2} />
        </div>
      </div>

      {/* Important: order ahead */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 to-red-700 shadow-lg shadow-red-600/20">
        <div className="px-5 py-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
            <AlarmClock className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>
          <div>
            <h2 className="text-white font-extrabold text-base leading-tight">
              Order Early for Home Foods
            </h2>
            <p className="text-white/80 text-xs font-medium">
              Home foods orders must be placed 3 hours in advance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
