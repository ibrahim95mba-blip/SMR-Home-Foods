import { useState } from 'react';
import { CartProvider } from '@/context/CartContext';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import Header from '@/components/Header';
import Banners from '@/components/Banners';
import MenuSection from '@/components/MenuSection';
import CartDrawer from '@/components/CartDrawer';
import CheckoutModal from '@/components/CheckoutModal';
import Footer from '@/components/Footer';
import OrdersPage from '@/components/OrdersPage';
import AdminLogin from '@/components/AdminLogin';
import { Loader2 } from 'lucide-react';

type Page = 'menu' | 'orders';

function AppContent() {
  const { session, loading } = useAuth();
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [page, setPage] = useState<Page>('menu');
  const [isAdminUnlocked, setIsAdminUnlocked] = useState(false);

  const handleCheckout = () => {
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-yellow-400 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      <div>
        <Header
          onCartClick={() => setCartOpen(true)}
          page={page}
          onPageChange={setPage}
        />

        <main className="max-w-5xl mx-auto px-4 py-4">
          {page === 'menu' ? (
            <>
              <Banners />
              <div className="mt-6">
                <MenuSection />
              </div>
            </>
          ) : session || isAdminUnlocked ? (
            <OrdersPage />
          ) : (
            <AdminLogin
              onSuccess={() => setIsAdminUnlocked(true)}
              onClose={() => setPage('menu')}
            />
          )}
        </main>
      </div>

      <Footer />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onCheckout={handleCheckout}
      />
      
      <CheckoutModal
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
      />
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
