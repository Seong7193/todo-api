//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// // Object Destructuring
// var user = { name: 'SeongHyunHan', age: 25};
// var {name} = user;
// console.log(name);

//connect to client
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const myDb = db.db('TodoApp');



    // myDb.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // Insert new doc into Users (name, age, location)
    // myDb.collection('Users').insertOne({
    //     name: 'Seong Hyun Han',
    //     age: 29,
    //     location: 'Oakville'
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    //close connection
    db.close();
});

