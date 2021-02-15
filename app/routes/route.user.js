const router = require("express").Router();
let User = require("../models/user");


router.route("/").get((req, res) => {
  User.find()
  .then((User) => res.json(User))
  .catch((err) => res.status(400).json("Error :" + err));
});

router.route("/add").post( (req, res) => {

 
    const name = req.body.name;
    const phone = req.body.phone;
    const password = req.body.password;

    const userPush = new User({
      name,
      phone,
      password

    });

    userPush
      .save()
      .then(() => res.json("User successfully added"))
      .catch((err) => res.status(400).json("Error :" + err));
});


module.exports = router;