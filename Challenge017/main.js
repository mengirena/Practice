/*
Connect 4

7 columns and 6 rows

*/
function Connect4 (){
    this.player = 1
    this.board = [[0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0]]
    this.category = [["a","a","a","b","c","c","c"],
                    ["a","a","a","b","c","c","c"],
                    ["a","a","a","b","c","c","c"],
                    ["d","d","d","e","f","f","f"],
                    ["d","d","d","e","f","f","f"],
                    ["d","d","d","e","f","f","f"]]
};
  
Connect4.prototype.play = function (col){
    let i = 5
    let result = "" , returnStr = ""
    let checkType = {
        a:[right,down,rdDiag],
        b:[left,ldDiag,down,rdDiag,right],
        c:[left,ldDiag,down],
        d:[up,ruDiag,right],
        e:[left,luDiag,up,ruDiag,right],
        f:[left,luDiag,up]
    }
    while(i >= 0){ 
        if(this.board[i][col] === 0){
            this.board[i][col] = this.player
            result = checkType[this.category[i][col]].reduce((result,checker) => {
                if (checker(this,i,col)) {
                    result = true
                }
                return result
            },"")
            break;
        }
        i--
    }
    returnStr = (!result) ? `Player ${this.player} has a turn` : `Player ${this.player} wins!`
    this.player = (this.player === 1) ? 2 : 1
    return returnStr
};

function right(obj,i,col){
    return obj.board[i][col] == obj.board[i][col+1] &&
           obj.board[i][col+1] == obj.board[i][col+2] &&
           obj.board[i][col+2] == obj.tboard[i][col+3]
}
function left(obj,i,col){
    return obj.board[i][col] == obj.board[i][col-1] &&
           obj.board[i][col-1] == obj.board[i][col-2] &&
           obj.board[i][col-2] == obj.board[i][col-3]
}
function down(obj,i,col){
    return obj.board[i][col] == obj.board[i+1][col] &&
           obj.board[i+1][col] == obj.board[i+2][col] &&
           obj.board[i+2][col] == obj.board[i+3][col]
}
function up(obj,i,col){
    return obj.board[i][col] == obj.board[i-1][col] &&
           obj.board[i-1][col] == obj.board[i-2][col] &&
           obj.board[i-2][col] == obj.board[i-3][col]
}
function ruDiag(obj,i,col){
    return obj.board[i][col] == obj.board[i-1][col+1] &&
           obj.board[i-1][col+1] == obj.board[i-2][col+2] &&
           obj.board[i-2][col+2] == obj.board[i-3][col+3]
}
function luDiag(obj,i,col){
    return obj.board[i][col] == obj.board[i-1][col+1] &&
           obj.board[i-1][col+1] == obj.board[i-2][col+2] &&
           obj.board[i-2][col+2] == obj.board[i-3][col+3]
}
function rdDiag(obj,i,col){
    return obj.board[i][col] == obj.board[i+1][col-1] &&
           obj.board[i+1][col-1] == obj.board[i+2][col-2] &&
           obj.board[i+2][col-2] == obj.board[i+3][col-3]
}
function ldDiag(obj,i,col){
    return obj.board[i][col] == obj.board[i+1][col-1] &&
           obj.board[i+1][col-1] == obj.board[i+2][col-2] &&
           obj.board[i+2][col-2] == obj.board[i+3][col-3]
}

game = new Connect4();
console.log(game.play(0))
console.log(game.play(1))
console.log(game.play(0))
console.log(game.play(1))
console.log(game.play(0))
console.log(game.play(1))
console.log(game.play(0))