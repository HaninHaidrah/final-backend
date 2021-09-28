'use strict';

const fruitModel=require('../models/fruitModel.model');
const axios=require('axios');
const { request } = require('express');


// to get data from API
const getFruit=(request,respond)=>{
    axios.get("https://fruit-api-301.herokuapp.com/getFruit").then((respondData)=>{
        respond.json(respondData.data)
        console.log(respondData.data)
    })
}


//.................................................................


// to get the user favfruit
const getFavFruit=(request,respond)=>{
    fruitModel.find({email:request.params.email},(error,getData)=>{
        respond.json(getData);
    })

}

//..................................................................
//to create :

const addtoFav=(request,respond)=>{
    const {name,image,price,email}=request.body
    const newFruit=new fruitModel({name,image,price,email})
    newFruit.save()
    respond.json(newFruit);
}
//...............................................................
// to delete Data:
const deleteData=(request,respond)=>{
    const fruitID=request.params.id 
    fruitModel.deleteOne({_id:fruitID},(error,deletedData)=>{
        respond.json(deletedData)
    })

}
//................................
// to update:
const updateData=(request,respond)=>{
    const fruitID=request.params.id 
    const {name,image,price,email}=request.body
 fruitModel.findByIdAndUpdate({_id:fruitID},{name,image,price,email},{new:true},(error,update)=>{
     respond.json(update)

 })
}















// make callback functions visible:
module.exports={getFruit,addtoFav,getFavFruit,deleteData,updateData}