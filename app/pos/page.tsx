'use client';
import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

type Table = { id: string; table_number: number; status: string; seating_capacity: number };
type MenuItem = { id: string; name: string; price: number; category_id: string };
type MenuCategory = { id: string; name: string };
type TicketItem = MenuItem & { quantity: number; cartId: string };

export default function POSDashboard() {
  const router = useRouter();
  const supabase = createClient();
  
  const [tables, setTables] = useState<Table[]>([]);
  const [categories, setCategories] = useState<MenuCategory[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [selectedTable, setSelectedTable] = useState<Table | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [ticket, setTicket] = useState<TicketItem[]>([]);

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

    // Fetch Tables
    const { data: tablesData } = await supabase.from('restaurant_tables').select('*').order('table_number');
    if (tablesData) setTables(tablesData);

    // Fetch Categories
    const { data: catData } = await supabase.from('menu_categories').select('*').order('display_order');
    if (catData) {
      setCategories(catData);
      if (catData.length > 0) setActiveCategory(catData[0].id);
    }

    // Fetch Items
    const { data: itemData } = await supabase.from('menu_items').select('*').eq('is_available', true);
    if (itemData) setMenuItems(itemData);

    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  const addToTicket = (item: MenuItem) => {
    setTicket(prev => {
      const existing = prev.find(t => t.id === item.id);
      if (existing) {
        return prev.map(t => t.id === item.id ? { ...t, quantity: t.quantity + 1 } : t);
      }
      return [...prev, { ...item, quantity: 1, cartId: Math.random().toString(36).substr(2, 9) }];
    });
  };

  const removeFromTicket = (cartId: string) => {
    setTicket(prev => prev.filter(t => t.cartId !== cartId));
  };

  const submitOrder = async () => {
    if (!selectedTable || ticket.length === 0) return;
    alert(`Order submitted for Table ${selectedTable.table_number}! (Database insert pending integration)`);
    setTicket([]);
    setSelectedTable(null);
  };

  const ticketTotal = ticket.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const displayedItems = menuItems.filter(item => item.category_id === activeCategory);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-stone-100 text-mutton font-bold">Loading POS Terminal...</div>;
  }

  // VIEW 1: Table Selection
  if (!selectedTable) {
    return (
      <div className="min-h-screen bg-stone-100 p-6 flex flex-col h-screen">
        <header className="flex justify-between items-center mb-8 bg-white p-4 rounded-xl shadow-sm">
          <h1 className="text-2xl font-bold text-mutton flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            POS Terminal
          </h1>
          <button onClick={handleLogout} className="text-stone-500 hover:text-red-500 font-bold text-sm bg-stone-50 px-4 py-2 rounded-lg transition-colors">Sign Out</button>
        </header>

        <h2 className="text-xl font-bold text-stone-800 mb-6 px-2">Select a Table</h2>
        
        {tables.length === 0 ? (
          <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 text-yellow-800 text-center">
            No tables found. Please run the seed_data.sql script in Supabase!
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 flex-grow content-start">
            {tables.map(table => (
              <button
                key={table.id}
                onClick={() => setSelectedTable(table)}
                className={`h-32 rounded-2xl flex flex-col items-center justify-center transition-all shadow-sm border-2
                  ${table.status === 'occupied' 
                    ? 'bg-red-50 border-red-200 text-red-800 hover:bg-red-100' 
                    : 'bg-white border-stone-200 text-stone-700 hover:border-mutton hover:shadow-md'}`}
              >
                <span className="text-3xl font-black mb-1">{table.table_number}</span>
                <span className="text-xs uppercase tracking-widest font-bold opacity-60">Seats {table.seating_capacity}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // VIEW 2: Order Entry (Split Screen)
  return (
    <div className="h-screen bg-stone-100 flex flex-col md:flex-row overflow-hidden">
      
      {/* LEFT: Ticket Panel */}
      <div className="w-full md:w-[350px] lg:w-[400px] bg-white border-r border-stone-200 flex flex-col h-full flex-shrink-0 z-10 shadow-lg">
        {/* Header */}
        <div className="p-4 bg-mutton text-white flex justify-between items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-mutton-light opacity-80 block">Current Order</span>
            <h2 className="text-2xl font-black">Table {selectedTable.table_number}</h2>
          </div>
          <button 
            onClick={() => { setSelectedTable(null); setTicket([]); }}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-stone-50">
          {ticket.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-stone-400">
              <svg className="w-16 h-16 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
              <p>Ticket is empty</p>
            </div>
          ) : (
            ticket.map(item => (
              <div key={item.cartId} className="bg-white p-3 rounded-lg shadow-sm border border-stone-100 flex justify-between items-center group">
                <div>
                  <h4 className="font-bold text-stone-800 leading-tight">{item.name}</h4>
                  <div className="text-mutton font-bold text-sm">₹{item.price} <span className="text-stone-400 font-normal text-xs ml-1">x {item.quantity}</span></div>
                </div>
                <button 
                  onClick={() => removeFromTicket(item.cartId)}
                  className="text-stone-300 hover:text-red-500 p-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout */}
        <div className="p-4 bg-white border-t border-stone-100">
          <div className="flex justify-between items-end mb-4">
            <span className="text-stone-500 font-bold uppercase tracking-wider text-sm">Total</span>
            <span className="text-3xl font-black text-stone-800">₹{ticketTotal.toFixed(2)}</span>
          </div>
          <button 
            onClick={submitOrder}
            disabled={ticket.length === 0}
            className={`w-full py-4 rounded-xl font-bold text-lg shadow-sm transition-all
              ${ticket.length === 0 ? 'bg-stone-200 text-stone-400 cursor-not-allowed' : 'bg-saffron text-mutton hover:bg-mutton hover:text-saffron hover:shadow-md'}`}
          >
            Send to Kitchen
          </button>
        </div>
      </div>

      {/* RIGHT: Menu Grid */}
      <div className="flex-1 flex flex-col h-full bg-stone-100">
        {/* Category Tabs */}
        <div className="bg-white px-4 py-3 border-b border-stone-200 flex overflow-x-auto hide-scrollbar gap-2 shadow-sm z-0">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full font-bold text-sm transition-colors border
                ${activeCategory === cat.id 
                  ? 'bg-mutton text-white border-mutton shadow-sm' 
                  : 'bg-white text-stone-600 border-stone-200 hover:border-mutton hover:text-mutton'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {displayedItems.map(item => (
              <button
                key={item.id}
                onClick={() => addToTicket(item)}
                className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 hover:border-saffron hover:shadow-md transition-all text-left flex flex-col active:scale-95"
              >
                <h3 className="font-bold text-stone-800 mb-2 leading-tight flex-grow">{item.name}</h3>
                <span className="text-mutton font-black bg-mutton/5 px-2 py-1 rounded-md text-sm self-start">₹{item.price}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
