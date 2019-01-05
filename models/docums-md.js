const path = require('path');
const fs = require('fs');
const uniqid = require('uniqid');

const pathToFile = path.join(__dirname, '../data', 'docums.json');

const getDocumsFromFile = (callback) => {
  fs.readFile(pathToFile, (err, content) => {
    if(!err){
      callback(JSON.parse(content));
    } else {
      callback([]);
    }
  })
}

module.exports = class Documentary {
  constructor(title, date, image, desc){
    this.title = title;
    this.date = date;
    this.image = image;
    this.desc = desc;
  }
  addDocumentary(){
    this.id = uniqid();
    getDocumsFromFile((docums) => {
      docums.push(this);
      fs.writeFile(pathToFile, JSON.stringify(docums, null, 2), err => {
        console.log(err);
      });
    });
  }
  static fetchAll(callback){
    getDocumsFromFile(callback);
  }

  static fetchDocum(documId, callback){
    getDocumsFromFile(docums => {
      const docum = docums.find(docum => docum.id === documId);
      callback(docum);
    });
  }
}