import React from 'react';

const useInput = (input: string) => {
  const [value, setValue] = React.useState(input);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};

export default useInput;
