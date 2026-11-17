import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Dedicated Pages
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import AcademicPage from './pages/AcademicPage';
import StudentsPage from './pages/StudentsPage';
import TeachersPage from './pages/TeachersPage';
import FacilitiesPage from './pages/FacilitiesPage';
import GalleryPage from './pages/GalleryPage';
import NewsPage from './pages/NewsPage';
import PpdbPage from './pages/PpdbPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
        
        {/* Navigation Bar */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profil" element={<ProfilePage />} />
            <Route path="/akademik" element={<AcademicPage />} />
            <Route path="/kesiswaan" element={<StudentsPage />} />
            <Route path="/guru" element={<TeachersPage />} />
            <Route path="/fasilitas" element={<FacilitiesPage />} />
            <Route path="/galeri" element={<GalleryPage />} />
            <Route path="/berita" element={<NewsPage />} />
            <Route path="/ppdb" element={<PpdbPage />} />
            <Route path="/kontak" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

      </div>
    </Router>
  );
}
