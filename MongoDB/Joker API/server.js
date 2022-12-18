const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.set('strictQuery', true);
    
require("./Config/mongoose.config")
    
app.use(express.json(), express.urlencoded({ extended: true }));
    
    
const AllMyUserRoutes = require("./routes/joke.routes")
    AllMyUserRoutes(app);

app.listen(8000, () => console.log("el3an el tanas 7akan aboy "));