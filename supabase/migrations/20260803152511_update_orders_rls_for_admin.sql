/*
# Update orders RLS policies for admin-protected viewing

1. Security changes
- SELECT: only authenticated (admin) users can view all orders. Anon users can no longer read orders.
- INSERT: stays open to anon + authenticated so customers can place orders without logging in.
- UPDATE: only authenticated (admin) users can update order status.
- DELETE: only authenticated (admin) users can delete orders.

This protects the Orders panel so only the logged-in admin can see received orders and update their status.
*/

DROP POLICY IF EXISTS "anon_select_orders" ON orders;
CREATE POLICY "admin_select_orders" ON orders FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "anon_update_orders" ON orders;
CREATE POLICY "admin_update_orders" ON orders FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_orders" ON orders;
CREATE POLICY "admin_delete_orders" ON orders FOR DELETE
  TO authenticated USING (true);
