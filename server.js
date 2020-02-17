const express = require('express');

const AccountsRouter = require ('./accounts/accountsRouter.js');
const server = express();

server.use(express.json());
server.use('/accounts', AccountsRouter)

server.get('/', (req,res)=>{
    console.log('server starting')
    res.send(`Routing with DB logic`)
})


module.exports = server;