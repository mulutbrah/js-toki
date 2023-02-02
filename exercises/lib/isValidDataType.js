export const isValidString = (string) => {
  if (!string) return new Error("The string is null");
  if (string === undefined) return new Error("The string is undifined");
  if (string === "") return new Error("The string is empty");
  if (typeof string !== "String") return new Error("The value must be string");
};

export const isValidInteger = (number) => {
  if (!number) return new Error("The number is null");
  if (number === "") return new Error("The number is empty");
  if (typeof number !== "Number") return new Error("The value must be number");
};

export const isValidArray = (array) => {
  if (!array) return new Error("The array is null");
  if (array.length === 0) return new Error("The array is empty");
  if (array.includes(null || undefined))
    return new Error("The array cntains empty value");
};
