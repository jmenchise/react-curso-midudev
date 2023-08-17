import { type AUTO_LANGUAGE, type SUPPORTED_LANGUAGES } from './const';

export type Language = keyof typeof SUPPORTED_LANGUAGES;
export type AutoLenguage = typeof AUTO_LANGUAGE;
export type FromLanguage = Language | AutoLenguage;

export interface State {
   fromLanguage: FromLanguage
   toLanguage: Language
   fromText: string
   resultText: string
   loading: boolean
}

export type Action =
   | { type: 'INTERCHANGE_LANGUAGES' }
   | { type: 'SET_FROM_LANGUAGE', payload: FromLanguage }
   | { type: 'SET_TO_LANGUAGE', payload: Language }
   | { type: 'SET_FROM_TEXT', payload: string }
   | { type: 'SET_RESULT_TEXT', payload: string };

export enum SectionType {
   From = 'from',
   To = 'to'
};
