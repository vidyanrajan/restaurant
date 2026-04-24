import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-stone-50 p-6">
      <header className="flex justify-between items-center mb-8 bg-white p-4 rounded-xl shadow-sm max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-mutton font-serif">Admin Portal</h1>
      </header>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-bold text-stone-800 mb-6">Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <Link href="/admin/menu" className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 hover:border-saffron hover:shadow-md transition-all group flex flex-col">
            <div className="w-12 h-12 bg-mutton/10 rounded-lg flex items-center justify-center text-mutton mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            </div>
            <h3 className="text-lg font-bold text-stone-800 mb-2">Menu Manager</h3>
            <p className="text-stone-500 text-sm flex-grow">Add new dishes, update prices, and manage categories.</p>
            <div className="text-saffron font-bold text-sm mt-4 flex items-center gap-1">Manage <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></div>
          </Link>

          <div className="bg-stone-200 p-6 rounded-xl shadow-sm border border-stone-300 opacity-60 flex flex-col">
            <div className="w-12 h-12 bg-stone-300 rounded-lg flex items-center justify-center text-stone-500 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            </div>
            <h3 className="text-lg font-bold text-stone-800 mb-2">Sales Analytics</h3>
            <p className="text-stone-500 text-sm flex-grow">Coming in Phase 3C.</p>
          </div>

          <div className="bg-stone-200 p-6 rounded-xl shadow-sm border border-stone-300 opacity-60 flex flex-col">
            <div className="w-12 h-12 bg-stone-300 rounded-lg flex items-center justify-center text-stone-500 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
            </div>
            <h3 className="text-lg font-bold text-stone-800 mb-2">Inventory Manager</h3>
            <p className="text-stone-500 text-sm flex-grow">Coming in Phase 3C.</p>
          </div>

        </div>
      </div>
    </div>
  )
}
