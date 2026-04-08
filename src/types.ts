export type Trait = 'O' | 'C' | 'E' | 'A' | 'N';

export interface Question {
  id: number;
  text: string;
  trait: Trait;
  isPositive: boolean;
}

export interface PersonalityScores {
  O: number;
  C: number;
  E: number;
  A: number;
  N: number;
}

export interface Course {
  name: string;
  category: string;
  idealScores: PersonalityScores;
}

export interface Recommendation {
  course: string;
  matchPercentage: number;
  category: string;
  idealScores: PersonalityScores;
}

export interface UserData {
  age: string;
  qualification: string;
}
