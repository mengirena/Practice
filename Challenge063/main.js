/*
Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

12 ==> 21
513 ==> 531
2017 ==> 2071
nextBigger(num: 12)   // returns 21
nextBigger(num: 513)  // returns 531
nextBigger(num: 2017) // returns 2071
If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

9 ==> -1
111 ==> -1
531 ==> -1
nextBigger(num: 9)   // returns nil
nextBigger(num: 111) // returns nil
nextBigger(num: 531) // returns nil
*/


/*
example: 
1234 => 1243
4321 => -1
4231 => 4321
4213 => 4231
4123 => 4132
2314 => 2341
4231 => 4321
2341 => 2431 => 2413
56897 => 56987 => 56978 
7385 => 7835 x


4567810 => 4568710 => 4568

compare each digit with the digit next to it starting from the 0th place
*/
function nextBigger(n){
    let str = n.toString().split("")
    for (let i = str.length-1; i > 0; i--){
        if (str[i-1] && str[i-1] < str[i]){
            [str[i],str[i-1]]=[str[i-1],str[i]]
            return Number(str.join(""))
        }
    }
    return -1
}



console.log(nextBigger(513))
