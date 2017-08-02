"use strict";
var keys = require("./config.js");
var twitter = require("twitter");
var prompt = require("prompt");
var request = require("request");
var inquirer = require("inquirer");



var getTweets = function(){
    var client = new twitter({
          consumer_key: "config.consumer_key",
          consumer_secret: "config.consumer_secret",
          access_token_key: "config.access_token_key",
         access_token_secret: "config.access_token_secret"

});
    
    var params = {screen_name: "Fuckedschizo", count: 5};
    client.get("statuses/user_timeline", params, function(error, tweets, response) {
          if (error) {
              console.log(error)
          }else{
        console.log(tweets);
        }
        
 })

}



getTweets();


var getMovie = function(){
inquirer.prompt([
    {
        type: "input",
        name: "movieName",
        message: "movie-this"
    }
    // console.log(prompt[1].name);

    ]).then(function(input){
        var movieName = input.movieName;

        if (movieName === undefined) {
    movieName = "Mr Nobody";
  }
    // http://www.omdbapi.com/?i=tt3896198&apikey=3cbae97b
var queryUrl = "http://www.omdbapi.com/?i=" + movieName + "&y=&plot=short&apikey=3cbae97btomatoes=true&r=JSON";

request(queryUrl, function(error, response, body) {
if (!error && response.statusCode === 200) {
    // console.log(JSON.parse(body)); test to make sure movie information is successfully returned

   // Parse the body of the site and recovering the requested information
    console.log(JSON.parse(body).Title);
    console.log(JSON.parse(body).Year);
    console.log(JSON.parse(body).imdbRating);
    console.log(JSON.parse(body).Country);
    console.log(JSON.parse(body).Language);
      console.log(JSON.parse(body).Plot);
    console.log(JSON.parse(body).Actors);
    console.log(JSON.parse(body).tomatoRating);
    
 }
    


})
// end of .then function
});

// end of getMovie function
};    

getMovie();
return;

