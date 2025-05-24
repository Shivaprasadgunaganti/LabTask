const mongoDb = require("mongoose");
const mongoose = async () => {
  await mongoDb.connect(
    "mongodb+srv://shivaprasad06559:UTlRk1F0HOHduueP@cluster0.5cufia3.mongodb.net/"
  );
  console.log("MongoDB Connected success");
};

module.exports = mongoose;
