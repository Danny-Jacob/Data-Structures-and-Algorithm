arr = [1, 2, 3, 4];
function reversePrint(arr) {
  let print = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    print += arr[i] + " ";
  }
  return print;
}
let result = reversePrint(arr);
console.log(result);

