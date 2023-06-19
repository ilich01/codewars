function duplicateCount(str) {
  const charCounts = {};
  let count = 0;

  // Convert the input string to lowercase for case-insensitive comparison
  const lowerStr = str.toLowerCase();

  // Count the occurrence of each character
  for (let i = 0; i < lowerStr.length; i++) {
    const char = lowerStr[i];
    charCounts[char] = (charCounts[char] || 0) + 1;
  }

  // Count the number of characters that occur more than once
  for (const char in charCounts) {
    if (charCounts[char] > 1) {
      count++;
    }
  }

  return count;
}
