-- Seed Menu Categories
INSERT INTO public.menu_categories (name, display_order) VALUES
('Specials & Starters', 1),
('Signature Curries & Thalis', 2),
('Seafood Specials', 3),
('Biryani & Pulao', 4),
('Tadka', 5),
('Breads & Rice', 6);

-- Seed Menu Items
DO $$ 
DECLARE
  cat_specials UUID;
  cat_curries UUID;
  cat_seafood UUID;
  cat_biryani UUID;
  cat_tadka UUID;
  cat_breads UUID;
BEGIN
  SELECT id INTO cat_specials FROM public.menu_categories WHERE name = 'Specials & Starters' LIMIT 1;
  SELECT id INTO cat_curries FROM public.menu_categories WHERE name = 'Signature Curries & Thalis' LIMIT 1;
  SELECT id INTO cat_seafood FROM public.menu_categories WHERE name = 'Seafood Specials' LIMIT 1;
  SELECT id INTO cat_biryani FROM public.menu_categories WHERE name = 'Biryani & Pulao' LIMIT 1;
  SELECT id INTO cat_tadka FROM public.menu_categories WHERE name = 'Tadka' LIMIT 1;
  SELECT id INTO cat_breads FROM public.menu_categories WHERE name = 'Breads & Rice' LIMIT 1;

  -- Specials & Starters
  INSERT INTO public.menu_items (category_id, name, price, description, tag) VALUES
  (cat_specials, 'Nimba Phula Bhaja', 49.00, 'Made with the flowers of neem tree. Seasonally available.', 'Seasonal'),
  (cat_specials, 'Kakharu Phula Bhaja', 29.00, 'Yellow pumpkin flower coated with a spiced batter and then shallow-fried. Seasonally available.', 'Seasonal'),
  (cat_specials, 'Badhi Chura', 29.00, 'Coarse mixture of badi, onion, garlic, green chilli along with mustard oil.', NULL),
  (cat_specials, 'Chakuli Mutton', 199.00, 'Chakuli (made with fermented rice, lentil batter) and served with mutton curry.', 'Evening');

  -- Curries
  INSERT INTO public.menu_items (category_id, name, price, description, image_url) VALUES
  (cat_curries, 'Similipal Mutton Bhaja', 399.00, 'Our signature tender mutton bhaja.', NULL),
  (cat_curries, 'Mutton Curry', 299.00, 'Authentic Odia style mutton curry.', NULL),
  (cat_curries, 'Desi Chicken Kasa', 329.00, 'Spicy and dry country chicken preparation.', NULL),
  (cat_curries, 'Special Mutton Thali', 350.00, 'Rice, Mutton Curry (4 pcs), Dalma, Khatta, Chips, Salad.', '/images/MThaali.png'),
  (cat_curries, 'Chicken Thali', 250.00, 'Rice, Chicken Curry (4 pcs), Dalma, Khatta, Chips, Salad.', NULL);

  -- Seafood
  INSERT INTO public.menu_items (category_id, name, price, description) VALUES
  (cat_seafood, 'Chilika Crab Masala', 399.00, 'Fresh Chilika crabs in traditional masala.'),
  (cat_seafood, 'Chilli Crab', 389.00, 'Flavorful and iconic. Chilika crabs stir-fried in a savory, slightly sweet, and spicy tomato and chili-based sauce.'),
  (cat_seafood, 'Bagda Chingri Masala', 379.00, 'Tiger prawns cooked in a rich, spicy gravy.'),
  (cat_seafood, 'Bhapa Illish', 489.00, 'Hilsa fish steamed with pungent mustard paste.'),
  (cat_seafood, 'Pabda Fish Curry', 249.00, 'Delicate Pabda fish in a light, flavorful curry.');

  -- Biryani
  INSERT INTO public.menu_items (category_id, name, price, description, tag) VALUES
  (cat_biryani, 'Mutton Biryani', 349.00, 'Made with basmati rice, goat meat (khasi manso) and whole spices. Served with raita.', NULL),
  (cat_biryani, 'Mutton Pulao', 329.00, 'Rich, savory taste with tender mutton pieces and fragrant rice. Served with raita, salad and pickles.', 'Wednesday'),
  (cat_biryani, 'Paneer Biryani', 229.00, 'Made with aromatic basmati rice, indian cottage cheese, and a blend of spices.', NULL),
  (cat_biryani, 'Mix Veg Biryani', 149.00, 'Made with aromatic basmati rice, mixed vegetables, and a blend of spices.', NULL);

  -- Tadka
  INSERT INTO public.menu_items (category_id, name, price, description) VALUES
  (cat_tadka, 'Double Egg Tadka', 129.00, 'Double egg cooked with a variety of aromatic spices and herbs. Dhaba style.'),
  (cat_tadka, 'Single Egg Tadka', 119.00, 'Single egg cooked with a variety of aromatic spices and herbs. Dhaba style.');

  -- Breads
  INSERT INTO public.menu_items (category_id, name, price, tag, image_url) VALUES
  (cat_breads, 'Baghara Rice', 119.00, NULL, NULL),
  (cat_breads, 'Steam Rice (Basmati)', 109.00, NULL, NULL),
  (cat_breads, 'Steam Rice (Plain)', 69.00, NULL, '/images/rice.png'),
  (cat_breads, 'Butter Naan', 50.00, NULL, NULL),
  (cat_breads, 'Ghee Roti', 20.00, 'Evening', NULL),
  (cat_breads, 'Roti / Chakuli', 12.00, 'Evening', NULL);
END $$;

-- Seed Tables
INSERT INTO public.restaurant_tables (table_number, seating_capacity) VALUES
(1, 4), (2, 4), (3, 4), (4, 6), (5, 6), (6, 2), (7, 2), (8, 8);
