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
}