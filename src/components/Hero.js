import React from "react";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <section className="hero">
      <h1>Hey, I'm Gaurav Saini</h1>
      <h3>Cloud & DevOps Engineer | AWS | Kubernetes | CI/CD </h3>
      <h3>Building scalable systems. Automating everything. </h3>

      <h2>
        <ReactTyped
          strings={[
            "Cloud & DevOps Engineer",
            "Kubernetes Enthusiast",
            "CI/CD Automation Expert",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </h2>

      <p>
        1.5+ Years Experience | AWS • Azure • GCP
      </p>
    </section>
  );
}

export default Hero;