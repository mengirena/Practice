document.querySelector('button').addEventListener('click',apiRapName)


async function apiRapName(){
    try{
        const rapper = document.querySelector('input').value
        const res = await fetch(`http://localhost:8000/api/rappers/${rapper}`)
        const data = await res.json()
        console.log(data)
        document.querySelector('h2').innerHTML = data.birthName
    }catch(err){
        console.log(err)
    }
    
}