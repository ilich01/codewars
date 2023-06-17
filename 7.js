function digitize(number) {
  const digits = Array.from(String(number), Number);
  const reversedDigits = digits.reverse();
  return reversedDigits;
}
