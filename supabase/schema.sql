-- Create Enum for User Roles
CREATE TYPE user_role AS ENUM ('admin', 'waiter', 'delivery');

-- Create Profiles Table (extends auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  full_name TEXT,
  role user_role DEFAULT 'waiter'::user_role NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Setup Row Level Security for Profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public profiles are viewable by everyone."
  ON public.profiles FOR SELECT
  USING ( true );

CREATE POLICY "Users can insert their own profile."
  ON public.profiles FOR INSERT
  WITH CHECK ( auth.uid() = id );

CREATE POLICY "Users can update own profile."
  ON public.profiles FOR UPDATE
  USING ( auth.uid() = id );

-- Function to handle new user signups
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, role)
  VALUES (new.id, new.raw_user_meta_data->>'full_name', COALESCE((new.raw_user_meta_data->>'role')::user_role, 'waiter'::user_role));
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Create Menu Categories Table
CREATE TABLE public.menu_categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create Menu Items Table
CREATE TABLE public.menu_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  category_id UUID REFERENCES public.menu_categories(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC(10, 2) NOT NULL,
  image_url TEXT,
  tag TEXT,
  is_available BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create Tables Registry
CREATE TABLE public.restaurant_tables (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  table_number INTEGER NOT NULL UNIQUE,
  seating_capacity INTEGER DEFAULT 4,
  status TEXT DEFAULT 'available' -- 'available', 'occupied', 'reserved'
);

-- Create Orders Table
CREATE TYPE order_status AS ENUM ('pending', 'preparing', 'served', 'paid', 'cancelled');

CREATE TABLE public.orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  table_id UUID REFERENCES public.restaurant_tables(id),
  waiter_id UUID REFERENCES public.profiles(id),
  status order_status DEFAULT 'pending'::order_status NOT NULL,
  total_amount NUMERIC(10, 2) DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create Order Items Table
CREATE TABLE public.order_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE,
  menu_item_id UUID REFERENCES public.menu_items(id),
  quantity INTEGER NOT NULL DEFAULT 1,
  subtotal NUMERIC(10, 2) NOT NULL,
  notes TEXT
);

-- Create Inventory Table
CREATE TABLE public.inventory (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  item_name TEXT NOT NULL,
  quantity NUMERIC(10, 2) DEFAULT 0,
  unit TEXT NOT NULL, -- e.g., 'kg', 'liters', 'pieces'
  last_updated TIMESTAMPTZ DEFAULT NOW()
);

-- Setup basic RLS for other tables
ALTER TABLE public.menu_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.restaurant_tables ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inventory ENABLE ROW LEVEL SECURITY;

-- Allow read access to everyone for menu and tables
CREATE POLICY "Menu is viewable by everyone" ON public.menu_categories FOR SELECT USING (true);
CREATE POLICY "Menu is viewable by everyone" ON public.menu_items FOR SELECT USING (true);
CREATE POLICY "Tables are viewable by everyone" ON public.restaurant_tables FOR SELECT USING (true);

-- For now, allow authenticated users (staff) to manage orders and inventory
CREATE POLICY "Staff can manage orders" ON public.orders FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Staff can manage order items" ON public.order_items FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Staff can view inventory" ON public.inventory FOR SELECT USING (auth.role() = 'authenticated');
