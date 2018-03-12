// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err , db) => {
   if(err) return console.log('unable to reach the mongodb sever');
    console.log('connected to the server');
    // db.collection('Todos').deleteMany({text : 'eat lunch'})
    // .then(function(result){
    //     console.log('Deleted succefully');
    // },function(err){
    //     console.log('Error !');
    // });
    // db.collection('Users').deleteMany({name : "Abdelkarim"})
    // .then(function(result){
    //     console.log('All documents deleted');   
    // });

    db.collection('Users').findOneAndDelete({name : "karim"})
    .then(function(res){
        console.log(res);
    });

    // db.close();
});