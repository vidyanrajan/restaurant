import Link from "next/link";
import Image from "next/image";

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-cream text-stone-900 pb-20">
      {/* Simple Header */}
      <header className="bg-mutton text-cream py-6 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-serif font-bold tracking-wide text-saffron hover:text-white transition-colors">
            Mutton Raja
          </Link>
          <a 
            href="https://wa.me/918926114100" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-saffron text-mutton px-4 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors text-sm"
          >
            Order on WhatsApp
          </a>
        </div>
      </header>

      {/* Menu Header */}
      <div className="text-center py-16">
        <h1 className="text-5xl font-serif font-bold text-mutton mb-4">Our Menu</h1>
        <div className="w-24 h-1 bg-saffron mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
          Authentic Odia cuisine prepared fresh daily with traditional recipes and locally sourced spices.
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Category 1 */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-mutton mb-8 border-b-2 border-saffron/30 pb-2">Signature Thalis</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-mutton">Special Mutton Thali</h3>
                  <span className="text-lg font-bold text-spice">₹350</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">Rice, Mutton Curry (4 pcs), Dalma, Khatta, Chips, Salad</p>
              </div>
              <a href="https://wa.me/918926114100" className="text-sm font-bold text-saffron hover:text-mutton uppercase tracking-wider transition-colors">Order →</a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-mutton">Chicken Thali</h3>
                  <span className="text-lg font-bold text-spice">₹250</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">Rice, Chicken Curry (4 pcs), Dalma, Khatta, Chips, Salad</p>
              </div>
              <a href="https://wa.me/918926114100" className="text-sm font-bold text-saffron hover:text-mutton uppercase tracking-wider transition-colors">Order →</a>
            </div>
          </div>
        </section>

        {/* Category 2 */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-mutton mb-8 border-b-2 border-saffron/30 pb-2">Authentic Mains</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-mutton">Pakhala Bhata</h3>
                  <span className="text-lg font-bold text-spice">₹180</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">Traditional fermented rice served with roasted vegetables and badi chura.</p>
              </div>
              <a href="https://wa.me/918926114100" className="text-sm font-bold text-saffron hover:text-mutton uppercase tracking-wider transition-colors">Order →</a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-mutton">Machha Besara</h3>
                  <span className="text-lg font-bold text-spice">₹220</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">Fresh local fish cooked in a tangy mustard and garlic gravy.</p>
              </div>
              <a href="https://wa.me/918926114100" className="text-sm font-bold text-saffron hover:text-mutton uppercase tracking-wider transition-colors">Order →</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
