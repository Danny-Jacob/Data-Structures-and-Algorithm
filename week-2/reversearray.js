function reverseArray(str) {
  let revstr = str.split("");
  let left = 0;
  let right = revstr.length - 1;
  for (let i = 0; i < revstr.length / 2; i++) {
    [revstr[left], revstr[right]] = [revstr[right], revstr[left]];
    left++;
    right--;
  }
  return revstr.join('');
}
  console.log(reverseArray('hello'));
