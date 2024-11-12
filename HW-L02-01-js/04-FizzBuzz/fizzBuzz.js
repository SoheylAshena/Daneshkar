function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let numStr = "";
    if (i % 3 === 0) numStr += "Fizz";
    if (i % 5 === 0) numStr += "Buzz";
    console.log(numStr || i);
  }
}

fizzBuzz();
