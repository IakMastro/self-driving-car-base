const axios = require('axios')

axios.post('http://20.0.0.202:8351/api/sonar', {
  sonar_front: Math.floor(Math.random() * (20 + 30 - 1) + 20),
  sonar_back: Math.floor(Math.random() * (20 + 30 - 1) + 20)
})
axios.post('http://20.0.0.202:8351/api/speed', { speed: Math.floor(Math.random() * (5 + 10 - 1) + 5) })
axios.post('http://20.0.0.202:8351/api/accelerate', { accelerate: Math.floor(Math.random() * (5 + 10 - 1) + 5) })