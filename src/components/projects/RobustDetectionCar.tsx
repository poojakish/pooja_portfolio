import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/ProjectDetail.scss";

// Import your actual images here
// Replace with a suitable figure or illustration from the project
import projectImg from "../../assets/images/multimodal_ot.png";

const MultimodalProjectDetail: React.FC = () => {
  return (
    <div className="project-detail-container">
      <h1>Enhancing the Robustness of Object Detection and Tracking through Multimodal Integration</h1>

      <img
        src={projectImg}
        alt="Multimodal Object Detection project visual"
        className="project-main-image"
      />

      <hr />

      <section className="section-block">
        <h2>Abstract</h2>
        <p>
          This project proposes a multimodal approach for improving the robustness of real-time object
          detection and tracking in autonomous driving. By combining 2D detections from YOLOv8 with
          2D LiDAR depth slices, the system enhances distance estimation and tracking performance while
          maintaining computational efficiency. The approach is validated on the NuScenes dataset under
          varying environmental conditions.
        </p>
      </section>

      <section className="section-block">
        <h2>Tools & Skills</h2>
        <ul>
          <li>YOLOv8 for 2D object detection</li>
          <li>DeepSORT & YOLO tracking algorithms</li>
          <li>NuScenes dataset for evaluation</li>
          <li>LiDAR–Camera calibration and transformation</li>
          <li>Evaluation metrics: mAP, IoU, MOTA, MATP</li>
          <li>Python, PyTorch, OpenCV, NumPy</li>
        </ul>
      </section>

      <section className="section-block">
        <h2>Methodology</h2>
        <p>
          The framework consists of two main pipelines: (1) a camera processing module using YOLOv8 and
          DeepSORT for detection and tracking, and (2) a LiDAR processing module extracting optimal 2D slices
          from 3D point clouds. These modules are fused to assign depth estimates to detected objects. The
          system ensures real-time performance (~25 ms per frame) while improving robustness in challenging
          weather and traffic conditions.
        </p>
      </section>

      <section className="section-block">
        <h2>Presentation and Discussion</h2>
        <p>
          Conducted as part of the Masters in Robotics program at the University of Twente, this project
          highlights how multimodal integration improves safety and efficiency in autonomous driving. The
          study discusses the trade-offs between monocular depth estimation, LiDAR fusion, and computational
          efficiency, and presents future directions including advanced depth fusion with Kalman filters.
        </p>
      </section>

      <section className="section-block">
        <h2>Report</h2>
        <p>
          📄 <a href="/pdfs/ACVPR_Paper.pdf" target="_blank" rel="noopener noreferrer">
            Read Full Report (PDF)
          </a>
        </p>
      </section>

      <Link to="/projects" className="back-link">← Back to Projects</Link>
    </div>
  );
};

export default MultimodalProjectDetail;
