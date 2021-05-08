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

function rotate(arr){
    let nArr = [] 
    for (let n = 0 ; n < arr[0].length ; n ++){nArr.push([])}
    for (let i = 0 ; i < arr.length; i++){
        let k = 0
        for (let j = arr[0].length-1; j >= 0 ; j--){
            nArr[k][i] = arr[i][j]
            k++
        }
    }
    return nArr
}

snail = function(array) {
    if (array[0].length === 0 ) return []
    let finalArray  = array.shift()
    console.log(finalArray)
    console.log(array)
    while (array.length !== 0 ){
        console.log('before rotate', array)
        rotatedArray = rotate(array)
        console.log('after rotate',rotatedArray)
        finalArray.concat(rotatedArray.shift())
        console.log(finalArray)
        array = rotatedArray
        console.log('array for next', array)
    }
    return finalArray
}