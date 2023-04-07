const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('new api created!');
});


app.post('/product', async (req, res)=>{
    console.log(req.body);
    res.send(req.body);
    // try{
    //     const product = await Product.create(req.body);
        
    // }catch(err){
    //     console.log(err)
    // }
})
app.get('/about', (req, res)=>{
    res.send('This is about!');
});

app.get('/blog', (req, res)=>{
    res.send('this is blog');
});

mongoose.connect('mongodb+srv://admin:GGJYHUnOZikqsURc@cluster0.3vga5dj.mongodb.net/node-api?retryWrites=true&w=majority')
.then(()=>{
    console.log('MongoDB with Mongoose connected!');
    app.listen(port, ()=>console.log(`api is running on ${port}`));
}).catch((err)=>{
    console.log(err);
});






