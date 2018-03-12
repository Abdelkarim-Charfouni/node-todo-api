const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err , db){
        if(err){
            return console.log('unable to connect to the server');
        }
        console.log('connected to the mongodb server');
        // db.collection('Todos').insertOne({
        //     text : "somthing to do",
        //     completed : false
        // },(err , result) => {
        //     if(err){
        //         return console.log('unable to insert');
        //     }
        //     console.log(JSON.stringify(result.ops,undefined,2));
        // });
        db.collection('Users').insertOne({
            name : 'Abdelkarim',
            neighberhood : 'SYBA',
            school : 'ENSA'
        },(err , result) => {
            if(err) return console.log('unable to insert that user');
            console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
        });

        db.close();
});
