// Write function that returns the minimum number in an array
function find(array) {
  let smallestNumber = Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallestNumber) {
      smallestNumber = array[i];
    }
  }

  return smallestNumber;  // Add return statement to return the smallest number
}

//let arr = [-5, -2, -6, -77, -9];
let arr = [5, 2, 6, 77, 9];

let smallestNumber = find(arr);

console.log(smallestNumber);
