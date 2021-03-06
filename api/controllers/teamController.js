'use strict';

var mongoose = require('mongoose'),
    Team = mongoose.model('Teams');

exports.list_all_teams = function (req, res) {
    Team.find({}, function (err, teams) {
        if (err)
            res.send(err);
        res.json(teams);
    });
};




exports.create_a_team = function (req, res) {
    var new_team = new Team(req.body);
    new_team.save(function (err, team) {
        if (err)
            res.send(err);
        res.json(team);
    });
};


exports.read_a_team = function (req, res) {
    Task.findById(req.params.teamId, function (err, team) {
        if (err)
            res.send(err);
        res.json(team);
    });
};


exports.update_a_team = function (req, res) {
    Team.findOneAndUpdate({ _id: req.params.teamId }, req.body, { new: true }, function (err, team) {
        if (err)
            res.send(err);
        res.json(team);
    });
};


exports.delete_a_team = function (req, res) {


    Team.remove({
        _id: req.params.teamId
    }, function (err, team) {
        if (err)
            res.send(err);
        res.json({ message: 'Team successfully deleted' });
    });
};