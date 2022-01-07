const fs = require("fs");
const Movie = require("../models/models");

const addMovie = async (movieObj) => {
    try {
        const newMovie = new Movie(movieObj);
        await newMovie.save();
        console.log("new movie: ", newMovie);
        
    } catch (error) {
        console.log(error);
    }
};

const listMovies = async (collection) => {
    try {
        
        // console.log(await collection.find({}));

        const cursor = await collection.find({});
        const movieArr = await cursor.toArray();
        await collection.find({}).toArray();
        console.log(movieArr);

    } catch (error) {
        console.log(error);
    }
};

const updateMovie = (movieArr, filterObj, newMovie) => {
    let newArr = movieArr;
    for (movie in newArr) {
        if (newArr[movie].title === filterObj.title) {
            
            newArr[movie] = newMovie;
            const stringyObj = JSON.stringify(newArr);
            fs.writeFileSync("./storage.json", stringyObj);
            break
        } else {
            console.log("not equal")
        }
    }
};

const deleteMovie =(movieArr, filterObj) => {
    let newArr = movieArr.filter(movie => movie.title !== filterObj.title);
    const stringyObj = JSON.stringify(newArr);
    fs.writeFileSync("./storage.json", stringyObj);
};

module.exports = {
    addMovie,
    listMovies,
    updateMovie,
    deleteMovie
};