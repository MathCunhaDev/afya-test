export const formatPrice = (price: number) => {
  if (isNaN(price) || price === undefined) {
    return "Invalid Price";
  }

  const formattedPrice = price.toFixed(2);
  const [integerPart, decimalPart] = formattedPrice.split(".");
  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    "."
  );
  const result = formattedIntegerPart + "," + decimalPart;

  return result;
};
