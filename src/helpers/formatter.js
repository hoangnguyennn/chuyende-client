export const toVND = (number) => {
  if (isNaN(number)) return number;

  return number.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND"
  });
};

export const toNativeDate = (date) => {
  date = new Date(date);
  return `${to2Number(date.getDate())}/${to2Number(
    date.getMonth() + 1
  )}/${date.getFullYear()}`;
};

export const to2Number = (number) => {
  if (number > 9) return number;
  return "0" + number;
};
