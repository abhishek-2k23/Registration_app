const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  Age: {
    type: Number,
  },
  Email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
  },
  gender: {
    type: String,
    required: true,
  },
  Password : {
    type : String,
    required : true,
  }
});

module.exports = mongoose.model("Schema", schema);
