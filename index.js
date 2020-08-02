const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const router = express.Router();

const connectionString = 'mongodb+srv://akshai:Slip%23960@cluster0.aljfw.mongodb.net/test_1?retryWrites=true&w=majority'
const userSchema = require('./connection');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


const connectDb = async() => {
const connection = await mongoose.connect(connectionString,{ useNewUrlParser: true ,
    useUnifiedTopology: true });
connection.Schema(userSchema);
};

connectDb();


app.get('/users/data',(req,res) => {
    
 res.status(200).send("view all users");
});

app.post('/users/data',(req,res) => {
  

 res.status(200).send("create new user");
 console.log(req.body);
   });

app.get('/users/data/:id',(req,res) => {
    
    res.status(200).send(`get one user by id ${req.params.id}`);
   });
   

app.put('/users/data/:id',(req,res) => {
 res.status(200).send(` update the user info of ${req.params.id}`);
   });

app.delete('/users/data/:id',(req,res) => {
 res.status(200).send(`delete user details of ${req.params.id}`);
   });
   


app.listen(5000,() => {
    console.log("listening in port 5000");
})