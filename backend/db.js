const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1:27017/Notes"

const ConnectToDb = () => {
    mongoose.connect(mongoUri )
}

module.exports = ConnectToDb