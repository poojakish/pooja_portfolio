import React from "react";
import { Link } from "react-router-dom";
import '../../assets/styles/ProjectDetail.scss';

// Import images
import thesisImg from '../../assets/images/Hazmat_main.png';
// import videoStill from '../../assets/images/hazmat_video_poster.png';

const HazmatPlacardDetail: React.FC = () => {
  return (
    <div className="project-detail-container">
      <h1>Master’s Thesis: Deformed Hazardous Material Placard Detection on Freight Vehicles</h1>

      <img src={thesisImg} alt="Hazmat Detection Visual" className="project-main-image" />

      <hr />

      <section className="section-block">
        <h2>Abstract</h2>
        <p>
          This thesis explores an end-to-end pipeline for detecting and classifying damaged HAZMAT placards on freight trains using real-world video data collected at intermodal terminals. It introduces a comprehensive augmentation strategy that combines classical techniques such as blur, occlusion, geometric distortions, and GAN-based synthetic damage generation using StyleGAN2 and Stable Diffusion. The pipeline also incorporates segmentation masks from the SAM model and evaluates models using LPIPS, FID, and KID to quantify visual and semantic damage realism. Detection models are trained using YOLOv8 and Ultralytics APIs.
        </p>
      </section>

      <section className="section-block">
        <h2>Tools & Skills</h2>
        <ul>
          <li>Python, PyTorch, OpenCV</li>
          <li>YOLOv8, Ultralytics API, Segment Anything Model (SAM), ControlNet</li>
          <li>Data Augmentation (noise, blur, occlusion, weather, geometric distortions)</li>
          <li>GAN-based Damage Generation (StyleGAN2, Stable Diffusion)</li>
          <li>Video Annotation using CVAT</li>
          <li>Model Evaluation using LPIPS, FID, and KID</li>
        </ul>
      </section>

      {/* <section className="section-block">
        <h2>Demo Snapshot</h2>
        <img src={videoStill} alt="Sample damage detection still from thesis video" className="poster-image" />
      </section> */}

      <section className="section-block">
        <h2>GitHub & Paper</h2>
        <p>
          🔗 <a href="https://github.com/poojakish/hazmat-detection" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </p>
        <p>
          📄 <a href="https://example.com/thesis-paper.pdf" target="_blank" rel="noopener noreferrer">Read the Thesis Paper (PDF)</a>
        </p>
      </section>

      <Link to="/projects" className="back-link">← Back to Projects</Link>
    </div>
  );
};

export default HazmatPlacardDetail;
