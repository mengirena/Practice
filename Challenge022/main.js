/*
Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

/*
method 1
1. make the text to lowercase first
2. loop through the text and count in an object 
3. loop through the object, if there's an alphabet showing up more than once, we should record it.

toLowerCase()
create obj
create count
for text
for obj
*/

function duplicateCount(text){
    text = text.toLowerCase()
    const recordLetterCount = {}
    for (let i = 0; i < text.length; i++){
        if (!(text[i] in recordLetterCount)){
            recordLetterCount[text[i]] = 0
        }
        recordLetterCount[text[i]]++
    }
    return Object.keys(recordLetterCount).filter(key=>recordLetterCount[key] > 1).length
}

/*
other methods
*/
function duplicateCount1(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

function duplicateCount2(text){
    return text.toLowerCase().split('').filter(function(val, i, arr){
        console.log(val,i)
        console.log(arr.indexOf(val) !== i)
        console.log(arr.lastIndexOf(val) === i)
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}
/*
"aabBcde" 
"aabbcde"
['a','a','b','b','c','d','e']
*/