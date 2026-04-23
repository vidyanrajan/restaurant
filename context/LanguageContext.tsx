'use client';
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'or';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    heroTitleLine1: "Where Tradition",
    heroTitleLine2: "Meets Taste!",
    heroDesc: "Experience the authentic flavors of Odisha and beyond in the heart of Bhubaneswar. Famous for our tender mutton and traditional spices.",
    viewMenu: "View Menu",
    ourStory: "Our Story",
    storyDesc1: "At Mutton Raja, we bring the authentic flavors of Odisha and beyond straight to your plate. Born from a passion for traditional cooking methods and heirloom recipes, our kitchen is a tribute to the rich culinary heritage of the region.",
    storyDesc2: "We carefully source our ingredients locally to ensure every dish, from our signature Mutton Curry to our comforting Dalma, tastes exactly like home.",
    secretSpotText: "Known as a hidden gem for authentic, slow-cooked village-style mutton.",
    bestInBhubaneswar: "Best in Bhubaneswar",
    bestInBhubaneswarCombo: "Baghara Rice & Similipal Mutton Bhaja Combo",
    authSpices: "Authentic Spices",
    freshIngred: "Daily Ingredients",
    ourMenu: "Our Menu",
    menuDesc: "Authentic cuisine prepared fresh daily with traditional recipes and locally sourced spices.",
  },
  or: {
    heroTitleLine1: "ଯେଉଁଠି ପରମ୍ପରା",
    heroTitleLine2: "ସ୍ୱାଦକୁ ଭେଟେ!",
    heroDesc: "ଭୁବନେଶ୍ୱରର ହୃଦୟରେ ଓଡ଼ିଶା ଏବଂ ଏହାର ବାହାରେ ଥିବା ପ୍ରାମାଣିକ ସ୍ୱାଦର ଅନୁଭବ କରନ୍ତୁ। ଆମର ନରମ ମାଂସ (ମଟନ) ଏବଂ ପାରମ୍ପରିକ ମସଲା ପାଇଁ ଆମେ ପ୍ରସିଦ୍ଧ।",
    viewMenu: "ମେନୁ ଦେଖନ୍ତୁ",
    ourStory: "ଆମ କାହାଣୀ",
    storyDesc1: "ମଟନ୍ ରାଜାରେ, ଆମେ ଓଡ଼ିଶା ଏବଂ ଏହାର ବାହାରେ ଥିବା ପ୍ରାମାଣିକ ସ୍ୱାଦକୁ ସିଧାସଳଖ ଆପଣଙ୍କ ପାଖକୁ ଆଣୁ। ପାରମ୍ପରିକ ରନ୍ଧା ପଦ୍ଧତି ଏବଂ ପୁରୁଣା ରେସିପି ପ୍ରତି ଥିବା ଆଗ୍ରହରୁ ଜନ୍ମିତ, ଆମ ରୋଷେଇ ଘର ହେଉଛି ଅଞ୍ଚଳର ସମୃଦ୍ଧ ରୋଷେଇ ଐତିହ୍ୟ ପ୍ରତି ଏକ ଶ୍ରଦ୍ଧାଞ୍ଜଳି।",
    storyDesc2: "ଆମର ପ୍ରସିଦ୍ଧ ମଟନ୍ ତରକାରୀଠାରୁ ଆରମ୍ଭ କରି ଡାଲମା ପର୍ଯ୍ୟନ୍ତ ପ୍ରତ୍ୟେକ ବ୍ୟଞ୍ଜନ ଘର ପରି ସ୍ୱାଦିଷ୍ଟ ବୋଲି ନିଶ୍ଚିତ କରିବାକୁ ଆମେ ଆମର ସାମଗ୍ରୀ ସ୍ଥାନୀୟ ବଜାରରୁ ଯତ୍ନର ସହ ସଂଗ୍ରହ କରୁ।",
    secretSpotText: "ପ୍ରାମାଣିକ, ଗାଁ ଶୈଳୀର ମଟନ୍ ପାଇଁ ଏକ ଲୁକ୍କାୟିତ ରତ୍ନ ଭାବରେ ପରିଚିତ।",
    bestInBhubaneswar: "ଭୁବନେଶ୍ୱରର ଶ୍ରେଷ୍ଠ",
    bestInBhubaneswarCombo: "ବଘରା ଭାତ ଏବଂ ଶିମିଳିପାଳ ମଟନ୍ ଭাজা କମ୍ବୋ",
    authSpices: "ପ୍ରାମାଣିକ ମସଲା",
    freshIngred: "ଦୈନନ୍ଦିନ ସାମଗ୍ରୀ",
    ourMenu: "ଆମ ମେନୁ",
    menuDesc: "ପାରମ୍ପରିକ ରେସିପି ଏବଂ ସ୍ଥାନୀୟ ମସଲା ସହିତ ପ୍ରତିଦିନ ସତେଜ ପ୍ରସ୍ତୁତ ପ୍ରାମାଣିକ ଖାଦ୍ୟ।",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'or' : 'en');
  };

  const t = (key: string): string => {
    // @ts-ignore
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
