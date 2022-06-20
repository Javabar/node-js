const Movie = require("./utils")
const input = process.argv;


if(input[2] === "add") {
    const movieObj = new Movie("Spiderman", "Andrew Garfield");
    movieObj.add();
}

// const movies = [];
// console.log(input)

// const movies = [];
// movies.push(input[2]);

// console.log(movies);

// if(input[2] === "add") {
//     movies.push({title: input[3], actor: input[4]});
//     console.log(movies);
// }











