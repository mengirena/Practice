const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const PORT = 2121;

let db,
  dbConnectionStr =
    "mongodb+srv://demo:demo123@cluster0.ubkgf.mongodb.net/todo?retryWrites=true&w=majority",
  dbName = "todo";

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
  .then((client) => {
    console.log(`Hey, connected to ${dbName} database`);
    db = client.db(dbName); //grab the connection and store in the db variable
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");
app.use(express.static("piblic"));
app.use(express.urlencoded({ exended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/createTodo", (req, res) => {
  db.collection("todos")
    .insertOne({ todo: req.body.todoItem, completed: false })
    .then((result) => {
      console.log("Todo has been added!");
      res.redirect("/")
    });
});

app.listen(PORT, () => {
  console.log("server is running");
});
