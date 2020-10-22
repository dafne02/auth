const {model} = require('./model'); 
const UserController = {};

// >> Here will be the
// endpoints for the Users.

UserController.getUser = (req, res) => {
  model.findById(req.params.id, {password: 0})
  .then((r) => {
    res.json(r);
  })
  .catch((e) => {
    res.status(500).json(e);
  });
};
UserController.getAllUsers = (req, res) => {
  model.find({})
  .then((r) => {
    res.json(r);
  })
  .catch((e) => {
    res.status(500).json(e);
  });
};
UserController.createUser = async (req, res) => {
  let newUser = new model(req.body);
  await newUser
  .save()
  .then(() => {
    //console.log(newUser);
    res.json({ msg: "User created" });
  })
  .catch((e) => {
    //console.log(err);
    res.status(500).json(e);
  });
};
UserController.updateUser = (req,res) => {
  model.updateOne({_id: req.params.id}, req.body)
  .then((r) => {
      res.json(r);
  })
  .catch((e) => {
    res.status(500).json(e);
  });
};
UserController.deleteUser = (req,res) => {
  model.findByIdAndDelete(req.params.id)
  .then(() => {
    res.json({ msg: "User deleted" });
  })
  .catch((e) => {
    res.status(500).json(e);
  });
}


module.exports = UserController;