export const formatCreditCard = (value: string): string => {
  const numericValue = value.replace(/\D/g, "");

  let formattedValue = "";
  for (let i = 0; i < numericValue.length; i += 4) {
    formattedValue += numericValue.substr(i, 4) + " ";
  }

  return formattedValue.trim().slice(0, 19);
};
