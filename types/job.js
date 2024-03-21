/**
 * @typedef {Object} Job
 * @property {string} _id - The unique identifier for the job listing.
 * @property {string} company - The name of the company offering the job.
 * @property {string} logo - The URL path to the company's logo.
 * @property {string} position - The position title of the job.
 * @property {number} salary - The per month salary amount.
 * @property {('full_time' | 'part_time')} type - The type of contract (e.g. full-time, part-time).
 * @property {('office' | 'remote')} mode - The working mode of the job (e.g. remote, office).
 * @property {string} location - The location of the job.
 * @property {string} description - The job listing description.
 * @property {string} about - Information about the company.
 * @property {string[]} skills - An array of skills required for the job.
 * @property {string} [information] - Additional information if any.
 * @property {boolean} new - Indicates if the job listing is new.
 * @property {boolean} featured - Indicates if the job listing is featured.
 * @property {string} postedAt - The time when the job was posted.
 * @property {string} updatedAt - The time when the job was updated.
 * @property {string} refUserId - Id of the user who created the listing.
 * @memberof typedefs
 */
