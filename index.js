const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res)=>{
    res.send('new api created!');
});

app.listen(port, ()=>console.log(`api is running on ${port}`));