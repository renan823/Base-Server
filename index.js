const express = require('express');
const app = express();
app.use(express.json());

let data = [{"name": "José", "age": 15, "feeling": "happy"}]

app.get('/', (req, res)=>{
    res.send(data)
})

app.post('/', (req, res)=>{
    data.push(req.body)
})

app.listen(3000)