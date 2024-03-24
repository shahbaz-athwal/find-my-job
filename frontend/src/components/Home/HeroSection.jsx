import React from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "5000+",
      subTitle: "Live Jobs",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "1000+",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "6000+",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "2000+",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];
  return (
    <>
      <div className="heroSection">
        <div className="container">
          <div className="title">
            <h1>Find a job that suits</h1>
            <h1>your interests and skills</h1>
            <p>
            Welcome to our platform, where you can explore a wide range of job opportunities 
            matching your skills and interests. Whether you're a seasoned professional or 
            just starting your career journey, we've got something for everyone!
            </p>
          </div>
          <div className="image">
            <img src="/job.jpg" alt="hero" />
          </div>
        </div>
        <div className="details">
          {details.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="icon">{element.icon}</div>
                <div className="content">
                  <p>{element.title}</p>
                  <p>{element.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
