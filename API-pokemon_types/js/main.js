//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice1 = document.querySelector('#poke1').value
  const choice2 = document.querySelector('#poke2').value
  const url1= 'https://pokeapi.co/api/v2/pokemon/'+choice1
  const url2= 'https://pokeapi.co/api/v2/pokemon/'+choice2

  fetch(url1)
      .then(res => res.json()) // parse response as JSON
      .then(data => { 
        document.querySelector("#p1Type").innerText = data.types[0].type.name
        document.querySelector("#p1Img").src = data.sprites.front_shiny
        fetch(url2)
          .then(res => res.json()) // parse response as JSON
        .then(data => {
          document.querySelector("#p2Type").innerText = data.types[0].type.name
          document.querySelector("#p2Img").src = data.sprites.front_shiny
        }) 
      .catch(err => {
          console.log(`error ${err}`)
      })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

