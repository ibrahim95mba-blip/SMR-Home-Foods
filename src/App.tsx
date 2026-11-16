import { useState } from 'react';
import { CartProvider } from '@/context/CartContext';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import Header from '@/components/Header';
import Banners from '@/components/Banners';
import CategoryGrid from '@/components/CategoryGrid';
import ShopList from '@/components/ShopList';
import MenuSection from '@/components/MenuSection';
import CartDrawer from '@/components/CartDrawer';
import CheckoutModal from '@/components/CheckoutModal';
import Footer from '@/components/Footer';
import OrdersPage from '@/components/OrdersPage';
import AdminLogin from '@/components/AdminLogin';
import { Loader2, ChevronLeft } from 'lucide-react';
import type { ShopCategoryType } from '@/data/menu';
import { getShopById } from '@/data/menu';

type Page = 'menu' | 'orders';
type BrowseView = 'categories' | 'shops' | 'menu';

function AppContent() {
  const { session, loading } = useAuth();
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [page, setPage] = useState<Page>('menu');
  const [browseView, setBrowseView] = useState<BrowseView>('categories');
  const [selectedCategory, setSelectedCategory] = useState<ShopCategoryType | null>(null);
  const [selectedShopId, setSelectedShopId] = useState<string | null>(null);

  const handleCheckout = () => {
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-yellow-400 animate-spin" strokeWidth={2.5} />
      </div>
    );
  }

  const ordersPage = <OrdersPage />;
  const selectedShop = selectedShopId ? getShopById(selectedShopId) : null;

  const handlePageChange = (newPage: Page) => {
    setPage(newPage);
    if (newPage === 'menu') {
      setBrowseView('categories');
      setSelectedCategory(null);
      setSelectedShopId(null);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header onCartClick={() => setCartOpen(true)} page={page} onPageChange={handlePageChange} />

      <main className="max-w-5xl mx-auto px-4 py-4">
        {page === 'menu' ? (
          <>
            {browseView === 'categories' && (
              <>
                <Banners />
                <div className="mt-5">
                  <CategoryGrid
                    onSelect={(type) => {
                      setSelectedCategory(type);
                      setBrowseView('shops');
                    }}
                  />
                </div>
              </>
            )}

            {browseView === 'shops' && selectedCategory && (
              <div className="mt-2">
                <ShopList
                  categoryType={selectedCategory}
                  onBack={() => setBrowseView('categories')}
                  onSelectShop={(shopId) => {
                    setSelectedShopId(shopId);
                    setBrowseView('menu');
                  }}
                />
              </div>
            )}

            {browseView === 'menu' && selectedShop && (
              <div className="mt-2">
                {/* Shop header + back */}
                <div className="flex items-center gap-3 mb-3">
                  <button
                    onClick={() => setBrowseView('shops')}
                    className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center transition-colors hover:bg-neutral-800"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-400" strokeWidth={2.5} />
                  </button>
                  <div>
                    <h2 className="text-white font-bold text-lg leading-tight">{selectedShop.name}</h2>
                    <p className="text-gray-500 text-xs">{selectedShop.tagline}</p>
                  </div>
                </div>
                <MenuSection shopId={selectedShop.id} />
              </div>
            )}
          </>
        ) : (
          ordersPage
        )}
        <Footer />
      </main>

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onCheckout={handleCheckout}
      />
      <CheckoutModal open={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
