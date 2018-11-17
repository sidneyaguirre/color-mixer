const mongoose = require('mongoose')
let config = require('config')

let url = config.DBHost

mongoose.connection.on('error', (err) => {
    if (err) {
        console.log('ERROR:', err)
    } else {
        console.log('Mongoose default connection open')
    }
})

let moon = mongoose.connect(url, { useNewUrlParser: true })

exports = moon