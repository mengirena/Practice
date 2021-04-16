const express = require("express"); // importing express
const app = express();
const MongoClient = require("mongodb").MongoClient;// Connect to my database with MongoClient
const PORT = 2120;

//Declare variables for my database
// db:
// dbConnectionStr
// dbName 
let db,
  dbConnectionStr =
    "mongodb+srv://demo:demo123@cluster0.ubkgf.mongodb.net/todo?retryWrites=true&w=majority",
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
app.get("/", (req, res) => {
  db.collection("todos").find().toArray() //find all the documents in the collection and turn them into an array, returning a promise holding an array of objects
  .then((data) =>{
    res.render('index.ejs',{quotes:data}) // passing the array of documents to ejs
  });
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

app.put("/todo", (req,res)=>{
  console.log('req',req)
  console.log(req.body)
})

app.listen(PORT, () => {
  console.log("server is running");
});
