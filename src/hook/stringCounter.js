import { useState } from 'react';

export const stringCounter = () => {
  const [input, setInput] = useState('0');
  const handleValueChange = (e) => setInput(e.currentTarget.value.length);

  return {
    input,
    handleValueChange,
  };
};
