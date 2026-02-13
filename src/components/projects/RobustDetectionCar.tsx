import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/ProjectDetail.scss";

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
          This project develops a multimodal perception framework for autonomous driving by integrating
          monocular camera detections with LiDAR depth information to improve object tracking and distance
          estimation. Instead of computationally expensive 3D object detection, the system combines 2D detections
          from YOLOv8 with an optimally selected 2D LiDAR slice extracted from 3D point clouds, enabling
          real-time performance while maintaining reliable spatial awareness.
        </p>
        <p>
          A full calibration and coordinate transformation pipeline aligns LiDAR points with the camera frame.
          The framework handles edge cases where objects fall above or below the LiDAR scan line and assigns
          depth estimates using geometric reasoning. The system was evaluated on the NuScenes dataset under
          diverse traffic and weather conditions using detection and tracking metrics including mAP, IoU,
          MOTA, and MATP.
        </p>
        <p>
          The final system processes each frame in approximately <strong>25 ms</strong>, demonstrating that
          2D LiDAR–camera fusion provides a computationally efficient alternative to full 3D perception while
          improving robustness in challenging real-world environments.
        </p>
      </section>

      <section className="section-block">
        <h2>Tools & Skills</h2>
        <ul>
          <li><strong>Object Detection:</strong> YOLOv8</li>
          <li><strong>Tracking:</strong> DeepSORT (Kalman Filter + Hungarian Algorithm)</li>
          <li><strong>Dataset:</strong> NuScenes multimodal autonomous driving dataset</li>
          <li><strong>Sensor Fusion:</strong> LiDAR–camera calibration, coordinate transformations</li>
          <li><strong>LiDAR Processing:</strong> 3D point cloud → optimal 2D slice extraction</li>
          <li><strong>Evaluation Metrics:</strong> mAP, IoU, MOTA, MATP</li>
          <li><strong>Tech Stack:</strong> Python, PyTorch, OpenCV, NumPy</li>
        </ul>
      </section>

      <section className="section-block">
        <h2>Methodology</h2>
        <ul>
          <li>Processed front camera frames using YOLOv8 for 2D object detection</li>
          <li>Tracked objects across frames using DeepSORT</li>
          <li>Extracted optimal 2D LiDAR slice from 32-channel 3D point cloud</li>
          <li>Transformed LiDAR coordinates into camera frame using calibration matrices</li>
          <li>Associated LiDAR points with bounding boxes to estimate object depth</li>
          <li>Handled edge cases where objects lie above/below LiDAR slice or lack valid returns</li>
          <li>Evaluated detection and tracking performance using ground-truth converted to 2D format</li>
        </ul>
      </section>

      <section className="section-block">
        <h2>Key Contributions</h2>
        <ul>
          <li>Efficient alternative to full 3D object detection using 2D LiDAR fusion</li>
          <li>Real-time perception pipeline (~25 ms per frame)</li>
          <li>Robust depth estimation in adverse weather and occlusion scenarios</li>
          <li>Practical strategy for selecting LiDAR slice based on vehicle region-of-influence</li>
        </ul>
      </section>

      <section className="section-block">
        <h2>Report</h2>
        <p>
          📄 <a href="https://drive.google.com/file/d/1Ud-7EPTFgSE-jaj_6_u-3MTJ0BSqdDKU/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Read Full Report (PDF)
          </a>
        </p>
      </section>

      <Link to="/projects" className="back-link">← Back to Projects</Link>
    </div>
  );
};

export default MultimodalProjectDetail;