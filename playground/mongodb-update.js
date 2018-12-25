// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to mongo server');
    }
    console.log('Mongodb connected successfully');
    const db = client.db('TodoApp');
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c20b2d8604c103ce7993cca')
    // },{
    //     $set:{
    //         text:'Some thing i just updated'
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result) => {
    //     console.log(result,undefined,2);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c1f375534e3a52d58719215')
    },{
        $set:{
            name:'Chetan M'
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal:false
    }).then((result) => {
        console.log(result,undefined,2);
    });

    client.close();
})