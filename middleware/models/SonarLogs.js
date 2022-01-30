import mongoose from 'mongoose'

const schema = mongoose.Schema({
  speed: String,
  sonar_front: String,
  sonar_back: String
})

export default mongoose.model("SonarLogs", schema)