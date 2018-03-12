// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err , db) => {
   if(err) return console.log('unable to reach the mongodb sever');
    console.log('connected to the server');
    // db.collection('Users').findOneAndUpdate({age : 25},{ $set : {age : 26}},{returnOriginal: false})
    // .then(function(result){
    //     console.log(result);
    // });
    db.collection('Users').findOneAndUpdate({name : 'aziz'},{$set : {name : 'karim'}, $inc : {age : -2}},{returnOriginal : false})
    .then(function(result){
        console.log(result);
    });

    // db.close();
});