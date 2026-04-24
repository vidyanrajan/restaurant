import { createClient } from '@/utils/supabase/server';
import MenuClient from '@/components/MenuClient';

export const revalidate = 0; // Disable static caching so menu is always fresh

export default async function MenuPage() {
  const supabase = await createClient();
  
  // Fetch categories and items
  const { data: categories } = await supabase.from('menu_categories').select('*').order('display_order');
  const { data: items } = await supabase.from('menu_items').select('*').eq('is_available', true);

  const menuData = (categories || []).map(cat => ({
    category: cat.name,
    items: (items || []).filter(item => item.category_id === cat.id)
  })).filter(cat => cat.items.length > 0);

  return (
    <main className="min-h-screen bg-cream text-stone-900 pb-20 pt-24">
      <MenuClient menuData={menuData} />
    </main>
  );
}
