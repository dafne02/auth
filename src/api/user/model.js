const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// >> Here will be the User schema.
const UserSchema = new mongoose.Schema({
  username  :{type:String, required:true},
  password  :{type:String, required:true},
  firstname :{type:String, required:true},
  lastname  :{type:String, required:true},
  email     :{type:String, required:true}
});

// >> Here will be the pre methods for the schema.
UserSchema.pre('save', function() {
  const secpass = bcrypt.hashSync(this.password, 12);
  this.password = secpass;
});

// >> Here will be the User methods for the schema.
UserSchema.methods = {
  validatePassword(password){
    return bcrypt.compareSync(password, this.password)
  }
};

// >> Here will be the User model using the User schema.
const UserModel = mongoose.model('users', UserSchema);

module.exports = {
  schema: UserSchema,
  model: UserModel,
}