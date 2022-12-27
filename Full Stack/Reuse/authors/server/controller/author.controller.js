const { request } = require('express');
const {Authorz} = require('../model/author.model');

module.exports.createAuthor = (req,res) =>{
    const {name}=req.body;
    Authorz.create({name})
    .then(author=> res.json(author))
    .catch(err => response.status(400).json(err))
}

module.exports.getAllAuthorz = (req,res) =>{
    Authorz.find({})
    .then(authors=>res.json(authors))
    .catch(err => response.status(400).json(err))
}
module.exports.updateAuthor = (req,res) =>{
    Authorz.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
    .then(update=>res.json(update))
    .catch(err => response.status(400).json(err))
}   
module.exports.deleteAuthor = (req,res) =>{
    Authorz.deleteOne({_id:req.params.id})
    .then(deletez=>res.json(deletez))
    .catch(err => response.status(400).json(err))
}
module.exports.getAuthor = (req,res) =>{
    Authorz.findOne({_id:req.params.id})
    .then(author=>res.json(author))
    .catch(err => response.status(400).json(err))

}