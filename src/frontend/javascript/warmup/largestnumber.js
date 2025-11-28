//Write a function that returns the largest numbers in an array

function find(array){

let largestNumber = 0;

for(let i=0; i<array.length; i++){
     if(array[i]>largestNumber){
       largestNumber = array[i];
     }
}

return largestNumber;

}

let arr= [5, 2, 6, 77, 9];

let largestNumber=find(arr);

console.log(largestNumber);
