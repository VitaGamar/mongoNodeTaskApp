const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://mongo:27017';
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if(error){
        return console.log('unable to connect to db')
    }
    console.log('connected1')
    const db = client.db(databaseName)

    /*db.collection('users').insertOne({
        name: 'Vita',
        age: 27
    }, (error, res) => {
        if(error) {
            return console.log('Disable to insert')
        }
        console.log(res.ops)
    })*/
    /*db.collection('users').insertMany([{
        name: 'Jane',
        age: 28
    },
        {
            name: 'Ganter',
            age: 25
        }], (error, result) => {
            if(error){
                return console.log('error')
            }
            console.log(result.ops)
    })*/
})