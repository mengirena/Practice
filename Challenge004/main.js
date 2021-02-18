/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number
*/

/* 
//recursive 
//time: 785 ms

function persistence(num) {
    let quotient, remainder, step = 0;
    quotient = Math.floor(num/10);
    remainder = num%10;
    if (quotient === 0){
        return 0
    }else if (quotient<=9){
        remainder *= quotient;
    }else{
        while(quotient>9){
            remainder *= quotient%10
            quotient = Math.floor(quotient/10)
            if (quotient<=9) remainder *= quotient;
        }
    }
    step++
    
    return step + persistence(remainder)
}
console.log(persistence(39))
*/


//string method
//time:758 ms
function persistence(num) {
    let step = 0;
    let numString = num.toString();
    let stringArray = numString.split("")
    while(stringArray.length > 1){
        mul = stringArray.reduce((sum,current)=>{
            sum = Number(current)*sum;
            return sum
        },1)
        step++
        stringArray = mul.toString().split("")
    }
    return step
}
console.log(persistence(999))