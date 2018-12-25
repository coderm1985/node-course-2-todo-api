// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to mongo server');
    }
    console.log('Mongodb connected successfully');
    const db = client.db('TodoApp');
    
    // db.collection('Todos').find({
    //     _id: new ObjectID('5c1f375534e3a52d58719214')
    //     }).toArray().then((docs)=>{
    //     console.log('Todos:')
    //     console.log(JSON.stringify(docs,undefined,2))
    // },(err)=>{
    //     console.log('Unable to fetch records',err);
    // });

    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count: ${count}`);
        
    // },(err)=>{
    //     console.log('Unable to fetch records',err);
    // })

    db.collection('Users').find({
        name:'Swatu'
    }).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));        
    },(err)=>{
        console.log('Unable to fetch record',err);        
    });

    client.close();
})