const express = require("express");
const User = require("../models/User");
const Joi = require("@hapi/joi");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerSchema = Joi.object({
  userName: Joi.string().required().min(5).max(50),
  userEmail: Joi.string().required().email().min(6).max(255),
  userPassword: Joi.string().required().min(6).max(255),
  userPhone: Joi.number().required(),
  userGender: Joi.string().required(),
  userBirthday: Joi.date().required(),
});

const loginSchema = Joi.object({
  userEmail: Joi.string().required(),
  userPassword: Joi.string().required(),
});

const router = express.Router();

router.post("/register", (req, res) => {
  const { error } = registerSchema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.userPassword, salt);

  const user = new User({ ...req.body, userPassword: hash });
  user
    .save()
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, "vennApp");
      res.header("Authorization", token).json({ accessToken: token });
    })
    .catch((error) => {
      res.json(error);
    });
});

router.post("/login", (req, res) => {
  const { userEmail, userPassword } = req.body;

  const { error } = loginSchema.validate({ userEmail, userPassword });
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  User.findOne({ userEmail })
    .then((user) => {
      if (!user) {
        res.status(400).send("Invalid email or password");
        return;
      }

      const isValid = bcrypt.compareSync(userPassword, user.userPassword);
      if (!isValid) {
        res.status(400).send("Invalid email or password");
        return;
      }

      const token = jwt.sign({ _id: user._id }, "vennApp");
      res.header("Authorization", token).json({ accessToken: token });
    })
    .catch(() => {
      res.status(400).send("Invalid email or password");
    });
});

module.exports = router;
