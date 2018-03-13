const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo = new Todo({
        text : req.body.text
    });

    todo.save().then(function(doc){
        res.send(doc);
    },function(err){
        res.status(400).send(err);
    });
});

app.get('/todos',function(req,res){
        Todo.find().then((todos)=>{
            res.send({todos});
        },(err)=>{
            res.status(400).send(err);
        });
});

app.listen(3000,()=>{
    console.log('server is up on port 3000');
});

