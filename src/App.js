import { useState, useEffect } from 'react';

import './styles/global.css';

import Loader      from './components/Loader';
import Navbar      from './components/Navbar';
import Hero        from './components/Hero';
import About       from './components/About';
import Members     from './components/Members';
import MemberModal from './components/MemberModal';
import Music       from './components/Music';
import Footer      from './components/Footer';
import BackToTop   from './components/BackToTop';

import { MEMBERS } from './data/members';

const SECTION_IDS = ['home', 'about', 'members', 'music'];

function App() {
  const [loaderDone,    setLoaderDone]    = useState(false);
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showBackTop,   setShowBackTop]   = useState(false);
  const [modalMember,   setModalMember]   = useState(null);

  // Page loader
  useEffect(() => {
    const timer = setTimeout(() => setLoaderDone(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.classList.toggle('body-lock', !!modalMember);
  }, [modalMember]);

  // Back-to-top visibility + active nav section
  useEffect(() => {
    const handleScroll = () => {
      setShowBackTop(window.scrollY > 300);

      const current = SECTION_IDS.reduce((acc, id) => {
        const el = document.getElementById(id);
        return el && window.scrollY >= el.offsetTop - 100 ? id : acc;
      }, 'home');

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openModal  = (id) => setModalMember(MEMBERS.find((m) => m.id === id) ?? null);
  const closeModal = ()   => setModalMember(null);

  return (
    <>
      <Loader done={loaderDone} />

      <Navbar
        activeSection={activeSection}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((prev) => !prev)}
        onNavClick={scrollToSection}
      />

      <Hero onEnterPaddock={() => scrollToSection('members')} />

      <About />

      <Members onCardClick={openModal} />

      <Music />

      <Footer />

      <BackToTop show={showBackTop} />

      {modalMember && (
        <MemberModal member={modalMember} onClose={closeModal} />
      )}
    </>
  );
}

export default App;
