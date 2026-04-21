import { useEffect, useRef, useState } from "react";
import { assetPath } from "../utils/assets";

type Skill = {
  title: string;
  description: string;
  icon?: string;
  boxicon?: string;
};

const categories: Record<string, Skill[]> = {
  Languages: [
    {
      title: "JavaScript + TypeScript",
      description: "Production React, Next.js, Vite, typed UI workflows.",
      boxicon: "bxl-typescript",
    },
    {
      title: "Python",
      description: "FastAPI, Flask, automation, OCR, AI/ML integrations.",
      boxicon: "bxl-python",
    },
    {
      title: "SQL",
      description: "Relational schema design, reporting, joins, data access.",
      icon: "images/sql.png",
    },
    {
      title: "Java, PHP, C",
      description: "Core programming, OOP, data structures, backend basics.",
      icon: "images/c.png",
    },
  ],
  Frontend: [
    {
      title: "React",
      description: "Component-driven SaaS UI, routing, forms, state flows.",
      boxicon: "bxl-react",
    },
    {
      title: "Next.js",
      description: "Full-stack frontend, SSR patterns, API routes, product UI.",
      icon: "images/nextjs.png",
    },
    {
      title: "React Native",
      description: "Mobile application foundations from postgraduate training.",
      boxicon: "bxl-react",
    },
    {
      title: "Redux Toolkit + Vite",
      description: "Modern state management and fast frontend tooling.",
      icon: "images/vite.svg",
    },
  ],
  "Backend + APIs": [
    {
      title: "FastAPI",
      description: "Secure REST APIs, validation, service layers, backend docs.",
      icon: "images/FastAPI.svg",
    },
    {
      title: "Node.js + Express",
      description: "Backend services, integrations, and transactional workflows.",
      boxicon: "bxl-nodejs",
    },
    {
      title: "REST APIs",
      description: "API design, third-party integrations, connectors, schemas.",
      icon: "images/api.png",
    },
    {
      title: "Flask",
      description: "Python web apps including face-recognition attendance work.",
      boxicon: "bxl-flask",
    },
  ],
  Databases: [
    {
      title: "PostgreSQL",
      description: "Healthcare SaaS, CRM data, reporting, relational modeling.",
      icon: "images/postgresql.svg",
    },
    {
      title: "MySQL",
      description: "Relational database development and query workflows.",
      icon: "images/mysql-database.png",
    },
    {
      title: "SQLite",
      description: "Lightweight app data, prototypes, local persistence.",
      icon: "images/sqlite-wtbg.svg",
    },
    {
      title: "Firebase",
      description: "Cloud data and app backend foundations.",
      icon: "images/firebase.png",
    },
  ],
  "Microsoft Ecosystem": [
    {
      title: "Power Apps",
      description: "Canvas apps connected to SharePoint and business workflows.",
      icon: "images/power-platform.png",
    },
    {
      title: "Power Automate",
      description: "Approval flows, automation, multi-system connectors.",
      icon: "images/power-platform.png",
    },
    {
      title: "SharePoint Online",
      description: "Lists, forms, permission models, structured data capture.",
      icon: "images/sharepoint.svg",
    },
    {
      title: "Dynamics 365 Sales",
      description: "Leads, Opportunities, security roles, CRM customization.",
      icon: "images/dynamics365.svg",
    },
    {
      title: "AI Builder OCR",
      description: "Expense document recognition and approval automation.",
      icon: "images/ai-builder.png",
    },
    {
      title: "Custom Connectors",
      description: "Power Platform integrations with third-party systems.",
      icon: "images/api.svg",
    },
  ],
  "Auth + Security": [
    {
      title: "RBAC",
      description: "Role-based access across frontend and backend services.",
      icon: "images/security.png",
    },
    {
      title: "OAuth",
      description: "Google OAuth and Microsoft OAuth authentication flows.",
      icon: "images/security.png",
    },
    {
      title: "JWT",
      description: "Secure token handling for protected application workflows.",
      icon: "images/security.png",
    },
    {
      title: "Permissions",
      description: "SharePoint, Dynamics, and app-level access control models.",
      icon: "images/security.png",
    },
  ],
  "Cloud + DevOps": [
    {
      title: "AWS",
      description: "EC2, S3, RDS, Bedrock, Transcribe, dev/prod operations.",
      boxicon: "bxl-aws",
    },
    {
      title: "Azure",
      description: "Basic Azure knowledge and Microsoft cloud ecosystem work.",
      icon: "images/azure.png",
    },
    {
      title: "Docker",
      description: "Containerized application delivery and CI/CD workflows.",
      icon: "images/docker.png",
    },
    {
      title: "GitHub Actions + Nginx",
      description: "Pipelines, deployment automation, reverse proxy setup.",
      icon: "images/ci-cd.png",
    },
  ],
  "AI + ML": [
    {
      title: "LLM Integration",
      description: "AWS Bedrock, Hugging Face, Mistral, LLaMA, LLaVA.",
      icon: "images/ai-integration.png",
    },
    {
      title: "AWS Transcribe",
      description: "Secure audio processing for healthcare workflows.",
      boxicon: "bx-microphone",
    },
    {
      title: "OCR",
      description: "PaddleOCR and AI Builder OCR document recognition.",
      icon: "images/ocr.png",
    },
    {
      title: "Image Processing",
      description: "Enhancement, background removal, OCR extraction, denoising.",
      icon: "images/ai-image.png",
    },
  ],
  "Payments + Analytics": [
    {
      title: "Stripe",
      description: "Subscriptions, coupons, 30-day trials, SaaS onboarding.",
      boxicon: "bxl-stripe",
    },
    {
      title: "Razorpay",
      description: "Transactional billing and credit-based payment workflows.",
      boxicon: "bx-credit-card",
    },
    {
      title: "GA4 + GTM",
      description: "Journey tracking, conversion events, product analytics.",
      boxicon: "bx-line-chart",
    },
    {
      title: "LinkedIn Insight Tag",
      description: "Campaign and funnel tracking for conversion visibility.",
      boxicon: "bxl-linkedin",
    },
  ],
  "Tools + Practices": [
    {
      title: "Git + Version Control",
      description: "GitHub, Azure Repos, branch workflows, production delivery.",
      icon: "images/code-versioncontrol.svg",
    },
    {
      title: "Agile + SDLC",
      description: "Jira, Confluence, sprint delivery, maintainable execution.",
      icon: "images/scrum.png",
    },
    {
      title: "Figma",
      description: "UI/UX design handoff, product thinking, interface planning.",
      boxicon: "bxl-figma",
    },
    {
      title: "OOP + DSA",
      description: "Software fundamentals, maintainability, problem solving.",
      icon: "images/oops.png",
    },
  ],
};

