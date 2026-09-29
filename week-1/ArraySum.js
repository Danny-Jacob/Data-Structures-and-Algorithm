arr = [1, 2, 3, 4];
function sumArray(arr) {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  return sum;
}
let result = sumArray(arr);
console.log(result);
