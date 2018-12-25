// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to mongo server');
    }
    console.log('Mongodb connected successfully');
    const db = client.db('TodoApp');
    
    // db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result)=>{
    //     console.log(result);
        
    // });

    db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
        console.log(result);
        
    })

    client.close();
})