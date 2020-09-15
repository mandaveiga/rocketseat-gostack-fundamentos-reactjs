const formatValue = (value: number): string => {
  const number = Intl.NumberFormat().format(value);

  return `R$ ${number},00`;
};

export default formatValue;
