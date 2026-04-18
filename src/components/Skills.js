import React from "react";

const skills = {
  "Cloud Platforms": ["AWS", "Azure", "GCP"],
  "DevOps Tools": ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Ansible", "Azure DevOps"],
  "IaC": ["Terraform"],
  "Monitoring": ["Prometheus", "Grafana"],
  "Configuration Management": ["Ansible"],
  "Scripting": ["Bash", "Python"],
  "Networking": ["VPC", "Subnets", "Security Groups", "Load Balancers"],
  "Version Control": ["Git", "GitHub", "GitLab"]
};

function Skills() {
  return (
    <section id="skills">
      <h2>Technical Skills</h2>

      {Object.keys(skills).map((category, index) => (
        <div key={index}>
          <h3>{category}</h3>
          <p>{skills[category].join(" • ")}</p>
        </div>
      ))}
    </section>
  );
}

export default Skills;