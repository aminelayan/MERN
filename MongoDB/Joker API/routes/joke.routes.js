const JokeController = require('../Controllers/jokes.controller');

module.exports = app =>{
    app.get('/api/jokes',JokeController.findAllJokes);
    app.get('/api/jokes/:id',JokeController.findJoke);
    app.put('/api/jokes/:id',JokeController.updateJoke);
    app.post('/api/jokes',JokeController.createJoke);
    app.delete('/api/jokes/:id',JokeController.deleteJoke);
}