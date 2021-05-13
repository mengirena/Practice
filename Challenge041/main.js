/*
Highest Scoring Word
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

/*
1. split words
2. loop through each word and sum up the scores
*/
// function high(x){
//     const wordArr = x.split(" ")
//     let wordScore = wordArr.map(word => {
//         let scoring = 0
//         console.log(word)
//         for (let i = 0; i < word.length ; i++){
//             console.log(word.charCodeAt(i))
//             scoring += word.charCodeAt(i)-96
//         }
//         console.log(scoring)
//         return scoring
//     })
//     return wordArr[wordScore.indexOf(Math.max(...wordScore))]
// }
console.log(high('abaaa b'))

//other's method
function high(s){
    let as = s.split(' ').map(s=>{
        console.log(s)
        console.log([...s]) //separate each letter and make them an array
        return [...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0)});
    return s.split(' ')[as.indexOf(Math.max(...as))];
}