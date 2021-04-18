const express = require("express"); // importing express
const app = express();
const MongoClient = require("mongodb").MongoClient;// Connect to my database with MongoClient
const PORT = 2120;
require('dotenv').config()

//Declare variables for my database
// db:
// dbConnectionStr
// dbName 
let db,
  dbConnectionStr = process.env.DB_STR,
  dbName = "todo"; 

//Use MongoClient to connect to the database. MongoClient.connect(string used to connect to my database, Object)
MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
  .then((client) => {
    console.log(`Hey, connected to ${dbName} database`);
    db = client.db(dbName); //grab the database connection and store in the db variable
  })
  .catch((err) => {
    console.log(err);
  });

//set up the server
app.set('view engine', 'ejs') // set our view engine
app.use(express.static('public')) // anything put in the public folder, the server can serve up
app.use(express.urlencoded({ extended: true })) // to extract data from the form element and add them to the body property in the request object
app.use(express.json()) // teaches our server to read JSON

//get route takes the path and a callback to react
app.get("/", async (req, res) => {
  const todoItems = await db.collection('todos').find().toArray()
  const itemsLeft = await db.collection('todos').countDocuments({completed: false})
  res.render('index.ejs',{quotes:todoItems, left:itemsLeft})

/* promise nested - not a good way
  db.collection("todos").find().toArray() //find all the documents in the collection and turn them into an array, returning a promise holding an array of objects
  .then((data) =>{
    db.collection("todos").countDocuments({completed: false})
    .then(itemsleft =>{
      res.render('index.ejs',{quotes:data, left: itemsleft}) // passing the array of documents to ejs
    })
  });
*/
});

//post data to my database. A callback function will react on the firing of this route
//The action in the callback:  
app.post("/createTodo", (req, res) => {
  db.collection("todos") //create a collection under the database.
    .insertOne({ todo: req.body.todoItem, completed: false }) //insertOne takes in content as an object
    .then((result) => {
      console.log(result)
      console.log("Todo has been added!");
      res.redirect("/")
    });
});

app.put("/markComplete", (req,res)=>{
  db.collection('todos').updateOne({todo: req.body.rainbowUnicorn},{
    $set: {
      completed: true
    }
  })
  .then(result => {
    console.log('marked completed')
    res.json('marked complete')
  })
})

app.put("/undo", (req,res)=>{
  db.collection('todos').updateOne({todo: req.body.rainbowUnicorn},{
    $set: {
      completed: false
    }
  })
  .then(result => {
    console.log('undo')
    res.json('undo')
  })
})


app.delete("/deleteTodo", (req,res)=>{
  db.collection('todos').deleteOne({todo:req.body.rainbowUnicorn})
  .then(result => {
    console.log('deleted todo')
    res.json("Delete todo") //res.redirect("/")
  })
})

app.listen(process.env.PORT || PORT, () => {// respond to the fetch request
  console.log("server is running");
});
