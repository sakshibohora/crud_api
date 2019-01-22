let express = require('express');
let mongoose = require('mongoose');
let bodyparser = require('body-parser');
let users = require('../models/usermodel');

//Insert:
exports.add = function(req, res){
    if(!req.body.firstname && (!req.body.lastname)){
        return res.status(400).send({
            message: "enter data"
        });
    }
    let newUser = new users(req.body);
    newUser.save(function(err, data){
    if(err) res.send(err);
        console.log("Add in db");
        res.send(data);
    });
}

//Search:
exports.usersAll = function(req, res){
users.find({}, function(err, data){
if(err) res.send(err);
console.log('search');
res.send(data);
});
};

//Delete:
exports.delete = function(req, res){
let id = mongoose.Types.ObjectId(req.params.userId);
console.log(req.params.userId);
users.deleteOne({_id: id}, function(err, product){
    
    if(err) res.send(err);
    console.log('delete');   
    //res.send({message: 'Deleted'});
    });
};

//Find:
exports.fetch = function(req, res){
    let name = req.params.fname;
    console.log(name)
    users.findOne({ firstname : req.params.userId})
    .then(users => {
        res.send(users);
    })
};

//Update:
exports.update = function(req, res){
    if(!req.body.firstname && (!req.body.lastname)){
        return res.status(400).send({
            message: "enter data"
        });
    }
    users.findOneAndUpdate({_id: req.params.userId}, {
        _id:req.params.userId, firstname:req.body.firstname,lastname:req.body.lastname
    }, {new:true}, function(err, data){
    if(err) res.send(err);
    res.send(data);
    });
};
