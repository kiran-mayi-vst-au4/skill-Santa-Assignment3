// 1. Credit Card Validation
// You're starting your own credit card business. You need to come up
// with a new way to validate credit cards with a simple function called
// validateCreditCard that returns true or false.
// Here are the rules for a valid number:
// ● The number must be 16 digits, all of them must be numbers
// ● You must have at least two different digits represented (all of
// the digits cannot be the same)
// ● The final digit must be even
// ● The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
// ● 9999777788880000
// ● 6666666666661666
// The following credit card numbers are invalid:
// ● a92332119c011112 invalid characters
// ● 4444444444444444 only one type of number
// ● 1111111111111110 sum less than 16
// ● 6666666666666661 odd final number


function validateCreditCard(str){
    let tempstr=str;
    let  x=str;
    x = [...new Set(x)];
    // console.log(x)
   if(x.length===1) return false;
    for(let i=0;i<tempstr.length;i++){
        if(isNaN(tempstr[i])) return false;
    }
     if(tempstr.length!==16) return false;
     if(tempstr[tempstr.length-1]%2===1) return false;
     else return true;



}

// console.log(validateCreditCard("a92332119c011112"));
// console.log(validateCreditCard("4444444444444444"));
// console.log(validateCreditCard("111111111111110"));
// console.log(validateCreditCard("6666666666666661"));
// console.log(validateCreditCard("9999777788880000"));
// console.log(validateCreditCard("6666666666661666"));
