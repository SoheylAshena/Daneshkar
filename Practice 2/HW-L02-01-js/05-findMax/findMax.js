function findMax(arr) {
  let big = arr[0];
  for (const item of arr) {
    if (item > big) {
      big = item;
    }
  }
  return big;
}

let array = [12, 11, 15, 66, 1];
console.log(findMax(array));
