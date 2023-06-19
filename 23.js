function tribonacci(signature, n) {
  if (n === 0) {
    return [];
  } else if (n <= 3) {
    return signature.slice(0, n);
  }

  const tribonacciSequence = [...signature];

  for (let i = 3; i < n; i++) {
    const nextNumber =
      tribonacciSequence[i - 3] +
      tribonacciSequence[i - 2] +
      tribonacciSequence[i - 1];
    tribonacciSequence.push(nextNumber);
  }

  return tribonacciSequence;
}
