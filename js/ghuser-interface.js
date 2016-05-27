var Repo = require("./../js/ghuser.js").Repo;

$(document).ready(function() {
  var currentRepoObject = new Repo();
  currentRepoObject.getRepos();
});
