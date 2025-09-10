import { useState } from 'react';
import {
  Clipboard,
  Truck,
  Compass,
  Calculator,
  Gear,
  BroadcastPin,
  ExclamationDiamond,
  JournalCheck,
  Sliders
} from 'react-bootstrap-icons';
import FailuresPage from '../components/FailuresPage';

const EFBApp = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div className="h-screen w-screen bg-theme-body text-theme-text font-body flex flex-col overflow-hidden">
      {/* Status Bar */}
      <div className="h-8 bg-theme-statusbar flex items-center justify-between px-4 text-status">
        <div className="flex items-center space-x-4">
          <span>FBW EFB</span>
          <span>A32NX</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>14:32</span>
          <span>100%</span>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Toolbar */}
        <div className="w-32 flex flex-col justify-between py-6">
          <div className="mt-9 flex flex-col items-center space-y-4">
            <button
              className={`flex items-center justify-center rounded-md p-3.5 transition duration-100 ${
                currentPage === 'dashboard'
                  ? 'bg-theme-accent text-theme-text'
                  : 'text-theme-unselected hover:bg-theme-accent hover:text-theme-text'
              }`}
              onClick={() => setCurrentPage('dashboard')}
            >
              <img className="w-[95px]" src="/AeroIntel Logo Symbol 2400x1800.png" alt="AeroIntel" />
            </button>
            <button
              className={`flex items-center justify-center rounded-md p-3.5 transition duration-100 ${
                currentPage === 'dispatch'
                  ? 'bg-theme-accent text-theme-text'
                  : 'text-theme-unselected hover:bg-theme-accent hover:text-theme-text'
              }`}
              onClick={() => setCurrentPage('dispatch')}
            >
              <Clipboard size={35} />
            </button>
            <button
              className={`flex items-center justify-center rounded-md p-3.5 transition duration-100 ${
                currentPage === 'ground'
                  ? 'bg-theme-accent text-theme-text'
                  : 'text-theme-unselected hover:bg-theme-accent hover:text-theme-text'
              }`}
              onClick={() => setCurrentPage('ground')}
            >
              <Truck size={35} />
            </button>
            <button
              className={`flex items-center justify-center rounded-md p-3.5 transition duration-100 ${
                currentPage === 'performance'
                  ? 'bg-theme-accent text-theme-text'
                  : 'text-theme-unselected hover:bg-theme-accent hover:text-theme-text'
              }`}
              onClick={() => setCurrentPage('performance')}
            >
              <Calculator size={35} />
            </button>
            <button
              className={`flex items-center justify-center rounded-md p-3.5 transition duration-100 ${
                currentPage === 'navigation'
                  ? 'bg-theme-accent text-theme-text'
                  : 'text-theme-unselected hover:bg-theme-accent hover:text-theme-text'
              }`}
              onClick={() => setCurrentPage('navigation')}
            >
              <Compass size={35} />
            </button>
            <button
              className={`flex items-center justify-center rounded-md p-3.5 transition duration-100 ${
                currentPage === 'atc'
                  ? 'bg-theme-accent text-theme-text'
                  : 'text-theme-unselected hover:bg-theme-accent hover:text-theme-text'
              }`}
              onClick={() => setCurrentPage('atc')}
            >
              <BroadcastPin size={35} />
            </button>
            <button
              className={`flex items-center justify-center rounded-md p-3.5 transition duration-100 ${
                currentPage === 'failures'
                  ? 'bg-theme-accent text-theme-text'
                  : 'text-theme-unselected hover:bg-theme-accent hover:text-theme-text'
              }`}
              onClick={() => setCurrentPage('failures')}
            >
              <ExclamationDiamond size={35} />
            </button>
            <button
              className={`flex items-center justify-center rounded-md p-3.5 transition duration-100 ${
                currentPage === 'checklists'
                  ? 'bg-theme-accent text-theme-text'
                  : 'text-theme-unselected hover:bg-theme-accent hover:text-theme-text'
              }`}
              onClick={() => setCurrentPage('checklists')}
            >
              <JournalCheck size={35} />
            </button>
            <button
              className={`flex items-center justify-center rounded-md p-3.5 transition duration-100 ${
                currentPage === 'presets'
                  ? 'bg-theme-accent text-theme-text'
                  : 'text-theme-unselected hover:bg-theme-accent hover:text-theme-text'
              }`}
              onClick={() => setCurrentPage('presets')}
            >
              <Sliders size={35} />
            </button>
          </div>

          <div className="flex flex-col items-center">
            <div className="my-4 h-1.5 w-14 rounded-full bg-theme-accent" />
            <button
              className={`flex items-center justify-center rounded-md p-3.5 transition duration-100 ${
                currentPage === 'settings'
                  ? 'bg-theme-accent text-theme-text'
                  : 'text-theme-unselected hover:bg-theme-accent hover:text-theme-text'
              }`}
              onClick={() => setCurrentPage('settings')}
            >
              <Gear color="currentColor" size={35} />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-hidden bg-theme-body">
          <div className="h-full bg-theme-secondary rounded-lg overflow-auto">
            {currentPage === 'failures' ? (
              <FailuresPage />
            ) : (
              <div className="p-6">
                <h1 className="text-2xl font-bold mb-4 text-theme-text">
                  {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
                </h1>
                <div className="text-theme-text">
                  <p>Welcome to Project EFB AI!</p>
                  <p className="mt-4">This is the {currentPage} page.</p>
                  <div className="mt-8 p-4 bg-theme-accent rounded">
                    <p className="text-theme-highlight font-mono">
                      Project EFB AI v1.0.0 - Professional aviation interface with AI integration readiness
                    </p>
                  </div>
                  {currentPage === 'dashboard' && (
                    <div className="mt-8 space-y-4">
                      <div className="p-4 bg-theme-accent rounded-lg">
                        <h3 className="text-lg font-semibold text-theme-highlight mb-2">Featured: ATA Chapters System</h3>
                        <p className="text-base text-gray-300 mb-3">
                          Access structured aircraft system failures organized by ATA (Air Transport Association) chapters.
                        </p>
                        <button
                          onClick={() => setCurrentPage('failures')}
                          className="px-4 py-2 bg-theme-highlight text-black rounded-md hover:bg-cyan-300 transition-colors"
                        >
                          View System Failures →
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default EFBApp;
