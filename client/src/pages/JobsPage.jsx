import useAuthGuard from "../hooks/useAuthGuard";
import jobsData from "../../data.json";
import closeIcon from "../assets/images/close-btn.svg";
import dropDownIcon from "../assets/images/caret-down.svg";
import { useState } from "react";

const JobsPage = () => {
  useAuthGuard();

  const job = jobsData[0];

  const [ddIsOpen, setDdIsOpen] = useState(false);

  return (
    <>
      <div className="filter--container">
        <input
          className="form--input search--input"
          type="search"
          name="search"
          id="search"
          placeholder="Type any job title"
        />
        <div className="filter--skill--div">
          <div
            className="skills"
            name="skills"
            id="skills"
            onClick={() => setDdIsOpen((p) => !p)}
          >
            <p>Skills</p>
            <img
              src={dropDownIcon}
              alt=""
              className={`dd--icon ${ddIsOpen ? "dd--open" : ""}`}
            />
            <div className={`skill--options ${ddIsOpen ? "dd--open" : ""}`}>
              <p className="skill">Frontend</p>
              <p className="skill">CSS</p>
              <p className="skill">JavaScript</p>
            </div>
          </div>

          <div className="filter--tag--div">
            <div className="filter--tag">
              <span>Frontend</span>
              <button>
                <img src={closeIcon} alt="" />
              </button>
            </div>
            <div className="filter--tag">
              <span>CSS</span>
              <button>
                <img src={closeIcon} alt="" />
              </button>
            </div>
            <div className="filter--tag">
              <span>JavaScript</span>
              <button>
                <img src={closeIcon} alt="" />
              </button>
            </div>
          </div>
          <button className="btn filter--btn">Apply Filter</button>
          <button className="clear--btn">Clear</button>
        </div>
      </div>

      <div className="job--card">
        <img
          className="company--icon"
          src={job.logo_url}
          alt={job.company}
          width={55}
          height={55}
        />
        <div className="job--detail">
          <p className="job--position">{job.position}</p>
          <div className="position--info">
            <span className="openings">{job.position_count.join("-")}</span>
            <span className="salary">{job.salary}</span>
            <span className="location">{job.location}</span>
          </div>
          <p className="job--mode">
            <span>{job.mode}</span> <span>{job.job_type}</span>
          </p>
        </div>
        <div className="job--tags">
          <div className="job--tags--div">
            {job.skills.map((skill) => (
              <span className="job--tag" key={skill}>
                {skill}
              </span>
            ))}
          </div>
          <button className="btn .filter--btn">View Details</button>
        </div>
      </div>
    </>
  );
};
export default JobsPage;
