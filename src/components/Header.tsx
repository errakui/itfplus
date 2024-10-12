import React from 'react';
import { SearchIcon, SunIcon, MoonIcon } from 'lucide-react';

const Header = ({ email, isDarkMode, toggleDarkMode, query, setQuery }) => {
  return (
    <header className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-4 flex justify-between items-center`}>
      <div className="flex items-center bg-gray-700 rounded-lg px-3 py-2 w-96">
        <SearchIcon className="h-5 w-5 text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search for anything..."
          className="bg-transparent border-none focus:outline-none text-gray-100 w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="flex items-center space-x-4">
        <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Benvenuto, {email}</span>
        <button 
          onClick={toggleDarkMode} 
          className={`p-2 rounded-full ${isDarkMode ? 'bg-yellow-400' : 'bg-gray-800'}`}
        >
          {isDarkMode ? <SunIcon className="h-5 w-5 text-gray-800" /> : <MoonIcon className="h-5 w-5 text-yellow-400" />}
        </button>
        <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-white">
          Upgrade
        </button>
      </div>
    </header>
  );
};

export default Header;