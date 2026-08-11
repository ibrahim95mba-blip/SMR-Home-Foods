import { UtensilsCrossed, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-neutral-800 pt-6 pb-8">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-yellow-400 flex items-center justify-center">
            <UtensilsCrossed className="w-4 h-4 text-black" strokeWidth={2.5} />
          </div>
          <span className="text-yellow-400 font-bold text-base">SMR Home Foods</span>
        </div>
        <p className="text-gray-500 text-xs leading-relaxed max-w-xs mx-auto">
          Authentic South Indian home-cooked meals. Fresh, hygienic, and delivered with care.
        </p>
        <div className="flex items-center justify-center gap-1 mt-4 text-gray-600 text-xs">
          Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" strokeWidth={2} /> for food lovers
        </div>
      </div>
    </footer>
  );
}
