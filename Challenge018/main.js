/*
A Hamming number is a positive integer of the form 2i3j5k, for some non-negative integers i, j, and k.

Write a function that computes the nth smallest Hamming number.

Specifically:

    The first smallest Hamming number is 1 = 203050
    The second smallest Hamming number is 2 = 213050
    The third smallest Hamming number is 3 = 203150
    The fourth smallest Hamming number is 4 = 223050
    The fifth smallest Hamming number is 5 = 203051

The 20 smallest Hamming numbers are given in example test fixture.

Your code should be able to compute all of the smallest 5,000 (Clojure: 2000, NASM: 13282) Hamming numbers without timing out.

*/

function hamming (n) {
    let hamToN =[]
    let countStart = 1
    while (hamToN.length < n){
        if (isHam(countStart)) {hamToN.push(countStart)}
        countStart ++
    }
    return hamToN.pop()
}

function isHam(num){
    let base = {2:0,3:0,5:0}
    for (let i = 2; i <= num ; i++){
        while (num % i === 0){
            if (!(i in base)){ base[i] = 0}
            base[i]++
            num = Math.floor(num/i)
        }
    }
    return (Object.keys(base).length > 3) ? false : true
}

