import express from 'express'
import mongoose from 'mongoose'
import router from './routes.js'

mongoose
	.connect("mongodb://dbuser:dbpass@mongo:27017/test?authSource=admin", {
		"useNewUrlParser": true
	})
	.then(() => {
		const app = express()
		app.use(express.json())
		app.use("/api", router)

		app.listen(8351, () => console.log("Middleware has started!"))
	})
