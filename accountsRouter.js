const express = require('express');

const db = require('./data/dbConfig');

const router = express.Router();

router.use(express.json());
//CRUD ops for accounts using db logic
 //get all accounts
 router.get('/', (req,res)=>{
    db('accounts')
    .then(accounts=>{
        res.status(200).json(accounts);
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({error:"error getting accounts"});
    });
 });
 //get account by id
 router.get('/:id', (req, res)=>{
     const {id} = req.params;
db('accoutns').where({id})
.then( account=>{
if(account.length){
    res.status(200).json(account)
} else{
    res.status(404).json({error:"no account with that ID found"})
}
})
.catch(err=>{
    console.log(err)
    res.status(500).json({error:"server error"})
});
 });

 //edit accounts(put)
 //delete account
 //add account(post)






module.exports = router;