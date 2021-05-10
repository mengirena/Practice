/*
Snail Sort

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
This image will illustrate things more clearly:


NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
ALGORITHMSARRAYS
*/

/*
1. make a rotate 
2, shift the first row
3. stitch the rows together
*/

// function rotate(arr){
//     let nArr = [] 
//     for (let n = 0 ; n < arr[0].length ; n ++){nArr.push([])}
//     for (let i = 0 ; i < arr.length; i++){
//         let k = 0
//         for (let j = arr[0].length-1; j >= 0 ; j--){
//             nArr[k][i] = arr[i][j]
//             k++
//         }
//     }
//     return nArr
// }

/*
1. peel off from top, right, bottom, left, create function for each peeling
2. contcat together until there's no element left
*/
function toptop(array){
    if(array.length == 0) return []
    return array.shift()
}

function right(array){
    if(array.length == 0) return []
    let returnArr=[]
    array.forEach((row) => {
        returnArr.push(row.pop())
    })
    return returnArr
}

function bottom(array){
    if(array.length == 0) return []
    return array.pop().reverse()
}

function left(array){
    if(array.length == 0) return []
    let returnArr=[]
    array.forEach((row) => {
        returnArr.push(row.shift())
    })
    return returnArr.reverse()
}

snail = function(array) {
    let finalArray  = []
    while (array.length > 0){
        finalArray = finalArray.concat(toptop(array))
                                .concat(right(array))
                                .concat(bottom(array))
                                .concat(left(array))
    }
    return finalArray
}

let array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
//other's method
function snail(array) {
    var vector = [];
    while (array.length) {
      vector.push(...array.shift());
      array.map(row => vector.push(row.pop()));
      array.reverse().map(row => row.reverse());
    }
    return vector;
  }