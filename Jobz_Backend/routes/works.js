const express = require("express");
const Work = require("../models/Work");

const router = express.Router();

router.get("/", (req, res) => {
  Work.find()
    .then((works) => {
      res.json(works);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.get("/:id", (req, res) => {
  Work.find({ userId: req.params.id })
    .then((works) => {
      res.json(works);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.post("/", (req, res) => {
  const work = new Work({ ...req.body, createUser: req.userId });
  work.save();
  res.json(work);
});

router.put("/:id", (req, res) => {
  Work.findByIdAndUpdate(req.params.id, req.body)
    .then((work) => {
      res.json(work);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.delete("/:id", (req, res) => {
  Work.findByIdAndDelete(req.params.id)
    .then((work) => {
      res.json(work);
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;
