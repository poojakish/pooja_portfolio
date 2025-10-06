import React from 'react';
import Footer from '../components/Footer';
import HazmatPlacardDetail from './projects/HazmatPlacardDetail';
import EilaFerDetail from './projects/EilaFerDetail';
import AfibExplainableDetail from './projects/AfibExplainableDetail';
import PathologicalVoiceDetail from './projects/PathologicalVoiceDetail';
import MultimodalProjectDetail from './projects/RobustDetectionCar';
import ACDCProjectDetail from './projects/acdc_segmentation';
import CIRIProjectDetail from './projects/ciri_incident_classif';
import { useParams } from 'react-router-dom';

export default function ProjectDetailsPage({ mode }: { mode: string }) {
  const { projectId } = useParams<{ projectId: string }>();

  const renderProject = () => {
    switch (projectId) {
      case 'hazmat-placard':
        return <HazmatPlacardDetail />;
      case 'eila-fer':
        return <EilaFerDetail />;
      case 'afib-explainable-ai':
        return <AfibExplainableDetail />;
      case 'path-voice-classification':
        return <PathologicalVoiceDetail />;
      case 'multimodal-object-detection':
        return <MultimodalProjectDetail />;
      case 'acdc-segmentation-merit-unet':
        return <ACDCProjectDetail />;
      case 'ciri-incident-classification':
        return <CIRIProjectDetail />;
      default:
        return <p>Project not found.</p>;
    }
  };

  return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      {renderProject()}
      {/* <Footer /> */}
    </div>
  );
}
