import React from "react";
import { Link } from "react-router-dom";
import '../assets/styles/Project.scss';

// Import your images (update paths)
import hazmatImg from '../assets/images/hazmat_preview.png';
import eilaImg from '../assets/images/eila_preview.png';
import afibImg from '../assets/images/af_xai.png';
import pathVoiceImg from '../assets/images/path_preview.png'; // Add this line for the new project image
import multimodalImg from '../assets/images/multipmodal_projects_preview.png'; // replace with actual import path for your chosen image
import acdcSegImg from '../assets/images/dlmia_preview.png'; // import a suitable image/figure from your assets
import ciriImg from '../assets/images/ciri_preview.png'; // import your chosen image, e.g. ciri_incident_classification.png
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
  {
    id: "path-voice-classification",
    title: "Pathological Voice Classification using ANN, RBFNN, and Regression Tree",
    image: pathVoiceImg,
    description: "Developed a machine learning system to classify pathological vs normal voices. Granted an Indian patent for its clinical potential.",
  },
  {
    id: "multimodal-object-detection",
    title: "Enhancing Object Detection and Tracking with Multimodal Integration",
    image: multimodalImg, // replace with actual import path for your chosen image
    description: "Proposed a real-time framework combining YOLOv8 detections with 2D LiDAR slices to improve distance estimation and tracking in autonomous driving. Validated on NuScenes dataset.",
  },
  {
    id: "acdc-segmentation-merit-unet",
    title: "Comparing MERIT and U-Net for Cardiac MRI Segmentation (ACDC Challenge)",
    image: acdcSegImg, // import a suitable image/figure from your assets
    description: "Conducted a comparative study of U-Net (CNN-based) and MERIT (Transformer-based) for automated cardiac MRI segmentation in the ACDC challenge. MERIT achieved higher Dice scores (0.88 vs 0.85), while U-Net proved more computationally efficient.",
  },
  {
    id: "ciri-incident-classification",
    title: "Classification of Incident-Related Images (CIRI)",
    image: ciriImg, // import your chosen image, e.g. ciri_incident_classification.png
    description: "Built a machine learning framework to classify disaster-related images (e.g., floods, earthquakes, wildfires) using InceptionV3, shallow NNs, and ensemble learning. Oversampling improved accuracy to 90%, supporting faster disaster response planning.",
  }  
  // Add more projects...
];

const Project: React.FC = () => {
  return (
    <div className="projects-container" id="projects">
      <h1>Research & Projects</h1>
      <div className="projects-grid">
        {projects.map(({ id, title, image, description }) => (
          <div className="project" key={id}>
            <Link to={`/pooja_portfolio/projects/${id}`} className="project-link">
              <img src={image} alt={title} className="zoom" width="100%" />
              <h2>{title}</h2>
              <p>{description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
