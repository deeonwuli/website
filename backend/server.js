require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5001;

console.log("EMAIL:", process.env.EMAIL); // Debugging line
console.log("PASSWORD:", process.env.PASSWORD ? "Exists" : "Missing"); // Debugging line

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // Use "gmail", "yahoo", "outlook", etc.
  auth: {
    user: process.env.EMAIL, // Your email
    pass: process.env.PASSWORD, // App password or email password
  },
});

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Email failed to send." });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
