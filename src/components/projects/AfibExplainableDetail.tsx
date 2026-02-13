import React from "react";
import { Link } from "react-router-dom";
import '../../assets/styles/ProjectDetail.scss';

import projectImg from '../../assets/images/af_xai_full.png';

const XAIProjectDetail: React.FC = () => {
  return (
    <div className="project-detail-container">
      <h1>Explainable AI for Atrial Fibrillation Classification</h1>

      <img src={projectImg} alt="AF XAI project visual" className="project-main-image" />

      <hr />

      <section className="section-block">
        <h2>Abstract</h2>
        <p>
          This project investigates how explainable AI (XAI) can be used to interpret and improve a machine learning
          model for atrial fibrillation (AF) detection. The underlying classifier is a Support Vector Machine trained
          on ECG-derived R–R interval windows, achieving a high F1-score (~0.95). Given the clinical importance of
          reliable predictions, our focus shifts from model accuracy alone to understanding model behavior,
          misclassifications, and data quality.
        </p>
        <p>
          We designed a <strong>data-centric XAI pipeline</strong> combining dimensionality reduction (U-MAP),
          local feature attribution (KernelSHAP), and example-based interpretability (MMD-Critic prototypes and
          criticisms). High-dimensional histogram features were projected into a 2D space to visualize model decision
          regions, identify clusters of false positives and false negatives, and guide targeted explanation. To objectively
          assess how well the visualization separates classes, we applied the <strong>N2 class separability metric</strong>
          as a measure of contrastivity.
        </p>
        <p>
          SHAP analysis revealed that decisions were influenced by distributed patterns across bins rather than single
          dominant features, while prototype and criticism analysis exposed complexity in the data distribution and
          potential labeling ambiguities. The pipeline demonstrates how explainability methods can support
          <strong>data debugging, trust building, and model validation</strong> in safety-critical medical AI systems.
        </p>
      </section>

      <section className="section-block">
        <h2>Tools & Skills</h2>
        <ul>
          <li><strong>Languages & Libraries:</strong> Python, NumPy, Pandas, Scikit-learn</li>
          <li><strong>ML Model:</strong> Support Vector Machines (SVM) for AF classification</li>
          <li><strong>Explainable AI:</strong> KernelSHAP, MMD-Critic (Prototypes & Criticisms)</li>
          <li><strong>Data-Centric XAI:</strong> U-MAP visualization, cluster inspection, misclassification analysis</li>
          <li><strong>Metrics & Evaluation:</strong> F1-score, N2 class separability metric</li>
          <li><strong>Data Engineering:</strong> Time-series windowing, histogram binning, normalization, class balancing</li>
          <li><strong>Visualization:</strong> matplotlib, seaborn</li>
        </ul>
      </section>

      <section className="section-block">
        <h2>Presentation and Discussion</h2>
        <p>
          Developed as part of an Explainable AI course project at the University of Twente. The work emphasized
          the importance of model transparency in medical machine learning, particularly for analyzing
          misclassifications and identifying potential data quality issues in ECG-derived features.
        </p>
      </section>

      <section className="section-block">
        <h2>GitHub & Report</h2>
        <p>
          🔗 <a href="https://github.com/gijsdesmit/XAI_project" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </p>
        <p>
          📄 <a href="https://drive.google.com/file/d/1LLRPleJobdoodj3S_IgpUFPdtBHq2Yz9/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Read Full Report (PDF)
          </a>
        </p>
      </section>

      <Link to="/projects" className="back-link">← Back to Projects</Link>
    </div>
  );
};

export default XAIProjectDetail;