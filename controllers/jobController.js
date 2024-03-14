/**
 * Job controller for creating new job listing.
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @returns {void}
 */
const createJob = async (req, res) => {
  res.status(200).json({ message: "hello moto" });
};
