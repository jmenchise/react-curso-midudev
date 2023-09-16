import { create } from 'zustand';
import { type Question } from '../types';
import confetti from 'canvas-confetti';
import { persist, devtools } from 'zustand/middleware';
interface State {
   questions: Question[]
   currentQuestion: number
   fetchQuestions: (limit: number) => Promise<void>
   selectAnswer: (questionId: number, answerIndex: number) => void
   goNextQuestion: () => void
   goPreviousQuestion: () => void
   reset: () => void
};

export const useQuestionsStore = create<State>()(devtools(persist((set, get) => ({
   questions: [],
   currentQuestion: 0,
   fetchQuestions: async (limit: number) => {
      const res = await fetch('http://localhost:5173/data.json');
      const json = await res.json();
      const questions = json.sort(() => Math.random() - 0.5).slice(0, limit);
      set({ questions });
   },
   selectAnswer: (questionId, answerIndex) => {
      //* Con get() obtenemos el estado actual.
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
      //* y si fue correcta, tiramos confetti para festejar xD
      if (isCorrectUserAnswer) {
         void confetti();
      }
   },
   goNextQuestion: () => {
      const { currentQuestion, questions } = get();
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
         set({ currentQuestion: nextQuestion });
      }
   },
   goPreviousQuestion: () => {
      const { currentQuestion } = get();
      const previousQuestion = currentQuestion - 1;
      if (previousQuestion >= 0) {
         set({ currentQuestion: previousQuestion });
      }
   },
   reset: () => {
      set({ currentQuestion: 0, questions: [] });
   }
}), { name: 'questions' })));
