export const formatCVV = (inputString: string) => {
  const numbersOnly: string = inputString.replace(/\D/g, "");

  const result: string = numbersOnly.slice(0, 3);

  return result;
};
