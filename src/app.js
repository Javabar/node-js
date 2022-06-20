
// Task 1 Build an application that allows you to add movies to an
// array with the possibility optional additional information.


// const Movie = require("./utils")
// const input = process.argv;

// const app = (argvArr) => {
// if (input[2] === "add") {
//     const movieObj = new Movie(argvArr[3], argvArr[4]);
//     movieObj.add();
// } else if (argvArr[2] === "addMulti") {
//     const movie1 = new Movie(argvArr[3], argvArr[4]);
//     const movie2 = new Movie(argvArr[5], argvArr[6]);
//     movie1.add();
//     movie2.add();
// };
// };

// app(process.argv)

// task 1 end 

// task 2 Build an improved version of the movie app using the yargs command 

const Movie = require("./utils")
const yargs = require("yargs");

console.log(yargs.argv);
const app = (argvArr) => {
    if (argvArr[2] === "add") {
        const movieObj = new Movie(argvArr[3], argvArr[4]);
        movieObj.add();
    } else if (argvArr[2] === "addmulti") {
        const movie1 = new Movie(argvArr[3], argvArr[4]);
        const movie2 = new Movie(argvArr[5], argvArr[6]);
        movie1.add();
        movie2.add();
    };
};








// const movies = [];
// console.log(input)

// const movies = [];
// movies.push(input[2]);

// console.log(movies);

// if(input[2] === "add") {
//     movies.push({title: input[3], actor: input[4]});
//     console.log(movies);
// }











