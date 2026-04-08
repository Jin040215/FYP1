import React from 'react';
import { motion } from 'motion/react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import { RefreshCcw, Sparkles, Download } from 'lucide-react';
import { PersonalityScores, Recommendation, UserData } from '../types';
import { CourseCard } from '../components/ui/CourseCard';

interface ResultsProps {
  scores: PersonalityScores;
  recommendations: Recommendation[];
  userData: UserData;
  onReset: () => void;
}

export default function Results({ scores, recommendations, userData, onReset }: ResultsProps) {
  const radarData = [
    { trait: 'Openness', value: scores.O, full: 50 },
    { trait: 'Conscientiousness', value: scores.C, full: 50 },
    { trait: 'Extraversion', value: scores.E, full: 50 },
    { trait: 'Agreeableness', value: scores.A, full: 50 },
    { trait: 'Neuroticism', value: scores.N, full: 50 },
  ];

  const topThree = recommendations.slice(0, 3);
  const others = recommendations.slice(3);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-blue-50 text-[#001e40] px-3 py-1 rounded-full text-[10px] font-bold tracking-widest flex items-center gap-2">
            <Sparkles size={12} />
            ANALYSIS COMPLETE
          </span>
          <div className="h-[1px] flex-grow bg-slate-100"></div>
        </div>
        <h1 className="text-4xl md:text-6xl font-headline font-extrabold text-[#001e40] tracking-tighter mb-4 leading-tight">
          Your Academic <br />
          <span className="text-blue-600">Sanctuary Awaits.</span>
        </h1>
        <p className="text-slate-500 max-w-2xl text-lg leading-relaxed">
          Based on your cognitive profile as a {userData.age}-year-old {userData.qualification} leaver, 
          we have curated a selection of pathways at UTS that align with your natural strengths.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Personality Profile */}
        <div className="lg:col-span-5 space-y-8">
          <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-xl font-headline font-bold text-[#001e40] mb-8">Personality Profile</h2>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis dataKey="trait" tick={{ fill: '#64748b', fontSize: 10, fontWeight: 600 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 50]} tick={false} axisLine={false} />
                  <Radar
                    name="Your Profile"
                    dataKey="value"
                    stroke="#001e40"
                    fill="#001e40"
                    fillOpacity={0.1}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {radarData.map((d) => (
                <div key={d.trait} className="space-y-1">
                  <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
                    <span>{d.trait}</span>
                    <span>{d.value}/50</span>
                  </div>
                  <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#001e40]" 
                      style={{ width: `${(d.value / 50) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="bg-[#001e40] text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-headline font-bold mb-4">The Verdict</h3>
            <p className="text-blue-100 leading-relaxed mb-6 italic font-medium opacity-90">
              "Your unique combination of traits suggests a high potential for success in structured, 
              intellectually demanding environments. You thrive when balancing analytical rigor with 
              creative problem-solving."
            </p>
            <button className="w-full py-4 bg-white text-[#001e40] font-bold rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
              Download Full Report
              <Download size={18} />
            </button>
          </div>
        </div>

        {/* Right Column: Recommendations */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex justify-between items-center px-2">
            <h2 className="font-headline text-xl font-bold text-[#001e40]">Top Recommendations</h2>
            <button 
              onClick={onReset}
              className="text-sm font-bold text-slate-400 hover:text-[#001e40] flex items-center gap-2 transition-colors"
            >
              <RefreshCcw size={14} />
              Retake Test
            </button>
          </div>

          <div className="space-y-6">
            {topThree.map((rec, index) => (
              <CourseCard 
                key={rec.course} 
                recommendation={rec} 
                rank={index + 1} 
                isTop={index === 0} 
              />
            ))}
          </div>

          <div className="pt-8">
            <h3 className="font-headline text-lg font-bold text-[#001e40] mb-6 px-2">Other Suitable Programmes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {others.map((rec) => (
                <div 
                  key={rec.course}
                  className="p-4 bg-white rounded-lg border border-slate-100 flex justify-between items-center hover:bg-slate-50 transition-colors"
                >
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-[#001e40] line-clamp-1">{rec.course}</h4>
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">{rec.category}</p>
                  </div>
                  <span className="text-sm font-extrabold text-blue-600">{rec.matchPercentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
