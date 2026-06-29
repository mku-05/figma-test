import React from 'react';
import MobileHome01 from './pages/Mobile-Home_01';
import MobileHome02 from './pages/Mobile-Home_02';
import MobileHome03 from './pages/Mobile-Home_03';
import Home01 from './pages/01_Home01';
import Home02 from './pages/02_Home02';
import Home03 from './pages/03_Home03';
import ColorPallate from './components/ColorPallate';
import Typography from './components/Typography';
import FullDesignPreview from './pages/FullDesignPreview';

const App: React.FC = () => {
  const frame = new URLSearchParams(window.location.search).get('frame');

  if (frame === 'mobile-01') {
    return <MobileHome01 />;
  }

  if (frame === 'mobile-02') {
    return <MobileHome02 />;
  }

  if (frame === 'mobile-03') {
    return <MobileHome03 />;
  }

  if (frame === 'desktop-01') {
    return <Home01 />;
  }

  if (frame === 'desktop-02') {
    return <Home02 />;
  }

  if (frame === 'desktop-03') {
    return <Home03 />;
  }

  if (frame === 'color-pallate') {
    return <ColorPallate />;
  }

  if (frame === 'typography') {
    return <Typography />;
  }

  if (frame === 'full-design-preview') {
    return <FullDesignPreview />;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Figma Test - Frame Preview</h1>
      <div className="space-y-4">
        <a
          href="?frame=mobile-01"
          className="block p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Mobile-Home_01</h2>
          <p className="text-gray-600">Mobile stats dashboard (375x1598)</p>
        </a>
        <a
          href="?frame=mobile-02"
          className="block p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Mobile-Home_02</h2>
          <p className="text-gray-600">Mobile hero section (375x667)</p>
        </a>
        <a
          href="?frame=mobile-03"
          className="block p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Mobile-Home_03</h2>
          <p className="text-gray-600">Mobile hero with stats (375x1744)</p>
        </a>
        <a
          href="?frame=desktop-01"
          className="block p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">01_Home 01</h2>
          <p className="text-gray-600">Desktop hero section (1920x1288)</p>
        </a>
        <a
          href="?frame=desktop-02"
          className="block p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">02_Home 02</h2>
          <p className="text-gray-600">Desktop hero with features (1920x1050)</p>
        </a>
        <a
          href="?frame=desktop-03"
          className="block p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">03_Home 03</h2>
          <p className="text-gray-600">Desktop hero with phone mockups (1920x1290)</p>
        </a>
        <a
          href="?frame=full-design-preview"
          className="block p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Full Design Preview</h2>
          <p className="text-gray-600">Gallery showcase of all designs (14100x6484)</p>
        </a>
      </div>
    </div>
  );
};

export default App;
