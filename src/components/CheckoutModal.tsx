import { useState } from 'react';
import { X, Loader2, CheckCircle2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { supabase, type OrderRow } from '@/lib/supabase';
import emailjs from '@emailjs/browser';

type CheckoutModalProps = {
  open: boolean;
  onClose: () => void;
};

type FormState = {
  name: string;
  phone: string;
  address: string;
};

export default function CheckoutModal({ open, onClose }: CheckoutModalProps) {
  const { items, getTotal, clearCart } = useCart();
  const itemsTotal = getTotal();
  const deliveryCharge = 30;
  const grandTotal = itemsTotal + deliveryCharge;

  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    address: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<OrderRow | null>(null);

  if (!open) return null;

  const handleClose = () => {
    if (success) {
      clearCart();
    }
    setError(null);
    setSuccess(null);
    setForm({ name: '', phone: '', address: '' });
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.name.trim() || !form.phone.trim() || !form.address.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    if (!/^\d{10}$/.test(form.phone.trim())) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    if (items.length === 0) {
      setError('Your cart is empty.');
      return;
    }

    setLoading(true);

    const orderItems = items.map((i: any) => ({
      name: i.name,
      qty: i.quantity,
      price: i.price,
    }));

    const shops = [...new Set(items.map((i: any) => i.shopName || i.shop_name || i.shop))];

    const { data, error: dbError } = await supabase
      .from('orders')
      .insert({
        customer_name: form.name.trim(),
        customer_phone: form.phone.trim(),
        customer_address: form.address.trim(),
        meal_type: shops.join(', ') || 'SMR Multi Shop',
        delivery_slot: 'As per shop schedule',
        items: orderItems,
        total_amount: grandTotal,
        status: 'pending',
        shop_name: shops.join(', ') || 'SMR Multi Shop',
        category: shops.join(', ') || 'SMR Multi Shop',
      })
      .select()
      .single();

    setLoading(false);

    if (dbError || !data) {
      setError('Could not place your order. Please try again.');
      return;
    }
     
        const formattedOrderItem = orderItems
          .map((item: any) => `• ${item.qty}x ${item.name} - ₹${item.price}`)
          .join('\n');
      try {
      const currentShopName = (window as any).currentShopName || 'SMR Home Foods';
      const itemsFormatted = orderItems.map((item: any) => `• ${item.name} (${item.qty || item.quantity || 1}) — ₹${item.price}`).join('\n');

      const formData = {
        access_key: '52eb55fb-ac03-4b7c-884b-650b9c604b0f', // <--- உங்கள் Web3Forms Access Key-ஐ இங்கே போடவும்
        subject: `New Order from ${currentShopName} - SMR Multi Shop`,
        from_name: 'SMR Multi Shop App',
        'Shop name': currentShopName,
        'Customer name': form.name.trim(),
        'Customer phone': form.phone.trim(),
        'Customer address': form.address.trim(),
        'Order items': itemsFormatted,
        'Total amount': `₹${grandTotal}`,
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (result.success) {
        console.log('Order email sent successfully via Web3Forms!');
      }
    } catch (error) {
      console.error('Email error:', error);
    }

    setSuccess(data as OrderRow);
  };

  return (
    <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto">
      <div className="bg-neutral-950 rounded-t-3xl sm:rounded-3xl border border-yellow-400/30 max-w-sm w-full p-6 text-center shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-800">
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
          <h2 className="text-white font-bold text-lg">Checkout</h2>
          <div className="w-8" />
        </div>

        {success ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center mx-auto text-green-400">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h2 className="text-white font-bold text-xl">Order Placed!</h2>
            <p className="text-gray-400 text-sm">
              We've received your order. Thank you for choosing SMR Multi Shop!
            </p>
            <div className="bg-neutral-900 rounded-xl p-4 text-left space-y-2 border border-neutral-800">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Order ID</span>
                <span className="text-white font-mono font-semibold">
                  #{success.id.slice(0, 8).toUpperCase()}
                </span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Shops</span>
                <span className="text-white font-semibold">{success.meal_type}</span>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="w-full py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-xl text-sm transition-all shadow-lg"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto px-5 py-4">
            {/* Order summary */}
            <div className="bg-neutral-900 rounded-xl p-4 mb-4 text-left border border-neutral-800">
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2.5">
                Order Summary
              </h3>
              <div className="space-y-1.5">
                {items.map((item) => (
                  <div key={`${item.id}-${item.shopId}`} className="flex justify-between text-sm">
                    <span className="text-gray-300">
                      {item.quantity}x {item.name}
                    </span>
                    <span className="text-gray-400">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between pt-2.5 mt-2.5 border-t border-neutral-800 text-sm">
                <span className="text-gray-500">Items Total</span>
                <span className="text-gray-300 font-semibold">₹{itemsTotal}</span>
              </div>
              <div className="flex justify-between pt-1.5 text-sm">
                <span className="text-gray-500">Delivery Charge</span>
                <span className="text-gray-400 font-semibold">₹{deliveryCharge}</span>
              </div>
              <div className="flex justify-between pt-1.5 text-sm">
                <span className="text-white font-bold">Total</span>
                <span className="text-yellow-400 font-extrabold text-lg">₹{grandTotal}</span>
              </div>
            </div>

            {/* Form fields */}
            <div className="space-y-3 text-left">
              <div>
                <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full bg-neutral-900 text-white text-sm rounded-xl px-4 py-3 border border-neutral-800 focus:border-yellow-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  className="w-full bg-neutral-900 text-white text-sm rounded-xl px-4 py-3 border border-neutral-800 focus:border-yellow-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                  Delivery Address
                </label>
                <textarea
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  placeholder="Full delivery address (house no, street, landmark)"
                  rows={3}
                  className="w-full bg-neutral-900 text-white text-sm rounded-xl px-4 py-3 border border-neutral-800 focus:border-yellow-400 focus:outline-none resize-none"
                />
              </div>

              {error && (
                <div className="mt-3 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-2.5">
                  <p className="text-red-400 text-xs font-medium">{error}</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-5 py-4 border-t border-neutral-800 mt-4">
              <button
                type="submit"
                disabled={loading || items.length === 0}
                className="w-full bg-yellow-400 hover:bg-yellow-300 disabled:opacity-50 text-black font-bold rounded-xl py-3.5 text-sm transition-all shadow-lg flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Placing Order...
                  </>
                ) : (
                  `Place Order · ₹${grandTotal}`
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
