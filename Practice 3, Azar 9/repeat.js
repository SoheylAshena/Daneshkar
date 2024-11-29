function countLetter(str, letter) {
  const lowerStr = str.toLowerCase();
  const lowerLetter = letter.toLowerCase();
  let count = 0;
  for (let char of lowerStr) {
    if (char === lowerLetter) {
      count++;
    }
  }
  return count;
}

const result = countLetter("Hello WooOOOOoOoOoOoOoOoOoOoOoOOOrld", "o");
console.log(result);
