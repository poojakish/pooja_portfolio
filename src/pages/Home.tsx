import React from 'react';
import FadeIn from '../components/FadeIn';
import { Main, Expertise, Timeline, Footer, Contact } from '../components';

export default function Home({ mode }: { mode: string }) {
  return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <FadeIn transitionDuration={700}>
        <Main/>
        <Expertise/>
        {/* <Timeline/> */}
        {/* <Contact/> */}
      </FadeIn>
      <Footer/>
    </div>
  );
}
