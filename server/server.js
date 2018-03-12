var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
    text : {
        type : String,
        required: true
    },
    completed : {
        type : Boolean,
        required: true
    },
    completedAt : {
        type : Number,
        required: true
    }
});

var todo1 = new Todo({
    text : "Cook tomorrow's lunch",
    completed : false,
    completedAt : 23
});

todo1.save().then((doc)=>{
    console.log(doc);
},(err)=>{
    console.log('unable to save document');
});
