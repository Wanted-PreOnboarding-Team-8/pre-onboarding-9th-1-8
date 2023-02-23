export interface UseInputValidatorReturn {
  value: boolean;
  message?: string;
}

export type UseInputReturn = [
  {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setValue: React.Dispatch<React.SetStateAction<string>>;
  },
  ValidatorReturn,
];
