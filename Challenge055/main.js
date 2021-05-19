/*Valid Parentheses
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints

0 <= input.length <= 100
*/

/*
1. flag ( 1 and ) -1
2. At any moment of the ocunt, there shouldn't be any negative count
3. The end count should be zero
*/
// every(): test each element meet the criteria from the callback
function validParentheses(parens){
    let count = 0
    return parens.split("").every(p => {
        (p === "(") ? count += 1 : count += -1
        return count >= 0
    }) && count === 0
}


//other's mehtod
function validParentheses(parens){
        while(parens.indexOf('()') != -1){
              parens = parens.replace('()', '');
            }
            return !parens.length;
          }
        
function validParentheses(parens){
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
        if (parens[i] == '(') n++;
        if (parens[i] == ')') n--;
        if (n < 0) return false; //for loop can be broken by return
    }
    
    return n == 0;
}
function validParentheses(parens){
    var n = 0;
    let i = 0;
    while(i<parens.length){
        (parens[i] === "(") ? n++ : n--
        if (n < 0) return false;  //while loop can also be broken by return
        
        i++
    }
    return n == 0;
}
console.log(validParentheses( "()()))((" ))