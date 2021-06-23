const Student = require("../models/student");

function indexRoute(req, res, next) {
    Student.find()
        .exec()
        .then(students => res.json(students))
        .catch(next);
}

function createRoute(req, res, next) {
    Student.create(req.body)
        .then(student => res.status(201).json(student))
        .catch(next);
}

function showRoute(req, res, next) {
    Student.findById(req.params.id)
        .exec()
        .then(student => {
            if (!student) return res.notFound();
            res.json(student);
        })
        .catch(next);
}

function updateRoute(req, res, next) {
    Student.findById(req.params.id)
        .then(student => {
            if (!student) return res.notFound();

            for (const field in req.body) {
                student[field] = req.body[field];
            }
            return student.save();
        })
        .then(student => res.json(student))
        .catch(next);
}

function deleteRoute(req, res, next) {
    Student.findById(req.params.id)
        .exec()
        .then(student => {
            if (!student) return res.notFound();
            return student.remove();
        })
        .then(() => res.status(204).end())
        .catch(next);
}

module.exports = {
    index: indexRoute,
    create: createRoute,
    show: showRoute,
    update: updateRoute,
    delete: deleteRoute
};
