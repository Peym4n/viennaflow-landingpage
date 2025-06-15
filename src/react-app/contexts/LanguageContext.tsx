import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { Language } from '../types'; // Assuming Language type is in types.ts
import { translations } from '../translations'; // To get default translations

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.en; // Represents the translations for the current language
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const storedLang = localStorage.getItem('viennaflow-lang') as Language;
    return storedLang && (storedLang === 'en' || storedLang === 'de') ? storedLang : 'en';
  });

  const [t, setTState] = useState(translations[lang]);

  useEffect(() => {
    localStorage.setItem('viennaflow-lang', lang);
    setTState(translations[lang]);
  }, [lang]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
