import React from 'react';
import { SearchIcon, FolderIcon, UserIcon, SettingsIcon, BookOpenIcon, InfoIcon, LogOutIcon, SunIcon, MoonIcon } from 'lucide-react';
import logoLight from '../assets/logo.png';
import logoDark from '../assets/logob.png';

const Sidebar = ({ currentPage, setCurrentPage, handleLogout, isDarkMode, toggleDarkMode }) => {
  const menuItems = [
    { icon: SearchIcon, label: 'Cerca Sentenze', page: 'search' },
    { icon: FolderIcon, label: 'Le Mie Ricerche', page: 'mySentences' },
    { icon: UserIcon, label: 'Profilo', page: 'profile' },
    { icon: SettingsIcon, label: 'Configura AI', page: 'configureAI' },
    { icon: BookOpenIcon, label: 'Documentazione', page: 'documentation' },
    { icon: InfoIcon, label: 'Chi Siamo', page: 'aboutUs' },
  ];

  return (
    <div className={`w-64 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} p-6 flex flex-col h-full`}>
      <div className="flex justify-center mb-8">
        <div className="w-full max-w-[200px] h-20 flex items-center justify-center">
          <img 
            src={isDarkMode ? logoDark : logoLight} 
            alt="Logo" 
            className="max-w-full max-h-full object-contain" 
          />
        </div>
      </div>
      <nav className="flex-grow space-y-2">
        {menuItems.map(({ icon: Icon, label, page }) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`flex items-center space-x-3 w-full text-left p-2 rounded transition-colors
              ${currentPage === page 
                ? (isDarkMode ? 'bg-gray-700' : 'bg-gray-200') 
                : (isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100')}`}
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </button>
        ))}
      </nav>
      <div className="mt-auto space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm">info@itfplus.it</span>
          <button 
            onClick={toggleDarkMode} 
            className={`p-2 rounded-full ${isDarkMode ? 'bg-yellow-400 text-gray-800' : 'bg-gray-200 text-gray-800'}`}
          >
            {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
        </div>
        <button 
          onClick={handleLogout} 
          className={`flex items-center space-x-2 w-full text-left p-2 rounded transition-colors
            ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
        >
          <LogOutIcon className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;