'use client';
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="flex min-h-screen flex-col bg-cream text-stone-900 overflow-hidden">
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
          <Image
            src="/images/banner1.png"
            alt="Mutton Raja Special Thali"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-cream mb-6 drop-shadow-lg leading-tight">
            {t('heroTitleLine1')} <br/>
            <span className="text-saffron">{t('heroTitleLine2')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 mb-10 font-sans max-w-2xl mx-auto drop-shadow-md">
            {t('heroDesc')}
          </p>
          <div className="flex justify-center">
            <Link 
              href="/menu" 
              className="bg-saffron text-mutton border-2 border-saffron px-10 py-4 rounded-full font-bold text-xl hover:bg-yellow-400 hover:scale-105 transition-all shadow-xl"
            >
              {t('viewMenu')}
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info Strip */}
      <section className="bg-mutton text-cream py-8 relative z-30 shadow-xl">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 text-center max-w-4xl">
          <div className="border-b md:border-b-0 md:border-r border-cream/20 pb-4 md:pb-0">
            <h3 className="text-saffron font-bold text-xl mb-2">Location</h3>
            <p>Near Tata Ariana Main Gate, Kalinga Nagar, Bhubaneswar, 752054</p>
          </div>
          <div>
            <h3 className="text-saffron font-bold text-xl mb-2">Timings</h3>
            <p>12:00 Noon - 4:30 PM &nbsp;|&nbsp; 6:30 PM - 11:00 PM</p>
          </div>
        </div>
      </section>

      {/* Menu Highlight Section */}
      <section id="menu" className="py-24 bg-cream relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-mutton mb-4">{t('ourMenu')}</h2>
            <div className="w-24 h-1 bg-saffron mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 border border-stone-100">
              <div className="relative h-64 overflow-hidden">
                <Image src="/images/MThaali.png" alt="Mutton Thali" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-mutton mb-2">Special Mutton Thali</h3>
                <p className="text-gray-600 mb-4">Our signature dish featuring tender mutton curry, rice, dalma, and traditional Odia accompaniments.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 border border-stone-100">
              <div className="relative h-64 overflow-hidden">
                <Image src="/images/rice.png" alt="Pakhala Bhata" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-mutton mb-2">Pakhala Bhata</h3>
                <p className="text-gray-600 mb-4">Traditional fermented rice served with roasted vegetables, badi chura, and fish fry.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 border border-stone-100 flex flex-col justify-between">
              <div>
                <div className="bg-mutton/5 w-full h-16 flex items-center justify-center border-b border-mutton/10">
                  <span className="text-saffron font-bold text-lg uppercase tracking-widest">{t('bestInBhubaneswar')}</span>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-serif font-bold text-mutton mb-4 leading-relaxed">
                    {t('bestInBhubaneswarCombo')}
                  </h3>
                  <p className="text-gray-600">The most legendary pairing in town. Authentic, slow-cooked village-style mutton with fragrant baghara rice.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Link href="/menu" className="inline-block border-2 border-mutton text-mutton px-10 py-4 rounded-full font-bold hover:bg-mutton hover:text-cream transition-colors text-lg">
              {t('viewMenu')}
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white border-t border-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-mutton mb-4">{t('ourStory')}</h2>
            <div className="w-24 h-1 bg-saffron mx-auto"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image Grid / Carousel Concept */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg col-span-2">
                <Image src="/images/restuarant-interior.png" alt="Mutton Raja Interior" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-md">
                <Image src="/images/restaurant view.png" alt="Mutton Raja Exterior" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-md">
                <Image src="/images/tableview.png" alt="Mutton Raja Table" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>

            <div className="lg:w-1/2">
              <p className="text-lg text-gray-700 mb-6 font-sans leading-relaxed">
                {t('storyDesc1')}
              </p>
              <div className="bg-cream/50 border-l-4 border-saffron p-6 my-8 rounded-r-xl">
                <p className="text-xl font-serif font-bold text-mutton italic">
                  "{t('secretSpotText')}"
                </p>
              </div>
              <p className="text-lg text-gray-700 mb-10 font-sans leading-relaxed">
                {t('storyDesc2')}
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white shadow-md p-6 rounded-xl text-center border border-stone-100">
                  <div className="text-4xl font-bold text-spice mb-2">100%</div>
                  <div className="text-sm font-bold text-mutton uppercase tracking-wider">{t('authSpices')}</div>
                </div>
                <div className="bg-white shadow-md p-6 rounded-xl text-center border border-stone-100">
                  <div className="text-4xl font-bold text-spice mb-2">Fresh</div>
                  <div className="text-sm font-bold text-mutton uppercase tracking-wider">{t('freshIngred')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-cream border-t border-stone-100">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-serif font-bold text-mutton mb-4">{t('Contact')}</h2>
          <div className="w-24 h-1 bg-saffron mx-auto mb-10"></div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100">
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                <h4 className="font-bold text-mutton text-xl mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-saffron" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  Visit Us
                </h4>
                <p className="text-gray-700 ml-8 text-lg">Near Tata Ariana Main Gate,<br/>Kalinga Nagar, Bhubaneswar, 752054</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                <h4 className="font-bold text-mutton text-xl mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-saffron" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Hours
                </h4>
                <p className="text-gray-700 ml-8 text-lg">Lunch: 12:00 Noon - 4:30 PM<br/>Dinner: 6:30 PM - 11:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
