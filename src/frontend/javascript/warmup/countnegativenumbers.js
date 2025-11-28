//Write a function to count the number of negative numbers in an array

function countNegatives(array){
let count = 0;
for(let i=0; i<array.length; i++) {
   if(array[i]<0) {
     count ++;
   }
}
return count;
}
let numbers = [10, -5, 20, -3, 7, -8, 15];
let count = countNegatives(numbers);

console.log("Count of negative numbers: "+count);