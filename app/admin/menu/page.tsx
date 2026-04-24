'use client';
import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type MenuItem = { id: string; name: string; price: number; category_id: string; is_available: boolean };
type MenuCategory = { id: string; name: string };

export default function AdminMenuManager() {
  const router = useRouter();
  const supabase = createClient();
  
  const [items, setItems] = useState<MenuItem[]>([]);
  const [categories, setCategories] = useState<MenuCategory[]>([]);
  const [loading, setLoading] = useState(true);

  // New Item Form State
  const [newItemName, setNewItemName] = useState('');
  const [newItemPrice, setNewItemPrice] = useState('');
  const [newItemCategory, setNewItemCategory] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    
    // Check Auth
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.push('/login');
      return;
    }

    // Fetch Categories
    const { data: catData } = await supabase.from('menu_categories').select('*').order('display_order');
    if (catData) {
      setCategories(catData);
      if (catData.length > 0) setNewItemCategory(catData[0].id);
    }

    // Fetch Items
    const { data: itemData } = await supabase.from('menu_items').select('*').order('created_at', { ascending: false });
    if (itemData) setItems(itemData);

    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  const toggleAvailability = async (id: string, currentStatus: boolean) => {
    const { error } = await supabase
      .from('menu_items')
      .update({ is_available: !currentStatus })
      .eq('id', id);
    
    if (!error) {
      setItems(items.map(item => item.id === id ? { ...item, is_available: !currentStatus } : item));
    } else {
      alert("Error updating status: " + error.message);
    }
  };

  const deleteItem = async (id: string) => {
    if (!confirm("Are you sure you want to delete this menu item?")) return;
    
    const { error } = await supabase.from('menu_items').delete().eq('id', id);
    if (!error) {
      setItems(items.filter(item => item.id !== id));
    } else {
      alert("Error deleting item: " + error.message);
    }
  };

  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName || !newItemPrice || !newItemCategory) return;

    const { data, error } = await supabase
      .from('menu_items')
      .insert({
        name: newItemName,
        price: parseFloat(newItemPrice),
        category_id: newItemCategory,
        is_available: true
      })
      .select()
      .single();

    if (error) {
      alert("Error adding item: " + error.message);
    } else if (data) {
      setItems([data, ...items]);
      setNewItemName('');
      setNewItemPrice('');
    }
  };

  const getCategoryName = (id: string) => categories.find(c => c.id === id)?.name || 'Unknown';

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-stone-50">Loading Menu Manager...</div>;
  }

  return (
    <div className="min-h-screen bg-stone-50 p-6">
      <header className="flex justify-between items-center mb-8 bg-white p-4 rounded-xl shadow-sm max-w-6xl mx-auto">
        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-bold text-mutton font-serif">Admin Portal</h1>
          <nav className="hidden md:flex gap-4">
            <Link href="/admin" className="text-stone-500 hover:text-mutton font-medium">Dashboard</Link>
            <Link href="/admin/menu" className="text-mutton font-bold border-b-2 border-saffron">Menu Manager</Link>
          </nav>
        </div>
        <button onClick={handleLogout} className="text-stone-500 hover:text-red-500 font-bold text-sm bg-stone-50 px-4 py-2 rounded-lg transition-colors">Sign Out</button>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: ADD ITEM FORM */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h2 className="text-xl font-bold text-stone-800 mb-6">Add New Dish</h2>
            <form onSubmit={handleAddItem} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-1">Dish Name</label>
                <input 
                  type="text" 
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  className="w-full border border-stone-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-saffron focus:outline-none"
                  placeholder="e.g. Garlic Naan"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-1">Price (₹)</label>
                <input 
                  type="number" 
                  value={newItemPrice}
                  onChange={(e) => setNewItemPrice(e.target.value)}
                  className="w-full border border-stone-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-saffron focus:outline-none"
                  placeholder="0.00"
                  step="0.01"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-stone-700 mb-1">Category</label>
                <select 
                  value={newItemCategory}
                  onChange={(e) => setNewItemCategory(e.target.value)}
                  className="w-full border border-stone-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-saffron focus:outline-none bg-white"
                  required
                >
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <button 
                type="submit"
                className="w-full bg-mutton text-white font-bold py-3 rounded-lg hover:bg-mutton/90 transition-colors mt-4"
              >
                Add to Menu
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT COLUMN: MENU TABLE */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-stone-50 border-b border-stone-200">
                    <th className="p-4 text-sm font-bold text-stone-600 uppercase tracking-wider">Item Name</th>
                    <th className="p-4 text-sm font-bold text-stone-600 uppercase tracking-wider">Category</th>
                    <th className="p-4 text-sm font-bold text-stone-600 uppercase tracking-wider text-right">Price</th>
                    <th className="p-4 text-sm font-bold text-stone-600 uppercase tracking-wider text-center">Status</th>
                    <th className="p-4 text-sm font-bold text-stone-600 uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {items.map(item => (
                    <tr key={item.id} className="hover:bg-stone-50/50 transition-colors">
                      <td className="p-4 font-medium text-stone-800">{item.name}</td>
                      <td className="p-4 text-stone-500 text-sm">{getCategoryName(item.category_id)}</td>
                      <td className="p-4 font-bold text-mutton text-right">₹{item.price}</td>
                      <td className="p-4 text-center">
                        <button 
                          onClick={() => toggleAvailability(item.id, item.is_available)}
                          className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-colors
                            ${item.is_available ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-stone-200 text-stone-600 hover:bg-stone-300'}`}
                        >
                          {item.is_available ? 'In Stock' : 'Out of Stock'}
                        </button>
                      </td>
                      <td className="p-4 text-right">
                        <button 
                          onClick={() => deleteItem(item.id)}
                          className="text-red-400 hover:text-red-600 transition-colors p-1"
                          title="Delete"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                  {items.length === 0 && (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-stone-400">No items found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
