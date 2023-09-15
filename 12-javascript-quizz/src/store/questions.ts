import { create } from 'zustand';
import { type Question } from '../types';

interface State {
   questions: Question[]
   currentQuestion: number
   fetchQuestions: (limit: number) => Promise<void>
   selectAnswer: (questionId: number, answerIndex: number) => void
};

export const useQuestionsStore = create<State>((set, get) => ({
   questions: [],
   currentQuestion: 0,
   fetchQuestions: async (limit: number) => {
      const res = await fetch('http://localhost:5173/data.json');
      const json = await res.json();
      const questions = json.sort(() => Math.random() - 0.5).slice(0, limit);
      set({ questions });
   },
   selectAnswer: (questionId, answerIndex) => {
      const { questions } = get();
      //* Usamos el structuredClone para hacer una copia del estado.
      //* En zustand se debe hacer una copia del estado antes de modificarlo.
      const newQuestions = structuredClone(questions);
      //* Buscamos el índice de la pregunta que el usuario está respondiendo para
      //* verificar si es correcta o no y luego actualizar en base a eso.
      const questionIndex = newQuestions.findIndex(question => question.id === questionId);
      //* Obtenemos la pregunta a través de su índice.
      const questionInfo = newQuestions[questionIndex];
      //* Verificamos si la respuesta elegida x el usuario es correcta.
      const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex;
      //* Actualizamos la pregunta dentro de la copia del estado en base a
      //* si la respuesta fue correcta o no, y le agregamos cual fue la respuesta
      //* elegida x el usuario.
      newQuestions[questionIndex] = {
         ...questionInfo,
         isCorrectUserAnswer,
         userSelectedAnswer: answerIndex
      };
      //* Por último, actualizamos el estado.
      set({ questions: newQuestions });
   }
}));
