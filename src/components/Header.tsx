import { useState } from 'react';
import { ShoppingBag, UtensilsCrossed, ClipboardList } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import AdminLogin from './AdminLogin';

type HeaderProps = {
  onCartClick: () => void;
  page: 'menu' | 'orders';
  onPageChange: (page: 'menu' | 'orders') => void;
};

export default function Header({ onCartClick, page, onPageChange }: HeaderProps) {
  const { getCount } = useCart();
  const count = getCount();

  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [isAdminUnlocked, setIsAdminUnlocked] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          
          {/* SECRET TRIGGER: Double click title to unlock Admin */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer select-none"
            onDoubleClick={() => {
              if (isAdminUnlocked) {
                onPageChange('orders');
              } else {
                setShowAdminLogin(true);
              }
            }}
            title="Double-click to access Admin"
          >
            <div className="w-10 h-10 rounded-xl bg-yellow-400 flex items-center justify-center">
              <UtensilsCrossed className="w-5 h-5 text-black" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-yellow-400 font-bold text-lg leading-tight">
                SMR Home Foods
              </h1>
              <p className="text-yellow-400/60 text-[10px] font-medium uppercase">
                South Indian Kitchen (Halal)
              </p>
            </div>
          </div>

          {/* NAVIGATION BUTTONS */}
          <div className="flex items-center gap-2">
            <div className="flex bg-neutral-900 rounded-xl p-1 border border-neutral-800">
              <button
                onClick={() => onPageChange('menu')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  page === 'menu'
                    ? 'bg-yellow-400 text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <UtensilsCrossed className="w-3.5 h-3.5" />
                Menu
              </button>

              {/* ORDERS BUTTON: Displays ONLY after unlocking with PIN */}
              {isAdminUnlocked && (
                <button
                  onClick={() => onPageChange('orders')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                    page === 'orders'
                      ? 'bg-yellow-400 text-black'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <ClipboardList className="w-3.5 h-3.5" />
                  Orders
                </button>
              )}
            </div>

            {/* CART BUTTON */}
            <button
              onClick={onCartClick}
              className="relative px-3 py-1.5 rounded-lg bg-yellow-400 text-black font-bold text-xs flex items-center gap-1.5 hover:bg-yellow-300 transition-all"
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={2.5} />
              <span className="hidden sm:inline text-sm">Cart</span>
              {count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white text-[10px] rounded-full font-bold flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* RENDER ADMIN LOGIN MODAL */}
      {showAdminLogin && (
        <AdminLogin
          onSuccess={() => {
            setIsAdminUnlocked(true);
            setShowAdminLogin(false);
            onPageChange('orders');
          }}
          onClose={() => setShowAdminLogin(false)}
        />
      )}
    </>
  );
}

