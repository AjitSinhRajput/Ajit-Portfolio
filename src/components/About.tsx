function About() {
  const strengths = [
    "React, TypeScript, FastAPI, PostgreSQL",
    "OAuth, RBAC, JWT, secure data flows",
    "AWS EC2, S3, RDS, Bedrock, Transcribe",
    "Power Apps, Power Automate, SharePoint, Dynamics 365",
  ];

  return (
    <section className="about" id="about">
      <div className="about-content">
        <p className="section-kicker">Profile</p>
        <h2 className="heading">
          Building reliable software across <span>full-stack, cloud, AI,</span>{" "}
          and Microsoft ecosystems.
        </h2>
        <p>
          I design and ship production-grade applications where frontend
          quality, backend correctness, secure access, and business workflows
          all matter. My recent work spans healthcare SaaS, enterprise CRM,
          subscription billing, analytics instrumentation, AI services, and
          low-code automation.
        </p>
        <p>
          I am completing a Postgraduate Certificate in Mobile Application
          Development at Fanshawe College with a 4.13 / 4.20 GPA and Dean's
          Honour Roll recognition, backed by a Computer Science engineering
          degree from L.J. Institute of Engineering & Technology with 8.10
          CGPA.
        </p>
      </div>
      <div className="about-proof">
        <div className="proof-card">
          <span>Current Role</span>
          <strong>Full-Stack Developer at Evolvic</strong>
          <p>Healthcare SaaS using React, TypeScript, FastAPI, PostgreSQL.</p>
        </div>
        <div className="proof-card">
          <span>Education</span>
          <strong>Fanshawe College | GPA 4.13 / 4.20</strong>
          <p>Mobile Application Development, Co-op, Dean's Honour Roll.</p>
        </div>
        <div className="proof-card">
          <span>Bachelor's Degree</span>
          <strong>B.E. Computer Engineering | CGPA 8.10 / 10</strong>
          <p>L.J. Institute of Engineering & Technology, India.</p>
        </div>
        <ul className="strength-list">
          {strengths.map((item) => (
            <li key={item}>
              <i className="bx bx-check"></i>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
