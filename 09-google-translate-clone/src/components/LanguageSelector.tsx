import { Form } from 'react-bootstrap';
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../const';
import { type FC } from 'react';
import { SectionType, type FromLanguage, type Language } from '../types.d';

type Props =
   | { type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
   | { type: SectionType.To, value: Language, onChange: (language: Language) => void };

export const LanguageSelector: FC<Props> = ({ onChange, type, value }) => {
   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
      onChange(e.target.value as Language);
   };

   return (
      <Form.Select
         aria-label='Selecciona el idioma' onChange={handleChange}
         value={value}
      >
         {type === SectionType.From && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}
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
