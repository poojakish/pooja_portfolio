import React from "react";
import { Link } from "react-router-dom";
import '../../assets/styles/ProjectDetail.scss';

// Import your actual images here
// import posterImg from '../../assets/images/xai_poster.jpg'; 
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
          This project explores explainable AI techniques to interpret and improve a Support Vector Machine (SVM) model used to classify atrial fibrillation (AF) from R-R interval data extracted from ECG recordings.
          We developed a data-centric pipeline incorporating dimensionality reduction (U-Map), local explanation (SHAP), and example-based interpretability (MMD-Critic). The goal was to identify misclassifications, improve data quality, and build trust in the model in clinical contexts.
        </p>
      </section>

      <section className="section-block">
        <h2>Tools & Skills</h2>
        <ul>
          <li>Python, NumPy, Pandas, Scikit-learn</li>
          <li>Support Vector Machines (SVM), KernelSHAP, MMD-Critic</li>
          <li>Dimensionality Reduction (U-Map, t-SNE, PCA)</li>
          <li>Data visualization (matplotlib, seaborn)</li>
          <li>Metric-based evaluation: F1-Score, N2 Separability</li>
          <li>Data preprocessing: binning, normalization, class balancing</li>
        </ul>
      </section>

      <section className="section-block">
        <h2>Presentation and Discussion</h2>
          <p>
            Developed and submitted as part of the Explainable AI course at University of Twente. The project emphasized the importance of model transparency in medical machine learning, especially for misclassification analysis and data quality improvements. The final report was well received during the course discussions.
          </p>
      </section>


      <section className="section-block">
        <h2>GitHub & Report</h2>
        <p>
          🔗 <a href="https://github.com/gijsdesmit/XAI_project" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </p>
        <p>
          📄 <a href="/pdfs/XAI_Project_Report.pdf" target="_blank" rel="noopener noreferrer">Read Full Report (PDF)</a>
        </p>
      </section>

      <Link to="/projects" className="back-link">← Back to Projects</Link>
    </div>
  );
};

export default XAIProjectDetail;
