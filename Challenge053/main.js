/*
Array.prototype.length will give you the number of top-level elements in an array.

Your task is to create a function deepCount that returns the number of ALL elements within an array, including any within inner-level arrays.

For example:

deepCount([1, 2, 3]);  
//>>>>> 3
deepCount(["x", "y", ["z"]]);  
//>>>>> 4
deepCount([1, 2, [3, 4, [5]]]);  
//>>>>> 7
The input will always be an array.
*/

/*
1. count the length of every input
2. loop through each element, if type of input is an object, we need to go deep 
3. stop when there's no array
*/

function deepCount(a){
    let counts = a.length
    a.forEach(element => {
        if (typeof element === 'object'){
            counts += deepCount(element)
        }
    })
    return counts
}

console.log(deepCount(["x", "y", ["z"]]))

//others' method
//Array.isArray() method
function deepCount(a){
    return a.reduce((s,e)=>s+(Array.isArray(e)?deepCount(e):0),a.length);
  }