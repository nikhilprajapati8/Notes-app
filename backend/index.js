const express = require("express");
const app = express();
const Port = 5000;
const ConnectToDb = require("./db")
const cors = require('cors')

ConnectToDb();

app.use(cors())
app.use(express.json());
app.use("/notes", require("./routes/notes.js"))

app.listen(Port, () => {
    console.log("server started")

})