const Services: React.FC = () => {
  const categoryNames = Object.keys(categories);
  const [activeTab, setActiveTab] = useState(categoryNames[0]);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        const category = visible?.target.getAttribute("data-category");
        if (category) setActiveTab(category);
      },
      {
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: "-12% 0px -45% 0px",
      }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services" id="services">
      <p className="section-kicker">Skills</p>
      <h2 className="heading">
        Complete stack for <span>full-stack, Microsoft, cloud, AI,</span> and
        automation work.
      </h2>

      <div className="services-layout">
        <div className="services-tabs-vertical" aria-label="Skill categories">
          {categoryNames.map((category) => (
            <button
              key={category}
              className={`tab-btn ${activeTab === category ? "active" : ""}`}
              onClick={() =>
                sectionRefs.current[category]?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              type="button"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="service-sections">
          {categoryNames.map((category) => (
            <div
              key={category}
              className="skill-category"
              data-category={category}
              ref={(element) => {
                sectionRefs.current[category] = element;
              }}
            >
              <h3>{category}</h3>
              <div className="service-container">
                {categories[category].map((service) => (
                  <article key={service.title} className="services-box">
                    <div className="skill-icon">
                      {service.icon ? (
                        <img
                          src={assetPath(service.icon)}
                          alt=""
                          aria-hidden="true"
                        />
                      ) : (
                        <i className={`bx ${service.boxicon}`}></i>
                      )}
                    </div>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </article>
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
