import React from 'react';
import Education from '../components/Education';
import ProjectPreview from '../components/ProjectPreview';
import Footer from '../components/Footer';

export default function EducationPage({ mode }: { mode: string }) {
  return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <Education />
      <ProjectPreview />
      <Footer />
    </div>
  );
}
