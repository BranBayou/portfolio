import React, { useEffect, useState } from 'react';
import { Route } from './types';
import Header from './components/Header';
import MediaSidebar from './components/MediaSidebar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WorksPage from './pages/WorksPage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';

const routes: Record<string, Route> = {
  '': 'home',
  '/': 'home',
  '/works': 'works',
  '/about-me': 'about-me',
  '/contacts': 'contacts',
};

const getRoute = (): Route => routes[window.location.hash.replace(/^#/, '')] ?? 'home';

const pages: Record<Route, React.FC> = {
  home: HomePage,
  works: WorksPage,
  'about-me': AboutPage,
  contacts: ContactsPage,
};

const App: React.FC = () => {
  const [route, setRoute] = useState<Route>(getRoute);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRoute());
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const Page = pages[route];

  return (
    <div className="relative flex flex-col min-h-screen font-mono text-muted bg-bg overflow-x-clip selection:bg-primary selection:text-white">
      <MediaSidebar />
      <Header route={route} />
      <main className="relative flex-grow">
        <Page />
      </main>
      <Footer />
    </div>
  );
};

export default App;
