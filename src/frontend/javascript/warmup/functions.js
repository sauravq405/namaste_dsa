function printHelloWorld(){
  console.log("Hello world");
}

printHelloWorld();

function greet(name){
  console.log("Namaste "+name);
}

greet("Sachin");
greet("Virat");

function add(a, b){
 let sum = a + b;
 console.log("Addition is "+sum);
}

add(10, 20);

function multiply(a, b){
 let product = a * b;
 console.log("Multiplication is "+product);
}

multiply(10, 20);

function square(x){
let result = x * x;
return result;
}

let result = square(11);
console.log("Square is "+result);