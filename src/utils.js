export const serializeObject = (objct) => {
  const str = [];
  for (const i in objct)
    if (objct.hasOwnProperty(i)) {
      str.push(`${encodeURIComponent(i)}=${encodeURIComponent(objct[i])}`);
    }
  return str.join("&");
};

export const generateRandomString = (length = 6, numbers = false) => {
  let result = "";
  const characters = numbers
    ? "1234567890"
    : "abcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i + 1) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const getKeyboardMapValue = (index) => {
  const keyMap = "qwertyuiopasdfghjklzxcvbnm,";
  return index > keyMap.length ? "" : keyMap[index];
};

export const limitFloat = (numb) => {
  return Math.round((numb + Number.EPSILON) * 100) / 100;
};
