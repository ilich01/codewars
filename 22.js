function comp(a, b) {
  if (a === null || b === null) {
    return false;
  }

  if (a.length !== b.length) {
    return false;
  }

  const sortedA = a.sort((x, y) => x - y);
  const sortedB = b.sort((x, y) => x - y);

  for (let i = 0; i < sortedA.length; i++) {
    if (sortedA[i] * sortedA[i] !== sortedB[i]) {
      return false;
    }
  }

  return true;
}
