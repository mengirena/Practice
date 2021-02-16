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

function zero(chain) { return (!chain)? "0" : Math.floor(eval("0"+ chain))}
function one(chain) { return (!chain)? "1" : Math.floor(eval("1"+ chain))}
function two(chain) { return (!chain)? "2" : Math.floor(eval("2"+ chain))}
function three(chain) { return (!chain)? "3" : Math.floor(eval("3"+ chain))}
function four(chain) { return (!chain)? "4" : Math.cflooreval("4"+ chain))}
function five(chain) { return (!chain)? "5" : Math.floor(eval("5"+ chain))}
function six(chain) { return (!chain)? "6" : Math.floor(eval("6"+ chain))}
function seven(chain) { return (!chain)? "7" : Math.floor(eval("7"+ chain))}
function eight(chain) { return (!chain)? "8" : Math.floor(eval("8"+ chain))}
function nine(chain) { return (!chain)? "9" : Math.floor(eval("9"+ chain))}

function plus(num) {return "+" + num}
function minus(num) {return "-" + num}
function times(num) {return "*" + num}
function dividedBy(num) {return "/" + num}

