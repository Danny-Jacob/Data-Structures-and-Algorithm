arr = [1, 2, 3, 4];
let max = arr[0];
function findMax(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}
let result = findMax(arr);
console.log(result);
