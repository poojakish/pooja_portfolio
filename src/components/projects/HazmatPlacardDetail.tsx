import React from "react";
import { Link } from "react-router-dom";
import '../../assets/styles/ProjectDetail.scss';

// Import images
import thesisImg from '../../assets/images/Hazmat_main.png';

const HazmatPlacardDetail: React.FC = () => {
  return (
    <div className="project-detail-container">
      <h1>Master’s Thesis: Robust HAZMAT Placard Detection in Real-World Rail Environments</h1>

      <img src={thesisImg} alt="Hazmat Detection Visual" className="project-main-image" />

      <hr />

      <section className="section-block">
        <h2>Abstract</h2>
        <p>
          Detecting hazardous material (HAZMAT) placards in real-world railway environments is critical for safety,
          emergency response, and automated freight inspection. However, existing AI models are typically trained on
          clean, well-lit images and struggle when placards are damaged, faded, or partially obstructed — conditions
          that are common in operational rail settings.
        </p>
        <p>
          This research addresses that gap by developing <strong>R-HazNet (Robust HAZMAT Network)</strong>, a detection
          and classification pipeline built using YOLOv8 for placard detection and Ultralytics classification models
          for hazard class recognition. Since publicly available datasets underrepresent damaged placards, we created
          the <strong>HAZMATDefect-CT</strong> dataset and applied two complementary data augmentation strategies:
          traditional augmentations (noise, blur, geometric distortions, occlusion, fading, and lighting changes) and GAN-based
          synthetic damage generation to simulate realistic tearing, chipping, and surface wear.
        </p>
        <p>
          We evaluated model performance using four dataset configurations combining state-of-the-art datasets,
          traditionally augmented data, and GAN-generated data. Testing was conducted on a real industrial dataset of
          European freight wagons. The proposed R-HazNet model trained with both traditional and GAN-based augmentation
          achieved the best robustness, reaching an <strong>F1-score of 86.51%</strong> on challenging real-world data
          and outperforming existing approaches.
        </p>
        <p>
          This work demonstrates that combining classical augmentation with generative models significantly improves
          the reliability of HAZMAT placard detection systems in harsh, real-world environments, supporting the
          development of automated safety inspection systems for freight transportation.
        </p>
      </section>

      <section className="section-block">
        <h2>Tools & Skills</h2>
        <ul>
          <li><strong>Languages & Libraries:</strong> Python, PyTorch, OpenCV</li>
          <li><strong>Detection & Classification:</strong> YOLOv8 (Ultralytics), Image Classification Models, End-to-end CV pipeline design</li>
          <li><strong>Data Engineering:</strong> Traditional augmentation (noise, blur, rotation, scaling, occlusion, lighting), GAN-based damage simulation</li>
          <li><strong>Dataset Work:</strong> Custom dataset creation (HAZMATDefect-CT), dataset balancing, multi-dataset training</li>
          <li><strong>Evaluation:</strong> F1-score, precision, recall, robustness testing, FID, KID</li>
          <li><strong>CV Challenges:</strong> Domain adaptation, dataset bias handling, detection under damage and occlusion</li>
        </ul>
      </section>

      <section className="section-block">
        <h2>GitHub & Paper</h2>
        <p>
          🔗 <a href="https://github.com/poojakish/robust-hazmat-detector" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </p>
        <p>
          📄 <a href="https://drive.google.com/file/d/1RQY7hVkiT9-znL5ehrKVt7wOqU8578Ss/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Read the Thesis Paper (PDF)
          </a>
        </p>
      </section>

      <Link to="/projects" className="back-link">← Back to Projects</Link>
    </div>
  );
};

export default HazmatPlacardDetail;