
const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const CommentsSchema = new Schema({
    jobber_id: {
        type: String,
        trim: true,
        required: true,
    },
    comment: {
        type: String,
        trim: true,
        required: true,
    },
    rating: {
        type: Number,
        trim: true,
        required: true,
    },
    in_search: {
        type: Number,
        trim: true,
        required: true
    },
    comment_category: {
        type: String,
        trim: true,
        required: true
    },
    autor_id: {
        type: String,
        trim: true,
        required: true
    }
    ,
    date: {
        type: Date,
        trim: true,
        required: true
    }
});

module.exports = mongoose.model('Comments', CommentsSchema)
