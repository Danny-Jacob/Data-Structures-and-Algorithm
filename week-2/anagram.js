function isAnagram(s, t) {
  
  let count = {};
  for (let char of s) 
    {count[char] = (count[char] || 0) + 1;}
  
  for (let char of t) {
    if (!count[char]) return false;
    count[char]--;
  }
  return true;
}
console.log(isAnagram("anagram", "nagaram")); // true