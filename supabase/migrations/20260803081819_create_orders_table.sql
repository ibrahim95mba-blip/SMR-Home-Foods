/*
# Create orders table for SMR Home Foods

1. New Tables
- `orders`
  - `id` (uuid, primary key)
  - `customer_name` (text, not null) - name of the customer
  - `customer_phone` (text, not null) - contact number
  - `customer_address` (text, not null) - delivery address
  - `meal_type` (text, not null) - breakfast / lunch / dinner
  - `delivery_slot` (text, not null) - selected delivery time slot
  - `items` (jsonb, not null) - array of ordered items with name, qty, price
  - `total_amount` (integer, not null) - total in rupees
  - `status` (text, not null, default 'pending') - order status
  - `created_at` (timestamptz, default now)

2. Security
- Enable RLS on `orders`.
- Allow anon + authenticated CRUD since this is a no-auth public ordering app.
*/

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_phone text NOT NULL,
  customer_address text NOT NULL,
  meal_type text NOT NULL,
  delivery_slot text NOT NULL,
  items jsonb NOT NULL,
  total_amount integer NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_orders" ON orders;
CREATE POLICY "anon_select_orders" ON orders FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_orders" ON orders;
CREATE POLICY "anon_insert_orders" ON orders FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_orders" ON orders;
CREATE POLICY "anon_update_orders" ON orders FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_orders" ON orders;
CREATE POLICY "anon_delete_orders" ON orders FOR DELETE
  TO anon, authenticated USING (true);
