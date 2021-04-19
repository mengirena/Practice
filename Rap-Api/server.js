const express = require('express')
const app = express()
const PORT = 8000

let savage = {
    'age': 28,
    'birthName': 'Sheyaa',
    'birthLocation': 'London, England'
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/savage', (req, res)=>{
    res.json(savage)
})

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))