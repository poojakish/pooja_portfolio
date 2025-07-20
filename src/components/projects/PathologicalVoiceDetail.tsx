import React from "react";
import { Link } from "react-router-dom";
import '../../assets/styles/ProjectDetail.scss';

// Import images (replace with actual images if available)
import projectImg from '../../assets/images/path.jpeg'; // Generic preview image

const PathologicalVoiceDetail: React.FC = () => {
  return (
    <div className="project-detail-container">
      <h1>Pathological Voice Classification using ANN, RBFNN, and Regression Tree</h1>

      <img src={projectImg} alt="Pathological voice project visual" className="project-main-image" />

      <hr />

      <section className="section-block">
        <h2>Abstract</h2>
        <p>
          This project focuses on discriminating normal and pathological voices in children by using machine learning techniques. Voices of children speaking Tamil phrases were recorded and analyzed using acoustic features such as pitch, shimmer, jitter, signal energy, and formant frequencies. These features were used to classify the voices using three models: Artificial Neural Network (ANN), Radial Basis Function Neural Network (RBFNN), and Regression Tree.
        </p>
      </section>

      <section className="section-block">
        <h2>Tools & Skills</h2>
        <ul>
          <li>Python, MATLAB, Praat (for speech feature extraction)</li>
          <li>Machine Learning Models – ANN, RBFNN, Regression Tree</li>
          <li>Audio Signal Processing, Acoustic Feature Engineering</li>
          <li>Classification & Performance Analysis</li>
        </ul>
      </section>

      <section className="section-block">
        <h2>System Overview</h2>
        <p>
          The process involved:
          <ul>
            <li>Recording Tamil speech in a noise-free environment</li>
            <li>Removing silence using Mahalanobis distance</li>
            <li>Extracting features (pitch, shimmer, jitter, energy, formants)</li>
            <li>Classifying data using ANN, RBFNN, and Regression Tree</li>
          </ul>
          Among these, the ANN model achieved the highest accuracy of 100%, outperforming RBFNN (90%) and Regression Tree (92.4%).
        </p>
      </section>

      {/* <section className="section-block">
        <h2>Presentation</h2>
        <p>No formal poster presentation was conducted for this project.</p>
      </section> */}

      <section className="section-block">
        <h2>Patent</h2>
          <p>
          This work has been granted a patent titled:
          <br />
          <strong>
            “Classification of Normal and Pathological Voice using ANN, RBFNN and Regression Tree”
          </strong>
          </p>
          <p>
            Patent Application No: <strong>201941054663</strong> (India)
            <br />
            Inventors: Pooja Kishore, Harshini Priya, Kaviya Tamilselvam
          </p>
          <p>
          The patent covers the innovative use of multiple classification techniques combined with acoustic voice features for detecting childhood vocal disorders.
          </p>
      </section>

      <section className="section-block">
        <h2>Paper</h2>
        <p>
          📄 Download paper: <a href="/pdfs/pathological_voice_paper.pdf" target="_blank" rel="noopener noreferrer">View PDF</a>
        </p>
      </section>

      <Link to="/projects" className="back-link">← Back to Projects</Link>
    </div>
  );
};

export default PathologicalVoiceDetail;
