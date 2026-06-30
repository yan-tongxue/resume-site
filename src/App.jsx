import { useEffect, lazy, Suspense } from 'react';
import data from './data/resumeData';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

const AboutSection = lazy(() => import('./components/AboutSection'));
const WorkExperience = lazy(() => import('./components/WorkExperience'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const SkillsSection = lazy(() => import('./components/SkillsSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));

function SectionFallback() {
  return <div style={{ minHeight: '200px' }} />;
}

export default function App() {
  useEffect(() => {
    document.title = data.site.title;
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={<SectionFallback />}>
          <AboutSection />
          <WorkExperience />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </Suspense>
      </main>
    </>
  );
}
