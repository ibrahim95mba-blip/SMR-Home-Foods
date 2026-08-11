import { useEffect, useState, useCallback } from 'react';
import { ClipboardList, Phone, MapPin, Clock, UtensilsCrossed, Loader2, Package, LogOut, CheckCircle2, XCircle, RefreshCw } from 'lucide-react';
import { supabase, type OrderRow } from '@/lib/supabase';
import { useAuth } from '@/context/AuthContext';

const STATUSES = ['pending', 'preparing', 'delivered', 'cancelled'] as const;
type Status = (typeof STATUSES)[number];

export default function OrdersPage() {
  const { signOut } = useAuth();
  const [orders, setOrders] = useState<OrderRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchOrders = useCallback(async () => {
    setLoading(true);
    const { data, error: dbError } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });

    setLoading(false);

    if (dbError) {
      setError('Could not load orders.');
      return;
    }

    setOrders((data ?? []) as OrderRow[]);
  }, []);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const updateStatus = async (orderId: string, status: Status) => {
    setUpdatingId(orderId);
    const { error: dbError } = await supabase
      .from('orders')
      .update({ status })
      .eq('id', orderId);

    setUpdatingId(null);

    if (dbError) {
      setError('Could not update order status.');
      return;
    }

    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status } : o))
    );
  };

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }) + ', ' + d.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const statusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-400/15 text-yellow-400 border-yellow-400/30';
      case 'preparing':
        return 'bg-blue-500/15 text-blue-400 border-blue-500/30';
      case 'delivered':
        return 'bg-green-500/15 text-green-400 border-green-500/30';
      case 'cancelled':
        return 'bg-red-500/15 text-red-400 border-red-500/30';
      default:
        return 'bg-neutral-700 text-gray-400 border-neutral-600';
    }
  };

  const statusButtonStyle = (status: Status, current: string) => {
    if (status === current) {
      switch (status) {
        case 'pending': return 'bg-yellow-400 text-black border-yellow-400';
        case 'preparing': return 'bg-blue-500 text-white border-blue-500';
        case 'delivered': return 'bg-green-500 text-white border-green-500';
        case 'cancelled': return 'bg-red-500 text-white border-red-500';
      }
    }
    return 'bg-neutral-900 text-gray-400 border-neutral-800 hover:border-neutral-700';
  };

  const statusIcon = (status: Status) => {
    switch (status) {
      case 'pending': return <Clock className="w-3.5 h-3.5" strokeWidth={2.5} />;
      case 'preparing': return <RefreshCw className="w-3.5 h-3.5" strokeWidth={2.5} />;
      case 'delivered': return <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={2.5} />;
      case 'cancelled': return <XCircle className="w-3.5 h-3.5" strokeWidth={2.5} />;
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <ClipboardList className="w-5 h-5 text-yellow-400" strokeWidth={2.5} />
          <h2 className="text-white font-bold text-xl">Received Orders</h2>
        </div>
        <button
          onClick={signOut}
          className="flex items-center gap-1.5 bg-neutral-900 hover:bg-neutral-800 text-gray-400 hover:text-red-400 text-xs font-semibold px-3 py-2 rounded-lg border border-neutral-800 transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" strokeWidth={2.5} />
          Logout
        </button>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 className="w-8 h-8 text-yellow-400 animate-spin mb-3" strokeWidth={2.5} />
          <p className="text-gray-500 text-sm">Loading orders...</p>
        </div>
      ) : error ? (
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-6 text-center">
          <p className="text-red-400 text-sm font-medium">{error}</p>
        </div>
      ) : orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center mb-4">
            <Package className="w-7 h-7 text-gray-600" strokeWidth={2} />
          </div>
          <p className="text-gray-500 font-medium text-sm">No orders yet</p>
          <p className="text-gray-600 text-xs mt-1">Customer orders will appear here</p>
        </div>
      ) : (
        <div className="space-y-3">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden"
            >
              {/* Order header */}
              <div className="px-4 py-3 flex items-center justify-between border-b border-neutral-800 bg-neutral-950/50">
                <div className="flex items-center gap-2">
                  <span className="text-white font-mono text-xs font-bold">
                    #{order.id.slice(0, 8).toUpperCase()}
                  </span>
                  <span className="text-gray-600 text-xs">·</span>
                  <span className="text-gray-500 text-xs">{formatDate(order.created_at)}</span>
                </div>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${statusColor(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
              </div>

              {/* Customer info */}
              <div className="px-4 py-3 space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-7 h-7 rounded-lg bg-yellow-400/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-yellow-400 text-xs font-bold">
                      {order.customer_name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm">{order.customer_name}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Phone className="w-3 h-3 text-gray-500" strokeWidth={2.5} />
                      <p className="text-gray-400 text-xs">{order.customer_phone}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-gray-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-gray-400 text-xs leading-snug">{order.customer_address}</p>
                </div>
              </div>

              {/* Items */}
              <div className="px-4 pb-3">
                <div className="bg-neutral-950 rounded-xl p-3 border border-neutral-800">
                  <div className="flex items-center gap-1.5 mb-2">
                    <UtensilsCrossed className="w-3.5 h-3.5 text-yellow-400" strokeWidth={2.5} />
                    <span className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider">
                      Items
                    </span>
                  </div>
                  <div className="space-y-1">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between text-xs">
                        <span className="text-gray-300">
                          {item.qty}x {item.name}
                        </span>
                        <span className="text-gray-500">₹{item.price * item.qty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-4 py-3 flex items-center justify-between border-t border-neutral-800 bg-neutral-950/50">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-yellow-400" strokeWidth={2.5} />
                  <span className="text-gray-400 text-xs capitalize">{order.meal_type}</span>
                  <span className="text-gray-600 text-xs">·</span>
                  <span className="text-yellow-400/80 text-xs font-medium">{order.delivery_slot}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-500 text-[10px] uppercase tracking-wider">Total</span>
                  <span className="text-yellow-400 font-extrabold text-lg ml-2">
                    ₹{order.total_amount}
                  </span>
                </div>
              </div>

              {/* Status controls */}
              <div className="px-4 py-3 border-t border-neutral-800">
                <p className="text-gray-500 text-[10px] font-semibold uppercase tracking-wider mb-2">
                  Update Status
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {STATUSES.map((status) => (
                    <button
                      key={status}
                      onClick={() => updateStatus(order.id, status)}
                      disabled={updatingId === order.id}
                      className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold border transition-all active:scale-95 capitalize ${statusButtonStyle(status, order.status)} ${
                        updatingId === order.id ? 'opacity-50' : ''
                      }`}
                    >
                      {statusIcon(status)}
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
