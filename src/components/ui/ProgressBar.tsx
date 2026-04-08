import React from 'react';
import { motion } from 'motion/react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between items-end">
        <div className="space-y-1">
          <span className="text-[10px] font-semibold text-[#001e40] tracking-widest uppercase opacity-80">
            Step {current} of {total}
          </span>
          <h2 className="text-xl font-headline font-bold text-slate-900 tracking-tight">
            Assessment Progress
          </h2>
        </div>
        <span className="text-lg font-headline font-extrabold text-[#001e40]">
          {percentage}%
        </span>
      </div>
      <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-[#001e40] to-[#003366]"
        />
      </div>
    </div>
  );
}
