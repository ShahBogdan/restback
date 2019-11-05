const JobberSchema = require('../models/jobber');
module.exports = {

    create: function (req, res, next) {
        JobberSchema.create({
            first_name: req.body.first_name, 
            last_name: req.body.last_name , 
            second_name: req.body.second_name , 
            inn: req.body.inn , 
            birthday: req.body.birthday , 
            phone: req.body.phone , 
        }, function (err, result) {
            if (err)
                next(err);
            else
                res.json({ status: "success", message: "jobber added successfully!!!", data: null });
        });
    },
    getByInn: function (req, res, next) {
        console.log(req.body);
        JobberSchema.find({inn:req.params.jobberInn}, function (err, jooberInfo) {
            if (err) {
                next(err);
            } else {
                res.json({ status: "success", message: "Movie found!!!", data: { movies: jooberInfo } });
            }
        });
    },
    getByPhone: function (req, res, next) {
        console.log(req.body);
        JobberSchema.find({phone:req.params.jobberPhone}, function (err, jooberInfo) {
            if (err) {
                next(err);
            } else {
                res.json({ status: "success", message: "Movie found!!!", data: { movies: jooberInfo } });
            }
        });
    },
    getById: function (req, res, next) {
        console.log(req.body);
        JobberSchema.findById(req.params.jobberId, function (err, movieInfo) {
            if (err) {
                next(err);
            } else {
                res.json({ status: "success", message: "jooberId found!!!", data: { movies: movieInfo } });
            }
        });
    },
    getAll: function (req, res, next) {
        let joobersList = [];
        JobberSchema.find({}, function (err, joobers) {
            if (err) {
                next(err);
            } else {

                for (let joober of joobers) {
                    joobersList.push({
                        joober_id: joober._id,
                        first_name: joober.first_name, 
                        last_name: joober.last_name , 
                        second_name: joober.second_name , 
                        inn: joober.inn , 
                        birthday: joober.birthday , 
                        phone: joober.phone
                    });
                }

                res.json({ status: "success", message: "Joobers list found!", data: { joobers: joobersList } });
            }
        })
    }
}

