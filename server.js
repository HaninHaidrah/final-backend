const express = require('express');

const cors = require('cors');

const axios = require('axios');

require('dotenv').config();

const app = express();

app.use(cors());

app.use(express.json());

const mongoose=require('mongoose')


// .env Variable:
PORT=process.env.PORT;
MONGO_URL=process.env.MONGO_URL;


// connect mongoose with the server:
mongoose.connect(MONGO_URL)


// require callback functions:
const {getFruit,addtoFav,getFavFruit,deleteData,updateData}=require('./controllers/fruit.controller')




// endpoints:
app.get('/fruit',getFruit)
app.get('/favFruit/:email',getFavFruit)
app.post('/favFruit',addtoFav)
app.delete('/favFruit/:id',deleteData)
app.put('favFruit/:id',updateData)








// app.listen

app.listen(PORT,()=>{
    console.log(`${PORT}`)
})