const path = require("path");
const router = require("express").Router();
const teacherController = require("../controllers/teacherController");
const childController = require("../controllers/childController");

router
  .route("/")
  .get(childController.findAll)
  .get(teacherController.findAll)
  .get(childController.findById)
  .get(teacher.findById)
  .put(childController.update);

module.exports = router;
