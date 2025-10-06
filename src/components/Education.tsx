import React from 'react';
import '../assets/styles/Education.scss';

function Education() {
  return (
    <div className="education-container" id="education">
      <h1>Education</h1>
      <div className="education-grid">
        <div className="education-item">
          <h2>Master’s Degree</h2>
          <p><strong>Program:</strong> Computer Science</p>
          <p><strong>University:</strong> University of Twente</p>
          <p><strong>Location:</strong> Enschede, NL</p>
          <p><strong>GPA:</strong> 7.92</p>
          <p><strong>Relevant Coursework:</strong></p>
          <ul>
            <li>Image Processing and Computer Vision</li>
            <li>Machine Learning</li>
            <li>Data Science</li>
            <li>Deep Learning</li>
            <li>Foundations of Information Retrieval</li>
            <li>Explainable AI</li>
            <li>Deep Learning for 3D Medical Image Analysis</li>
            <li>Advanced Computer Vision and Pattern Recognition</li>
          </ul>
        </div>

        <div className="education-item">
          <h2>Bachelor’s Degree</h2>
          <p><strong>Program:</strong>Computer Science</p>
          <p><strong>University:</strong> SRM Institution of Science and Technology</p>
          <p><strong>Location:</strong> Chennai, IN</p>
          <p><strong>GPA:</strong> 9.2</p>
          <p><strong>Relevant Coursework:</strong></p>
          <ul>
            <li>MySQL</li>
            <li>C/C++</li>
            <li>Python</li>
            <li>Java</li>
            <li>Data Structures</li>
            <li>Natural Language Processing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Education;
