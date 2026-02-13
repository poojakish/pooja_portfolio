import React from "react";
import { Link } from "react-router-dom";
import '../../assets/styles/ProjectDetail.scss';

// Import images
import posterImg from '../../assets/images/nccv_poster_prest.jpeg';
import projectImg from '../../assets/images/eila_full.png';

const EilaFerDetail: React.FC = () => {
  return (
    <div className="project-detail-container">
      <h1>Emotions in LatAm (EiLA): A Culturally Representative Dataset for Emotion Recognition</h1>

      <img src={projectImg} alt="EiLA dataset visual" className="project-main-image" />

      <hr />

      <section className="section-block">
        <h2>Abstract</h2>
        <p>
          Vision-based emotion recognition systems rely heavily on facial expressions to infer human emotions.
          However, most existing datasets are built using content from North America and Europe, which limits
          cultural representation and introduces bias when models are applied globally. Cultural background
          influences how emotions are expressed and interpreted, making diversity in training data essential
          for building fair and reliable AI systems.
        </p>
        <p>
          To address this gap, we introduce <strong>Emotions in LatAm (EiLA)</strong>, a manually annotated dataset
          focused on facial expressions from Latin American individuals in naturalistic and culturally relevant
          scenarios. The dataset includes frame-level annotations for six basic emotions and captures demographic
          diversity such as age, gender, and skin tone. EiLA supports both image-based and video-based Facial
          Expression Recognition (FER) tasks.
        </p>
        <p>
          We benchmarked multiple widely used state-of-the-art FER models on EiLA to evaluate their ability to
          generalize across cultures. Results reveal notable performance drops and fairness gaps when models trained
          on culturally narrow datasets are tested on EiLA. These findings highlight the importance of culturally
          representative datasets for building robust and equitable emotion recognition systems.
        </p>
        <p>
          This work contributes a new dataset and evaluation benchmark while promoting Responsible AI practices
          in affective computing, taking an important step toward inclusive emotion recognition technologies.
        </p>
      </section>

      <section className="section-block">
        <h2>Tools & Skills</h2>
        <ul>
          <li><strong>Languages & Libraries:</strong> Python, PyTorch, NumPy, Pandas, OpenCV</li>
          <li><strong>Dataset Work:</strong> Manual dataset creation & annotation (EiLA), frame-level labeling, demographic metadata handling</li>
          <li><strong>Emotion Recognition:</strong> CNN architectures, transfer learning, FER model benchmarking</li>
          <li><strong>Responsible AI:</strong> Bias analysis, cross-cultural evaluation, fairness-aware benchmarking</li>
          <li><strong>Data Processing:</strong> Video frame extraction, preprocessing pipelines, augmentation</li>
          <li><strong>Evaluation & Visualization:</strong> Validation metrics, performance comparison, matplotlib, seaborn</li>
        </ul>
      </section>

      <section className="section-block">
        <h2>Presentation and Publication</h2>
        <p>
          Presented at <strong>NCCV 2025</strong> and accepted at the <strong>Latinx AI Workshop @ CVPR 2025</strong>.
        </p>
        <img src={posterImg} alt="NCCV Poster Presentation" className="poster-image" />
      </section>

      <section className="section-block">
        <h2>GitHub & Paper</h2>
        <p>
          🔗 <a href="https://eila-dataset.github.io/" target="_blank" rel="noopener noreferrer">Project Website</a>
        </p>
        <p>
          🔗 <a href="https://github.com/poojakish/eila_dataset_benchmark" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </p>
        <p>
          📄 <a href="https://drive.google.com/file/d/11FSu9jayWAzTFsyYlfqYughltRC5bj0o/view?usp=sharing" target="_blank" rel="noopener noreferrer">Read the Paper</a>
        </p>
      </section>

      <Link to="/projects" className="back-link">← Back to Projects</Link>
    </div>
  );
};

export default EilaFerDetail;