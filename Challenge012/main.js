/*
Rules

1.  There are two players and both start off the board on square 0.

2.  Player 1 starts and alternates with player 2.

3.  You follow the numbers up the board in order 1=>100

4.  If the value of both die are the same then that player will have another go.

5.  Climb up ladders. The ladders on the game board allow you to move upwards and get ahead faster. If you land exactly on a square that shows an image of the bottom of a ladder, then you may move the player all the way up to the square at the top of the ladder. (even if you roll a double).

6.  Slide down snakes. Snakes move you back on the board because you have to slide down them. If you land exactly at the top of a snake, slide move the player all the way to the square at the bottom of the snake or chute. (even if you roll a double).

7.  Land exactly on the last square to win. The first person to reach the highest square on the board wins. But there's a twist! If you roll too high, your player "bounces" off the last square and moves back. You can only win by rolling the exact number needed to land on the last square. For example, if you are on square 98 and roll a five, move your game piece to 100 (two moves), then "bounce" back to 99, 98, 97 (three, four then five moves.)

8.  If the Player rolled a double and lands on the finish square “100” without any remaining moves then the Player wins the game and does not have to roll again.

*/
function SnakesLadders() {
    this.transferPoints  = [2 ,7 ,8 ,15,16,21,28,36,46,49,51,62,64,71,74,78,87,89,92,95,99];
    this.transferActions = [38,14,31,26,6 ,42,84,44,25,11,67,19,60,91,53,98,94,68,88,75,80];
    this.whoPlay = "playerOne"
    this.currentAt = {
        playerOne: 0,
        playerTwo: 0
    }
    this.winner = ""
};

SnakesLadders.prototype.play = function(die1, die2) {
    let moveTo = this.currentAt[this.whoPlay] + die1 + die2
    if (moveTo > 100) moveTo = 100 - (moveTo - 100)
    if(this.winner !== ""){
        return `Game over!`
    }else if(this.transferPoints.includes(moveTo)){
        this.currentAt[this.whoPlay] = this.transferActions[this.transferPoints.indexOf(moveTo)]
    }else if(moveTo === 100){
        this.winner = this.whoPlay
        return `${(this.whoPlay === "playerOne")? "Player 1" : "Player 2"} Wins!`
    }else{
        this.currentAt[this.whoPlay] = moveTo
    }
    let announceResult = `${(this.whoPlay === "playerOne")? "Player 1" : "Player 2"} is on square ${this.currentAt[this.whoPlay]}`
    if (die1 !== die2){
        if (this.whoPlay === "playerOne") {
            this.whoPlay = "playerTwo"
        } else {
            this.whoPlay = "playerOne"
        }
    }
    return announceResult
}

var game = new SnakesLadders();