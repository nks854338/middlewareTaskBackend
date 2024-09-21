const express = require("express");
const mongoose = require("mongoose");
const userRouter = require('./routes/user');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

mongoose
.connect(
  "mongodb+srv://nks854338:Nandani50%25@students.a0ydx.mongodb.net/task30"
)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("Mongo Error", err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended: false}));

app.options('*', cors()); 

app.use('/users', userRouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
