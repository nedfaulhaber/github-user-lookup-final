exports.Repo = function(){
}

var apiKey = require("./../.env").apiKey;

exports.Repo.prototype.getRepos = function(username) {
  $.get("https://api.github.com/users/" + username + "/repos?access_token=" + apiKey).then(function(response) {

    response.forEach(function(repo) {
      $("ol#showRepos").append("<li>" + "Repo Name: " + repo.name + ",  Description: " + repo.description + "</li>");
    });

  }).fail(function(error){
      $("ol#showRepos").text(error.responseJSON.message);
    });
}
