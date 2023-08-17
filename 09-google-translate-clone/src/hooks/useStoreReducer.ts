/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useReducer } from 'react';
import { type Language, type Action, type State, type FromLanguage } from '../types';
import { AUTO_LANGUAGE } from '../const';

const initialState: State = {
   fromLanguage: 'auto',
   toLanguage: 'en',
   fromText: '',
   resultText: '',
   loading: false
};

function reducer(state: State, action: Action): State {
   const { type } = action;
   switch (type) {
      case 'INTERCHANGE_LANGUAGES':
         if (state.fromLanguage === AUTO_LANGUAGE) {
            return state;
         }
         return {
            ...state,
            fromLanguage: state.toLanguage,
            toLanguage: state.fromLanguage
         };

      case 'SET_FROM_LANGUAGE':
         return {
            ...state,
            fromLanguage: action.payload
         };

      case 'SET_TO_LANGUAGE':
         return {
            ...state,
            toLanguage: action.payload
         };

      case 'SET_FROM_TEXT':
         return {
            ...state,
            loading: true,
            fromText: action.payload,
            resultText: ''
         };

      case 'SET_RESULT_TEXT':
         return {
            ...state,
            loading: false,
            resultText: action.payload
         };

      default:
         return state;
   }
}

export function useStoreReducer() {
   const [{
      fromLanguage,
      toLanguage,
      fromText,
      resultText,
      loading
   }, dispatch] = useReducer(reducer, initialState);

   const interchangeLanguages = () => {
      dispatch({ type: 'INTERCHANGE_LANGUAGES' });
   };

   const setFromLanguage = (payload: FromLanguage) => {
      dispatch({ type: 'SET_FROM_LANGUAGE', payload });
   };

   const setToLanguage = (payload: Language) => {
      dispatch({ type: 'SET_TO_LANGUAGE', payload });
   };

   const setFromText = (payload: string) => {
      dispatch({ type: 'SET_FROM_TEXT', payload });
   };

   const setResultText = (payload: string) => {
      dispatch({ type: 'SET_RESULT_TEXT', payload });
   };

   return {
      fromLanguage,
      toLanguage,
      fromText,
      resultText,
      loading,
      interchangeLanguages,
      setFromLanguage,
      setToLanguage,
      setFromText,
      setResultText
   };
}
