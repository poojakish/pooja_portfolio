import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/ProjectDetail.scss";

import projectImg from "../../assets/images/ciri_incident_classification.png";

const CIRIProjectDetail: React.FC = () => {
  return (
    <div className="project-detail-container">
      <h1>Incident Image Classification for Disaster Response (CIRI)</h1>

      <img
        src={projectImg}
        alt="Incident-related image classification project visual"
        className="project-main-image"
      />

      <hr />

      <section className="section-block">
        <h2>Abstract</h2>
        <p>
          This project develops a machine learning framework to automatically classify
          incident-related images into disaster categories to support rapid emergency
          response and relief resource allocation. The dataset is a curated subset of the
          MIT Incidents dataset containing 12 disaster classes such as wildfire, flood,
          earthquake, oil spill, tornado, and accidents.
        </p>
        <p>
          A full data science pipeline was implemented, including exploratory data
          analysis, file validation, image resizing experiments, and handling severe
          class imbalance using both under-sampling and data augmentation–based
          oversampling. Model performance was studied across different image resolutions
          (224×224, 320×320, 480×480), revealing that higher-resolution inputs improved
          classification accuracy.
        </p>
        <p>
          A comparative study was conducted between a custom shallow neural network and a
          fine-tuned InceptionV3 deep network. Oversampling combined with InceptionV3
          achieved the best performance (~<strong>90% accuracy</strong>), significantly
          improving minority-class F1-scores (e.g., “collapsed” class improved from 56% to
          82%). Ensemble learning further enhanced shallow model performance. The system
          was validated using precision, recall, F1-score, confusion matrices, and 5-fold
          cross-validation, demonstrating robust generalization.
        </p>
      </section>

      <section className="section-block">
        <h2>Tools & Skills</h2>
        <ul>
          <li><strong>Frameworks:</strong> TensorFlow/Keras, OpenCV</li>
          <li><strong>Models:</strong> Custom shallow CNN, InceptionV3 (fine-tuning), Ensemble learning</li>
          <li><strong>Data Processing:</strong> EDA, image resizing experiments, file validation</li>
          <li><strong>Class Imbalance Handling:</strong> Under-sampling, augmentation-based oversampling</li>
          <li><strong>Evaluation:</strong> Precision, Recall, F1-score, Confusion Matrix, K-fold CV</li>
          <li><strong>Augmentation:</strong> Rotation, cropping, flipping, shearing</li>
        </ul>
      </section>

      <section className="section-block">
        <h2>Methodology</h2>
        <ul>
          <li>Performed exploratory data analysis to study class distribution and image size variability</li>
          <li>Removed invalid file types and standardized image dimensions</li>
          <li>Created three dataset versions: normal, under-sampled, and over-sampled</li>
          <li>Tested effect of image size on performance — 480×480 gave best results</li>
          <li>Fine-tuned pre-trained InceptionV3 and trained custom shallow CNN</li>
          <li>Implemented ensemble model combining shallow and deep networks</li>
          <li>Validated robustness using confusion matrices and 5-fold cross-validation</li>
        </ul>
      </section>

      <section className="section-block">
        <h2>Key Findings</h2>
        <ul>
          <li>Image resolution strongly affected accuracy (82% → 90% improvement)</li>
          <li>Oversampling resolved minority-class bias and improved class-level F1-scores</li>
          <li>InceptionV3 outperformed shallow CNN by ~40% accuracy</li>
          <li>Ensemble learning improved shallow model performance significantly</li>
          <li>Cross-validation showed stable generalization (avg. validation accuracy ≈ 79%)</li>
        </ul>
      </section>

      <section className="section-block">
        <h2>Impact</h2>
        <p>
          The framework demonstrates how computer vision can assist disaster management
          by enabling faster and more accurate identification of incident types from
          images, potentially supporting governments and relief organizations in
          allocating resources efficiently.
        </p>
      </section>

      <section className="section-block">
        <h2>Report</h2>
        <p>
          📄 <a href="https://drive.google.com/file/d/1em87AuoBehIKyaWobm5RCTcSyF3JrLXZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Read Full Report (PDF)
          </a>
        </p>
      </section>

      <Link to="/projects" className="back-link">← Back to Projects</Link>
    </div>
  );
};

export default CIRIProjectDetail;