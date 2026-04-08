import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, GraduationCap, Info } from 'lucide-react';
import { Recommendation } from '../../types';

interface CourseCardProps {
  recommendation: Recommendation;
  rank: number;
  isTop: boolean;
}

export const CourseCard: React.FC<CourseCardProps> = ({ recommendation, rank, isTop }) => {
  const [isExpanded, setIsExpanded] = useState(isTop);

  return (
    <motion.div
      layout
      className={`group bg-white rounded-xl transition-all duration-300 border border-slate-100 ${
        isTop 
          ? 'shadow-[0_40px_40px_rgba(0,30,64,0.06)] p-8' 
          : 'shadow-sm p-6 hover:bg-slate-50'
      }`}
    >
      <div className="flex justify-between items-start mb-6">
        <div className={`p-3 rounded-lg ${isTop ? 'bg-[#001e40] text-white' : 'bg-slate-100 text-[#001e40]'}`}>
          <GraduationCap size={isTop ? 28 : 24} />
        </div>
        <div className="text-right">
          <span className={`block font-headline font-extrabold text-[#001e40] ${isTop ? 'text-4xl' : 'text-2xl'}`}>
            {recommendation.matchPercentage}%
          </span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Suitability Match
          </span>
        </div>
      </div>

      <h3 className={`font-headline font-bold text-[#001e40] mb-1 ${isTop ? 'text-2xl' : 'text-xl'}`}>
        {recommendation.course}
      </h3>
      <p className="text-sm text-slate-500 mb-6">{recommendation.category}</p>

      <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden mb-6">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${recommendation.matchPercentage}%` }}
          className={`h-full ${isTop ? 'bg-gradient-to-r from-[#001e40] to-[#003366]' : 'bg-slate-400'}`}
        />
      </div>

      {isTop && (
        <div className="space-y-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-[#001e40] font-bold text-sm hover:underline transition-all"
          >
            <Info size={16} />
            {isExpanded ? 'Hide Matching Logic' : 'Why this fits you?'}
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-slate-100 space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed italic">
                    "Your profile suggests a strong alignment with the core requirements of this programme. 
                    The combination of your traits makes you a natural fit for the challenges and opportunities 
                    presented in {recommendation.course}."
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-slate-50 rounded-lg border-l-4 border-[#001e40]">
                      <h4 className="text-[10px] font-bold text-[#001e40] uppercase tracking-tighter mb-1">
                        Trait Synergy
                      </h4>
                      <p className="text-xs text-slate-500">
                        Your scores in key areas like Openness and Conscientiousness mirror the ideal profile for this field.
                      </p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg border-l-4 border-[#003366]">
                      <h4 className="text-[10px] font-bold text-[#001e40] uppercase tracking-tighter mb-1">
                        Academic Potential
                      </h4>
                      <p className="text-xs text-slate-500">
                        The methodical approach suggested by your profile is highly valued in {recommendation.category}.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
}
