function palindrome(str) {
  let revstr = str.split("");
  let left = 0;
  let right = revstr.length - 1;
  for (let i = 0; i < revstr.length / 2; i++) {
    if (revstr[left]!==revstr[right]) {
      return false
    } 
    left++;
    right--;
  }
  return true;
}
  console.log(palindrome('hello'));
