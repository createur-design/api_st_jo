const mongoose = require("mongoose");
try {
  mongoose.set("strictQuery", false);
  mongoose.connect(
    `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@${process.env.DBHOST}`
  );
  console.log("connect to database!");
} catch (error) {
  console.log(error);
}
