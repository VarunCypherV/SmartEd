const mongoose = require('mongoose')

const userDetailsSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 6
    },
    age: {
        type: Number,
        required: true,
        validate: {
            validator: function (value) {
                return value < 6;
            },
            message: 'Age must be 6 or less'
        }
    },
    DOB: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    user_image: {
        type: Buffer //optional obviouslt
    },
    points: {
        type: Number,
        default: 0
    },
    rank: {
        type: Number,
        default: 0
    }


})

module.exports = mongoose.model('UserDetails', userDetailsSchema)

