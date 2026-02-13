import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import {
    faBrain,
    faRobot,
    faCamera,
    faCode,
    faCogs,
    faBookOpen
  } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python", "PyTorch", "TensorFlow", "Keras", "OpenAI API", "LangChain",
    "YOLO (Ultralytics)", "Vision Transformers",
    "SHAP", "UMAP", "SAM (Segment Anything Model)",
    "Pandas", "NumPy", "scikit-learn", "Spark", "High Performance Computing (HPC)"
];

const labelsSecond = [
    "Object Detection", "Image Segmentation", "Image Classification", "3D Image Analysis", "Image Processing", "Pose Estimation" , "Vision Transformers (ViT)", "Vision Language Models (VLMs)", "YOLOv8", "Ultralytics", "OpenCV", "Image augmentation", "synthetic data pipelines", "LiDAR / Point Cloud integration",
];

const labelsThird = [
    "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Flask", "Node.js", "SQL", "PostgreSQL", "Postman"
];

const labelsFourth = [
    "Git", "GitHub Actions", "Azure DevOps", "Docker", "Azure", "AWS", "Linux" 
];

const labelsFifth = [
    "SHAP (feature attribution)",
    "Dimensionality reduction (U-MAP)",
    "Prototype and criticism analysis",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>AI & Machine Learning Engineering</h3>
                    <p>Design and develop end-to-end AI solutions, with hands-on experience in computer vision (object detection, image classification), large language model integration, and explainable AI. Skilled in building data-centric ML pipelines using advanced augmentation and synthetic data generation.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCamera} size="3x"/>
                    <h3>Computer Vision & Image Processing</h3>
                    <p>Extensive experience developing CV systems for real-world applications, including public space maintenance, hazard placard detection, and emotion recognition. Focus on model optimization and robust deployment.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* <div className="skill">
                    <FontAwesomeIcon icon={faBookOpen} size="3x"/>
                    <h3>Research & Explainable AI</h3>
                    <p>Strong background in AI research, with a focus on interpretability and responsible AI. Experience applying XAI techniques to evaluate and improve model transparency and trustworthiness.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFourth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div> */}

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Front-end & API Development</h3>
                    <p>Builds robust, user-friendly applications integrating AI models via web-based UIs and APIs. Experienced in both frontend and backend development to deliver complete solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps, MLOps & Cloud Deployment</h3>
                    <p>Experienced with CI/CD pipelines, version control, and cloud-based development to ensure reliable deployment of AI systems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFourth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;