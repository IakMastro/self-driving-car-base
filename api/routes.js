import express from 'express'
import SonarLogs from './models/SonarLogs.js'
import CameraLogs from './models/CameraLogs.js'
const router = express.Router()

router.get('/sonar', (res, req) => {
  SonarLogs.find({}, (err, logs) => {
    req.send(logs)
  })
})

router.get('/camera', (res, req) => {
  CameraLogs.find({}, (err, logs) => {
    req.send(logs)
  })
})

export default router