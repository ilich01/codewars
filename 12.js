function accum(s) {
  const chars = s.split("");

  const result = chars.map((char, index) => {
    const repeatedChar = char.repeat(index + 1);
    return (
      repeatedChar.charAt(0).toUpperCase() + repeatedChar.slice(1).toLowerCase()
    );
  });

  return result.join("-");
}
