require("dotenv").config();
const express  = require("express");
const cors     = require("cors");
const mongoose = require("mongoose");
const routes=require('./router/index');
const db=require('./config/db');
db()

const app  = express();
const PORT = process.env.PORT || 5000;


/* ─── Middleware ─────────────────────────────────────────────── */
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());
app.use('/',routes)


app.listen(PORT,()=>{
  console.log("Server is listening to the PORT",PORT)
})

