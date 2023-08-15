/* eslint-disable @typescript-eslint/explicit-function-return-type */
import 'bootstrap/dist/css/bootstrap.min.css';
import { useReducer } from 'react';

const initialState = {
   fromLanguage: 'auto',
   toLanguage: 'en',
   fromText: '',
   resultText: '',
   loading: false
};

function reducer(state, { type, payload }) {
   switch (type) {
      case 'INTERCHANGE_LANGUAGES':
         return {
            ...state,
            fromLanguage: state.toLanguage,
            toLanguage: state.fromLanguage
         };

      case 'SET_FROM_LANGUAGE':
         return {
            ...state,
            fromLanguage: payload
         };

      case 'SET_TO_LANGUAGE':
         return {
            ...state,
            toLanguage: payload
         };

      case 'SET_FROM_TEXT':
         return {
            ...state,
            fromText: payload
         };

      default:
         return state;
   }
}

function App() {
   const [state, dispatch] = useReducer(reducer, initialState);

   return (
      <div className="App">
         <h1>Google Translate Clone</h1>
      </div>
   );
}

export default App;
