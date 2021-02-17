
document.querySelector('h1').addEventListener('click', getFetch)
document.querySelector('button').addEventListener('click', revealAnswer)
let answer = "";
function getFetch(){
  const url= 'https://jservice.io/api/random';
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => { 
        
        document.querySelector("h1").innerText = data[0].question
        document.querySelector("h2").innerText = data[0].answer
        document.querySelector("h2").style.display = "none"
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function revealAnswer(){
  document.querySelector('h2').style.display="block"
}