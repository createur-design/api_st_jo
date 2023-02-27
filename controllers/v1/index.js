const Dialog = require("./../../models/Dialog");

// const data = {
//   count: null,
//   dialog: [
//     {
//       id: 1,
//       answer: "qui est tu ?",
//       response: "je m'appele Christophe",
//       keyword: [],
//     },
//     {
//       id: 2,
//       answer: "comment vas tu ?",
//       response: "je vais très bien",
//       keyword: [],
//     },
//     {
//       id: 3,
//       answer: "quel est ton metier ?",
//       response: "je suis développeur web",
//       keyword: [],
//     },
//   ],
// };
// data.count = data.dialog.length;
const dialogController = {
  findAll: async (req, res) => {
    const data = await Dialog.find();
    res.status(200).json(data);
  },
  findOne: async (req, res) => {
    const id = req.params.id;
    try {
      const result = await Dialog.findById(id);
      res.status(200).json(result);
    } catch (error) {
      // console.log(error);
      res.status(204).json();
    }

    // const result = data.dialog.filter((dialog) => dialog.id === id);

    // if (result.length === 0) {
    //   console.log(result.length);
    //   res.status(204).json();
    //   return;
    // }
    // res.status(200).json(result);
  },
  findRandom: async (req, res) => {
    const data = await Dialog.find();
    const id = getRandomInt(data.length);
    res.status(200).json({
      randomInt: id,
      result: data[id],
    });
  },
  create: (req, res) => {
    const dialog = new Dialog({
      answer: req.body.answer,
      response: req.body.response,
    });
    dialog.save().then((data) => {
      res.status(201).json(data);
    });
  },
  delete: async (req, res) => {
    const id = req.params.id;
    try {
      const dialog = await Dialog.deleteOne({ _id: id });
      res.status(200).json(dialog);
    } catch (error) {
      console.log(error);
      res.status(204).json();
    }
    // res.status(200).json({ message: "DELETE" });
  },
  update: async (req, res) => {
    const id = req.params.id;
    const body = {
      answer: req.body.answer,
      response: req.body.response,
    };
    const result = await Dialog.updateOne({ _id: id }, body);
    console.log(result);
    res.status(204).json();
  },
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = dialogController;
