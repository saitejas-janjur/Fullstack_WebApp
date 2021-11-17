const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const useRoute = require("./routes/users")

dotenv.config();

mongoose.connect(process.env.MONGO_ULR, {useNewUrlParser: true, useUnifiedTopology:true},()=>{
    console.log("Connected to MongoDB")
});

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", useRoute)

app.listen(8800,()=>{
    console.log("Backend is running  dhdht ht hfh");
});