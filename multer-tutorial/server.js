const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const app = express()
const fs = require('fs')
const mongoClient = require('mongodb').MongoClient
const dotenv = require("dotenv");
dotenv.config(); 

const dbString = process.env.dbString // need to require dotenv
let db
mongoClient.connect(dbString,{ useUnifiedTopology: true} )
.then(client => {
    db = client.db("testupload")
    console.log("connect to db")
})

app.use(express.urlencoded({extended: true}))

//Set storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        console.log('file in storage', file)
        cb(null, file.originalname)
    }
})

const upload = multer({storage: storage})

//Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post("/uploadfile", upload.single('myFile'), (req, res, next)=> {
    const file = req.file
    console.log("file from req", req.file)
    // file from req {
    //     fieldname: 'myFile',
    //     originalname: 'Screen Shot 2019-06-28 at 16.24.55.png',
    //     encoding: '7bit',
    //     mimetype: 'image/png',
    //     destination: 'uploads',
    //     filename: 'Screen Shot 2019-06-28 at 16.24.55.png',
    //     path: 'uploads/Screen Shot 2019-06-28 at 16.24.55.png',
    //     size: 238189
    //   }
    if (!file){
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(file)
})

app.post("/uploadmultiple", upload.array('myFiles', 12), (req, res)=> {
    const files = req.files
    if(!files){
        const error = new Error('{:ease choose files')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(files)
})

app.get('/photos', (req, res) => {
    db.collection('pics').find().toArray()
    .then(data => {
        //const img = 
        const buf = Buffer.from('runoob', 'ascii');
        
        console.log(data[0].image.buffer) // this is binary data from readFile
        console.log(data[0].image)
        console.log(buf)
        res.contentType(data[6].contentType) // this two line works without converting to base64 figured because it's reading the binary buffer from image
        res.send(data[6].image.buffer) 
        // res.send(`<img src="data:${data[6].contentType};base64,${data[6].image.buffer.toString("base64")}">`)//convert binary data to base64: an encoding schema used for representing binary data in text formatd
    })
})

app.post("/uploadphoto", upload.single('picture'), (req, res) => {
    const img = fs.readFileSync(req.file.path)
    //const encode_image = img.toString('base64')
    //console.log("img",img)
    //console.log("encode img",encode_image)
    const finalImg = {
        contentType: req.file.mimetype,
        image: img//Buffer.from(encode_image,'base64')
    }
    db.collection("pics").insertOne(finalImg)
    .then(result => {
        //console.log("result", result)
        console.log('saved to database')
        res.redirect('/')
    }).catch(err => {
        console.log(err)
    })
})
app.listen(3000, () => console.log('Server started on port 3000'))

