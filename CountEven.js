arr = [1, 2, 3, 4];
function countEven(arr) {
  let count = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      count++;
    }
  }

  return count;
}
let result = countEven(arr);
console.log(result);