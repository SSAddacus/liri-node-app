var Media = require("./logic2");
var media = new Media();
var search = process.argv[2];
var term = process.argv.slice(3).join(" ");
if (!search) {
 search = "movie";
}
if (!term) {
 term = "Mr. Nobody";
}
if (search === "song") {
 console.log("Searching For Band");
}
if (search === "concert") {
 console.log("Searching For Concerts");
}
if (search === "movie") {
 console.log("Searching For Movie");
 media.findMovie(term);
}