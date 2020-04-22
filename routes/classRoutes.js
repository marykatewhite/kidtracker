const path = require("path");
const router = require("express").Router();
const teacherController = require("../controllers/teacherController");
const childController = require("../controllers/childController");

router
  .route("/")
  .get(teacherController.findById)

  .route("/dashboard")
  .get(childController.findAll)
  .get(teacherController.findAll)
  .get(childController.findById)
  .get(teacherController.findById)
  .put(childController.update);

module.exports = router;
