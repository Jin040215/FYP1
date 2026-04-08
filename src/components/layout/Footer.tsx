import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full mt-auto border-t border-slate-200/50 bg-slate-50">
      <div className="py-16 px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="space-y-4">
          <span className="font-headline font-bold text-blue-950 text-lg">UTS Course Finder</span>
          <p className="font-body text-sm leading-relaxed text-slate-500 max-w-xs">
            Empowering the next generation of scholars through personalized academic guidance and data-driven discovery.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-12 gap-y-6">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-900">Social</span>
            <a className="text-slate-500 hover:text-blue-700 transition-colors text-sm" href="#">Facebook</a>
            <a className="text-slate-500 hover:text-blue-700 transition-colors text-sm" href="#">LinkedIn</a>
            <a className="text-slate-500 hover:text-blue-700 transition-colors text-sm" href="#">Instagram</a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-900">Help</span>
            <a className="text-slate-500 hover:text-blue-700 transition-colors text-sm" href="#">Contact Support</a>
            <a className="text-slate-500 hover:text-blue-700 transition-colors text-sm" href="#">Privacy Policy</a>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-200/30 w-full md:w-auto md:border-none">
          <p className="font-body text-sm leading-relaxed text-slate-500">
            © 2026 University of Technology Sarawak. Intellectual Sanctuary.
          </p>
        </div>
      </div>
    </footer>
  );
}
