import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Brain } from 'lucide-react';
import { questions } from '../data/questions';
import LikertScale from '../components/ui/LikertScale';
import ProgressBar from '../components/ui/ProgressBar';
import { useLanguage } from '../contexts/LanguageContext';

interface AssessmentProps {
  onComplete: (answers: Record<number, number>) => void;
  onBack: () => void;
}

const QUESTIONS_PER_PAGE = 5;

export default function Assessment({ onComplete, onBack }: AssessmentProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const { t, language } = useLanguage();

  const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);
  const currentQuestions = questions.slice(
    currentPage * QUESTIONS_PER_PAGE,
    (currentPage + 1) * QUESTIONS_PER_PAGE
  );

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onComplete(answers);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onBack();
    }
  };

  const isPageComplete = currentQuestions.every((q) => answers[q.id] !== undefined);

  // Helper to get translated question text
  const getQuestionText = (id: number, defaultText: string) => {
    const translated = t(`questions.${id}`);
    return translated !== `questions.${id}` ? translated : defaultText;
  };

  return (
    <div className="max-w-4xl w-full mx-auto px-6 py-12">
      <ProgressBar current={Object.keys(answers).length} total={questions.length} />

      <div className="mt-16 space-y-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-16"
          >
            {currentQuestions.map((question, index) => (
              <section
                key={question.id}
                className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-slate-100 relative overflow-hidden"
              >
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl"></div>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">
                    {t('assessment.question')} {currentPage * QUESTIONS_PER_PAGE + index + 1}
                  </span>
                  <h3 className="text-xl md:text-2xl font-headline font-bold text-[#001e40] leading-snug mb-12 max-w-2xl">
                    "{getQuestionText(question.id, question.text)}"
                  </h3>
                  <LikertScale
                    value={answers[question.id]}
                    onChange={(val) => handleAnswer(question.id, val)}
                  />
                </div>
              </section>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between items-center pt-8">
          <button
            onClick={handlePrev}
            className="flex items-center gap-2 px-8 py-4 rounded-lg font-headline font-bold text-slate-500 hover:text-[#001e40] transition-all duration-200"
          >
            <ArrowLeft size={20} />
            {t('assessment.back')}
          </button>
          <button
            onClick={handleNext}
            disabled={!isPageComplete}
            className={`flex items-center gap-3 px-12 py-4 rounded-lg font-headline font-bold shadow-xl transition-all duration-200 ${
              isPageComplete
                ? 'bg-gradient-to-br from-[#001e40] to-[#003366] text-white shadow-blue-900/20 hover:scale-[1.02] active:scale-95'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            {currentPage === totalPages - 1 ? t('assessment.finish') : t('assessment.next')}
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
