const express = require("express");
const School = require("../models/School");

const router = express.Router();

router.get("/", (req, res) => {
  School.find()
    .then((schools) => {
      res.json(schools);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.get("/:id", (req, res) => {
  School.find({ userId: req.params.id })
    .then((schools) => {
      res.json(schools);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.post("/", (req, res) => {
  const school = new School({ ...req.body, createUser: req.userId });
  school.save();
  res.json(school);
});

router.put("/:id", (req, res) => {
  School.findByIdAndUpdate(req.params.id, req.body)
    .then((school) => {
      res.json(school);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.delete("/:id", (req, res) => {
  School.findByIdAndDelete(req.params.id)
    .then((school) => {
      res.json(school);
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;
