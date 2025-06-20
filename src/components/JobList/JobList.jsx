import React, { useState } from "react";
import "./jobList.scss";
import arrowRight from "../../assets/svg/rightArrow.svg";
import useScreenMobile from "../../hooks/useScreenMobile";
import FadeUp from "../FadeUp/FadeUp";

const tabs = ["Doctors", "Nursing Staff", "Support"];

const jobsData = {
  Doctors: [
    {
      title: "General Physician",
      experience: "2-7 Years",
      deadline: "2021-05-08",
    },
    {
      title: "Cardiologist",
      experience: "7-10 Years",
      deadline: "2021-05-08",
    },
  ],
  "Nursing Staff": [
    {
      title: "General Physician",
      experience: "Fresher",
      deadline: "2021-05-08",
    },
  ],
  Support: [],
};

const JobList = () => {
  const isMobile = useScreenMobile({ size: 568 });
  const [activeTab, setActiveTab] = useState("Doctors");

  return (
    <div className="container doctorJobContainer">
      {isMobile ? (
        <>
          <div className="tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? "tab active" : "tab"}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="cards">
            {jobsData[activeTab].length === 0 ? (
              <div className="no-jobs">
                <FadeUp>No jobs available.</FadeUp>
              </div>
            ) : (
              jobsData[activeTab].map((job, idx) => (
                <div className="card" key={idx}>
                  <div className="card-title">
                    <FadeUp>{job.title}</FadeUp>
                  </div>
                  <div className="card-details">
                    <div className="cards">
                      <span className="label">
                        <FadeUp>Experience</FadeUp>
                      </span>
                      <span>
                        <FadeUp> {job.experience}</FadeUp>
                      </span>
                    </div>
                    <div className="cards">
                      <span className="label">
                        <FadeUp>Deadline</FadeUp>
                      </span>
                      <span>
                        <FadeUp>{job.deadline}</FadeUp>
                      </span>
                    </div>

                    <button className="card-action">
                      <span>&#8594;</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      ) : (
        <div className="doctorJob">
          <div className="sidebar">
            {tabs.map((tab) => (
              <div
                key={tab}
                className={`tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                <FadeUp>{tab}</FadeUp>
              </div>
            ))}
          </div>
          <div className="content">
            {jobsData[activeTab].length === 0 ? (
              <div className="no-jobs">
                <FadeUp>No jobs available.</FadeUp>
              </div>
            ) : (
              jobsData[activeTab].map((item, index) => (
                <div className="jobList" key={index}>
                  <p>
                    <FadeUp>{item?.title}</FadeUp>
                  </p>
                  <div>
                    <p>
                      <FadeUp>Experience</FadeUp>
                    </p>
                    <span>
                      <FadeUp> {item?.experience}</FadeUp>
                    </span>
                  </div>
                  <div>
                    <p>
                      <FadeUp>Deadline</FadeUp>
                    </p>
                    <span>
                      <FadeUp> {item?.deadline}</FadeUp>
                    </span>
                  </div>
                  <img src={arrowRight} alt="arrow" />
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobList;
