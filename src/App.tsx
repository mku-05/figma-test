import React from 'react';
import MobileHome01 from './pages/Mobile-Home_01';
import Home01 from './pages/01_Home01';

const App: React.FC = () => {
  const frame = new URLSearchParams(window.location.search).get('frame');

  if (frame === 'mobile') {
    return <MobileHome01 />;
  }

  if (frame === 'desktop') {
    return <Home01 />;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Figma Test - Frame Preview</h1>
      <div className="space-y-4">
        <a
          href="?frame=mobile"
          className="block p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Mobile-Home_01</h2>
          <p className="text-gray-600">Mobile stats dashboard (375x1598)</p>
        </a>
        <a
          href="?frame=desktop"
          className="block p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">01_Home 01</h2>
          <p className="text-gray-600">Desktop hero section (1920x1288)</p>
        </a>
      </div>
    </div>
  );
};

export default App;
