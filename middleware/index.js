import express from 'express'
import mongoose from 'mongoose'
import router from './routes.js'
import cors from 'cors'

mongoose
	.connect("mongodb://dbuser:dbpass@mongo:27017/test?authSource=admin", {
		"useNewUrlParser": true
	})
	.then(() => {
		const app = express()
		app.use(express.json())
		app.use("/api", router)
		app.use(cors())

		app.listen(8351, "20.0.0.202", () => console.log("Middleware has started!"))
	})
