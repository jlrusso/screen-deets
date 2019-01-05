const path = require('path');
const fs = require('fs');
const uniqid = require('uniqid');

const pathToFile = path.join(__dirname, '../data', 'movies.json');

const getMoviesFromFile = callback => {
  fs.readFile(pathToFile, (err, content) => {
    if(err) return callback([]);
    return callback(JSON.parse(content));
  });
}

module.exports = class Movie {
  constructor(title, date, image, desc){
    this.title = title;
    this.image = image;
    this.desc = desc;
    this.date = date;
  }
  checkForDuplicates(title){
    fs.readFile(pathToFile, (err, content) => {
      if(!err){
        const duplicatePresent = JSON.parse(content).some(movie => movie.title === title);
        if(!duplicatePresent){
          this.addMovie();
        }
      }
    });
  }
  addMovie(){
    this.id = uniqid();
    getMoviesFromFile((movies) => {
      movies.push(this);
      fs.writeFile(pathToFile, JSON.stringify(movies, null, 2), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(callback){
    getMoviesFromFile(callback);
  }
  //we use static so we can access it via the class, not by creating an instance
  static fetchMovie(movieId, callback){
    getMoviesFromFile(movies => {
      const movie = movies.find(mov => mov.id === movieId) 
      callback(movie);
    });
  }
}