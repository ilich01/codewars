function printerError(s) {
  const validLetters = /^[a-m]+$/;

  let errorCount = 0;
  const totalLength = s.length;

  for (let i = 0; i < totalLength; i++) {
    if (!validLetters.test(s[i])) {
      errorCount++;
    }
  }

  return errorCount + "/" + totalLength;
}
