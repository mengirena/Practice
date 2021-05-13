/*
Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:

348597 => [7,9,5,8,4,3]
*/

function digitize(n) {
    console.log([`${n}`])
    return `${n}`.split("").map(s=>Number(s)).reverse()
  }

console.log(digitize(348597))

//other's
function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }//Number is a function