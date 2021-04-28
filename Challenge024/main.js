/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

/*
1. make the word an array splitted by empty string
2. use map to loop through the array
3. inside map, use the result filtered by filter to identify if the letter showed up more than once and code correspondingly 
*/

function duplicateEncode(word){
    return word.toLowerCase().split("").map((letter,index,array)=>{
        return (array.filter(el=>el===letter).length > 1)? ")" : "("
    }).join("")
}

//other's code
function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
}