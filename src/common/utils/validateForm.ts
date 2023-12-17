export const validateForm = (data: any): boolean => {
  for (const chave in data) {
    if (Object.prototype.hasOwnProperty.call(data, chave)) {
      const valor = data[chave];

      if (!valor.trim()) {
        return false;
      }
    }
  }

  return true;
};
