function fakeBin(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (parseInt(str[i]) < 5) {
      result += "0";
    } else {
      result += "1";
    }
  }

  return result;
}
