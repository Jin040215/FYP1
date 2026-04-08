import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Brain, Target, BarChart3, GraduationCap } from 'lucide-react';

interface HomeProps {
  onStart: () => void;
}

export default function Home({ onStart }: HomeProps) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/uts-campus/1920/1080?blur=4"
            alt="UTS Campus"
            className="w-full h-full object-cover opacity-10 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-8 bg-blue-50 px-4 py-1.5 rounded-full"
          >
            <GraduationCap className="text-[#001e40] w-4 h-4" />
            <span className="text-[#001e40] text-[10px] font-bold tracking-widest uppercase">
              Academic Excellence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#001e40] mb-8 leading-tight font-headline"
          >
            UTS Course <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001e40] to-[#003366]">
              Recommendation System
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-body leading-relaxed"
          >
            Discover your academic future through our intelligent mapping system. We align your personal strengths with the intellectual sanctuary of University of Technology Sarawak.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-6 justify-center"
          >
            <button
              onClick={onStart}
              className="group relative px-10 py-5 bg-gradient-to-br from-[#001e40] to-[#003366] text-white rounded-xl font-bold tracking-tight text-lg shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Personality Test
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <a href="#" className="text-[#001e40] font-bold hover:underline underline-offset-8 transition-all">
              Browse Courses Manually
            </a>
          </motion.div>
        </div>
      </section>

      {/* Big Five Explanation */}
      <section className="max-w-7xl mx-auto w-full px-8 pb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-headline font-bold text-[#001e40] mb-4">The Big Five Model</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Our assessment uses the scientifically validated Big Five Personality Traits to map your cognitive profile to the ideal academic path.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
              <Brain className="text-[#001e40]" />
            </div>
            <h3 className="text-xl font-bold text-[#001e40] mb-3">Psychometric Analysis</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Advanced cognitive mapping to match your personality traits with career pathways.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
              <Target className="text-[#001e40]" />
            </div>
            <h3 className="text-xl font-bold text-[#001e40] mb-3">Precision Matching</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Direct alignment with UTS's diverse academic programmes and Sarawak's industrial landscape.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
              <BarChart3 className="text-[#001e40]" />
            </div>
            <h3 className="text-xl font-bold text-[#001e40] mb-3">Data-Driven Paths</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Recommendations based on mathematical similarity between your profile and course requirements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
