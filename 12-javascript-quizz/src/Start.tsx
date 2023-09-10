import { Button } from '@mui/material';
import { useQuuestionsStore } from './store/questions';

export function Start() {
   const fetchQuestions = useQuuestionsStore(state => state.fetchQuestions);
   const handleClick = () => fetchQuestions(5);
   return (
      <Button onClick={handleClick} variant='contained'>
         ¡Empezar!
      </Button>
   );
};
