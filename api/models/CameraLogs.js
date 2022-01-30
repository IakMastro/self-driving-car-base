import mongoose from 'mongoose'

const schema = mongoose.Schema({
  go: String,
  found: String
})

export default mongoose.model("CameraLogs", schema)