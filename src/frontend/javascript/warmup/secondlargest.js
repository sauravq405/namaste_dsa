//Find the second largest number in an array

function findSecondLargest(arr) {
  let secondLargest = -Infinity;
  let largest = -Infinity;

  // First pass: find the largest
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  // Second pass: find the second largest
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

function findSecondLargestOptimal(arr) {
  let secondLargest = -Infinity;
  let largest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest){
      secondLargest = arr[i];
    }
  }


  return secondLargest;
}

let arr = [4, 9, 0, 2, 8, 7, 1];

let secondLargest = findSecondLargestOptimal(arr);

console.log("Second largest number in given array is: " + secondLargest);
