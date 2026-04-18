import React from "react";

const projects = [
  {
    title: "End-to-End DevOps Microservices Implementation",
    tech: "AWS • Terraform • Docker • Kubernetes • ArgoCD • GitHub Actions",
    points: [
      "Provisioned AWS infrastructure (VPC, EC2, EKS) using Terraform with remote state (S3 + DynamoDB)",
      "Deployed containerized microservices on Kubernetes (Deployments, Services, Ingress)",
      "Implemented CI/CD + GitOps using GitHub Actions & ArgoCD",
      "Reduced deployment time from ~30 minutes to <5 minutes"
    ]
  },
  {
    title: "Kubernetes 3-Tier Application with Monitoring",
    tech: "Kubernetes • Docker • NGINX • MongoDB • Helm • Prometheus • Grafana",
    points: [
      "Deployed 3-tier application on Kubernetes with Ingress & auto-scaling (HPA)",
      "Integrated monitoring using Prometheus & Grafana via Helm",
      "Debugged real-world issues (Ingress, service mapping, configuration errors)",
      "Improved observability with real-time monitoring dashboards"
    ]
  },
  {
    title: "Automated CI/CD Pipeline with Docker & AWS",
    tech: "GitHub Actions • Docker • AWS EC2 • Node.js",
    points: [
      "Built and deployed Dockerized Node.js application on AWS EC2",
      "Automated CI/CD pipeline (build → push → deploy)",
      "Enabled zero-manual deployment on every code push",
      "Reduced manual deployment effort by ~80%"
    ]
  },
  {
    title: "Infrastructure Automation using Terraform & Jenkins",
    tech: "Terraform • Jenkins • AWS • Docker",
    points: [
      "Automated infrastructure provisioning using modular Terraform architecture",
      "Configured remote backend (S3) with state locking (DynamoDB)",
      "Built Jenkins pipeline for Terraform lifecycle",
      "Minimized human errors and improved deployment reliability"
    ]
  }
];

function Projects() {
  return (
    <section id="projects">
      <h2>Featured Projects 🚀</h2>

      <div className="project-container">
        {projects.map((proj, i) => (
          <div className="card" key={i}>
            <h3>{proj.title}</h3>
            <p><strong>{proj.tech}</strong></p>

            <ul>
              {proj.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;