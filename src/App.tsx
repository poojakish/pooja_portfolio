import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import TimelinePage from './pages/TimelinePage';
import EducationPage from './pages/EducationPage';
import ProjectDetail from './components/ProjectDetail';
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import './index.scss';

function App() {
  const [mode, setMode] = useState<string>('dark');

  const handleModeChange = () => {
    setMode(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
      <Routes>
        <Route path="/" element={<Home mode={mode} />} />
        <Route path="/education" element={<EducationPage mode={mode} />} />
        <Route path="/timeline" element={<TimelinePage mode={mode} />} />
        <Route path="/projects" element={<ProjectsPage mode={mode} />} />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage mode ={mode} />} />
        {/* <Route path="/contact" element={<ContactPage mode={mode} />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
