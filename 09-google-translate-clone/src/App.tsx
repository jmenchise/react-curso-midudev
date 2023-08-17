/* eslint-disable @typescript-eslint/explicit-function-return-type */
import 'bootstrap/dist/css/bootstrap.min.css';
import { useStoreReducer } from './hooks/useStoreReducer';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './App.css';
import { AUTO_LANGUAGE } from './const';
import { ArrowsIcon } from './components/Icons';
import { LanguageSelector } from './components/LanguageSelector';

function App() {
   const { fromLanguage, toLanguage, setFromLanguage, setToLanguage, interchangeLanguages } = useStoreReducer();
   return (
      <Container fluid>
         <h1>Google Translate Clone</h1>
         <Row>
            <Col>
               <LanguageSelector
                  type='from'
                  value={fromLanguage}
                  onChange={setFromLanguage}
               />
            </Col>
            <Col>
               <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
                  <ArrowsIcon />
               </Button>
            </Col>
            <Col>
               <LanguageSelector
                  type='to'
                  value={toLanguage}
                  onChange={setToLanguage}
               />
            </Col>
         </Row>
      </Container >
   );
}

export default App;
