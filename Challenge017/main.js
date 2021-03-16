/*
Connect 4

7 columns and 6 rows

*/
function Connect4 (){
    this.player = 1
    this.winner = ""
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

    if (this.winner){return `Game has finished!`}
    while(i >= 0){ 
        if(this.board[i][col] === 0){
            this.board[i][col] = this.player
            result = checkType[this.category[i][col]].reduce((result,checker) => {
                if (checker(this,i,col)) {
                    result = true
                    this.winner = this.player
                }
                return result
            },"")
            break;
        }
        i--
    }

    if (i < 0){
        returnStr = `Column full!`
    }else if (!result){
        returnStr = `Player ${this.player} has a turn`
        this.player = (this.player === 1) ? 2 : 1
    }else{
        returnStr = `Player ${this.player} wins!`
    }   
    
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

/*
function Connect4 (){
    this.player = 1
    this.winner = ""
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
    console.log("player",this.player)
  console.log("col",col)
    console.log("winner",this.winner)
    if (this.winner !== ""){return `Game has finished!`}
  
  
    while(i >= 0){ 
      console.log("i",i)
      
        if(this.board[i][col] === 0){
            this.board[i][col] = this.player
          console.log(this.category[i][col])
            result = checkType[this.category[i][col]].reduce((result,checker) => {
              console.log(checker)
                if (checker(this,i,col)) {
                    result = true
                    this.winner = this.player
                }
              console.log(result)
                return result
            },"")
          console.log(this.board)
            break;
        }
      
        i--
    }

    if (i < 0){
        returnStr = `Column full!`
    }else if (!result){
        returnStr = `Player ${this.player} has a turn`
        this.player = (this.player === 1) ? 2 : 1
    }else{
        returnStr = `Player ${this.player} wins!`
    }   
    
    return returnStr
};

function right(obj,i,col){
    return obj.board[i][col] == obj.board[i][col+1] &&
           obj.board[i][col+1] == obj.board[i][col+2] &&
           obj.board[i][col+2] == obj.board[i][col+3]
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
    return obj.board[i][col] == obj.board[i-1][col-1] &&
           obj.board[i-1][col-1] == obj.board[i-2][col-2] &&
           obj.board[i-2][col-2] == obj.board[i-3][col-3]
}
function rdDiag(obj,i,col){
    return obj.board[i][col] == obj.board[i+1][col+1] &&
           obj.board[i+1][col+1] == obj.board[i+2][col+2] &&
           obj.board[i+2][col+2] == obj.board[i+3][col+3]
}
function ldDiag(obj,i,col){
    return obj.board[i][col] == obj.board[i+1][col-1] &&
           obj.board[i+1][col-1] == obj.board[i+2][col-2] &&
           obj.board[i+2][col-2] == obj.board[i+3][col-3]
}
*/