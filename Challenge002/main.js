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

function zero(chain) { return doCal(0)}
function one(chain) { return doCal(1)}
function two(chain) { return doCal(2)}
function three(chain) { return doCal(3)}
function four(chain) { return doCal(4)}
function five(chain) { return doCal(5)}
function six(chain) { return doCal(6)}
function seven(chain) { return doCal(7)}
function eight(chain) { return doCal(8)}
function nine(chain) { return doCal(9)}

function plus(num) {return "+" + num}
function minus(num) {return "-" + num}
function times(num) {return "*" + num}
function dividedBy(num) {return "/" + num}

function doCal(exp){
 return function(chain){return (!chain)? exp : Math.floor(eval(exp+ chain))}
}

function plus(num1){
    return function(num2){
        return num1 + num2
    }
}
