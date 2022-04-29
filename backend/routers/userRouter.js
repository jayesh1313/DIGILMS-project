const Model = require("../models/userModel");
const router = require("express").Router();

router.post("/add", (req, res) => {
  new Model(req.body)
    .save()
    .then((data) => {
      console.log("user data saved!!");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getall", (req, res) => {
  Model.find({})
    .then((data) => {
      console.log("user data saved!!");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getbyid/:id", (req, res) => {
  Model.findById(req.params.id)
    .then((data) => {
      console.log("user data saved!!");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getbymail/:mail", (req, res) => {
  Model.findOne({ email: req.params.mail })
    .populate("enrolled")
    .then((data) => {
      console.log("user data saved!!");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.put("/update/:id", (req, res) => {
  Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .populate("enrolled")
    .then((data) => {
      console.log("user data saved!!");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((data) => {
      console.log("user data saved!!");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.put("/pushupdate/:id", (req, res) => {
  console.log(req.params.id);
  let data = req.body;
  console.log(data);
  Model.findByIdAndUpdate(req.params.id, { $push: data }, { new: true })
    .then((data) => {
      console.log("user data updated");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.post("/check-login", (req, res) => {
  // console.log(req.body);

  const formdata = req.body;

  Model.findOne({ email: formdata.email })
    .populate("enrolled")
    .populate({
      path: "enrolled",
      populate: {
        path: "trainer",
        model: "trainers",
      },
    })
    .then((data) => {
      if (data) {
        console.log(data);
        if (data.password === formdata.password) {
          res.status(200).json(data);
        } else {
          res.status(300).json({ message: "password incorrect" });
        }
      } else {
        res.status(300).json({ message: "email not found" });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
