import { useState } from 'react';
import { X, Loader2, CheckCircle2, ArrowLeft } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { supabase, type OrderRow } from '@/lib/supabase';
import { DELIVERY_SLOTS, type MealType } from '@/data/menu';
import emailjs from '@emailjs/browser';

type CheckoutModalProps = {
  open: boolean;
  onClose: () => void;
};

type FormState = {
  name: string;
  phone: string;
  address: string;
  mealType: MealType;
};

export default function CheckoutModal({ open, onClose }: CheckoutModalProps) {
  const { items, getTotal, clearCart } = useCart();
  const total = getTotal();

  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    address: '',
    mealType: 'breakfast',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<OrderRow | null>(null);

  if (!open) return null;

  const handleClose = () => {
    if (success) {
      clearCart();
      setSuccess(null);
      setForm({ name: '', phone: '', address: '', mealType: 'breakfast' });
    }
    setError(null);
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

      // Format cart items into a clean text list for the email
    const itemsFormatted = items
      .map((i) => `• ${i.name} x ${i.quantity} — ₹${i.price * i.quantity}`)
      .join('\n');

    // Send email notification to smrhomefoods@gmail.com
      try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: '52eb55fb-ac03-4b7c-884b-650b9c604b0f',
          subject: 'New Order Alert - SMR Home Foods',
          from_name: 'SMR Home Foods Order System',
          customer_name: form.name,
          customer_phone: form.phone,
          customer_address: form.address,
          order_items: itemsFormatted,
          total_amount: total,
        }),
      });

      console.log('Gmail notification sent!');
    } catch (emailErr) {
      console.error('Email error:', emailErr);
    }
    
    const orderItems = items.map((i) => ({
      name: i.name,
      qty: i.quantity,
      price: i.price,
    }));

    const { data, error: dbError } = await supabase
      .from('orders')
      .insert([
        {
        customer_name: form.name.trim(),
        customer_phone: form.phone.trim(),
        customer_address: form.address.trim(),
        meal_type: form.mealType,
        delivery_slot: (DELIVERY_SLOTS as Record<string, string>)[form.mealType] || ' ',
        items: orderItems,
        total_amount: total,
        status: 'pending',
      }
      ])
      .select('*')
      .single();

    setLoading(false);

    if (dbError || !data) {
      console.error('Supabase error Details:', dbError);
      setError('Could not place your order. Please try again.');
      return;
    }

    setSuccess(data as OrderRow);
  };

  // Success screen
  if (success) {
    return (
      <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-neutral-950 rounded-3xl border border-yellow-400/30 max-w-sm w-full p-6 text-center">
          <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-9 h-9 text-green-400" strokeWidth={2.5} />
          </div>
          <h2 className="text-white font-bold text-xl mb-1.5">Order Placed!</h2>
          <p className="text-gray-400 text-sm mb-5">
            We've received your order. Our team will deliver it during your selected slot.
          </p>

          <div className="bg-neutral-900 rounded-xl p-4 text-left space-y-2 mb-5 border border-neutral-800">
            <div className="flex justify-between">
              <span className="text-gray-500 text-xs">Order ID</span>
              <span className="text-white font-mono text-xs font-semibold">
                #{success.id.slice(0, 8).toUpperCase()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-xs">Meal</span>
              <span className="text-white text-xs font-semibold capitalize">
                {success.meal_type}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-xs">Delivery Slot</span>
              <span className="text-yellow-400 text-xs font-semibold">{success.delivery_slot}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-neutral-800">
              <span className="text-white text-sm font-semibold">Total Paid</span>
              <span className="text-yellow-400 text-lg font-extrabold">₹{success.total_amount}</span>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3.5 rounded-xl transition-all active:scale-95"
          >
            Done
          </button>
        </div>
      </div>
    );
  }

  // Checkout form
  return (
    <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-neutral-950 rounded-t-3xl sm:rounded-3xl border border-yellow-400/30 max-w-sm w-full flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-neutral-800">
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-gray-400" strokeWidth={2.5} />
          </button>
          <h2 className="text-white font-bold text-lg">Checkout</h2>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto px-5 py-4">
          {/* Order summary */}
          <div className="bg-neutral-900 rounded-xl p-4 mb-4 border border-neutral-800">
            <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2.5">
              Order Summary
            </h3>
            <div className="space-y-1.5">
              {items.map((item) => (
                <div key={`${item.id}-${item.mealType}`} className="flex justify-between text-sm">
                  <span className="text-gray-300">
                    {item.quantity}x {item.name}
                  </span>
                  <span className="text-gray-400">₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between pt-2.5 mt-2.5 border-t border-neutral-800">
              <span className="text-gray-500 text-sm">Delivery</span>
              <span className="text-green-400 font-semibold text-sm">FREE</span>
            </div>
            <div className="flex justify-between pt-1.5">
              <span className="text-white font-bold">Total</span>
              <span className="text-yellow-400 font-extrabold text-lg">₹{total}</span>
            </div>
          </div>

          {/* Meal type */}
          <div className="mb-4">
            <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2 block">
              Select Meal
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['breakfast', 'lunch', 'dinner'] as MealType[]).map((mt) => (
                <button
                  key={mt}
                  type="button"
                  onClick={() => setForm((f) => ({ ...f, mealType: mt }))}
                  className={`py-2.5 rounded-xl text-sm font-bold capitalize transition-all ${
                    form.mealType === mt
                      ? 'bg-yellow-400 text-black'
                      : 'bg-neutral-900 text-gray-400 border border-neutral-800'
                  }`}
                >
                  {mt}
                </button>
              ))}
            </div>
            <p className="text-yellow-400/70 text-[11px] mt-1.5 font-medium">
              Delivery: {DELIVERY_SLOTS[form.mealType]}
            </p>
          </div>

          {/* Form fields */}
          <div className="space-y-3">
            <div>
              <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="Your full name"
                className="w-full bg-neutral-900 text-white text-sm rounded-xl px-4 py-3 border border-neutral-800 focus:border-yellow-400/50 focus:outline-none transition-colors placeholder:text-gray-600"
              />
            </div>
            <div>
              <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                Phone Number
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                placeholder="10-digit mobile number"
                maxLength={10}
                className="w-full bg-neutral-900 text-white text-sm rounded-xl px-4 py-3 border border-neutral-800 focus:border-yellow-400/50 focus:outline-none transition-colors placeholder:text-gray-600"
              />
            </div>
            <div>
              <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                Delivery Address
              </label>
              <textarea
                value={form.address}
                onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))}
                placeholder="Full delivery address"
                rows={3}
                className="w-full bg-neutral-900 text-white text-sm rounded-xl px-4 py-3 border border-neutral-800 focus:border-yellow-400/50 focus:outline-none transition-colors placeholder:text-gray-600 resize-none"
              />
            </div>
          </div>

          {error && (
            <div className="mt-3 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-2.5">
              <p className="text-red-400 text-xs font-medium">{error}</p>
            </div>
          )}

        </form>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-neutral-800">
          <button
            onClick={handleSubmit}
            disabled={loading || items.length === 0}
            className="w-full bg-yellow-400 hover:bg-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold text-base py-3.5 rounded-xl transition-all active:scale-95 shadow-lg shadow-yellow-400/20 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" strokeWidth={2.5} />
                Placing Order...
              </>
            ) : (
              <>Place Order · ₹{total}</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
