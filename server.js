const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();
const accountsRouter = require ('./accountsRouter');

server.use(express.json());
server.use('/accounts', accountsRouter)

server.get('/', (req,res)=>{
    console.log('serve starting')
    res.send(`Routing with DB logic`)
})

//CRUD ops for accounts








module.exports = server;