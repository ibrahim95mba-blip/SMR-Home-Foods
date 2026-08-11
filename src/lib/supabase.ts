import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://lkdtixodzeokoigbuube.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrZHRpeG9kemVva29pZ2J1dWJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU5MTkwODksImV4cCI6MjEwMTQ5NTA4OX0.YUWYsskMK1yGTcmem7kleY8BIpwN40RtWCkrd4l6xr8|';


export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type OrderRow = {
  id: string;
  customer_name: string;
  customer_phone: string;
  customer_address: string;
  meal_type: string;
  delivery_slot: string;
  items: { name: string; qty: number; price: number }[];
  total_amount: number;
  status: string;
  created_at: string;
};
