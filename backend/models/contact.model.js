const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    fullName: {
      type:      String,
      required:  [true, "Full name is required"],
      trim:      true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    email: {
      type:      String,
      required:  [true, "Email is required"],
      trim:      true,
      lowercase: true,
      match:     [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email"],
    },
    phone: {
      type:    String,
      trim:    true,
      default: "",          // optional field
    },
    subject: {
      type:      String,
      required:  [true, "Subject is required"],
      trim:      true,
      maxlength: [200, "Subject cannot exceed 200 characters"],
    },
    message: {
      type:      String,
      required:  [true, "Message is required"],
      trim:      true,
      maxlength: [5000, "Message cannot exceed 5000 characters"],
    },
    status: {
      type:    String,
      enum:    ["new", "read", "replied"],
      default: "new",       // tracks admin follow-up
    },
  },
  { timestamps: true }      // adds createdAt & updatedAt automatically
);

module.exports = mongoose.model("Contact", contactSchema);