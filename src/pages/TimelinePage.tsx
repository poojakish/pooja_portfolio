import React from 'react';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';

export default function ProjectsPage({ mode }: { mode: string }) {
  return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <Timeline/>
      <Footer/>
    </div>
  );
}