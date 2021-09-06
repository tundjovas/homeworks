const path = require('path');
const helpers = require('../helpers/file');
const pathToFile = path.join(__dirname, '../file.txt');

exports.index = function(req, res, next) {
    var params = req.query;
    if (Object.keys(params).length > 0) {
        res.status(200).json(params);
    } else {
        res.status(400).json('Missing query params!');
    }
};

exports.store = function(req, res, next) { 

    var data = JSON.stringify(req.body);
    helpers.writeToFile(data, pathToFile)
      .then(() => {
        res.status(201).json('Successfully written.');
      })
      .catch(err => {
        res.status(500).json('An error has occured while trying to write. ' + err);
      });
}