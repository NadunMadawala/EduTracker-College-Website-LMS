const router = require("express").Router();
const Joi = require("joi");
const { User } = require("../Database/models/user");
const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
  try {
    // Log the incoming request
    console.log("Received login request:", req.body);

    // Validate the request body
    const { error } = validate(req.body);
    if (error) {
      console.log("Validation error:", error.details[0].message);
      return res.status(400).send({ message: error.details[0].message });
    }

    // Check if the user exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      console.log("User not found for email:", req.body.email);
      return res.status(401).send({ message: "Invalid Email or Password" });
    }

    // Validate the password
    const validatePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validatePassword) {
      console.log("Invalid password for email:", req.body.email);
      return res.status(401).send({ message: "Invalid Email or Password" });
    }

    // Generate token
    const token = user.generateAuthToken();
    res.status(200).send({ data: token, message: "Logged in Successfully" });
  } catch (error) {
    console.error("Internal server error:", error);
    res.status(500).send({ message: "Internal server Error" });
  }
});

const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(data);
};

module.exports = router;
