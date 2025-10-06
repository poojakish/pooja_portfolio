import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/ProjectDetail.scss";

// Import your actual images here
import projectImg from "../../assets/images/acdc_segmentation.png";

const ACDCProjectDetail: React.FC = () => {
  return (
    <div className="project-detail-container">
      <h1>Comparing MERIT and U-Net for Cardiac MRI Segmentation (ACDC Challenge)</h1>

      <img
        src={projectImg}
        alt="ACDC Cardiac MRI Segmentation project visual"
        className="project-main-image"
      />

      <hr />

      <section className="section-block">
        <h2>Abstract</h2>
        <p>
          This project presents a comparative study of two deep learning approaches for
          automatic cardiac MRI segmentation as part of the Automated Cardiac Diagnosis
          Challenge (ACDC). A traditional CNN-based U-Net was compared with the
          Transformer-based MERIT (Multiscale hiERarchical vIsion Transformer). The models
          were evaluated using Dice scores and Hausdorff distance across segmentation of
          left ventricle, right ventricle, and myocardium. MERIT achieved higher accuracy
          overall, while U-Net proved more efficient in terms of training time and
          computational resources.
        </p>
      </section>

      <section className="section-block">
        <h2>Tools & Skills</h2>
        <ul>
          <li>U-Net (CNN-based segmentation)</li>
          <li>MERIT (Vision Transformer with cascaded attention)</li>
          <li>ACDC Dataset (Cardiac MRI)</li>
          <li>MONAI framework, PyTorch</li>
          <li>Evaluation Metrics: Dice Score, Hausdorff Distance</li>
          <li>Data preprocessing & augmentation (flipping, cropping, rotation)</li>
        </ul>
      </section>

      <section className="section-block">
        <h2>Methodology</h2>
        <p>
          The dataset was preprocessed using MONAI with transformations such as random
          flipping, cropping, and rotations. Two segmentation pipelines were implemented:
          a 2D U-Net using an encoder-decoder with skip connections, and MERIT, a
          Transformer-based model with multi-scale self-attention and cascaded attention
          decoding. Both models were trained and evaluated on the ACDC dataset using
          standard segmentation metrics.
        </p>
      </section>

      <section className="section-block">
        <h2>Results & Discussion</h2>
        <p>
          U-Net achieved an average Dice score of <b>0.85</b> with lower computational cost
          and faster training times. MERIT achieved a higher average Dice score of
          <b> 0.88</b> and lower Hausdorff distances, producing more consistent and precise
          segmentation masks, though at the expense of training efficiency. U-Net is
          better suited for limited-resource settings, while MERIT offers improved
          performance with sufficient compute and larger datasets.
        </p>
      </section>

      <section className="section-block">
        <h2>Report & Code</h2>
        <p>
          📄 <a href="/pdfs/DLMIA_ACDC_GRP_9.pdf" target="_blank" rel="noopener noreferrer">
            Read Full Report (PDF)
          </a>
        </p>
        <p>
          💻 <a href="https://gitlab.utwente.nl/s3207595/acdc_challenge/-/tree/main" target="_blank" rel="noopener noreferrer">
            U-Net GitLab Repository
          </a>
        </p>
        <p>
          💻 <a href="https://gitlab.utwente.nl/s3176649/acdc_challenge_merit" target="_blank" rel="noopener noreferrer">
            MERIT GitLab Repository
          </a>
        </p>
      </section>

      <Link to="/projects" className="back-link">← Back to Projects</Link>
    </div>
  );
};

export default ACDCProjectDetail;
