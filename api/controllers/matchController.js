'use strict';

var mongoose = require('mongoose'),
    Matches = mongoose.model('Matches');

exports.list_all = function (req, res) {
    Matches.find({}, function (err, matches) {
        if (err)
            res.send(err);
        res.json(matches);
    });
};

exports.read_matches_hometeam= function (req, res) {
    Matches.find({ 'HomeTeam': req.params.teamId }, function (err, matches) {
        if (err)
            res.send(err);
        res.json(matches);
    });
};

exports.read_corners_hometeam = function (req, res) {
    Matches.aggregate([{
        $match: { 'HomeTeam': req.params.teamId },
    }, {
        $group: {
            _id: null,
            total: {
                $avg: "$HC"
            }
        }
    }], function (err, sum) {
        if (err)
            res.send(err);

        res.send(sum);
    });
};



exports.read_corners_awayteam = function (req, res) {
    Matches.aggregate([{
        $match: { 'AwayTeam': req.params.teamId },
    }, {
        $group: {
            _id: null,
            total: {
                $avg: "$AC"
            }
        }
        }], function (err, sum) {
            if (err)
                res.send(err);

            res.send(sum);
        });
   
};

exports.read_ycards_awayteam = function (req, res) {
    Matches.aggregate([{
        $match: { 'AwayTeam': req.params.teamId },
    }, {
        $group: {
            _id: null,
            total: {
                $avg: "$AY"
            }
        }
    }], function (err, sum) {
        if (err)
            res.send(err);

        res.send(sum);
    });

};
exports.read_ycards_hometeam = function (req, res) {
    Matches.aggregate([{
        $match: { 'HomeTeam': req.params.teamId },
    }, {
        $group: {
            _id: null,
            total: {
                $avg: "$HY"
            }
        }
    }], function (err, sum) {
        if (err)
            res.send(err);

        res.send(sum);
    });

};
exports.read_rcards_awayteam = function (req, res) {
    Matches.aggregate([{
        $match: { 'AwayTeam': req.params.teamId },
    }, {
        $group: {
            _id: null,
            total: {
                $avg: "$AR"
            }
        }
    }], function (err, sum) {
        if (err)
            res.send(err);

        res.send(sum);
    });

};

exports.read_rcards_hometeam = function (req, res) {
    Matches.aggregate([{
        $match: { 'HomeTeam': req.params.teamId },
    }, {
        $group: {
            _id: null,
            total: {
                $avg: "$HR"
            }
        }
    }], function (err, sum) {
        if (err)
            res.send(err);

        res.send(sum);
    });

};

