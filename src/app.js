const yargs = require("yargs");
const fs = require("fs");
const { addMovie, listMovies, updateMovie, deleteMovie } = require("./utils/index.js");

const app = () => {
    try {
        let movieArr;
        try {
            movieArr = JSON.parse(fs.readFileSync('./storage.json'));
        } catch (error) {
            movieArr = [];
        }

        try {
            if (process.argv[2] === 'add') {
                addMovie(movieArr, {title: yargs.argv.title, actor: yargs.argv.actor});
            } else if (process.argv[2] === 'list') {
                listMovies();
            } else if (process.argv[2] === 'update') {
                updateMovie(movieArr, 
                            {title: yargs.argv.title, actor: yargs.argv.actor}, 
                            {title: yargs.argv.newTitle, actor: yargs.argv.newActor});
            } else if (process.argv[2] === 'delete') {
                deleteMovie(movieArr, {title: yargs.argv.title, actor: yargs.argv.actor})
            }

        } catch (error) {
            console.log(error);
        }


    } catch (error) {
        console.log();
    }
};

app();