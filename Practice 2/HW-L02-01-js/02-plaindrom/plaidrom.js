function isPalindrome(str) {
  if (str.toLowerCase().split("").reverse().join("") === str.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("Racecar"));
console.log(isPalindrome("Headphone"));
