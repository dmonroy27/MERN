const mongoose = require("mongoose")

const UserChema = mongoose.Schema({
    firtsname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type:String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: String,
    active: Boolean,
    avatar: String,
})

module.exports =mongoose.model("User", UserChema)