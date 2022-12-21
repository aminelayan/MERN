const { request } = require('http');
const {Team} =require('../Model/team.model')


module.exports.getAllTeam =(req,res)=>{
    Team.find({})
    .then(teams=> res.json(teams))
    .catch(err => res.status(400).json(err))
}

module.exports.createPlayer = (request,res)=>{
    const { playerName , preferredPosition } = request.body;
    Team.create({
        playerName,
        preferredPosition
    })
    .then(player=> res.json(player))
    .catch(err => res.status(400).json(err))
}

module.exports.deletePlayer = (req,res)=>{
    Team.deleteOne({_id:req.params.id})
    .then(delPlayer => res.json(delPlayer))
    .catch(err => res.status(400).json(err))
}