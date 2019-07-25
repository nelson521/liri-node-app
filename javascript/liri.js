require("dotenv").config();

let keys = require("./keys.js");

// let spotify = new Spotify(keys.spotify);

let axios = require('axios');


let subject = process.argv[2];
let artist = process.argv[3];

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

};

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
    console.log(`Title: ${response.data.Title}`);
    // console.log(response.data);
    // console.log(response.data);
  //   * Title of the movie.
  //  * Year the movie came out.
  //  * IMDB Rating of the movie.
  //  * Rotten Tomatoes Rating of the movie.
  //  * Country where the movie was produced.
  //  * Language of the movie.
  //  * Plot of the movie.
  //  * Actors in the movie.


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

