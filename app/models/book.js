const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Book = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlenght: 3,
    },
    author: {
      type: String,
      required: true,
      trim: true,
      minlenght: 3,
    }, 
    price: {
        type: String,
        required: true,
        trim: true,
      },
   
  },
  {
    versionKey: false
}
);

const BookEx = mongoose.model("Book", Book);
module.exports = BookEx;