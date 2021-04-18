try{
    console.log('try')
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => {
        console.log(res)
        return res.json()
    })
    .then(data => console.log(data))
}catch (err){

    console.log(err)
}