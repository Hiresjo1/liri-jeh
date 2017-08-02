// this is how we import the twit package
var Twit = require('twitter'); 
//this is we import the config file which is a js file which contains the keys and tokens
var config = require('./config');
// this is where we push the inquirer js module for data 
var ask = require('inquirer');
//this is the object of twit which will help us to call functions inside it
var T = new Twit({config});
// this is the param variable which will have key and value ,the key is the keyword which we are interested in searching and count is the count of it 
var T = new Twit({
  consumer_key: config.twitterKeys["consumer_key"],
  consumer_secret: config.twitterKeys["consumer_secret"],
  access_token_key: config.twitterKeys["access_token_key"],
  access_token_secret: config.twitterKeys["access_token_secret"]
});


var params = {
screen_name: "Fuckedschizo",
count: 5
} 
T.get('search/tweets', params,searchedData); // get is the function to search the tweet which three paramaters 'search/tweets',params and a callback function.
function searchedData(err, data, response) {
console.log(data);
} // searchedData function is a callback function which returns the data when we make a search

T();
