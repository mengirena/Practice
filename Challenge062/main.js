/*
RGB To Hex Conversion
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

//.toString() can put a parameter as radix and convert any number to that base string
// toUpperCase() is a method
function rgb(r, g, b){
    return [r,g,b].reduce((sum, num)=>{
        if (num <= 0) num = 0
        if (num > 255) num = 255 
        return sum + num.toString(16).padStart(2,"0").toUpperCase()
    },"") 
}

//other's method
function rgb(r, g, b){
    return [r,g,b].map(function(x) {
      return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
    }).join('').toUpperCase();
  }