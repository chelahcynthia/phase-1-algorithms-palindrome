function isPalindrome(string) {
  // Write your algorithm here
  strArr = string.split('')
  //console.log(strArr);
  revStrArr = strArr.reverse()
  //console.log(revStrArr);
  strRev = revStrArr.join('')
//console.log(revStrArr);

if ( string === strRev) {
  return true
}
return false
}

/* 
  Add your pseudocode here
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

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

}
module.exports = isPalindrome;
