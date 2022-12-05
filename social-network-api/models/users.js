const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    middlename: { type: String, required: false },
    lastname: { type: String, required: true },
    password: { type: String, required: true },
    birthday: { type: Date, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true },
    phonenumber: { type: String, required: false },
    datecreated: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model("User", userSchema);