//Create a function that accepts age and tells whether a person is eligible to vote or not

function eligibleToVote(age) {
    if(age > 18){
    console.log("Eligible to vote");
    }
    else {
    console.log("Not eligible to vote");
    }
}

eligibleToVote(10);
eligibleToVote(20);

function isValidCurrencyDenomination(currency) {
    if(currency < 0){
    console.log("Currency invalid");
    }
    else if(currency == 1 || currency == 2 ||currency == 5 ||currency == 10 ||currency == 20 ||currency == 50 ||currency == 100 || currency == 200 || currency == 500){
        console.log("Currency valid");
        }
    else {
    console.log("Yet to be sanctioned by the Government");
    }
}

isValidCurrencyDenomination(1);
isValidCurrencyDenomination(10);
isValidCurrencyDenomination(13);
isValidCurrencyDenomination(100);
isValidCurrencyDenomination(-5);
isValidCurrencyDenomination(200);
isValidCurrencyDenomination(5);

function isEvenOrOdd(number){
  let remainder = number % 2; //calculate remainder in js

  if(remainder == 0){
     console.log("Even number");
  } else {
     console.log("Odd number");
  }

}

isEvenOrOdd(10);
isEvenOrOdd(23);
isEvenOrOdd(16);
isEvenOrOdd(40);
isEvenOrOdd(8);
isEvenOrOdd(25);
isEvenOrOdd(14);
isEvenOrOdd(24);