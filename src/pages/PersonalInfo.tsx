import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, UserCircle } from 'lucide-react';
import { UserData } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface PersonalInfoProps {
  onComplete: (data: UserData) => void;
  onBack: () => void;
}

const qualificationsList = [
  'SPM', 'STPM', 'Foundation', 'UEC', 'Diploma', 'Degree', 'O-Level', 'A-Level', 'Others'
];

export default function PersonalInfo({ onComplete, onBack }: PersonalInfoProps) {
  const [data, setData] = useState<UserData>({ age: '', qualification: '' });
  const { t } = useLanguage();

  const isComplete = data.age && data.qualification;

  return (
    <div className="max-w-2xl w-full mx-auto px-6 py-12 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl p-10 md:p-16 shadow-[0_40px_40px_-15px_rgba(0,30,64,0.04)] border border-slate-100 w-full"
      >
        <header className="mb-10 text-center">
          <div className="inline-flex p-3 bg-blue-50 rounded-full text-[#001e40] mb-4">
            <UserCircle size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#001e40] tracking-tight mb-3 font-headline">
            {t('personalInfo.title')}
          </h1>
          <p className="text-slate-500 leading-relaxed max-w-md mx-auto">
            {t('personalInfo.subtitle')}
          </p>
        </header>

        <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); onComplete(data); }}>
          <div className="space-y-2">
            <label className="block text-sm font-bold text-[#001e40] tracking-tight" htmlFor="age">
              {t('personalInfo.age')}
            </label>
            <input
              type="number"
              id="age"
              placeholder={t('personalInfo.agePlaceholder')}
              value={data.age}
              onChange={(e) => setData({ ...data, age: e.target.value })}
              className="w-full bg-slate-50 border-slate-100 rounded-lg px-5 py-4 focus:ring-2 focus:ring-blue-900/20 focus:border-[#001e40] text-slate-900 transition-all duration-300 outline-none"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold text-[#001e40] tracking-tight" htmlFor="qualification">
              {t('personalInfo.qualification')}
            </label>
            <select
              id="qualification"
              value={data.qualification}
              onChange={(e) => setData({ ...data, qualification: e.target.value })}
              className="w-full bg-slate-50 border-slate-100 rounded-lg px-5 py-4 focus:ring-2 focus:ring-blue-900/20 focus:border-[#001e40] text-slate-900 transition-all duration-300 outline-none appearance-none"
              required
            >
              <option value="" disabled>{t('personalInfo.qualificationPlaceholder')}</option>
              {qualificationsList.map((q) => (
                <option key={q} value={q}>{t(`personalInfo.qualifications.${q}`)}</option>
              ))}
            </select>
          </div>

          <div className="pt-6 flex flex-col gap-4">
            <button
              type="submit"
              disabled={!isComplete}
              className={`w-full py-4 px-8 rounded-lg font-bold tracking-tight shadow-lg transition-all duration-300 ${
                isComplete
                  ? 'bg-gradient-to-br from-[#001e40] to-[#003366] text-white shadow-blue-900/10 hover:shadow-blue-900/20 active:scale-[0.98]'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              {t('personalInfo.submit')}
            </button>
            <button
              type="button"
              onClick={onBack}
              className="flex items-center justify-center gap-2 text-slate-500 font-semibold text-sm hover:text-[#001e40] transition-colors py-2 group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              {t('personalInfo.back')}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
