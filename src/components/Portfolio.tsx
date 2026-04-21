function Portfolio() {
  const projects = [
    {
      title: "Louna AI Healthcare SaaS",
      type: "Professional",
      technologies: "React, TypeScript, FastAPI, PostgreSQL, AWS, Stripe",
      description:
        "Healthcare SaaS workflows with RBAC, Google/Microsoft OAuth, subscription billing, analytics, AWS Bedrock LLM integration, and AWS Transcribe audio processing.",
    },
    {
      title: "Enterprise CRM Platform",
      type: "Professional",
      technologies: "React, FastAPI, PostgreSQL, Dynamics 365, Power Automate",
      description:
        "Role-based CRM serving 500+ users with secure access controls, customized Leads and Opportunities modules, approval workflows, and operational reporting.",
    },
    {
      title: "AI Expense Approval System",
      type: "Professional",
      technologies: "Power Apps, SharePoint, Power Automate, AI Builder OCR",
      description:
        "Low-code expense tracker using OCR extraction, structured SharePoint lists, permission models, and manager approval automation to reduce reporting effort.",
    },
    {
      title: "AI & Image Processing Platform",
      type: "Product",
      technologies: "Next.js, FastAPI, Hugging Face, Mistral, LLaMA, LLaVA",
      description:
        "Full-stack platform for image enhancement, OCR, background removal, and model-backed processing with credit-based workflows and API integrations.",
    },
    {
      title: "Face Recognition Attendance",
      type: "Academic",
      technologies: "Python, Flask, OpenCV, JavaScript, CSV Reporting",
      description:
        "Webcam-based attendance system with face recognition, secure data handling, and automated attendance reports for administrators.",
    },
    {
      title: "Portfolio Website",
      type: "Personal",
      technologies: "React, TypeScript, Vite, Responsive UI",
      description:
        "Personal engineering portfolio designed to present full-stack, Microsoft ecosystem, cloud, AI, and automation experience through a responsive interface.",
    },
  ];

  return (
    <section className="ajit-portfolio" id="portfolio">
      <p className="section-kicker">Projects</p>
      <h2 className="ajit-portfolio-heading">
        Selected work with <span>business impact.</span>
      </h2>
      <div className="ajit-portfolio-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className="ajit-portfolio-box services-box"
          >
            <div className="ajit-portfolio-layer">
              <span className="project-type">{project.type}</span>
              <h4 className="ajit-portfolio-title">{project.title}</h4>
              <p className="ajit-portfolio-technologies">
                {project.technologies}
              </p>
              <p className="ajit-portfolio-description">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
