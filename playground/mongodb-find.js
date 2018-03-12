// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err , db) => {
    // if(err) return console.log('unable to connect to the server');
    // console.log('Connected to the server');
    // db.collection('Todos').find({completed : true})
    // .toArray().then((docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('unable to fetch data ',err);
    // });
    db.collection('Users').find()
    .count().then(function(c){
        console.log(`We have ${c} user(s)`);
    },function(err){
        console.log('Error !');
    });
    db.collection('Users').find()
    .toArray().then(function(d){
        console.log(JSON.stringify(d,undefined,2));
    },function(e){
        console.log("Error !");
    });
    

    // db.close();
});