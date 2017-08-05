const mongoose = require('mongoose')

module.exports = mongoose.model('Page', new mongoose.Schema({
  url: String,
  texts: String,
}));
