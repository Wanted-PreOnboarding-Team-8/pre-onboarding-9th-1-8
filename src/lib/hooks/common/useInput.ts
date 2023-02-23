import { UseInputReturn, UseInputValidatorReturn } from '@/interface/hooks';
import React, { useRef, useState } from 'react';

export default function useInput(
  initValue: string,
  validator?: (value: string) => UseInputValidatorReturn,
): UseInputReturn {
  const [value, setValue] = useState(initValue);
  const result = useRef<UseInputValidatorReturn>({ value: false, message: '' });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (typeof validator === 'function') {
      result.current = validator(value);
    }

    setValue(value);
  };

  return [{ value, onChange, setValue }, result.current];
}
