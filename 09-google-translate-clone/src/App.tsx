/* eslint-disable @typescript-eslint/explicit-function-return-type */
import 'bootstrap/dist/css/bootstrap.min.css';
import { useStoreReducer } from './hooks/useStoreReducer';
import { Container, Row, Col, Button, Stack } from 'react-bootstrap';
import './App.css';
import { AUTO_LANGUAGE } from './const';
import { ArrowsIcon } from './components/Icons';
import { LanguageSelector } from './components/LanguageSelector';
import { SectionType } from './types.d';
import { TextArea } from './components/TextArea';

function App() {
   const {
      fromLanguage,
      toLanguage,
      setFromLanguage,
      setToLanguage,
      interchangeLanguages,
      fromText,
      resultText,
      setFromText,
      setResultText,
      loading
   } = useStoreReducer();

   return (
      <Container fluid>
         <h1>Google Translate Clone</h1>
         <Row>
            <Col>
               <Stack gap={2}>
                  <LanguageSelector
                     type={SectionType.From}
                     value={fromLanguage}
                     onChange={setFromLanguage}
                  />
                  <TextArea
                     type={SectionType.From}
                     value={fromText}
                     onChange={setFromText}
                  />
               </Stack>
            </Col>
            <Col xs='auto'>
               <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
                  <ArrowsIcon />
               </Button>
            </Col>
            <Col>
               <Stack gap={2}>
                  <LanguageSelector
                     type={SectionType.To}
                     value={toLanguage}
                     onChange={setToLanguage}
                  />
                  <TextArea
                     type={SectionType.To}
                     value={resultText}
                     onChange={setResultText}
                     loading={loading}
                  />
               </Stack>
            </Col>
         </Row>
      </Container >
   );
}

export default App;
