/*
Sum of the first nth term of Series
Task:

Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:

You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:

SeriesSum(1) => 1 = "1.00"
SeriesSum(2) => 1 + 1/4 = "1.25"
SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
NOTE: In PHP the function is called series_sum().

*/


function SeriesSum(n){
    let sum = 0, count = 0
    while(count < n){
        sum += 1/(1+count*3)
        count ++
    }
    sum = `${Math.round(sum*100)/100}`
    if (sum.includes(".")){
        if (sum.split(".")[1].length >= 2){
            return sum
        }else{
            return sum + "0"
        }
    }else{
        return sum + ".00"
    }
}

SeriesSum(1)

//Other's method
//toFixed(digits): A string representing the given number using fixed-point notation.
function SeriesSum(n) {
    var sum = 0;
    for(var i = 0; i < n; i++) {
      sum += 1 / (3 * i + 1);
    }
    return sum.toFixed(2);
  }