const express = require('express');

const db = require('../data/dbConfig.js');

const router = express.Router();

router.use(express.json());
//CRUD ops for accounts using db logic
//get all accounts
 router.get('/', (req,res)=>{
    db("accounts")
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
db("accounts").where({id: req.params.id})
.then( account=>{
if(account.length){
    res.status(200).json(account)
} else {
    res.status(404).json({error:"account with specified ID not found"})
}
})
.catch(err=>{
    console.log(err)
    res.status(500).json({error:"server error"})
});
 });

 //edit accounts(put)
 router.put('/:id', (req,res)=>{
     const {id} = req.params;
     db("accounts").where({id})
     .update(req.body)
     .then( edit=>{
         if(edit){
             res.status(200).json({edited: req.body})
         }else{
             res.status(400).json({error:"account with specified ID not found"})
         }
     })
     .catch(err=>{
         console.log(err)
         res.status(500).json({error:"cannot edit account"})
     })
 })
 //delete account
 router.delete('/:id', (req,res)=>{
     const {id}=req.params;
    db("accounts").where({id}).del()
    .then(deleting =>{
        if(deleting){
            res.status(200).json(`deleted ${deleting} account with id number ${id}`)
        } else{
            res.status(400).json({error:"account with specified ID not found"})
        }
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({error:"cannot delete account"})
    })
 })

 //add account(post)
 router.post('/', (req,res)=>{
     db("accounts").insert(req.body, 'id')// tells db to return ID of record id
     .then(adding=>{
         res.status(201).json({adding: req.body})
     })
     .catch(err=>{
         console.log(err)
         res.status(500).json({error:"could not add account"})
     })
 })


module.exports = router;