const { mongoose, Schema } = require("mongoose");

const dialogSchema = new Schema(
  {
    answer: {
      type: String,
      required: true,
    },
    response: {
      type: String,
      required: true,
    },
    keyword: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const Dialog = mongoose.model("Dialog", dialogSchema);

// Dialog.createCollection().then(function (collection) {
//   console.log("Collection is created!");
// });

module.exports = Dialog;
