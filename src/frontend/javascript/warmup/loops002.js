//Write a function that searches for an element in an array and returns the index
//If the element is not present then just return -1

let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];



function search(number, array){
   let index = 0;
   let found = false;
   for(let i=0; i<array.length; i++){
     if(arr[i] == number){
        index = i;
        found = true;
     }
   }
   if(found == false){
     index = -1;
   }
   return index;
}

function searchv2(number, array){
   let index = 0;
   for(let i=0; i<array.length; i++){
     if(arr[i] == number){
        index = i;
        break;
     } else {
       index = -1;
     }
   }
   return index;
}

function searchv3(number, array){
   for(let i=0; i<array.length; i++){
     if(arr[i] == number){
        return i;
     }
   }
   return -1;
}

let indexFoundAt = searchv3(67, arr);

console.log("Index found at : "+indexFoundAt);
