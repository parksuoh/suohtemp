const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, // 스페이스를 없에준다
        unique: 1 //똑같은 이메일 쓰지 못하게
    },
    password: {
        type: String,
        minlenth: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: { // 일반사용자 관리자등 나누는 기준
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }

})

const User = mongoose.model('User', userSchema)

module.exports = {User}