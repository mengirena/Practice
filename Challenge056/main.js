/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/


/*
1.make a sum array function
2. circle array with different size to calculate the sum
3. save the sum with the max value and return it
*/


function sumArray(arr){
    return arr.reduce((sum,value) => sum + value )
}

var maxSequence = function(arr){
    let len = arr.length, max = 0
    for (i = 1; i <= len; i++){
        for (j = 0; j < len-i+1; j++){
            console.log(arr.slice(j,j+i))
            let nsum = sumArray(arr.slice(j,j+i))
            if (nsum > max) max = nsum 
        }
    }
    return max
  }

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

//other's method
//use currentSum to keep track of the contiguous sum
var maxSequence = function(arr){
    var currentSum = 0;
    return arr.reduce(function(maxSum, number){
        currentSum = Math.max(currentSum+number, 0);
        return Math.max(currentSum, maxSum);
    }, 0);
}

