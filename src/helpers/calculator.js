export const discount = (price, original) => {
  if (isNaN(price) || isNaN(original)) return null;
  return Math.round((1 - price / original) * 100);
};
