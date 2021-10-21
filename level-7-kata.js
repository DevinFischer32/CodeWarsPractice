// letters only, please!
const removeChars = (s) => {
  if (!s.match(/[A-Za-z ]/g)) {
    return "";
  } else {
    return s.match(/[A-Za-z ]/g).join("");
  }
};
