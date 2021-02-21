/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.

Examples

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

function generateHashtag (str) {
    let splitedStr = str.split(" ");
    console.log(splitedStr)
    if(splitedStr.length>=1){
        return `#${splitedStr.map(item=>item[0].toUpperCase() + item.slice(1)).join("")}`
    }else{return false}
}
console.log(generateHashtag("Do We have A Hashtag"))
console.log(generateHashtag(" ".repeat(200)))