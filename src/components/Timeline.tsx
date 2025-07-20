import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2025 – Present"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Engineer (Part-Time)</h3>
            <h4 className="vertical-timeline-element-subtitle">CamenAI, Utrecht, NL</h4>
            <p>
              Leading projects focused on public space maintenance using computer vision. Responsibilities include image processing,
              data labeling (manual and automated), and training deep learning models for object detection and image classification.
              Exploring YOLO and Ultralytics classification models to enhance accuracy and efficiency.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2024 – Dec 2024"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">CamenAI, Utrecht, NL</h4>
            <ul>
              <li>Developed AI models for graffiti and sticker detection on traffic signs using YOLOv8.</li>
              <li>Generated synthetic datasets by overlaying graffiti/sticker patterns on traffic sign images with SAM-generated masks.</li>
              <li>Implemented robust image classification and object detection pipelines using Ultralytics YOLO models.</li>
              <li>Optimized models through experimentation with real vs. synthetic data, segmentation masks, and advanced augmentation techniques.</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2021 – Aug 2023"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Optum (UHG), Bangalore, IN</h4>
            <ul>
              <li>Developed a versatile Study Portal application with Provider Outreach and Enrollment Tracking features.</li>
              <li>Designed a user-centric project dashboard as a Front-end Developer to improve management efficiency.</li>
              <li>Built and deployed Python and Node.js APIs enabling seamless communication with a GPT-powered chatbot using the OpenAI API.</li>
              <li>Applied prompt engineering to deliver intelligent, context-aware responses for medical use cases.</li>
              <li>Collaborated in an Agile/Scrum environment with CI/CD pipelines and Azure DevOps to deliver production-ready solutions.</li>
            </ul>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
