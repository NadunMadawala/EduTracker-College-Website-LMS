const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true, // Correct option
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(process.env.DB, connectionParams);
    console.log("Connection to database successful..!");
  } catch (error) {
    console.log("Could not connect to database:", error);
  }
};
