const roles = [
  {
    milestone: "03",
    title: "Full-Stack Developer",
    company: "Evolvic",
    location: "Montreal, Canada | Remote",
    period: "Nov 2025 - Present",
    summary:
      "Developing Louna AI, a healthcare SaaS platform with secure access, AI processing, subscriptions, and cloud operations.",
    highlights: [
      "Implemented RBAC across React, TypeScript, FastAPI, and PostgreSQL services.",
      "Built Google and Microsoft OAuth flows with secure token handling.",
      "Integrated Stripe subscriptions, coupon logic, trial onboarding, GA4, GTM, and LinkedIn Insight Tag.",
      "Managed AWS EC2, S3, RDS, Bedrock, Transcribe, Docker, and GitHub Actions pipelines.",
    ],
  },
  {
    milestone: "02",
    title: "Software Engineer",
    company: "Eonian Software Solutions",
    location: "Ahmedabad, India",
    period: "Jan 2024 - Jan 2025",
    summary:
      "Delivered enterprise CRM and automation systems for 500+ users across full-stack and Microsoft business platforms.",
    highlights: [
      "Built role-based CRM features with React, FastAPI, PostgreSQL, authentication, and authorization.",
      "Customized Dynamics 365 Sales modules including Leads, Opportunities, and security roles.",
      "Designed Power Apps, SharePoint lists/forms/permissions, Power Automate approval flows, and custom connectors.",
      "Integrated Razorpay and built AI Builder OCR expense workflows that reduced reporting effort by about 30%.",
    ],
  },
  {
    milestone: "01",
    title: "Software Engineering Intern",
    company: "TatvaSoft",
    location: "Ahmedabad, India",
    period: "Jun 2023 - Dec 2023",
    summary:
      "Built React and Node.js application features while working through Agile delivery, REST APIs, and relational schema design.",
    highlights: [
      "Improved web application performance by about 20%.",
      "Designed REST API endpoints and database schemas.",
      "Collaborated with engineers through Agile ceremonies, SDLC practices, Jira, and Confluence.",
    ],
  },
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <p className="section-kicker">Experience</p>
      <h2 className="heading">
        Production work across <span>SaaS, CRM, automation,</span> and AI.
      </h2>
      <div className="timeline">
        {roles.map((role) => (
          <article
            className="timeline-item"
            key={`${role.company}-${role.title}`}
          >
            <div className="timeline-marker" aria-hidden="true">
              <span>{role.milestone}</span>
            </div>
            <div className="timeline-meta">
              <span>{role.period}</span>
              <small>{role.location}</small>
            </div>
            <div className="timeline-content">
              <h3>{role.title}</h3>
              <strong>{role.company}</strong>
              <p>{role.summary}</p>
              <ul>
                {role.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
