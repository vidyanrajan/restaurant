'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-mutton/95 backdrop-blur-sm text-cream shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 relative rounded-full overflow-hidden border-2 border-saffron/50">
            <Image src="/images/logo.png" alt="Mutton Raja Logo" fill className="object-cover" />
          </div>
          <div className="text-3xl font-serif font-bold tracking-wide text-saffron drop-shadow-md">
            Mutton Raja
          </div>
        </Link>
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex space-x-8 font-sans font-medium">
            <Link href="/#home" className="hover:text-saffron transition-colors">{t('Home')}</Link>
            <Link href="/menu" className="hover:text-saffron transition-colors">{t('ourMenu')}</Link>
            <Link href="/#about" className="hover:text-saffron transition-colors">{t('ourStory')}</Link>
            <Link href="/#contact" className="hover:text-saffron transition-colors">{t('Contact')}</Link>
          </nav>
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 bg-saffron/20 border border-saffron/50 text-saffron px-3 py-1.5 rounded-full text-sm font-bold hover:bg-saffron hover:text-mutton transition-colors"
          >
            {language === 'en' ? 'ଓଡ଼ିଆ' : 'English'}
          </button>
        </div>
      </div>
    </header>
  );
}
