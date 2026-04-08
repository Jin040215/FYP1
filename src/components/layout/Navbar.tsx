import React from 'react';
import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm h-20">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-full">
        <div className="flex items-center gap-8">
          <span className="text-xl font-extrabold tracking-tighter text-blue-950 font-headline">
            UTS Course Finder
          </span>
          <div className="hidden md:flex gap-6">
            <a className="text-slate-600 font-medium hover:text-blue-800 transition-all duration-300" href="/">Home</a>
            <a className="text-slate-600 font-medium hover:text-blue-800 transition-all duration-300" href="#">About</a>
            <a className="text-slate-600 font-medium hover:text-blue-800 transition-all duration-300" href="#">Contact</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-slate-100 rounded-full p-1 flex items-center gap-1">
            <button className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#001e40] text-white transition-all duration-200">ENG</button>
            <button className="px-4 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-200 transition-all duration-200">BM</button>
            <button className="px-4 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-200 transition-all duration-200">CN</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
