import React, { useState } from 'react';
import { Lock, X } from 'lucide-react';

interface AdminLoginProps {
  onSuccess?: () => void;
  onClose?: () => void;
}

export default function AdminLogin({ onSuccess, onClose }: AdminLoginProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password.trim() === '1111') {
      // Safely check if onSuccess is passed before calling it
      if (typeof onSuccess === 'function') {
        onSuccess();
      }
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-sm rounded-2xl bg-gray-900 p-6 text-white shadow-2xl border border-gray-800">
        <button
          type="button"
          onClick={() => onClose?.()}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-500">
            <Lock className="h-6 w-6" />
          </div>
          <h2 className="text-xl font-bold">Admin Panel Access</h2>
          <p className="text-xs text-gray-400 mt-1">Enter PIN to view orders</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Enter passcode"
              className="w-full rounded-xl bg-gray-800 border border-gray-700 px-4 py-3 text-center text-lg font-mono text-white focus:outline-none focus:border-yellow-500"
              autoFocus
            />
          </div>

          {error && (
            <p className="text-xs text-center text-red-400 font-semibold">
              Incorrect PIN code. Try again.
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-yellow-500 py-3 font-semibold text-gray-950 transition hover:bg-yellow-400 active:scale-95"
          >
            Unlock Admin Panel
          </button>
        </form>
      </div>
    </div>
  );
}

