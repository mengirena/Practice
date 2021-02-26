class Board{
    constructor(){
      this.userChoice = [['','',''],['','',''],['','','']];
      this.flag = 1;
    }
  
    markChoice(e){
      let id = e.target.id
      
      let selectedBox = document.querySelector(`#${id}`)
      if (selectedBox.innerHTML == ""){
        let choice = (this.flag === 1 )? "O":"X"
        selectedBox.innerText = choice
        this.userChoice[Math.floor(parseInt(id[1])/3)][parseInt(id[1])%3]= choice
        console.log(this.userChoice)
        let verifiedResult = this.winChecker()
        console.log("verifiedResult", verifiedResult)
        if (verifiedResult !== "") {
          document.querySelector("span").innerText = verifiedResult + " wins!"
          setTimeout(()=>{
            document.querySelectorAll("div").forEach(item=>item.innerText="")
            document.querySelector("span").innerText = ""
            this.userChoice = [['','',''],['','',''],['','','']];
          },3000)
        }
        this.flag *= -1;
      }
    }
  
    winChecker(){
      //rows
      for(let i = 0; i<3;i++){
        if (this.userChoice[i][0]=== this.userChoice[i][1] && this.userChoice[i][1]=== this.userChoice[i][2] && this.userChoice[i][0]!=="") {
          console.log(`${this.userChoice[i][0]} ${this.userChoice[i][1]} ${this.userChoice[i][2]}`)
          return this.userChoice[i][2]
        }
      }
      //columns
      for(let j = 0; j<3; j++){
        if (this.userChoice[0][j]=== this.userChoice[1][j] && this.userChoice[1][j]=== this.userChoice[2][j] && this.userChoice[0][j]!=="") {
          console.log(`${this.userChoice[0][j]} ${this.userChoice[1][j]} ${this.userChoice[2][j]}`)
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
  
  