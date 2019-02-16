let mongoose = require('mongoose')

const server = 'ds135305.mlab.com:35305'
const database = 'rest-api'
const user = 'hvs2394'
const pwd = 'himanshu3120'

mongoose.connect(`mongodb://${user}:${pwd}@${server}/${database}`)

let CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('Customer', CustomerSchema)
