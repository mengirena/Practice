class Board{
    constructor(){
      this.userChoice = [['','',''],['','',''],['','','']];
      this.flag = 1;
    }
  
    markChoice(e){
      let id = e.target.id
      let selectedBox = document.querySelector(`#${id}`)
      if (selectedBox.innerHTML == ""){
        let choice = (this.flag === 1)? "O": (this.flag === -1)? "X": ""
        selectedBox.innerText = choice
        this.userChoice[Math.floor(parseInt(id[1])/3)][parseInt(id[1])%3]= choice
        let verifiedResult = this.winChecker()
        this.flag *= -1;
        if (verifiedResult !== "") {
          document.querySelector("span").innerText = verifiedResult + " wins!"
          this.userChoice = [['','',''],['','',''],['','','']];
          this.flag = 0;
          setTimeout(()=>{
            document.querySelectorAll("div").forEach(item=>item.innerText="")
            document.querySelector("span").innerText = ""
            this.userChoice = [['','',''],['','',''],['','','']];
            this.flag = 1
          },3000)
        }
      }
    }
  
    winChecker(){
      //rows
      for(let i = 0; i<3;i++){
        if (this.userChoice[i][0]=== this.userChoice[i][1] && this.userChoice[i][1]=== this.userChoice[i][2] && this.userChoice[i][0]!=="") {
            return this.userChoice[i][2]
        }
      }
      //columns
      for(let j = 0; j<3; j++){
        if (this.userChoice[0][j]=== this.userChoice[1][j] && this.userChoice[1][j]=== this.userChoice[2][j] && this.userChoice[0][j]!=="") {
            return this.userChoice[2][j]
        }
      }
      //diagonals
      if (this.userChoice[0][0]=== this.userChoice[1][1] && this.userChoice[1][1]=== this.userChoice[2][2]){
          return this.userChoice[2][2]
      } 
      if (this.userChoice[0][2]=== this.userChoice[1][1] && this.userChoice[1][1]=== this.userChoice[2][0]){
          return this.userChoice[2][0]
      }
      return ""
    }
  }
  
  let newBoard = new Board();
  document.querySelectorAll('div').forEach(item => item.addEventListener('click',function(e,obj=newBoard){obj.markChoice(e)}))
  
  