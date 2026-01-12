const express = require('express');
const cors = require('cors');
const {MongoClient}=require('mongodb');

const app = express();

app.use(express.json());
app.use(cors());

mongoDBURL='mongodb://localhost:27017/';
let db;

MongoClient.connect(mongoDBURL)
.then((client)=>{console.log('MongoDB Connected using Mongoose');
    db=client.db('pizzeria');
})
.catch((err)=>console.log('Connection Error',err));

app.get('/api/pizzas',async(req,res)=>{
    try{
    const pizza = await db.collection('pizzas').find({}).toArray();
    res.status(200).json(pizza);
    }
    catch(err){
        res.status(500).json({message:"Error Fetching Data",err});
    }
})

app.get('/api/ingridients',async(req,res)=>{
    try{
    const ingridient = await db.collection('ingredients').find({}).toArray();
    res.status(200).json(ingridient);
    }
    catch(err){
        res.status(500).json({message:"Error Fetching Data",err});
    }
})

app.listen(3000,()=> console.log("Server Running..."));