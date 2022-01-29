import express from 'express'
import { createClient } from 'redis'
const router = express.Router()

const redis_client = createClient({ url: "redis://redis:6379" })
redis_client.on('connect', () => { console.log('Redis is ready') }).on('error', (err) => { console.log('Redis Client Error', err) })
await redis_client.connect()

router.get('/sonar_front', async (req, res) => {
  const sonar_front = redis_client.get('sonar_front').then(
    (front) => res.send({'front': front})
  )
})

router.get('/sonar_back', async (req, res) => {
  const sonar_back = redis_client.get('sonar_back').then(
    (back) => res.send({'back': back})
  )
})

router.get('/speed', async (req, res) => {
  const speed = redis_client.get('speed').then(
    (speed) => res.send({'speed': speed})
  )
})

router.get('/', async (req, res) => {
  res.send("Hello World!")
})

// router.post("/sonar", async (req, res) => {
//   redis_client.set('sonar_front', req.body.front)
//   redis_client.set('sonar_back', req.body.back)
//   // const post = new Post({
//   //   title: req.body.tile,
//   //   content: req.body.content
//   // })

//   // await post.save()
//   // res.send(post)
// })

export default router