const mongoose = require('mongoose')

const ShortenerSchema = mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    shortcode: {
        type: String,
        unique: true,
        required: true
    },
    createDate: {
        type: Date, 
        default: Date.now
    },
    expirationDate: {
        type: Date,
        default: () => new Date(+new Date() + 7*24*60*60*1000)  // 7 days
    },
})

module.exports = mongoose.model('Shortener', ShortenerSchema)