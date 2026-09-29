arr = [1, 2, 3, 4];
let min = arr[0];
function findMin(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}
let result = findMin(arr);
console.log(result);
