const mongoose = require("mongoose");

/**
 * Mongoose schema for a job listing.
 * @type {import('mongoose').Schema<Job>}
 */
const jobSchema = new mongoose.Schema(
  {
    company: { type: String, required: true },
    logo: { type: String, required: true },
    position: { type: String, required: true },
    salary: { type: Number, required: true },
    type: {
      type: String,
      enum: ["full_time", "part_time"],
      default: "full_time",
      required: true,
    },
    mode: {
      type: String,
      enum: ["office", "remote"],
      default: "remote",
      required: true,
    },
    location: { type: String, required: true },
    description: { type: String, required: true },
    about: { type: String, required: true },
    skills: { type: [String], required: true },
    information: { type: String },
    new: { type: Boolean, required: true },
    featured: { type: Boolean, required: true },
    refUserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: { createdAt: "postedAt", updatedAt: "updatedAt" } }
);

/**
 * Mongoose model for job listings.
 * @type {import('mongoose').Model<Job>}
 */
const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
