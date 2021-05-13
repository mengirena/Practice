/*
Adding Big Numbers
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example

add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes

The input numbers are big.
The input is a string of only digits
The numbers are positives
*/
// function add(a, b) {
//     const maxLen = Math.max(a.length, b.length)
//     a = a.padStart(maxLen, "0")
//     b = b.padStart(maxLen, "0")
//     let tenth = 0
//     let arr = []
//     for (i = maxLen-1; i >= 0; i--){
//         ad = Number(a.charAt(i)) + Number(b.charAt(i)) + tenth
//         arr.push(`${ad%10}`)
//         tenth = 0
//         tenth = Math.floor(ad/10)
//     }
//     if (tenth != 0) arr.push(tenth)
//     return arr.reverse().join('')
// }

//other's code
function add (a, b) {
    var res = '', c = 0
    a = a.split('')
    b = b.split('')
    while (a.length || b.length || c) {
      c += ~~a.pop() + ~~b.pop()
      console.log(c)
      res = c % 10 + res
      console.log(res)
      c = c > 9
      console.log(c)
    }
    return res
  }
  add("63829983432984289347293874", "90938498237058927340892374089")