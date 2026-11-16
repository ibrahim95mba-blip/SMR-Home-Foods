import React, { useState } from 'react';
import { ShoppingBag, UtensilsCrossed, Printer } from 'lucide-react';
import { useCart } from '@/context/CartContext';

type HeaderProps = {
  onCartClick: () => void;
  page: 'menu' | 'orders';
  onPageChange: (page: 'menu' | 'orders') => void;
};

// Set your custom password here (Must contain letters, numbers, and end with a slash)
const ADMIN_PASSWORD = "Stylemacker123@";

export default function Header({ onCartClick, page, onPageChange }: HeaderProps) {
  const { getCount } = useCart();
  const count = getCount();

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // 1. Triggered on double clicking the SMR Multi Shop logo
  const handleLogoDoubleClick = () => {
    setShowPasswordModal(true);
    setPasswordInput('');
    setErrorMsg('');
  };

  // 2. Verify password and directly jump to the orders list (Admin view) without any email page
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setShowPasswordModal(false);
      onPageChange('orders'); // Directly switches to the orders check page
    } else {
      setErrorMsg('Incorrect Password! (Must include letters, numbers, and end with /)');
    }
  };

  // 3. Print orders function for admin
  const handlePrintOrders = () => {
    window.print();
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b border-yellow-500/25">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          
          {/* Logo & Brand Section: Double click here to open the password prompt */}
          <div 
            onDoubleClick={handleLogoDoubleClick}
            className="flex items-center gap-2.5 cursor-pointer select-none group"
            title="SMR Multi Shop"
          >
            <div className="w-10 h-10 rounded-xl bg-yellow-400 flex items-center justify-center transition-transform group-hover:scale-105">
              <UtensilsCrossed className="w-5 h-5 text-black" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-yellow-400 font-bold text-base sm:text-lg leading-tight tracking-tight">
                SMR Multi Shop
              </h1>
              <p className="text-yellow-400/60 text-[10px] font-medium uppercase tracking-wider">
                Food • Hotel • Coffee • Meat
              </p>
            </div>
          </div>

          {/* Navigation & Actions */}
          <div className="flex items-center gap-2">
            
            {/* If currently viewing orders, show Print and Back to Menu buttons */}
            {page === 'orders' ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrintOrders}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-400 hover:bg-yellow-300 text-black rounded-lg text-xs font-bold transition-all shadow-md"
                >
                  <Printer className="w-4 h-4" />
                  Print Orders
                </button>
                <button
                  onClick={() => onPageChange('menu')}
                  className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 text-gray-400 hover:text-white rounded-lg text-xs font-bold transition-all"
                >
                  Back to Menu
                </button>
              </div>
            ) : (
              /* Normal users only see Menu; Orders button is completely hidden */
              <div className="flex bg-neutral-900 rounded-xl p-1 border border-neutral-800">
                <button
                  onClick={() => onPageChange('menu')}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-yellow-400 text-black transition-all"
                >
                  Menu
                </button>
              </div>
            )}

            {/* Cart Button */}
            <button
              onClick={onCartClick}
              className="relative flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-lg shadow-yellow-400/10 active:scale-95"
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={2.5} />
              <span className="hidden sm:inline text-sm">Cart</span>
              {count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-md animate-pulse">
                  {count}
                </span>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Simple Password Popup Modal (No Email/Admin page required) */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-zinc-900 border border-yellow-500 p-6 rounded-lg w-80 text-white shadow-xl">
            <h3 className="text-lg font-bold mb-2 text-yellow-400">Enter Admin Password</h3>
            <p className="text-xs text-zinc-400 mb-4">
              Type password to view customer orders directly.
            </p>
            
            <form onSubmit={handleLoginSubmit}>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Password (ex: Name123/)"
                className="w-full bg-zinc-800 border border-zinc-700 p-2 rounded mb-2 text-white focus:outline-none focus:border-yellow-400 font-mono"
                autoFocus
              />
              {errorMsg && <p className="text-red-500 text-xs mb-2">{errorMsg}</p>}
              
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setShowPasswordModal(false)}
                  className="px-3 py-1 bg-zinc-700 hover:bg-zinc-600 rounded text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded text-sm"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

