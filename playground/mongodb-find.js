const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB');

    var myDb = db.db("TodoApp");

    // // Read All
    // myDb.collection('Todos').find().toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todoes', err);
    // });

    // // Read all with filter
    // myDb.collection('Todos').find({completed: true}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todoes', err);
    // });

    // // Read only one by ID
    // myDb.collection('Todos').find({
    //     _id: new ObjectID('5a62489aae231d0904f3dce3')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todoes', err);
    // });

    // Count Documents
    // myDb.collection('Todos').find().count().then((count) => {
    //     console.log(`Todoes Counts : ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todoes', err);
    // });

    // Read all with filter
    myDb.collection('Users').find({name: 'Seong Hyun Han'}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todoes', err);
    });
    

    //db.close();
})