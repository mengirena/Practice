/*
Description:

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand, the most inner function represents the right operand
    Division should be integer division. For example, this should return 2, not 2.666666...:

eight(dividedBy(three()));
*/

function func(exp){
    return function(chain){return (!chain)? exp : Math.floor(eval(exp + chain))}
   }

function plus(num) {return "+" + num}
function minus(num) {return "-" + num}
function times(num) {return "*" + num}
function dividedBy(num) {return "/" + num}

let zero = func("0")
let one = func("1")
let two = func("2")
let three = func("3")
let four = func("4")
let five = func("5")
let six = func("6")
let seven = func("7")
let eight = func("8")
let nine = func("9")

