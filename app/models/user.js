const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlenght: 3,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      minlenght: 3,
    }, 
    password: {
        type: String,
        required: true,
        trim: true,
        minlenght: 3,
      },
   
  },
  {
    versionKey: false
}
);

const UserEx = mongoose.model("User", User);
module.exports = UserEx;