const express = require('express') 
const mongo = require('mongodb')
const port = 3000

const app = express()
const MongoClient = mongo.MongoClient
const MongoURL = 'mongodb+srv://it59160501:lidz123456@pokemon-cluster-wzc8t.gcp.mongodb.net/test?retryWrites=true&w=majority'


const database = "pokemondb"
const collection = "pokemons"
const options = { useNewUrlParser : true, useUnifiedTopology : true}
const client = new MongoClient(MongoURL,options)

app.use(express.json())

app.post('/pokemons',(req, res)=>{
    client.connect(connected)
    function connected(err,client){

    }


    client.connect((err,client)=> {
        if(err){
            console.log(err)
            res.status(500).send({error:err})
            return 
        }
        let db = client.db(database)
        db.collection(collection).insertOne({name:"test"}, (err, r)=>{
            res.status(201).send({message:'Create pokemon successfully'})
            return
        })
    })
})

app.get('/airbnb/list-reviews',(req, res)=>{
    client.connect((err,client)=> {
        if(err){
            console.log(err)
            res.status(500).send({error:err})
            return 
        }
        let db = client.db("sample_airbnb")
        db.collection("listingsAndReviews").find( {} ).limit(10).toArray((err,r)=>{
            res.send(r)
        })
    })
})


app.listen(port, () => console.log(`Pokemon!! API listening on port ${port}!`))
