import React from 'react';
import Project from '../components/Project';
import Footer from '../components/Footer';

export default function ProjectsPage({ mode }: { mode: string }) {
  return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <Project/>
      <Footer/>
    </div>
  );
}