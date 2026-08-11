import { Clock, Bike, AlarmClock } from 'lucide-react';

export default function Banners() {
  return (
    <div className="space-y-3">
      {/* Price banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-xl shadow-yellow-400/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-black" />
          <div className="absolute -left-10 -bottom-10 w-32 h-32 rounded-full bg-black" />
        </div>
        <div className="relative px-5 py-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center shrink-0">
            <span className="text-yellow-400 font-extrabold text-lg">₹</span>
          </div>
          <div>
            <h2 className="text-black font-extrabold text-base leading-tight">
              you can Eat from ₹40 to ₹100,(Customize Also Available)
            </h2>
            <p className="text-black/70 text-xs font-medium">
              Homestyle South Indian food at honest prices 
            </p>
          </div>
        </div>
      </div>

      {/* Free delivery banner */}
      <div className="relative overflow-hidden rounded-2xl bg-black border border-yellow-400/30 shadow-lg">
        <div className="px-5 py-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-yellow-400/15 flex items-center justify-center shrink-0">
            <Bike className="w-6 h-6 text-yellow-400" strokeWidth={2.5} />
          </div>
          <div>
            <h2 className="text-yellow-400 font-bold text-base leading-tight">
              FREE Delivery 
            </h2>
            <p className="text-gray-400 text-xs font-medium">
              Available Pollachi,Anaimalai,Ambarampalayam,
              Zamin uthukuli,Kottur,Vk Pudur,
              Meenachipuram,Setumadai,Kaliyapuram,
              Odayakulam.
              No delivery charges, no hidden fees
            </p>
          </div>
        </div>
      </div>

      {/* Important: order 2 hours before */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 to-red-700 shadow-lg shadow-red-600/20">
        <div className="px-5 py-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
            <AlarmClock className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>
          <div>
            <h2 className="text-white font-extrabold text-base leading-tight">
              All orders must be placed at least 2 hours in advance
            </h2>
            <p className="text-white/80 text-xs font-medium">
             Becase we prepare fresh food for you, we need a little time to get everything ready. Please place your order at least 2 hours before your desired delivery time.
            </p>
          </div>
        </div>
      </div>

      {/* Delivery timings */}
      <div className="rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden">
        <div className="px-5 pt-4 pb-2 flex items-center gap-2">
          <Clock className="w-4 h-4 text-yellow-400" strokeWidth={2.5} />
          <h3 className="text-yellow-400 font-bold text-sm uppercase tracking-wider">
            Delivery Timings
          </h3>
        </div>
        <div className="grid grid-cols-3 divide-x divide-neutral-800">
          <div className="px-3 py-3 text-center">
            <p className="text-gray-500 text-[10px] font-semibold uppercase tracking-widest mb-1">
              Breakfast
            </p>
            <p className="text-white font-bold text-sm">8:00 – 8:30</p>
            <p className="text-gray-500 text-[10px]">AM</p>
          </div>
          <div className="px-3 py-3 text-center">
            <p className="text-gray-500 text-[10px] font-semibold uppercase tracking-widest mb-1">
              Lunch
            </p>
            <p className="text-white font-bold text-sm">1:00 – 1:30</p>
            <p className="text-gray-500 text-[10px]">PM</p>
          </div>
          <div className="px-3 py-3 text-center">
            <p className="text-gray-500 text-[10px] font-semibold uppercase tracking-widest mb-1">
              Dinner
            </p>
            <p className="text-white font-bold text-sm">8:00 – 8:30</p>
            <p className="text-gray-500 text-[10px]">PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
