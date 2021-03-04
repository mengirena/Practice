/*
Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

    Math.round()
    Math.ceil()
    Math.floor()

*/

Math.round = function(number) {
    let numString = number.toString().split(".")
    return (!numString[1] || +numString[1][0] < 5)? +numString[0] : +numString[0] +1
} 

Math.ceil = function(number) {
    let numString = number.toString().split(".")
    return (!numString[1])? +numString[0] : +numString[0] +1
};
  
Math.floor = function(number) {
    let numString = number.toString().split(".")
    return  +numString[0]
};

Math.round(0.4)
Math.round(0.5)
Math.ceil(0.4)
Math.ceil(0.5)
Math.floor(0.4)
Math.floor(0.5)