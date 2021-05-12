/*
Moving Zeros To The End
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) 
*/

/*
1. filter non-zero elements out
2. compare the count of the filtered array with the original array
3. add the diff of zeros to the end of the filtered array 
*/
var moveZeros = function (arr) {
    let nonZeros = arr.filter(ele => ele !== 0)
    return nonZeros.concat(new Array(arr.length-nonZeros.length).fill(0))
}

//other's method
var moveZeros = function (arr) {
    return [
      ...(arr.filter(n => n !== 0)),
      ...(arr.filter(n => n === 0))
    ];
  }