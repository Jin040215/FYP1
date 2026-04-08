import { Question, Trait } from '../types';

export const questions: Question[] = [
  // Trait 1: Extraversion (E)
  { id: 1, text: "Am the life of the party.", trait: 'E' as Trait, isPositive: true },
  { id: 6, text: "Don't talk a lot.", trait: 'E' as Trait, isPositive: false },
  { id: 11, text: "Feel comfortable around people.", trait: 'E' as Trait, isPositive: true },
  { id: 16, text: "Keep in the background.", trait: 'E' as Trait, isPositive: false },
  { id: 21, text: "Start conversations.", trait: 'E' as Trait, isPositive: true },
  { id: 26, text: "Have little to say.", trait: 'E' as Trait, isPositive: false },
  { id: 31, text: "Talk to a lot of different people at parties.", trait: 'E' as Trait, isPositive: true },
  { id: 36, text: "Don't like to draw attention to myself.", trait: 'E' as Trait, isPositive: false },
  { id: 41, text: "Don't mind being the center of attention.", trait: 'E' as Trait, isPositive: true },
  { id: 46, text: "Am quiet around strangers.", trait: 'E' as Trait, isPositive: false },

  // Trait 2: Agreeableness (A)
  { id: 2, text: "Feel little concern for others.", trait: 'A' as Trait, isPositive: false },
  { id: 7, text: "Am interested in people.", trait: 'A' as Trait, isPositive: true },
  { id: 12, text: "Insult people.", trait: 'A' as Trait, isPositive: false },
  { id: 17, text: "Sympathize with others' feelings.", trait: 'A' as Trait, isPositive: true },
  { id: 22, text: "Am not interested in other people's problems.", trait: 'A' as Trait, isPositive: false },
  { id: 27, text: "Have a soft heart.", trait: 'A' as Trait, isPositive: true },
  { id: 32, text: "Am not really interested in others.", trait: 'A' as Trait, isPositive: false },
  { id: 37, text: "Take time out for others.", trait: 'A' as Trait, isPositive: true },
  { id: 42, text: "Feel others' emotions.", trait: 'A' as Trait, isPositive: true },
  { id: 47, text: "Make people feel at ease.", trait: 'A' as Trait, isPositive: true },

  // Trait 3: Conscientiousness (C)
  { id: 3, text: "Am always prepared.", trait: 'C' as Trait, isPositive: true },
  { id: 8, text: "Leave my belongings around.", trait: 'C' as Trait, isPositive: false },
  { id: 13, text: "Pay attention to details.", trait: 'C' as Trait, isPositive: true },
  { id: 18, text: "Make a mess of things.", trait: 'C' as Trait, isPositive: false },
  { id: 23, text: "Get chores done right away.", trait: 'C' as Trait, isPositive: true },
  { id: 28, text: "Often forget to put things back in their proper place.", trait: 'C' as Trait, isPositive: false },
  { id: 33, text: "Like order.", trait: 'C' as Trait, isPositive: true },
  { id: 38, text: "Shirk my duties.", trait: 'C' as Trait, isPositive: false },
  { id: 43, text: "Follow a schedule.", trait: 'C' as Trait, isPositive: true },
  { id: 48, text: "Am exacting in my work.", trait: 'C' as Trait, isPositive: true },

  // Trait 4: Emotional Stability / Neuroticism (N)
  { id: 4, text: "Get stressed out easily.", trait: 'N' as Trait, isPositive: false },
  { id: 9, text: "Am relaxed most of the time.", trait: 'N' as Trait, isPositive: true },
  { id: 14, text: "Worry about things.", trait: 'N' as Trait, isPositive: false },
  { id: 19, text: "Seldom feel blue.", trait: 'N' as Trait, isPositive: true },
  { id: 24, text: "Am easily disturbed.", trait: 'N' as Trait, isPositive: false },
  { id: 29, text: "Get upset easily.", trait: 'N' as Trait, isPositive: false },
  { id: 34, text: "Change my mood a lot.", trait: 'N' as Trait, isPositive: false },
  { id: 39, text: "Have frequent mood swings.", trait: 'N' as Trait, isPositive: false },
  { id: 44, text: "Get irritated easily.", trait: 'N' as Trait, isPositive: false },
  { id: 49, text: "Often feel blue.", trait: 'N' as Trait, isPositive: false },

  // Trait 5: Openness to Experience (O)
  { id: 5, text: "Have a rich vocabulary.", trait: 'O' as Trait, isPositive: true },
  { id: 10, text: "Have difficulty understanding abstract ideas.", trait: 'O' as Trait, isPositive: false },
  { id: 15, text: "Have a vivid imagination.", trait: 'O' as Trait, isPositive: true },
  { id: 20, text: "Am not interested in abstract ideas.", trait: 'O' as Trait, isPositive: false },
  { id: 25, text: "Have excellent ideas.", trait: 'O' as Trait, isPositive: true },
  { id: 30, text: "Do not have a good imagination.", trait: 'O' as Trait, isPositive: false },
  { id: 35, text: "Am quick to understand things.", trait: 'O' as Trait, isPositive: true },
  { id: 40, text: "Use difficult words.", trait: 'O' as Trait, isPositive: true },
  { id: 45, text: "Spend time reflecting on things.", trait: 'O' as Trait, isPositive: true },
  { id: 50, text: "Am full of ideas.", trait: 'O' as Trait, isPositive: true },
].sort((a, b) => a.id - b.id);
