/*
Simple Pig Latin
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

/*
1. split the sentence into word array
2. loop through each word
3. throuw each word to remake
4. join

remake
1. split each word to letters
2. concat letters
*/


// function reMake(word){
//     let letters = word.split(''), rest = letters.slice(1)
//     return (rest.length === 0 && letters[0].match(/[?!.]/g)) ? letters[0] : rest.concat(letters[0],'ay').join("")
// }

// function pigIt(str){
//     return str.split(" ").map(reMake).join(" ")
// }



// //other's method
// function pigIt(str){
//     return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
// }

function pigIt(str) {
    return str.replace(/\w+/g, (w) => {
        return w.slice(1) + w[0] + 'ay';
    });
}


console.log(pigIt('This is my string !'))