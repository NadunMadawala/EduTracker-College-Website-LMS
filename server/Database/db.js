const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    useNewUrlParams: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(process.env.DB, connectionParams);
    console.log("Connection to databse succesfully..!");
  } catch (error) {
    console.log(error);
    console.log("Could not connected to database");
  }
};
