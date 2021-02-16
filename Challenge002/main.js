function zero(chain) { return (!chain)? "0" : Math.round(eval("0"+ chain))}
function one(chain) { return (!chain)? "1" : Math.round(eval("1"+ chain))}
function two(chain) { return (!chain)? "2" : Math.round(eval("2"+ chain))}
function three(chain) { return (!chain)? "3" : Math.round(eval("3"+ chain))}
function four(chain) { return (!chain)? "4" : Math.round(eval("4"+ chain))}
function five(chain) { return (!chain)? "5" : Math.round(eval("5"+ chain))}
function six(chain) { return (!chain)? "6" : Math.round(eval("6"+ chain))}
function seven(chain) { return (!chain)? "7" : Math.round(eval("7"+ chain))}
function eight(chain) { return (!chain)? "8" : Math.round(eval("8"+ chain))}
function nine(chain) { return (!chain)? "9" : Math.round(eval("9"+ chain))}

function plus(num) {return "+" + num}
function minus(num) {return "-" + num}
function times(num) {return "*" + num}
function dividedBy(num) {return "/" + num}


seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3