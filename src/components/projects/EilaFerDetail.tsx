import React from "react";
import { Link } from "react-router-dom";
import '../../assets/styles/ProjectDetail.scss';

// Import images
import posterImg from '../../assets/images/nccv_poster_prest.jpeg'; // Poster with you
import projectImg from '../../assets/images/eila_full.png'; // Project thumbnail or figure

const EilaFerDetail: React.FC = () => {
  return (
    <div className="project-detail-container">
      <h1>Emotions in LatAm: A Dataset and Benchmark for Emotion Recognition in Latin America</h1>

      <img src={projectImg} alt="EiLA project visual" className="project-main-image" />

      <hr />

      <section className="section-block">
        <h2>Abstract</h2>
        <p>
        Vision-based emotion recognition uses images or videos to analyze visual cues, such as facial expressions, to infer emotions. Researchers often explore how humans interpret these cues to develop more robust emotion recognition systems. Studies suggest that, while biological factors play a predominant role in allowing this capability, cultural influences shape and adapt universal emotions. Given the role of culture in this process, a major concern is that existing emotion recognition datasets predominantly feature content from North America and Europe, limiting their global representativeness. To bridge this gap, we introduce the Emotions in LatAm dataset (EiLA), a novel dataset comprising emotion recognition data collected exclusively in Latin America. Our goal is to enable future research on emotion recognition from a Responsible AI perspective. Additionally, we benchmark the performance of state-of-the-art and widely used open-source models on the task of Facial Expression Recognition (FER) using EiLA.
        </p>
      </section>

      <section className="section-block">
        <h2>Tools & Skills</h2>
            <ul>
                <li>Python, PyTorch, NumPy, Pandas, OpenCV</li>
                <li>Dataset creation & annotation (EiLA dataset)</li>
                <li>Emotion recognition methods – CNN architectures, transfer learning, data augmentation</li>
                <li>Cross‑cultural dataset analysis & benchmarking</li>
                <li>Visualization & evaluation – matplotlib, seaborn, validation metrics</li>
                {/* <li>Model deployment & documentation (GitHub, README, Docker support)</li> */}
            </ul>
      </section>


      <section className="section-block">
        <h2>Presentation and Publication </h2>
        <p>
          Presented at <strong>NCCV 2025</strong> and accepted at the <strong>Latinx AI Workshop @ CVPR 2025</strong>.
        </p>
        <img src={posterImg} alt="NCCV 2025 Poster Presentation" className="poster-image" />
      </section>

      <section className="section-block">
        <h2>GitHub & Paper</h2>
        <p>
          🔗 <a href="https://eila-dataset.github.io/" target="_blank" rel="noopener noreferrer">Details on EiLA</a>
        </p>
        <p>
          🔗 <a href="https://github.com/poojakish/eila_dataset_benchmark" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </p>
        <p>
          📄 <a href="https://eila-dataset.github.io/#" target="_blank" rel="noopener noreferrer">Read the Paper on arXiv</a>
        </p>
      </section>

      <Link to="/projects" className="back-link">← Back to Projects</Link>
    </div>
  );
};

export default EilaFerDetail;
