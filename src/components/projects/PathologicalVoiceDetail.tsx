import React from "react";
import { Link } from "react-router-dom";
import '../../assets/styles/ProjectDetail.scss';

import projectImg from '../../assets/images/path.jpeg';

const PathologicalVoiceDetail: React.FC = () => {
  return (
    <div className="project-detail-container">
      <h1>Pathological Voice Classification using ANN, RBFNN, and Regression Tree</h1>

      <img src={projectImg} alt="Pathological voice project visual" className="project-main-image" />

      <hr />

      <section className="section-block">
        <h2>Abstract</h2>
        <p>
          This project focuses on automatic discrimination between normal and pathological voices in children
          using machine learning and acoustic speech analysis. Voice recordings of children speaking Tamil
          phrases were collected in a noise-free environment and processed to extract clinically relevant
          acoustic features including pitch, formant frequencies (F1–F3), jitter, shimmer, harmonicity,
          signal energy, amplitude, and intensity.
        </p>
        <p>
          A complete signal processing pipeline was designed, including silence removal using Mahalanobis
          distance, windowing of speech frames, and feature engineering from the audio signals. The extracted
          feature set was used to train and evaluate three classification models: Artificial Neural Network (ANN),
          Radial Basis Function Neural Network (RBFNN), and Regression Tree.
        </p>
        <p>
          Comparative evaluation showed that the ANN model achieved the highest performance with an accuracy
          of <strong>100%</strong>, outperforming RBFNN (90%) and Regression Tree (92.4%). The system demonstrates
          how acoustic feature analysis combined with machine learning can support early detection of childhood
          voice disorders and assist pathologists in clinical screening.
        </p>
      </section>

      <section className="section-block">
        <h2>Tools & Skills</h2>
        <ul>
          <li><strong>Languages & Platforms:</strong> Python, MATLAB</li>
          <li><strong>Speech Processing:</strong> Praat, acoustic feature extraction, formant analysis</li>
          <li><strong>Features Engineered:</strong> Pitch, jitter (RAP), shimmer, harmonicity (HNR), signal energy, formants</li>
          <li><strong>Machine Learning Models:</strong> ANN (MLP), RBF Neural Network, Regression Tree</li>
          <li><strong>Signal Processing:</strong> Silence removal (Mahalanobis distance), windowing, frame-based analysis</li>
          <li><strong>Evaluation:</strong> Classification accuracy comparison, model performance analysis</li>
        </ul>
      </section>

      <section className="section-block">
        <h2>System Overview</h2>
        <ul>
          <li>Recorded Tamil speech samples from children in a controlled environment</li>
          <li>Removed silence segments using Mahalanobis distance thresholding</li>
          <li>Segmented signals into short windows for analysis</li>
          <li>Extracted acoustic features (pitch, shimmer, jitter, harmonicity, energy, formants)</li>
          <li>Constructed feature set and trained ANN, RBFNN, and Regression Tree classifiers</li>
          <li>Compared model performance to identify the most effective approach</li>
        </ul>
      </section>

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
          The patent covers a multi-model machine learning framework using acoustic voice biomarkers
          for automated detection of childhood vocal pathologies.
        </p>
      </section>

      <section className="section-block">
        <h2>Paper</h2>
        <p>
          📄 <a href="https://docs.google.com/document/d/1ZCIJ7PUeHOxOfN4ZX5sWq9AXO83g5Pyz/edit?usp=sharing&ouid=112885118393410915718&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
            View Research Paper
          </a>
        </p>
      </section>

      <Link to="/projects" className="back-link">← Back to Projects</Link>
    </div>
  );
};

export default PathologicalVoiceDetail;