import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> background
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor in Software Engineering</h4>
                <h5>COMSATS University Islamabad, Vehari Campus</h5>
              </div>
              <h3>2023 – Present</h3>
            </div>
            <p>
              Expected graduation: 2027. Building a strong foundation in
              software engineering while developing practical web and mobile
              applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate (ICS)</h4>
                <h5>Punjab College, Mailsi</h5>
              </div>
              <h3>2021 – 2023</h3>
            </div>
            <p>
              Completed Intermediate in Computer Science, developing the
              academic foundation for a career in software engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
