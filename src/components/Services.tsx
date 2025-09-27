import React, { useState, useEffect, useRef } from "react";

type Service = {
  title: string;
  description: string;
  icon?: string;
  alt?: string;
  boxicon?: string;
};

const Services: React.FC = () => {
  const categories: { [key: string]: Service[] } = {
    "AI / ML": [
      {
        title: "Pretrained Models",
        description: "Worked with Mistral, LLaMA, LLaVA, Ollama.",
        icon: "images/ollama.png",
      },
      {
        title: "AI Integrations",
        description: "OpenAI, Hugging Face, Azure AI integrations.",
        icon: "images/ai-integration.png",
      },
      {
        title: "TensorFlow",
        description: "Deep learning & ML workflows with TensorFlow.",
        icon: "images/TensorFlow.svg",
      },
      {
        title: "OCR",
        description: "Document recognition with PaddleOCR.",
        icon: "images/ocr.png",
      },
      {
        title: "AI Image Processing",
        description: "Custom AI/ML image workflows.",
        icon: "images/ai-image.png",
      },
      {
        title: "Roboflow",
        description: "Annotation & dataset export (COCO format).",
        icon: "images/roboflow.jpeg",
      },
      {
        title: "Zapier",
        description: "AI-driven automation & workflow integrations.",
        icon: "images/zapier.svg",
      },
      {
        title: "n8n",
        description: "Open-source automation with AI connectors.",
        icon: "images/n8n.svg",
      },
      {
        title: "AI Builder",
        description: "Microsoft Power Platform AI Builder.",
        icon: "images/ai-builder.png",
      },
    ],
    Languages: [
      {
        title: "JavaScript",
        description: "Frontend and backend development.",
        boxicon: "bxl-javascript",
      },
      {
        title: "TypeScript",
        description: "Typed superset of JavaScript for scalable apps.",
        // icon: "images/typescript.svg",
        boxicon: "bxl-typescript",
      },
      {
        title: "Python",
        description: "FastAPI, Flask, and ML integrations.",
        boxicon: "bxl-python",
      },
      {
        title: "Java",
        description: "Enterprise and backend development.",
        boxicon: "bxl-java",
      },
      {
        title: "PHP",
        description: "Web apps & backend scripting.",
        boxicon: "bxl-php",
      },
      {
        title: "C",
        description: "System-level programming and data structures.",
        icon: "images/c.png",
      },
      {
        title: "SQL",
        description: "Relational database queries & optimization.",
        icon: "images/sql.png",
      },
      {
        title: "PowerFx",
        description: "Power Apps formula language.",
        icon: "images/power-platform.png",
      },
      {
        title: "DAX",
        description: "Data Analysis Expressions for BI solutions.",
        icon: "images/power-bi.png",
      },
    ],
    Frontend: [
      {
        title: "React.js",
        description: "Modern frontend apps with React.",
        boxicon: "bxl-react",
      },
      {
        title: "Next.js",
        description: "SSR + optimized apps with Next.js.",
        icon: "images/nextjs.png",
      },
      {
        title: "React Native",
        description: "Cross-platform mobile apps.",
        boxicon: "bxl-react",
      },
      {
        title: "Vite",
        description: "Lightning-fast frontend build tooling.",
        icon: "images/vite.svg",
      },
      {
        title: "Figma",
        description: "UI/UX design prototyping.",
        boxicon: "bxl-figma",
      },
    ],
    Backend: [
      {
        title: "FastAPI",
        description: "High-performance APIs with Python.",
        icon: "images/FastAPI.svg",
      },
      {
        title: "Flask",
        description: "Lightweight backend web services.",
        boxicon: "bxl-flask",
      },
      {
        title: "Node.js / Express",
        description: "Scalable backend APIs.",
        boxicon: "bxl-nodejs",
      },
      {
        title: ".NET",
        description: "Enterprise-grade backend solutions.",
        icon: "images/dotnet.png",
      },
      {
        title: "REST APIs",
        description: "API development and integration.",
        icon: "images/api.png",
      },
    ],
    Databases: [
      {
        title: "PostgreSQL",
        description: "Advanced relational database.",
        icon: "images/postgresql.svg",
      },
      {
        title: "MySQL",
        description: "Relational database expertise.",
        icon: "images/mysql-database.png",
      },
      {
        title: "SQLite",
        description: "Lightweight DB for apps.",
        icon: "images/sqlite-wtbg.svg",
      },
      {
        title: "Firebase",
        description: "Realtime cloud DB & auth.",
        icon: "images/firebase.png",
      },
      {
        title: "MongoDB",
        description: "NoSQL document database.",
        icon: "images/mongodb.svg",
      },
    ],
    DevOps: [
      {
        title: "Docker",
        description: "Containerization & deployment.",
        icon: "images/docker.png",
      },
      {
        title: "Nginx",
        description: "Web server & reverse proxy setup.",
        icon: "images/nginx.svg",
      },
      {
        title: "Git / GitHub / Azure Repos",
        description: "Version control & CI/CD pipelines.",
        icon: "images/code-versioncontrol.svg",
      },
      {
        title: "Azure DevOps",
        description: "Cloud-based DevOps practices.",
        icon: "images/azure-devops.png",
      },
    ],
    Microsoft: [
      {
        title: "SharePoint",
        description: "Basic knowledge of SharePoint functionalities.",
        icon: "images/sharepoint.svg",
      },
      {
        title: "Power Platform",
        description: "Build low-code apps with Power Apps & Automate.",
        icon: "images/power-platform.png",
      },
      {
        title: "Dynamics 365",
        description: "Customize Dynamics 365 for workflows.",
        icon: "images/dynamics365.svg",
      },
      {
        title: "Azure (Basic)",
        description: "Introductory cloud knowledge with Azure.",
        icon: "images/azure.png",
      },
    ],
    Concepts: [
      {
        title: "OOP & DSA",
        description: "Object-oriented programming & algorithms.",
        icon: "images/oops.png",
      },
      {
        title: "SDLC & Agile",
        description: "Software Development Lifecycle & Agile workflow.",
        icon: "images/scrum.png",
      },
      {
        title: "CI/CD",
        description: "Continuous Integration & Deployment.",
        icon: "images/ci-cd.png",
      },
      {
        title: "Secure Data Storage",
        description: "Authentication & secure storage practices.",
        icon: "images/security.png",
      },
    ],
  };
  const [activeTab, setActiveTab] = useState("AI / ML");
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cat = entry.target.getAttribute("data-category");
            if (cat) {
              setActiveTab(cat);
            }
          }
        });
      },
      {
        threshold: 0.4, // at least 40% visible to switch
        rootMargin: "-10% 0px -50% 0px", // tweak for smoother highlight
      }
    );

    Object.values(sectionRefs.current).forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services" id="services">
      <h2 className="heading">
        Skills &amp; <span className="no-cursor-effect">Services</span>
      </h2>

      <div className="services-layout" style={{ display: "flex" }}>
        {/* Left sticky vertical tabs */}
        <div
          className="services-tabs-vertical"
          style={{
            position: "sticky",
            top: "100px", // adjust so it doesn’t overlap navbar
            alignSelf: "flex-start",
            height: "fit-content",
          }}
        >
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${activeTab === cat ? "active" : ""}`}
              onClick={() =>
                sectionRefs.current[cat]?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Right side scrollable sections */}
        <div
          className="service-sections"
          style={{
            marginLeft: "2rem",
            flex: 1,
            overflow: "visible",
          }}
        >
          {Object.keys(categories).map((cat) => (
            <div
              key={cat}
              data-category={cat}
              ref={(el) => {
                sectionRefs.current[cat] = el;
              }}
              style={{ marginBottom: "6rem" }}
            >
              <h3
                style={{
                  fontSize: "2rem",
                  marginBottom: "1.5rem",
                  borderBottom: "2px solid #ddd",
                  paddingBottom: "0.5rem",
                }}
              >
                {cat}
              </h3>
              <div className="service-container">
                {categories[cat].map((service, index) => (
                  <div key={index} className="services-box no-cursor-effect">
                    {service.icon ? (
                      <img
                        src={service.icon}
                        alt={service.alt || service.title}
                        style={{ height: "5rem", width: "5rem" }}
                      />
                    ) : (
                      <i className={`bx ${service.boxicon}`}></i>
                    )}
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
