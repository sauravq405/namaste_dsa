let arr = [2, 10, 5, 6, 10];

console.log(arr);

console.log(arr[0]);
console.log(arr[4]);

let sum = arr[0] + arr[3];
console.log(sum);

//console.log(arr[5]); undefined

let strArr = ["Car", "Bike", "Truck"];
console.log(strArr);

let mixedArr = ["Car", "Bike", "Truck", 5, 109, 65, true, false];
console.log(mixedArr);

let nestedArray = ["Car", "Bike", "Truck", 5, 109, 65, true, false, [1, 10, 100]];
console.log(nestedArray);

console.log(nestedArray[8]);

console.log(nestedArray[8][0]);

let doubleNestedArray = ["Car", [1, 10, [1000, 20000]]];
console.log(doubleNestedArray);
console.log(doubleNestedArray[1][2][0]);