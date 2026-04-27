import { createBrowserRouter } from 'react-router';
import Root from './layout/Root';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'services', Component: Services },
      { path: 'about', Component: About },
      { path: 'projects', Component: Projects },
      { path: 'contact', Component: Contact },
    ],
  },
]);
