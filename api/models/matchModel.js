'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MatchSchema = new Schema({
    Date: {
        type: String
    },
    HomeTeam: {
        type: String
    },
    AwayTeam: {
        type: String
    },
    League: {       
            type: String     
    },
    HC: {
        type: Number
    },
    AC: {
        type: Number
    }
   
});

module.exports = mongoose.model('Matches', MatchSchema);