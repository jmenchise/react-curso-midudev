import { Card, Typography, ListItem, ListItemButton, ListItemText, List } from '@mui/material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { type Question as QuestionType } from '../types';
import { useQuestionsStore } from '../store/questions';

export const Question = ({ info }: { info: QuestionType }) => {
   const selectAnswer = useQuestionsStore(state => state.selectAnswer);
   const handleClick = (questionId: number, answerIndex: number) => {
      selectAnswer(questionId, answerIndex);
   };

   return (
      <Card
         variant='outlined'
         sx={{
            textAlign: 'left',
            bgcolor: '#222',
            padding: 2,
            marginTop: 4
         }}
      >
         <Typography variant='h5'>
            {info.question}
         </Typography>
         <SyntaxHighlighter language='javascript' style={gradientDark} >
            {info.code}
         </SyntaxHighlighter>
         <List sx={{ bgcolor: '#333' }} disablePadding>
            {info.answers.map((answer, index) => (
               <ListItem key={index} disablePadding divider>
                  <ListItemButton onClick={() => { handleClick(info.id, index); }}>
                     <ListItemText sx={{ textAlign: 'center' }} primary={answer} />
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
      </Card>
   );
};
