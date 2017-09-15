'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeamsSchema = new Schema({
    Name: {
        type: String,
        required: 'Please enter the name of the team'
    },
    League: {       
            type: String,
            required: 'Please enter the League'
    }
   
});

module.exports = mongoose.model('Teams', TeamsSchema);