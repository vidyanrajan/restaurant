'use client';
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import Carousel from "@/components/Carousel";

type MenuItem = {
  name: string;
  price: number;
  description?: string;
  tag?: string;
  image?: string;
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
      { name: "Special Mutton Thali", price: 350, description: "Rice, Mutton Curry (4 pcs), Dalma, Khatta, Chips, Salad.", image: "/images/MThaali.png" },
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
      { name: "Steam Rice (Plain)", price: 69, image: "/images/rice.png" },
      { name: "Butter Naan", price: 50 },
      { name: "Ghee Roti", price: 20, tag: "Evening" },
      { name: "Roti / Chakuli", price: 12, tag: "Evening" },
    ]
  }
];

export default function MenuPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-cream text-stone-900 pb-20 pt-24">
      
      {/* Menu Header - Reduced padding from py-16 to py-8 */}
      <div className="text-center py-8 bg-white border-b border-stone-200 shadow-sm">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-mutton mb-4 drop-shadow-sm">{t('ourMenu')}</h1>
        <div className="w-24 h-1 bg-saffron mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4 font-sans">
          {t('menuDesc')}
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-7xl mt-10">
        <div className="flex flex-col gap-12">
          {menuData.map((category, idx) => (
            <section key={idx} className="w-full">
              <h2 className="text-3xl font-serif font-bold text-mutton mb-6 border-b-2 border-saffron/30 pb-3 inline-block">
                {category.category}
              </h2>
              
              <Carousel>
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="min-w-[280px] md:min-w-[320px] max-w-[320px] bg-white rounded-xl shadow-sm hover:shadow-md border border-stone-100 overflow-hidden flex flex-col group snap-start flex-shrink-0 transition-all">
                    {/* Image Block */}
                    <div className="h-40 bg-stone-50 relative flex items-center justify-center border-b border-stone-100 overflow-hidden">
                      {item.image ? (
                        <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <div className="text-stone-300 flex flex-col items-center">
                          <svg className="w-8 h-8 mb-1 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                          <span className="text-[10px] uppercase tracking-widest font-bold">Image Coming Soon</span>
                        </div>
                      )}
                      
                      {item.tag && (
                        <div className="absolute top-2 right-2 bg-saffron text-spice text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wider z-10">
                          {item.tag}
                        </div>
                      )}
                    </div>
                    
                    {/* Content Block */}
                    <div className="p-4 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-2 gap-2">
                        <h3 className="text-lg font-bold text-stone-800 font-sans group-hover:text-mutton transition-colors leading-tight">
                          {item.name}
                        </h3>
                        <span className="text-lg font-bold text-mutton whitespace-nowrap bg-mutton/5 px-2 py-1 rounded">₹{item.price}</span>
                      </div>
                      {item.description && (
                        <p className="text-stone-500 text-sm leading-relaxed mt-auto">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </Carousel>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
