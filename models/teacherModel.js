const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
  caregiverlastname: {
    type: String,
    trim: true,
    required: "Last Name is Required"
  },

  caregiverfirstname: {
    type: String,
    trim: true,
    required: "First Name is Required"
  },

  caregiverlocation: {
    // trim: true,
  },

  caregiveremail: {
    type: String,
    match: [/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/, "Your email is your username.  Required."],  

  },

  caregiverpassword: {
    type: String,
    required: true
  }


});

const Teacher = mongoose.model("Teacher", TeacherSchema);

module.exports = Teacher;