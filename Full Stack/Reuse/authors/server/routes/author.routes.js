const AuthorzController =require('../controller/author.controller');
module.exports = (app) =>{
    app.get('/api',AuthorzController.getAllAuthorz)
    app.post('/api',AuthorzController.createAuthor)
    app.put('/api/:id',AuthorzController.updateAuthor)
    app.delete('/api/:id',AuthorzController.deleteAuthor)
    app.get('/api/:id',AuthorzController.getAuthor)
}