export const formatValidate = (value: string) => {
  const newValue = value.replace(/\D/g, "");
  let formattedValue = "";

  if (newValue.length > 2) {
    formattedValue = newValue.slice(0, 2) + "/" + newValue.slice(2, 4);
  } else {
    formattedValue = newValue;
  }

  return formattedValue;
};
