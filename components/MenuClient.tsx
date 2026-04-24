'use client';

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import Carousel from "@/components/Carousel";

type MenuItem = {
  id: string;
  name: string;
  price: number;
  description?: string;
  tag?: string;
  image_url?: string;
  category_id: string;
};

type MenuCategory = {
  category: string;
  items: MenuItem[];
};

export default function MenuClient({ menuData }: { menuData: MenuCategory[] }) {
  const { t } = useLanguage();

  return (
    <>
      <div className="text-center py-8 bg-white border-b border-stone-200 shadow-sm">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-mutton mb-4 drop-shadow-sm">{t('ourMenu')}</h1>
        <div className="w-24 h-1 bg-saffron mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4 font-sans">
          {t('menuDesc')}
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-7xl mt-10">
        <div className="flex flex-col gap-12">
          {menuData.length === 0 ? (
            <div className="text-center text-stone-500 py-12">No menu items available currently.</div>
          ) : (
            menuData.map((category, idx) => (
              <section key={idx} className="w-full">
                <h2 className="text-3xl font-serif font-bold text-mutton mb-6 border-b-2 border-saffron/30 pb-3 inline-block">
                  {category.category}
                </h2>
                
                <Carousel>
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="min-w-[280px] md:min-w-[320px] max-w-[320px] bg-white rounded-xl shadow-sm hover:shadow-md border border-stone-100 overflow-hidden flex flex-col group snap-start flex-shrink-0 transition-all">
                      <div className="h-40 bg-stone-50 relative flex items-center justify-center border-b border-stone-100 overflow-hidden">
                        {item.image_url ? (
                          <Image src={item.image_url} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
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
            ))
          )}
        </div>
      </div>
    </>
  );
}
