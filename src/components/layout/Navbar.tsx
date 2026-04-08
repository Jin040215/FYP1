import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm h-20">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-full">
        <div className="flex items-center gap-8">
          <span className="text-xl font-extrabold tracking-tighter text-blue-950 font-headline">
            {t('nav.title')}
          </span>
          <div className="hidden md:flex gap-6">
            <a className="text-slate-600 font-medium hover:text-blue-800 transition-all duration-300" href="/">{t('nav.home')}</a>
            <a className="text-slate-600 font-medium hover:text-blue-800 transition-all duration-300" href="#">{t('nav.about')}</a>
            <a className="text-slate-600 font-medium hover:text-blue-800 transition-all duration-300" href="#">{t('nav.contact')}</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-slate-100 rounded-full p-1 flex items-center gap-1">
            <button 
              onClick={() => setLanguage('en')}
              className={`px-4 py-1.5 rounded-full text-xs transition-all duration-200 ${language === 'en' ? 'font-bold bg-[#001e40] text-white' : 'font-semibold text-slate-600 hover:bg-slate-200'}`}
            >
              ENG
            </button>
            <button 
              onClick={() => setLanguage('ms')}
              className={`px-4 py-1.5 rounded-full text-xs transition-all duration-200 ${language === 'ms' ? 'font-bold bg-[#001e40] text-white' : 'font-semibold text-slate-600 hover:bg-slate-200'}`}
            >
              BM
            </button>
            <button 
              onClick={() => setLanguage('zh')}
              className={`px-4 py-1.5 rounded-full text-xs transition-all duration-200 ${language === 'zh' ? 'font-bold bg-[#001e40] text-white' : 'font-semibold text-slate-600 hover:bg-slate-200'}`}
            >
              CN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
