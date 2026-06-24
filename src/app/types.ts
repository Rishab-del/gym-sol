export type ExerciseSet = {
  id: string;
  setNumber: number;
  reps: number;
 weight: string;
  done: boolean;
};

export type Exercise = {
  id: string;
  name: string;
  muscle: string;
  sets: number;
  reps: number;
  weight: string;
  rest: string;
  done: boolean;
  setDetails: ExerciseSet[];
};

export type ExerciseLibraryItem = {
  id: string;
  name: string;
  muscle: string;
  secondaryMuscles: string[];
  equipment: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  defaultSets: number;
  defaultReps: number;
  defaultRest: string;
  defaultWeight: string;
  demoUrl?: string;
  instructions: string[];
  tips: string[];
};