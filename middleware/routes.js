import express from 'express'
import { createClient } from 'redis'
import SonarLogs from './models/SonarLogs.js'
import CameraLogs from './models/CameraLogs.js'
const router = express.Router()

const redis_client = createClient({ url: "redis://redis:6379" })
redis_client.on('connect', () => { console.log('Redis is ready') }).on('error', (err) => { console.log('Redis Client Error', err) })
await redis_client.connect()

router.get('/sotiris', async (req, res) => {
  const sonar_front = await redis_client.get('sonar_front').then((value) => {
    return value
  })

  const sonar_back = await redis_client.get('sonar_back').then((value) => {
    return value
  })

  const speed = await redis_client.get('speed').then((value) => {
    return value
  })

  const logs = new SonarLogs({
    speed: speed,
    sonar_front: sonar_front,
    sonar_back: sonar_back
  })

  await logs.save()

  res.send({'front': sonar_front, 'back': sonar_back, 'speed': speed})
})

router.post('/sotiris', async (req, res) => {
  redis_client.set('stop', 1)
})

router.post('/camera', async (req, res) => {
  redis_client.set('found', req.body.found)
  redis_client.set('go', req.body.go)

  const logs = new CameraLogs({
    found: req.body.found,
    go: req.body.go
  })

  await logs.save()
  res.send(logs)
})

router.get('/', async (req, res) => {
  res.send("Hello World!")
})

export default router