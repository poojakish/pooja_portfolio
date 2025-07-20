import React from 'react';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function ContactPage({ mode }: { mode: string }) {
  return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <Contact/>
      <Footer/>
    </div>
  );
}