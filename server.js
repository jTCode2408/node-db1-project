const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();
const accountsRouter = require ('./accountsRouter');

server.use(express.json());
server.use('/api/accounts', accountsRouter)

server.get('/', (req,res)=>{
    console.log('serve starting')
    res.send(`Routing with DB logic`)
})










module.exports = server;