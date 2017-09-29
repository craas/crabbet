'use strict';

module.exports = function(app) {
  var matches = require('../controllers/matchController');

  //  Routes
  app.route('/matches')
      .get(matches.list_all)

  app.route('/matches/:teamId')
      .get(matches.read_matches_hometeam)

  app.route('/cornershome/:teamId')
      .get(matches.read_corners_hometeam)

  app.route('/cornersaway/:teamId')
      .get(matches.read_corners_awayteam)

  app.route('/ycardsaway/:teamId')
      .get(matches.read_ycards_awayteam)
  app.route('/ycardshome/:teamId')
      .get(matches.read_ycards_hometeam)
  app.route('/rcardsaway/:teamId')
      .get(matches.read_rcards_awayteam)
  app.route('/rcardshome/:teamId')
      .get(matches.read_rcards_hometeam)



};
