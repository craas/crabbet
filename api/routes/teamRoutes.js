'use strict';

module.exports = function(app) {
  var teams = require('../controllers/teamController');

  // todoList Routes
  app.route('/teams')
      .get(teams.list_all_teams)
      .post(teams.create_a_team);


  app.route('/teams/:teamId')
      .get(teams.read_a_team)
      .put(teams.update_a_team)
      .delete(teams.delete_a_team);
};
