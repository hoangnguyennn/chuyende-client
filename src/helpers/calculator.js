export const discount = (price, original) => {
  if (isNaN(price) || isNaN(original)) return null;
  return Math.round((1 - price / original) * 100);
};

export const saving = (price, original) => {
  if (isNaN(price) || isNaN(original)) return null;
  return original - price;
};

export const cartAmount = (cart) => {
  if (Array.isArray(cart)) {
    return cart.reduce((total, item) => total + item.amount, 0);
  }

  return 0;
};

export const cartTotal = (cart) => {
  if (Array.isArray(cart)) {
    return cart.reduce((total, item) => total + item.amount * item.price, 0);
  }

  return 0;
};
