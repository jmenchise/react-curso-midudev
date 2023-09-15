export interface Question {
   id: number
   question: string
   code: string
   answers: string[]
   correctAnswer: number
   isCorrectUserAnswer?: boolean
   userSelectedAnswer?: number //* indica la respuesta que eligió el usuario.
};
