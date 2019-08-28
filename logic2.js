var axios = require("axios");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var Media = function() {
 var divider = "\n---------------------------------------------\n\n";
 this.findMovie = function(movie) {
   var URL = "http://www.omdbapi.com/?t=" + movie + "&apikey=212317f6";
   axios.get(URL).then(function(response) {
     var jsonData = response.data;
     console.log(jsonData.Title);
     var movieData = [
       "Movie: " + jsonData.Title,
       "Year: " + jsonData.Year,
       "Rated: " + jsonData.Rated,
       "Plot: " + jsonData.Plot
     ].join("\n\n");
     fs.appendFile("log.txt", movieData + divider, function(err) {
       if (err) throw err;
       console.log(movieData);
     });
   });
 };
 this.findSong = function(song) {
   var URL = "http://open.spotify.com/track/6rqhFgbbKwnb9MLmUQDhG6" + song;
   axios.get(URL).then(function(response) {
       
     var jsonData = response.data;
     var songData = [
         "Song: " + jsonData.data.song.title
        ].join("\n\n");
     fs.appendFile("log.txt", songData + divider, function(err) {
       if (err) throw err;
       console.log(songData);
     });
   });
 };
};
module.exports = Media;