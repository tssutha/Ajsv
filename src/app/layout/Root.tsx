import { Outlet } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { FloatingCTA } from '../components/FloatingCTA';

export default function Root() {
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
