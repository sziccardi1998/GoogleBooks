// define all dependencies
const db = require("../models");

// define methods for bookController
module.exports = {
    // find book
    showAll: function(req, res) {

        db.Book.find(req.query).sort({ date: -1 })
        .then((results) => res.json(results))
        .catch((err) => res.status(422).json(err));
    },
    // search db with id
    findID: function(req, res) {
        db.Book.findById(req.params.id).then((result) => res.json(result))
        .catch((err) => res.status(422).json(err));
    },
    // update entry
    update: function(req, res) {
        db.Book.findOneAndUpdate({ _id: req.params.id }, req.body).then((result) => res.json(result))
        .catch((err) => res.status(422).json(err));
    },
    // delete entry
    delete: function(req, res) {
        db.Book.findById({ _id: req.params.id}, req.body).then((result) => result.remove())
        .then((result) => res.json(result))
        .catch((err) => res.status(422).json(err));
    },
    // create entry
    create: function(req, res) {
        db.Book.create(req.body).then((result) => res.json(result))
        .catch((err) => res.status(422).json(err))
    },
};