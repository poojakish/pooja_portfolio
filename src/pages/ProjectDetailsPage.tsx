import React from 'react';
import ProjectDetail from '../components/ProjectDetail';
import Footer from '../components/Footer';

export default function ProjectDetailsPage({ mode }: { mode: string }) {
  return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <ProjectDetail mode={mode} />
      <Footer />
    </div>
  );
}