import Link from "next/link";
import Image from "next/image";

type MenuItem = {
  name: string;
  price: number;
  description?: string;
  tag?: string;
};

type MenuCategory = {
  category: string;
  items: MenuItem[];
};

const menuData: MenuCategory[] = [
  {
    category: "Specials & Starters",
    items: [
      { name: "Nimba Phula Bhaja", price: 49, description: "Made with the flowers of neem tree. Seasonally available.", tag: "Seasonal" },
      { name: "Kakharu Phula Bhaja", price: 29, description: "Yellow pumpkin flower coated with a spiced batter and then shallow-fried. Seasonally available.", tag: "Seasonal" },
      { name: "Badhi Chura", price: 29, description: "Coarse mixture of badi, onion, garlic, green chilli along with mustard oil." },
      { name: "Chakuli Mutton", price: 199, description: "Chakuli (made with fermented rice, lentil batter) and served with mutton curry.", tag: "Evening" },
    ]
  },
  {
    category: "Signature Curries & Thalis",
    items: [
      { name: "Similipal Mutton Bhaja", price: 399, description: "Our signature tender mutton bhaja." },
      { name: "Mutton Curry", price: 299, description: "Authentic Odia style mutton curry." },
      { name: "Desi Chicken Kasa", price: 329, description: "Spicy and dry country chicken preparation." },
      { name: "Special Mutton Thali", price: 350, description: "Rice, Mutton Curry (4 pcs), Dalma, Khatta, Chips, Salad." },
      { name: "Chicken Thali", price: 250, description: "Rice, Chicken Curry (4 pcs), Dalma, Khatta, Chips, Salad." },
    ]
  },
  {
    category: "Seafood Specials",
    items: [
      { name: "Chilika Crab Masala", price: 399, description: "Fresh Chilika crabs in traditional masala." },
      { name: "Chilli Crab", price: 389, description: "Flavorful and iconic. Chilika crabs stir-fried in a savory, slightly sweet, and spicy tomato and chili-based sauce." },
      { name: "Bagda Chingri Masala", price: 379, description: "Tiger prawns cooked in a rich, spicy gravy." },
      { name: "Bhapa Illish", price: 489, description: "Hilsa fish steamed with pungent mustard paste." },
      { name: "Pabda Fish Curry", price: 249, description: "Delicate Pabda fish in a light, flavorful curry." },
    ]
  },
  {
    category: "Biryani & Pulao",
    items: [
      { name: "Mutton Biryani", price: 349, description: "Made with basmati rice, goat meat (khasi manso) and whole spices. Served with raita." },
      { name: "Mutton Pulao", price: 329, description: "Rich, savory taste with tender mutton pieces and fragrant rice. Served with raita, salad and pickles.", tag: "Wednesday" },
      { name: "Paneer Biryani", price: 229, description: "Made with aromatic basmati rice, indian cottage cheese, and a blend of spices." },
      { name: "Mix Veg Biryani", price: 149, description: "Made with aromatic basmati rice, mixed vegetables, and a blend of spices." },
    ]
  },
  {
    category: "Tadka",
    items: [
      { name: "Double Egg Tadka", price: 129, description: "Double egg cooked with a variety of aromatic spices and herbs. Dhaba style." },
      { name: "Single Egg Tadka", price: 119, description: "Single egg cooked with a variety of aromatic spices and herbs. Dhaba style." },
    ]
  },
  {
    category: "Breads & Rice",
    items: [
      { name: "Baghara Rice", price: 119 },
      { name: "Steam Rice (Basmati)", price: 109 },
      { name: "Steam Rice (Plain)", price: 69 },
      { name: "Butter Naan", price: 50 },
      { name: "Ghee Roti", price: 20, tag: "Evening" },
      { name: "Roti / Chakuli", price: 12, tag: "Evening" },
    ]
  }
];

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-cream text-stone-900 pb-20">
      {/* Simple Header */}
      <header className="bg-mutton text-cream py-6 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-serif font-bold tracking-wide text-saffron hover:text-white transition-colors">
            Mutton Raja
          </Link>
          <a 
            href="https://wa.me/918926114100" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-saffron text-mutton px-4 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors text-sm shadow-lg"
          >
            Order on WhatsApp
          </a>
        </div>
      </header>

      {/* Menu Header */}
      <div className="text-center py-16 bg-white border-b border-stone-200 shadow-sm">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-mutton mb-4 drop-shadow-sm">Our Menu</h1>
        <div className="w-24 h-1 bg-saffron mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4 font-sans">
          Authentic Odia cuisine prepared fresh daily with traditional recipes and locally sourced spices.
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-5xl mt-12">
        <div className="grid gap-12 lg:grid-cols-2">
          {menuData.map((category, idx) => (
            <section key={idx} className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-stone-100">
              <h2 className="text-3xl font-serif font-bold text-mutton mb-6 border-b-2 border-saffron/30 pb-3 flex items-center">
                {category.category}
              </h2>
              
              <div className="space-y-6">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="group">
                    <div className="flex justify-between items-start mb-1 gap-4">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold text-stone-800 font-sans group-hover:text-mutton transition-colors">
                          {item.name}
                        </h3>
                        {item.tag && (
                          <span className="text-xs font-bold bg-saffron/20 text-spice px-2 py-1 rounded-md uppercase tracking-wider">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="hidden sm:block flex-grow border-b border-dotted border-stone-300"></div>
                        <span className="text-xl font-bold text-mutton whitespace-nowrap">₹{item.price}</span>
                      </div>
                    </div>
                    {item.description && (
                      <p className="text-stone-500 text-sm md:text-base leading-relaxed max-w-[85%]">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <a 
              href="https://wa.me/918926114100" 
              className="inline-block bg-mutton text-saffron px-10 py-4 rounded-full font-bold text-xl hover:bg-mutton/90 hover:scale-105 transition-all shadow-xl border-2 border-saffron"
            >
              Ready to Order? Message Us!
            </a>
            <p className="mt-4 text-stone-500 font-medium">Available on Swiggy and Zomato</p>
        </div>
      </div>
    </main>
  );
}
