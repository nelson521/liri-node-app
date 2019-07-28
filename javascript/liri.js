require("dotenv").config();

let keys = require("./keys.js");

// let spotify = new Spotify(keys.spotify);

let axios = require('axios');

let Spotify = require('node-spotify-api');
// let spotify = new Spotify(keys.spotify);
let subject = process.argv[2];
let artist = process.argv[3];

var spotify = new Spotify(keys.spotify);



switch (subject) {
  case 'spotify-this':
    return doSpotify();
  case 'concert-this':
    return doConcert();
  case 'movie-this':
    return doMovie();
  case 'do-what-it-says':
    return doSays();
  default:
    console.log('Error!')
};

function doSpotify(){

  
  spotify.search({ type: 'track', query: artist }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(JSON.stringify(data, null, 2));
  console.log("Album", data.tracks.items[0].name);
  console.log("Album", data.tracks.items[0].name);
    
  });
};
doSpotify()

function doConcert(){
  let concertUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
  axios.get(concertUrl)
  .then(function (response) {
    // handle success
    console.log(response.data[0].venue.name);
    console.log(response.data[0].venue.city);
    console.log(response.data[0].datetime);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  
};

function doMovie(){
  let movieUrl = "http://www.omdbapi.com/?t=" + artist + "&y=&plot=short&apikey=trilogy";
  axios.get(movieUrl)
  .then(function (response) {
    // handle success
    console.log(`Title: ${response.data.Title} Year: ${response.data.Year} Rating: ${response.data.Ratings} Country: ${response.data.Country} Language: ${response.data.Language} Plot: ${response.data.Plot} Actors: ${response.data.Actors} `);


  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
};

function doSays(){

};

