const fs = require("fs");

const addMovie = async (collection, movieObj) => {
    try {
        await collection.insertOne(movieObj);
        console.log(`Successfully added ${movieObj.title}.`);
        
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