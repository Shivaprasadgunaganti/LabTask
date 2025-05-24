const mongoDBSign = require("mongoose");
const mongoModel = new mongoDBSign.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});
module.exports = new mongoDBSign.model("data", mongoModel);
