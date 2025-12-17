
function findSecondLargest(array){

let largest=-Infinity;
let secondLargest=-Infinity;

let size = array.length;

if(size < 2){ //this if condition is added to check if array is empty or has single element
return "Array should have at least two elements"
}

for(let i=0; i<size; i++){
    if (arr[i]>largest) {
    secondLargest = largest;
    largest = arr[i];
   } else if(arr[i] > secondLargest && arr[i] != largest){ //&& arr[i] != largest is added to handle duplicates
     secondLargest = arr[i];
   }
}

return secondLargest;

}

let arr = [4, 9, 0, 2, 8, 7, 1];

let secondLargest = findSecondLargest(arr);

console.log("Positive numbers - Second largest number in given array "+" ["+arr+"] is: " + secondLargest);

arr = [-4, -9, 0, -2, -8, -7, -1];

secondLargest = findSecondLargest(arr);

console.log("Negative numbers - Second largest number in given array "+" ["+arr+"] is: " + secondLargest);
