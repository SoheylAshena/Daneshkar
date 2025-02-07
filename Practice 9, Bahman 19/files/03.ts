export function mapArray<T, U>(array: T[], transform: (item: T) => U): U[] {
  return array.map(transform);
}

const numbers = [1, 2, 3, 4];
const squaredNumbers = mapArray(numbers, (num) => num * num);
console.log(squaredNumbers);
// Output: [1, 4, 9, 16]

const strings = ["hello", "world", "typescript"];
const stringLengths = mapArray(strings, (str) => str.length);
console.log(stringLengths);
// Output: [5, 5, 10]
