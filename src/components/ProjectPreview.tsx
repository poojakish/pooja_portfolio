import React from "react";
import { Link } from "react-router-dom";
import '../assets/styles/Project.scss';

// Import your images
import hazmatImg from '../assets/images/hazmat_preview.png';
import eilaImg from '../assets/images/eila_preview.png';
import afibImg from '../assets/images/af_xai.png';

interface ProjectType {
  id: string;
  title: string;
  image: string;
  description: string;
}

const projects: ProjectType[] = [
  {
    id: "hazmat-placard",
    title: "Master’s Thesis: Deformed Hazardous Material Placard Detection",
    image: hazmatImg,
    description: "Deep learning pipeline to detect and classify damaged HAZMAT placards on freight trains.",
  },
  {
    id: "eila-fer",
    title: "Emotions in LatAm: A new dataset and benchmark for emotion recognition in Latin America",
    image: eilaImg,
    description: "Developed culturally grounded facial expression dataset and evaluated FER models.",
  },
  {
    id: "afib-explainable-ai",
    title: "Explainable AI for Atrial Fibrillation Classifier",
    image: afibImg,
    description: "Applied SHAP and U-MAP to explain SVM predictions on ECG data for clinical use.",
  },
  // Add more if needed
];

const ProjectPreview: React.FC = () => {
  return (
    <div className="projects-container" id="projects-preview">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.slice(0, 2).map(({ id, title, image, description }) => (
          <div className="project" key={id}>
            <Link to={`/projects/${id}`} className="project-link">
              <img src={image} alt={title} className="zoom" width="100%" />
              <h2>{title}</h2>
              <p>{description}</p>
            </Link>
          </div>
        ))}
      </div>
      <div className="more-projects-btn-container" style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/projects" className="more-projects-btn">
          More Projects →
        </Link>
      </div>
    </div>
  );
};

export default ProjectPreview;
