import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/ProjectDetail.scss";

import projectImg from "../../assets/images/acdc_segmentation.png";

const ACDCProjectDetail: React.FC = () => {
  return (
    <div className="project-detail-container">
      <h1>Cardiac MRI Segmentation: U-Net vs MERIT (ACDC Challenge)</h1>

      <img
        src={projectImg}
        alt="ACDC Cardiac MRI Segmentation project visual"
        className="project-main-image"
      />

      <hr />

      <section className="section-block">
        <h2>Abstract</h2>
        <p>
          This project presents a structured comparison of CNN-based and Transformer-based
          deep learning models for cardiac MRI segmentation using the ACDC challenge dataset.
          We evaluate a traditional <strong>U-Net</strong> architecture against the
          <strong> MERIT (Multiscale hiERarchical vIsion Transformer)</strong>, a
          cascaded attention-based model designed to capture multi-scale contextual information.
        </p>
        <p>
          Both models were trained for 2D segmentation of the left ventricle (LV),
          right ventricle (RV), and myocardium from cine MRI slices. A full preprocessing
          pipeline was implemented using MONAI, including NIfTI data loading, label splitting,
          spatial normalization, and on-the-fly augmentations such as flipping, rotation,
          cropping, and padding.
        </p>
        <p>
          Evaluation on the test set shows MERIT achieving a higher mean Dice score
          (<strong>0.88</strong>) and lower Hausdorff distance (<strong>5.81</strong>)
          compared to U-Net (Dice <strong>0.85</strong>, HD95 <strong>7.42</strong>).
          MERIT produced more consistent segmentation masks due to attention-based
          multi-scale feature modeling, while U-Net remained significantly more
          computationally efficient, requiring only about one-fifth of MERIT’s training time.
        </p>
      </section>

      <section className="section-block">
        <h2>Tools & Skills</h2>
        <ul>
          <li><strong>Frameworks:</strong> PyTorch, MONAI (medical imaging DL framework)</li>
          <li><strong>Models:</strong> U-Net (CNN encoder–decoder), MERIT (ViT with cascaded attention)</li>
          <li><strong>Data:</strong> ACDC Cardiac MRI dataset (NIfTI format)</li>
          <li><strong>Preprocessing:</strong> Label splitting, normalization, augmentation pipelines</li>
          <li><strong>Training Techniques:</strong> Mixed precision, Dice loss, cross-entropy loss</li>
          <li><strong>Evaluation Metrics:</strong> Dice score, Hausdorff Distance (HD95)</li>
        </ul>
      </section>

      <section className="section-block">
        <h2>Methodology</h2>
        <ul>
          <li>Loaded and processed NIfTI MRI volumes using nibabel and MONAI</li>
          <li>Converted segmentation labels into RV, myocardium, and LV masks</li>
          <li>Implemented 2D U-Net with encoder–decoder skip connections</li>
          <li>Implemented MERIT with hierarchical transformer backbone and cascaded attention decoding</li>
          <li>Trained and validated both models with identical dataset splits</li>
          <li>Performed quantitative and qualitative evaluation of segmentation masks</li>
        </ul>
      </section>

      <section className="section-block">
        <h2>Key Findings</h2>
        <ul>
          <li>MERIT achieved higher segmentation accuracy and smoother boundaries</li>
          <li>U-Net trained ~5× faster and required fewer computational resources</li>
          <li>Transformer model showed signs of overfitting on limited data</li>
          <li>Left ventricle segmentation was consistently easier than myocardium/RV</li>
          <li>Trade-off identified between performance and computational efficiency</li>
        </ul>
      </section>

      <section className="section-block">
        <h2>Report & Code</h2>
        <p>
          📄 <a href="https://drive.google.com/file/d/1eB77uipSkmut2wgo-hIJLez1QqNOaMJx/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Read Full Report (PDF)
          </a>
        </p>
        <p>
          💻 <a href="https://gitlab.utwente.nl/s3207595/acdc_challenge/-/tree/main" target="_blank" rel="noopener noreferrer">
            U-Net Implementation
          </a>
        </p>
        <p>
          💻 <a href="https://gitlab.utwente.nl/s3176649/acdc_challenge_merit" target="_blank" rel="noopener noreferrer">
            MERIT Implementation
          </a>
        </p>
      </section>

      <Link to="/projects" className="back-link">← Back to Projects</Link>
    </div>
  );
};

export default ACDCProjectDetail;