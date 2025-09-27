function Portfolio() {
  const projects = [
    {
      title: "AI/ML Exploration",
      technologies: "LLaMA, Vision Models, PrivateGPT, Mistral, LLAVA",
      description:
        "Explored AI/ML concepts including LLaMA, Vision Models, Mistral, LLAVA, and implemented PrivateGPT for privacy-focused local AI setups.",
    },
    {
      title: "Dynamics 365 CRM",
      technologies: "Dynamics 365, Power Automate, Dataverse",
      description:
        "Configured Dynamics 365 CRM solutions, implemented customizations, and automated workflows with Power Automate.",
    },
    {
      title: "SharePoint Projects",
      technologies: "SharePoint, Power Apps, Dataverse",
      description:
        "Developed SharePoint solutions, including integrating SharePoint lists with Power Apps and Dataverse.",
    },
    {
      title: "Power Platform Solutions",
      technologies: "Power Apps, Power Automate, Dataverse",
      description:
        "Created Canvas Apps, approval workflows, and automated processes using Power Automate and Dataverse.",
    },
    {
      title: "EmageAI - Image Processing App",
      technologies: "Next.js, Python, Razorpay, PostgreSQL, Bootstrap CSS",
      description:
        "Next.js-based app featuring image enhancement, background removal, OCR text extraction, and denoising. Implemented a credit system and Razorpay integration using Next.js SSR APIs.",
    },
    {
      title: "CRM Web App",
      technologies: "React.js, FastAPI, PostgreSQL, Vite.js (TypeScript)",
      description:
        "Built a CRM web app with React.js, FastAPI, PostgreSQL, and Vite.js (TypeScript).",
    },
    {
      title: "Face Recognition Attendance System",
      technologies: "Python Flask, OpenCV, HTML, CSS, JavaScript",
      description:
        "Flask app with webcam integration for real-time face recognition. Generated CSV reports for attendance tracking.",
    },
  ];

  return (
    <section className="ajit-portfolio" id="portfolio">
      <h2 className="ajit-portfolio-heading ">
        My <span className="no-cursor-effect">Projects</span>
      </h2>
      <div className="ajit-portfolio-container ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="ajit-portfolio-box services-box no-cursor-effect"
          >
            <div className="ajit-portfolio-layer">
              <h4 className="ajit-portfolio-title">{project.title}</h4>
              <p className="ajit-portfolio-technologies">
                <strong>Technologies:</strong> {project.technologies}
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
