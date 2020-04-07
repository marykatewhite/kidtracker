const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
  lastname: {
    type: String,
    trim: true,
    required: "Last Name is Required"
  },

  firstname: {
    type: String,
    trim: true,
    required: "First Name is Required"
  },

  classroom: {
    trim: true,
  }


});

const Teacher = mongoose.model("Teacher", TeacherSchema);

module.exports = Teacher;