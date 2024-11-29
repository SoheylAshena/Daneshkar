const odds = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const oddSum = (arr) => {
  let sum = 0;
  for (let num of arr) {
    if (num % 2 !== 0) {
      sum += num;
    }
  }
  return sum;
};

console.log(oddSum(odds));
