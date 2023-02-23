export const isEmailValide = (email: string) => {
  if (email.split('').includes('@')) return true;
  else return false;
};

export const isPswValide = (psw: string) => {
  if (psw.length >= 8) return true;
  else return false;
};
