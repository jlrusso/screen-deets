const path = require('path');
const fs = require('fs');
const uniqid = require('uniqid');

const pathToFile = path.join(__dirname, '../data', 'shows.json');

const getShowsFromFile = callback => {
  fs.readFile(pathToFile, (err, content) => {
    if(err) return callback([]);
    return callback(JSON.parse(content));
  });
}
module.exports = class Show {
  constructor(title, date, image, desc){
    this.title = title;
    this.date = date;
    this.image = image;
    this.desc = desc;
  }
  checkForDuplicate(title){
    fs.readFile(pathToFile, (err, content) => {
      if(err){
        this.addShow();
      } else {
        const duplicatePresent = JSON.parse(content).some(show => show.title === title);
        if(!duplicatePresent){
          this.addShow();
        }
      }
    });
  }
  addShow(){
    this.id = uniqid();
    getShowsFromFile(shows => {
      shows.push(this);
      fs.writeFile(pathToFile, JSON.stringify(shows, null, 2), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll(callback){
    getShowsFromFile(callback);
  }

  static fetchShow(showId, callback){
    getShowsFromFile(shows => {
      const show = shows.find(show => show.id === showId);
      callback(show);
    });
  }
}