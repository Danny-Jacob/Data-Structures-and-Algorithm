arr = [1, 2, 3, 4];
function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  for (let i = 0; i < arr.length / 2; i++) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}
let result = reverseArray(arr);
console.log(result);
