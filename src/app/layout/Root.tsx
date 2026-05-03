import { useEffect } from 'react';
import { Outlet } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { FloatingCTA } from '../components/FloatingCTA';
import logoImg from '../../imports/WhatsApp_Image_2026-05-02_at_7.37.23_AM.jpeg';

export default function Root() {
  useEffect(() => {
    // Set favicon to company logo
    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.type = 'image/jpeg';
    link.href = logoImg;

    // Also set the page title
    document.title = 'AJSV Construction Pty Ltd';
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: 'Open Sans, sans-serif' }}>
      <Navigation />
      <main className="flex-1 pt-[72px]">
        <Outlet />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}