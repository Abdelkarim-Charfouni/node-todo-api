var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');

Todo.findOneAndUpdate({text : "read a book"},{$set : {completed : true}},{returnOriginal : false})
.then((todo)=>{
    console.log(todo);
},(err)=>{
    console.log(err);
});

Todo.find().then((todos) => {
    console.log('Todos : ',todos);
},(err) => {
    console.log(err);
});