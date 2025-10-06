import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/ProjectDetail.scss";

// Import your actual images here
import projectImg from "../../assets/images/ciri_incident_classification.png";

const CIRIProjectDetail: React.FC = () => {
  return (
    <div className="project-detail-container">
      <h1>Classification of Incident-Related Images using Machine Learning (CIRI)</h1>

      <img
        src={projectImg}
        alt="Incident-related image classification project visual"
        className="project-main-image"
      />

      <hr />

      <section className="section-block">
        <h2>Motivation</h2>
        <p>
          In natural disasters and emergency scenarios, rapid identification of the type of incident
          (e.g., floods, earthquakes, wildfires) is crucial for effective resource allocation and relief
          planning. This project developed machine learning models to automatically classify incident-related
          images into disaster categories, supporting faster and more accurate decision-making during crisis
          response.
        </p>
      </section>

      <section className="section-block">
        <h2>Research Questions</h2>
        <ul>
          <li>How does image dimension affect classification accuracy?</li>
          <li>How to address class imbalance in multi-class incident datasets?</li>
          <li>Comparison between shallow and deep neural networks?</li>
          <li>How accurately can incidents be classified into their respective categories?</li>
          <li>How does ensemble learning improve shallow models?</li>
        </ul>
      </section>

      <section className="section-block">
        <h2>Dataset</h2>
        <p>
          The dataset is a subset of the MIT Incidents dataset, originally containing ~977,000 images across
          43 incident and 49 place categories. The subset used included 12 classes such as wildfire, flood,
          earthquake, car accident, tornado, and oil spill. Challenges included class imbalance, varying image
          sizes, and noisy file types. Preprocessing involved image resizing, removal of invalid files, and
          balancing via under-sampling and over-sampling.
        </p>
      </section>

      <section className="section-block">
        <h2>Methodology</h2>
        <p>
          Three dataset variations were created: normal, under-sampled, and over-sampled. Two models were
          tested: (1) a custom shallow neural network and (2) a deep neural network based on InceptionV3.
          Ensemble learning was also explored by combining both models. Evaluation was conducted using
          precision, recall, F1-score, and confusion matrices, with K-fold cross-validation ensuring robustness.
        </p>
      </section>

      <section className="section-block">
        <h2>Results & Discussion</h2>
        <ul>
          <li>Image size significantly impacted accuracy — 480×480 gave best performance (82%).</li>
          <li>Oversampling improved performance to ~90% accuracy and balanced class-level F1-scores.</li>
          <li>Deep networks (InceptionV3) outperformed shallow networks by ~40% in accuracy.</li>
          <li>Ensemble learning boosted shallow model performance, improving class-specific F1-scores.</li>
          <li>K-fold validation confirmed generalization with an average validation accuracy of 79%.</li>
        </ul>
      </section>

      <section className="section-block">
        <h2>Report</h2>
        <p>
          📄 <a href="/pdfs/DS_Project_Grp82.pdf" target="_blank" rel="noopener noreferrer">
            Read Full Report (PDF)
          </a>
        </p>
      </section>

      <Link to="/projects" className="back-link">← Back to Projects</Link>
    </div>
  );
};

export default CIRIProjectDetail;
