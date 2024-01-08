const express = require('express');
const app = express();

const bodyparsor = require('body-parser');
app.use(bodyparsor.json());

app.listen(3000, ()=>{
    console.log("server started")
})

app.get('/', (req, res)=>{
    res.send("server started");
})

app.post('/api/cars',(req, res)=>{
    const {name, age} = req.body;
    console.log(name);
    console.log(age);
    res.send('data sended');

})