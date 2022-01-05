const fs = require("fs");

const addMovie = (movieArr, movieObj) => {
    try {
        movieArr.push(movieObj);
        const stringyObj = JSON.stringify(movieArr);
        fs.writeFileSync('./storage.json', stringyObj);
        
    } catch (error) {
        console.log(error);
    }
};

const listMovies = () => {
    try {
        
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