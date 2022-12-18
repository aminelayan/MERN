const Joke = require('../Models/jokes.model');

module.exports.findAllJokes =(req,res)=>{
    Joke.find()
    .then(allJokes =>res.json({jokes:allJokes}))
    .catch(err => res.json({message:'Something went wrong',error:err}));
};
module.exports.findJoke = (req, res) =>{
    Joke.findOne({_id:req.params.id})
    .then(oneJoke => res.json({joke: oneJoke}))
    .catch(err => res.json({message:'Something went wrong',error:err}));
};
module.exports.createJoke = (req, res) =>{
    Joke.create(req.body)
    .then(CreatedJoke => res.json({joke:CreatedJoke}))
    .catch(err => res.json({message:'Something went wrong',error:err}));
};
module.exports.updateJoke = (req, res) =>{
    Joke.findOneAndUpdate({ _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updateJoke => res.json({ joke: updateJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteJoke = (req, res) =>{
    Joke.deleteOne({_id:req.params.id})
    .then(result=> res.json({result: result}))
    .catch(err => res.json({message:'Something went wrong',error:err}));
};
