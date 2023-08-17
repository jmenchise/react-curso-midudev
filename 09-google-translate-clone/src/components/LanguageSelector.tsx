import { Form } from 'react-bootstrap';
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../const';
import { type FC } from 'react';
import { type FromLanguage, type Language } from '../types';

type Props =
   | { type: 'from', value: FromLanguage, onChange: (language: FromLanguage) => void }
   | { type: 'to', value: Language, onChange: (language: Language) => void };

export const LanguageSelector: FC<Props> = ({ onChange, type, value }) => {
   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
      onChange(e.target.value as Language);
   };

   return (
      <Form.Select
         aria-label='Selecciona el idioma' onChange={handleChange}
         value={value}
      >
         {type === 'from' && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}
         {
            Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
               <option key={key} value={key}>
                  {literal}
               </option>
            ))
         }
      </Form.Select >
   );
};
