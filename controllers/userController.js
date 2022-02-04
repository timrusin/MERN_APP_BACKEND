const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res, next) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.route('/').post((req, res) => {
  console.log(req.body)
  const name = req.body.name;
  const email = req.body.email;
  const newUser = new User({
      name,
      email
  })
  newUser.save()
})

// router.post("/", async (req, res, next) => {
//   try {
//     const newUser = await User.create(req.body);
//     res.status(201).json(newUser);
//   } catch (err) {
//     next(err);
//   }
// });

router.put("/:id", async (req, res, next) => {
  try {
    const userToUpdate = await User.findOneAndUpdate(
      parseInt(req.params.id),
      req.body,
      {
        new: true,
      }
    );
    if (userToUpdate) {
      res.json(userToUpdate);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const userToDelete = await User.findOneAndDelete(req.params.id);
    console.log(userToDelete);
    if (userToDelete) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;