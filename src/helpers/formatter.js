export const toVND = (number) => {
  if (isNaN(number)) return number;

  return number.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND"
  });
};
