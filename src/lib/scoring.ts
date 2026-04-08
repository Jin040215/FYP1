import { PersonalityScores, Question, Course, Recommendation } from '../types';
import { courses } from '../data/courses';

export function calculateScores(answers: Record<number, number>, questions: Question[]): PersonalityScores {
  const scores: PersonalityScores = { O: 0, C: 0, E: 0, A: 0, N: 0 };

  questions.forEach((q) => {
    const answer = answers[q.id] || 3; // Default to neutral if not answered
    let points = answer;

    if (!q.isPositive) {
      points = 6 - answer;
    }

    scores[q.trait] += points;
  });

  return scores;
}

export function calculateSimilarity(student: PersonalityScores, course: PersonalityScores): number {
  const traits: (keyof PersonalityScores)[] = ['O', 'C', 'E', 'A', 'N'];
  
  // Dot Product
  let dotProduct = 0;
  traits.forEach(trait => {
    dotProduct += student[trait] * course[trait];
  });

  // Magnitude A
  let sumSqA = 0;
  traits.forEach(trait => {
    sumSqA += Math.pow(student[trait], 2);
  });
  const magA = Math.sqrt(sumSqA);

  // Magnitude B
  let sumSqB = 0;
  traits.forEach(trait => {
    sumSqB += Math.pow(course[trait], 2);
  });
  const magB = Math.sqrt(sumSqB);

  if (magA === 0 || magB === 0) return 0;

  const similarity = (dotProduct / (magA * magB)) * 100;
  return Math.round(similarity * 10) / 10;
}

export function getRecommendations(studentScores: PersonalityScores): Recommendation[] {
  return courses
    .map(course => ({
      course: course.name,
      category: course.category,
      idealScores: course.idealScores,
      matchPercentage: calculateSimilarity(studentScores, course.idealScores)
    }))
    .sort((a, b) => b.matchPercentage - a.matchPercentage);
}
