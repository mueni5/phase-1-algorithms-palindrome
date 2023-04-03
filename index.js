function isPalindrome(word) {
  // Write your algorithm here
  // Write your algorithm here
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("level")); // true
console.log(isPalindrome("rotor")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("mom dad")); // false
console.log(isPalindrome("12321")); // true
console.log(isPalindrome("a")); // true
console.log(isPalindrome("")); // true

}
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z]/g, ''); // Remove non-letter characters
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

/* 
  Add your pseudocode here
  Add your pseudocode here
  function isPalindrome(str) {
  // Convert the string to lowercase and remove any non-letter characters
  // Initialize two pointers, one at the beginning of the string and one at the end
  // While the pointers haven't crossed each other
    // If the characters at the pointers are not the same, return false
    // Move the pointers closer to each other
  // If we made it through the loop, return true
}
*/

/*
  Add written explanation of your solution here
*/
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("");
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}
module.exports = isPalindrome;



