/*
Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"
where a ** b means a to the power of b

with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
*/

/*

EX: 
8/7=1..1
8/6=1..2
8/5=1..3
8/4=2..0
==4 & 2
    4/3=1...1   2/1=2...0
    4/2=2...0
===2 & 2
    2/1=2...0    2/1=2...0
    
6/5
6/4
6/3=2
== 3 & 2
    3/2 = 1...1   2/1=2...0
    3/1 = 3...0

4/3=1...4
4/2=2...0
=== 2 & 2


*/


function primeFactors(n){  
    let sorted = getPrimes(n).split(".").sort((a,b)=>a-b)
    let unique = sorted.filter((item,i,array)=>array.indexOf(item)===i)
    return unique.reduce((str,current,i)=>{
        let len = sorted.filter(item=>item==current).length
        return (len===1)? `${str}(${current})`:`${str}(${current}**${len})`
    },"")
}


function getPrimes(n){
    let count = 0;
    let remainder, quotient;
    
    while (remainder!=0){
        remainder = n%(n-count-1);
        quotient = Math.floor(n/(n-count-1));
        count++
    }
    
    if (quotient === n){
        return `${quotient}`
    }else{
        return `${getPrimes(n-count)}.${getPrimes(quotient)}` 
    }
}

console.log(primeFactors(7775460)) //"(2**2)(3**3)(5)(7)(11**2)(17)"