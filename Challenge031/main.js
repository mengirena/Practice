/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

/*
1. Find the smallest number
2. remove the smallest number
3. find the smallest number again and add to the first one
*/

function sumTwoSmallestNumbers(numbers) {  
    const firstNum = Math.min(...numbers)
    numbers.splice(numbers.indexOf(firstNum),1)
    return firstNum + Math.min(...numbers)
}

//other's method
function sumTwoSmallestNumbers(numbers){  
    numbers = numbers.sort(function(a, b){return a - b; });
    return numbers[0] + numbers[1];
};