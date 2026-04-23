import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-cream text-stone-900 overflow-hidden">
      {/* Navigation */}
      <header className="fixed w-full z-50 transition-all duration-300 bg-mutton/95 backdrop-blur-sm text-cream shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold tracking-wider">
            MUTTON RAJA
          </div>
          <nav className="hidden md:flex space-x-8 font-sans font-medium">
            <Link href="#home" className="hover:text-saffron transition-colors">Home</Link>
            <Link href="#menu" className="hover:text-saffron transition-colors">Menu</Link>
            <Link href="#about" className="hover:text-saffron transition-colors">About</Link>
            <Link href="#contact" className="hover:text-saffron transition-colors">Contact</Link>
          </nav>
          <a 
            href="https://wa.me/918926114100" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-saffron text-mutton px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg"
          >
            Order Now
          </a>
        </div>
      </header>

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
            Where Tradition <br/>
            <span className="text-saffron">Meets Taste!</span>
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 mb-10 font-sans max-w-2xl mx-auto drop-shadow-md">
            Experience the authentic flavors of Odisha in the heart of Bhubaneswar. Famous for our tender mutton and traditional spices.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/918926114100" 
              className="bg-saffron text-mutton px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:scale-105 transition-all shadow-xl"
            >
              Order via WhatsApp
            </a>
            <Link 
              href="#menu" 
              className="bg-transparent border-2 border-cream text-cream px-8 py-4 rounded-full font-bold text-lg hover:bg-cream/10 transition-all shadow-lg"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="bg-mutton text-cream py-12 relative z-30 shadow-xl">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-saffron font-bold text-xl mb-2">Location</h3>
            <p>Near Tata Ariana Main Gate, Kalinga Nagar<br/>Bhubaneswar, 752054</p>
          </div>
          <div className="border-y md:border-y-0 md:border-x border-cream/20 py-4 md:py-0">
            <h3 className="text-saffron font-bold text-xl mb-2">Timings</h3>
            <p>12:00 Noon - 4:30 PM<br/>6:30 PM - 11:00 PM</p>
          </div>
          <div>
            <h3 className="text-saffron font-bold text-xl mb-2">Contact</h3>
            <p>+91 8926114100<br/>Order directly via WhatsApp</p>
          </div>
        </div>
      </section>

      {/* Menu Highlight Section */}
      <section id="menu" className="py-24 bg-cream relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-mutton mb-4">Our Specialties</h2>
            <div className="w-24 h-1 bg-saffron mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image src="/images/MThaali.png" alt="Mutton Thali" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-mutton mb-2">Special Mutton Thali</h3>
                <p className="text-gray-600 mb-4">Our signature dish featuring tender mutton curry, rice, dalma, and traditional Odia accompaniments.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-spice">₹350</span>
                  <a href="https://wa.me/918926114100" className="text-mutton font-bold hover:text-saffron transition-colors">Add to Order →</a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image src="/images/rice.png" alt="Pakhala Bhata" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-mutton mb-2">Pakhala Bhata</h3>
                <p className="text-gray-600 mb-4">Traditional fermented rice served with roasted vegetables, badi chura, and fish fry.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-spice">₹180</span>
                  <a href="https://wa.me/918926114100" className="text-mutton font-bold hover:text-saffron transition-colors">Add to Order →</a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image src="/images/dish3.png" alt="Machha Besara" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-mutton mb-2">Machha Besara</h3>
                <p className="text-gray-600 mb-4">Fresh local fish cooked in a tangy mustard gravy, an Odia delicacy you cannot miss.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-spice">₹220</span>
                  <a href="https://wa.me/918926114100" className="text-mutton font-bold hover:text-saffron transition-colors">Add to Order →</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/menu" className="inline-block border-2 border-mutton text-mutton px-8 py-3 rounded-full font-bold hover:bg-mutton hover:text-cream transition-colors">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/images/restaurant-interior.png" alt="Mutton Raja Interior" fill className="object-cover" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-serif font-bold text-mutton mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6 font-sans leading-relaxed">
              At Mutton Raja, we bring the authentic flavors of Odisha straight to your plate. Born from a passion for traditional cooking methods and heirloom recipes, our kitchen is a tribute to the rich culinary heritage of the region.
            </p>
            <p className="text-lg text-gray-700 mb-8 font-sans leading-relaxed">
              We carefully source our ingredients locally to ensure every dish, from our signature Mutton Curry to our comforting Dalma, tastes exactly like home.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-cream p-4 rounded-xl text-center border border-saffron/30">
                <div className="text-3xl font-bold text-spice mb-1">100%</div>
                <div className="text-sm font-bold text-mutton">Authentic Spices</div>
              </div>
              <div className="bg-cream p-4 rounded-xl text-center border border-saffron/30">
                <div className="text-3xl font-bold text-spice mb-1">Fresh</div>
                <div className="text-sm font-bold text-mutton">Daily Ingredients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-mutton text-cream py-12 border-t-4 border-saffron">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4 tracking-wider">MUTTON RAJA</h2>
          <p className="text-saffron mb-8 font-serif italic">Where Tradition Meets Taste!</p>
          <div className="flex justify-center space-x-6 mb-8">
            {/* Social Links Placeholders */}
            <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-saffron hover:text-mutton transition-all">FB</a>
            <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-saffron hover:text-mutton transition-all">IG</a>
            <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-saffron hover:text-mutton transition-all">WA</a>
          </div>
          <p className="text-sm text-cream/60">
            &copy; {new Date().getFullYear()} Mutton Raja, Kalinga Nagar, Bhubaneswar. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
