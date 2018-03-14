var {mongoose} = require('./../server/db/mongoose');
var {ObjectID} = require('mongodb');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');

// Todo.findOneAndRemove({text : 'bring shirts'}).then((todo)=>{
//     console.log('todo',todo);
// })
// .catch((e)=>{
//     console.log(e);
// });

Todo.findByIdAndRemove('5aa8ed36f7a81f3258d3f1c7').then((todo)=>{
        console.log(todo);
},(err)=>{
    console.log(err);
});