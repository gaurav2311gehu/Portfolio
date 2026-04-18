import React from "react";

function Experience() {
  return (
    <section id="experience">
      <h2>Professional Experience</h2>

      <div className="experience-content">
        <h3>Cloud Engineer</h3>
        <p><strong>Anarion Technologies Pvt Ltd</strong></p>
        <p>June 2024 – Present</p>

        <ul>
          <li>Managed 300+ cloud marketplace deployments across AWS, Azure, and GCP</li>
          <li>Automated infrastructure provisioning using Terraform, reducing manual effort by 80%</li>
          <li>Engineered CI/CD pipelines using GitHub Actions & Azure DevOps for faster and reliable releases</li>
          <li>Reduced infrastructure provisioning time by 80% through Infrastructure as Code adoption</li>
          <li>Deployed containerized applications using Docker & Kubernetes, improving scalability and consistency</li>
          <li>Automated configuration management using Ansible, minimizing manual errors</li>
          <li>Improved deployment consistency through automation-driven release workflows</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;