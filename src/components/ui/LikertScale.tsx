import React from 'react';
import { motion } from 'motion/react';
import { Frown, Meh, Smile, SmilePlus, Angry } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface LikertScaleProps {
  value: number;
  onChange: (value: number) => void;
}

const options = [
  { value: 1, icon: Angry },
  { value: 2, icon: Frown },
  { value: 3, icon: Meh },
  { value: 4, icon: Smile },
  { value: 5, icon: SmilePlus },
];

export default function LikertScale({ value, onChange }: LikertScaleProps) {
  const { t } = useLanguage();

  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 px-4">
      {options.map((option) => {
        const Icon = option.icon;
        const isActive = value === option.value;

        return (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className="flex flex-col items-center gap-4 group cursor-pointer w-24 focus:outline-none"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                isActive
                  ? 'bg-[#001e40] border-[#001e40] text-white shadow-lg shadow-blue-900/20'
                  : 'bg-slate-100 border-transparent group-hover:border-blue-900/30 text-slate-500 group-hover:text-blue-900'
              }`}
            >
              <Icon size={28} />
            </motion.div>
            <span
              className={`text-[10px] font-bold tracking-tight leading-none transition-colors ${
                isActive ? 'text-[#001e40]' : 'text-slate-500 group-hover:text-blue-900'
              }`}
            >
              {t(`assessment.options.${option.value}`)}
            </span>
          </button>
        );
      })}
    </div>
  );
}
