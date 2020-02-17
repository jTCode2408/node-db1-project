const express = require('express');

const db = require('./data/dbConfig');

const router = express.Router();

// router.use(express.json());
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
db('accounts').where({id})
.then( account=>{
if(account.length){
    res.status(200).json(account)
} else{
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
     db('accounts').where({id})
     .update(accounts.name, accounts.budget)
     .then( edit=>{
         if(edit.length){
             res.status(201).json(edit)
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
    db('accounts').where({id}).del()
    .then(deleting =>{
        if(deleting.length){
            res.status(200).json(deleting)
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
     db('accounts').insert(accounts.name, accounts.budget)
     .then(newAccount=>{
         res.status(201).json(newAccount)
     })
     .catch(err=>{
         console.log(err)
         res.status(500).json({error:"could not add account"})
     })
 })







module.exports = router;