const Job = require("../models/job");

/**
 * Creates a job with provided data.
 * @async
 * @param {Job} jobData - Job object with all the fields
 * @returns {string} Newly created job's id
 * @throws {Error} Throws an error if there is an issue with the database operation.
 */
const createJob = async (jobData) => {
  const newJob = new Job(jobData);
  await newJob.save();

  return newJob._id;
};

/**
 * Retrieves a job by its ID.
 * @async
 * @param {string} jobId - The ID of the job to retrieve.
 * @returns {Promise<Job|null>} A Promise that resolves with the job document if found, or null if not found.
 * @throws {Error} Throws an error if there is an issue with the database operation.
 */

const getJob = async (jobId) => {
  const job = await Job.findOne({ _id: jobId });
  return job;
};

module.exports = {
  createJob,
  getJob,
};
