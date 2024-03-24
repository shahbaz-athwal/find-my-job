import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How FindMyJob Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
                Sign up for a FindMyJob account to unlock access to a world of
                job opportunities and recruitment solutions.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
                Explore a vast array of job listings tailored to your
                preferences or post job vacancies to attract top talent.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Jobs/Recruit Suitable Candidates</p>
              <p>
                Take the next step in your career by applying for jobs that
                match your skills, or recruit candidates who fit your company
                culture and requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
