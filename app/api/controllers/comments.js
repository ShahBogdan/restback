const CommentsSchema = require('../models/comments');
module.exports = {

    create: function (req, res, next) {
        CommentsSchema.create({
            jobber_id: req.body.jobber_id, 
            comment: req.body.comment, 
            rating: req.body.rating, 
            in_search: req.body.in_search, 
            comment_category: req.body.comment_category,
            autor_id:req.body.autor_id,
            date:new Date()
        }, function (err, result) {
            if (err)
                next(err);
            else
                res.json({ status: "success", message: "Comment added successfully!!!", data: null });
        });
    },

    getAll: function (req, res, next) {
        let commentsList = [];
        CommentsSchema.find({jobber_id:req.params.jobber_id}, function (err, comments) {
            if (err) {
                next(err);
            } else {

                for (let comment of comments) {
                    commentsList.push({
                        jobber_id: jobber_id,
                        comment: comment.comment, 
                        rating: comment.rating , 
                        in_search: comment.in_search , 
                        comment_category: comment.incomment_categoryn , 
                        autor_id: comment.autor_id , 
                        date: comment.date
                    });
                }
                res.json({ status: "success", message: "Joober comments list found!", data: { comments: commentsList } });
            }
        })
    }
}

