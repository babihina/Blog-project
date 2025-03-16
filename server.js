const express = require('express');
const mongoose=require("mongoose");
const cors=require("cors");
const Blog = require('./models/Blog');
const blogRoutes=require('./routes/blogroutes');
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("mongodb connected"))
  .catch(err => console.error("mongodb connection error", err));

  app.use('/blogs',blogRoutes)


app.listen(3000, () => {
  console.log("Server is running");
});