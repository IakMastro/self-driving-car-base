import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './routes.js'

mongoose
	.connect("mongodb://dbuser:dbpass@mongo:27017/test?authSource=admin", {
		"useNewUrlParser": true
	})
	.then(() => {
		const app = express()
		app.use(express.json())
		app.use("/api", router)
		app.use(cors())

		app.listen(5000, () => console.log("REST has started!"))
	})
