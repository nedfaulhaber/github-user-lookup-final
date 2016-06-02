var Repo = require("./../js/ghuser.js").Repo;

$(document).ready(function() {

  var currentRepoObject = new Repo();

  $("form#input").submit(function(event) {
    event.preventDefault();

    var username = $("#ghUsername").val();
    $("#ghUsername").val("");

    currentRepoObject.getRepos(username);
    console.log('test');
  });
});
