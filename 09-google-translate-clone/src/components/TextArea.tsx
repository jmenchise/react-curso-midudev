import { Form } from 'react-bootstrap';
import { type FC } from 'react';
import { SectionType } from '../types.d';

interface Props {
   type: SectionType
   loading?: boolean
   value: string
   onChange: (text: string) => void
};

const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean }): string => {
   if (type === SectionType.From) {
      return 'Introducir texto';
   };
   if (loading === true) {
      return 'Cargando...';
   };
   return 'Traducción';
};
const commonStyles = { border: 0, height: '150px', resize: 'none' };

export const TextArea: FC<Props> = ({ type, loading, value, onChange }) => {
   const styles = type === SectionType.From
      ? commonStyles
      : { ...commonStyles, backgroundColor: '#f5f5f5' };

   const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
      onChange(e.target.value);
   };

   return (
      <Form.Control
         as='textarea'
         placeholder={getPlaceholder({ type, loading })}
         autoFocus={type === SectionType.From}
         disabled={type === SectionType.To}
         style={styles}
         value={value}
         onChange={handleChange}
      />
   );
};
