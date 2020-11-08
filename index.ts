import express from 'express';
import * as fs from "fs";

const app = express()
app.get('/', (req,res)=> {
    res.send('hello express');
    res.end()
})
app.get('/api/cities', (req,res)=> {
    fs.readFile('./res/cities.json','utf8', (err,data)=> {
        if(err) {
            res.send(err);
            return;
        }
        res.json(JSON.parse(data));
    })
})
app.listen(8080)
