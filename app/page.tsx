import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-cream text-stone-900 overflow-hidden">
      {/* Navigation */}
      <header className="fixed w-full z-50 transition-all duration-300 bg-mutton/95 backdrop-blur-sm text-cream shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-3xl font-serif font-bold tracking-wide text-saffron drop-shadow-md">
            Mutton Raja
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
            <h2 className="text-4xl font-serif font-bold text-mutton mb-4">Our Specialities</h2>
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
          <h2 className="text-3xl font-serif font-bold mb-4 tracking-wider text-saffron">Mutton Raja</h2>
          <p className="text-saffron mb-8 font-serif italic">Where Tradition Meets Taste!</p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
            <div className="flex space-x-6">
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-saffron hover:text-mutton transition-all group" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-saffron hover:text-mutton transition-all group" aria-label="Instagram">
                <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-cream/80 font-sans">
              <Link href="#home" className="hover:text-saffron transition-colors">Home</Link>
              <Link href="#about" className="hover:text-saffron transition-colors">About</Link>
              <Link href="/menu" className="hover:text-saffron transition-colors">Menu</Link>
              <Link href="#contact" className="hover:text-saffron transition-colors">Contact</Link>
            </div>
          </div>
          
          <div className="border-t border-cream/20 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-cream/60">
            <p>&copy; {new Date().getFullYear()} Mutton Raja, Kalinga Nagar, Bhubaneswar. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="hover:text-saffron transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-saffron transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
