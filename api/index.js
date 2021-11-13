import express from 'express'
import mongoose from 'mongoose'
import redis from 'redis'
import cors from 'cors'

// Express configuration
const app = express()
const port = 5000

// Mongoose configuration
const mongo_client = mongoose.createConnection('mongodb://dbuser:dbpass@mongo:27017')

// Redis configuration
const redis_client = redis.createClient("redis://redis:6379/1")

// Enable CORS from all the origins
app.use(cors({
	origin: ['http://interface']
}))

app.get("/ping", cors(), (req, res) => {
	res.send("pong!")
})

app.listen(port, () => {
	console.log(`Server has started at http://localhost:${port}`)
})
