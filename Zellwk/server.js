const express = require("express")
const app = express()

const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient // connect to MongoDb through the mongoclient's connect method
const connectionString = "mongodb+srv://demo:demo123@cluster0.lcfns.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client =>{
        console.log('connected to Database')
        const db = client.db('star-wars-quotes')
        const quotesCollection = db.collection('quotes')
        
        app.set('view engine', 'ejs')
        
        app.use(bodyParser.urlencoded({extended:true}))
        app.use(express.static('public'))
        app.use(bodyParse.json())


        app.get('/',(req,res) => {
            db.collection('quotes').find().toArray()
                .then(results => {
                    console.log(results)
                    res.render('index.ejs',{quotes:results})
                })
               .catch(error => console.error(error))
            //res.sendFile(__dirname+'/index.html')
        })

        app.post('/quotes',(req,res)=>{
            quotesCollection.insertOne(req.body)
                .then(result =>{
                    console.log(result)
                    res.redirect('/')
                })
                .catch(error=>console.error(error))
        })

        app.put('/quotes',(req,res)=>{
            
        })

        app.listen(3000,function(){
            console.log("listening on 3000")
        })

    })
    .catch(error => console.error(error))

