import express from 'express';

const app = express()
app.get('/', (req,res)=> {
    res.send('hello express');
    res.end()
})
app.get('/user', (req,res)=> {
    res.json({
        code:200,
        data:[{
            name:'lilei'
        }]
    });
})
app.listen(8080)
