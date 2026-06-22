let arr = [12, 34, 3, 13, 5, 55, 35, 5, 77, 33];
largest = -Infinity;
seconlargest = -Infinity;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    seconlargest = largest;
    largest = arr[i];
  }
}
console.log(seconlargest);
