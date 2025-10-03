const express = require('express');
const app = express();
const colors = require('colors');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv')




dotenv.config();
//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));





//route

app.get('/', (req,res)=>{
    return res.status(200).send("<h1>Welcome to the food server API based project</h1>")

});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`.bgMagenta.black);
})