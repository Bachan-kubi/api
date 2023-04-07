const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
// to send form data
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res)=>{
    res.send('new api created!');
});

app.get('/product', async(req, res)=>{
    const query = {};
    const products = await Product.find(query);
    res.send(products);
});

app.get('/product/:id', async(req, res)=>{
    const {id} = req.params;
    const products = await Product.findById(id);
    res.send(products);
});

app.put('/product/:id', async(req, res)=>{
    const {id} = req.params;
    const products = await Product.findByIdAndUpdate(id, req.body);
    if(!products){
        return res.status(404).json({message: `coudlnt find any product from following ${id}`});
    }
    const updatedProduct= await Product.findById(id);
    res.status(200).json(updatedProduct);
});

app.delete('/product/:id', async(req, res)=>{
    const {id} = req.params;
    const products = await Product.findByIdAndDelete(id, req.body);
    if(!products){
        return res.status(404).json({message: `coudlnt find any product from following ${id}`});
    }
    
    res.status(200).json(products);
});


app.post('/product', async (req, res)=>{
    
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
        console.log(product);
    }catch(err){
        console.log(err)
    }
})
app.get('/about', (req, res)=>{
    res.send('This is about!');
});

app.get('/blog', (req, res)=>{
    res.send('this is blog');
});

mongoose.connect('mongodb+srv://admin:GGJYHUnOZikqsURc@cluster0.3vga5dj.mongodb.net/api-node?retryWrites=true&w=majority')
.then(()=>{
    console.log('MongoDB with Mongoose connected!');
    app.listen(port, ()=>console.log(`api is running on ${port}`));
}).catch((err)=>{
    console.log(err);
});






