const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const JobberSchema = new Schema({
    first_name: {
        type: String,
        trim: true,
        required: true,
    },
    last_name: {
        type: String,
        trim: true,
        required: true,
    },
    second_name: {
        type: String,
        trim: true,
        required: true,
    },
    inn: {
        type: Number,
        trim: true,
        required: true
    },
    birthday: {
        type: Date,
        trim: true,
        required: true
    },
    phone: {
        type: Number,
        trim: true,
        required: true
    },
    city: {
        type: String,
        trim: true,
        required: true,
    },
});

module.exports = mongoose.model('Jobber', JobberSchema)