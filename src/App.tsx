/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Assessment from './pages/Assessment';
import PersonalInfo from './pages/PersonalInfo';
import Results from './pages/Results';
import { questions } from './data/questions';
import { calculateScores, getRecommendations } from './lib/scoring';
import { PersonalityScores, Recommendation, UserData } from './types';
import { useLanguage } from './contexts/LanguageContext';

type AppState = 'home' | 'assessment' | 'personal-info' | 'results';

export default function App() {
  const [state, setState] = useState<AppState>('home');
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [scores, setScores] = useState<PersonalityScores | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const { t } = useLanguage();

  const handleStart = () => {
    setState('assessment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAssessmentComplete = (finalAnswers: Record<number, number>) => {
    setAnswers(finalAnswers);
    const calculatedScores = calculateScores(finalAnswers, questions);
    setScores(calculatedScores);
    setState('personal-info');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [isLoading, setIsLoading] = useState(false);

  const handlePersonalInfoComplete = (data: UserData) => {
    setUserData(data);
    if (scores) {
      setIsLoading(true);
      const recs = getRecommendations(scores);
      setRecommendations(recs);
      
      // Simulate "AI Analysis" time
      setTimeout(() => {
        setIsLoading(false);
        setState('results');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 2000);
    }
  };

  const handleReset = () => {
    setState('home');
    setAnswers({});
    setScores(null);
    setUserData(null);
    setRecommendations([]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] font-body text-slate-900">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {isLoading ? (
          <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-blue-100 border-t-[#001e40] rounded-full mb-8"
            />
            <h2 className="text-2xl font-headline font-bold text-[#001e40] mb-4">{t('loading.title')}</h2>
            <p className="text-slate-500 max-w-xs mx-auto leading-relaxed">
              {t('loading.desc')}
            </p>
          </div>
        ) : (
          <>
            {state === 'home' && <Home onStart={handleStart} />}
            
            {state === 'assessment' && (
              <Assessment 
                onComplete={handleAssessmentComplete} 
                onBack={() => setState('home')} 
              />
            )}
            
            {state === 'personal-info' && (
              <PersonalInfo 
                onComplete={handlePersonalInfoComplete} 
                onBack={() => setState('assessment')} 
              />
            )}
            
            {state === 'results' && scores && userData && (
              <Results 
                scores={scores} 
                recommendations={recommendations} 
                userData={userData}
                onReset={handleReset}
              />
            )}
          </>
        )}
      </main>

      <Footer />

      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 -z-10 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[40rem] h-[40rem] bg-blue-50/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[35rem] h-[35rem] bg-blue-100/20 rounded-full blur-[100px]"></div>
      </div>
    </div>
  );
}

