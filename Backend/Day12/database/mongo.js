//mongoose is like sequalize
var mongoose = require("mongoose");

var mongodb = "mongodb://127.0.0.1/my_database";

//for driver changes we use useNewUrlParser: true, useUnifiedTopology: true
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, "Mongodb connection Error"));
