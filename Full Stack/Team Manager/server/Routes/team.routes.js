const TeamController =require('../Controller/team.controller')
module.exports = (app) =>{
    app.get('/api/teams',TeamController.getAllTeam);
    app.post('/api/teams',TeamController.createPlayer);
    app.delete('/api/teams/:id',TeamController.deletePlayer);
}