import { Container, Stack, Typography } from '@mui/material';
import './App.css';
import { JavaScriptLogo } from './components/JavaScriptLogo';
import { Start } from './Start';
import { useQuuestionsStore } from './store/questions';

function App() {
   const questions = useQuuestionsStore(state => state.questions);
   console.log('questions:', questions);
   return (
      <main>
         <Container maxWidth='sm'>
            <Stack
               direction='row'
               gap={2}
               alignItems='center'
               justifyContent='center'
            >
               <JavaScriptLogo />
               <Typography variant='h2' component='h1'>
                  JavaScript Quiz
               </Typography>
            </Stack>
            <Start />
         </Container>
      </main >
   );
}

export default App;
