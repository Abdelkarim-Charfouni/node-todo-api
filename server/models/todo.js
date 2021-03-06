var mongoose = require('mongoose');

//Mongoose : Creation of Todo model
var Todo = mongoose.model('Todo',{
    text : {
        type : String,
        required: true,
        trim : true
    },
    completed : {
        type : Boolean,
        default : false
    },
    completedAt : {
        type : Number,
        default: null
    }
});

module.exports = {
    Todo
}