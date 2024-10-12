import React, { useState } from 'react';
import { HourglassIcon } from 'lucide-react';
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AIChat from "./components/AIChat";
import LoginPage from "./pages/LoginPage";
import SearchPage from "./pages/SearchPage";
import MySentencesPage from "./pages/ MySentencesPage";
import ProfilePage from "./pages/ ProfilePage";
import ConfigureAIPage from "./pages/ ConfigureAIPage";
import DocumentationPage from "./pages/DocumentationPage";
import AboutUsPage from "./pages/ AboutUsPage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [currentPage, setCurrentPage] = useState('search');
  const [showAIChat, setShowAIChat] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [query, setQuery] = useState('');

  const handleLogin = (userEmail) => {
    setIsLoggedIn(true);
    setEmail(userEmail);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setCurrentPage('search');
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'search':
        return <SearchPage query={query} setQuery={setQuery} />;
      case 'mySentences':
        return <MySentencesPage />;
      case 'profile':
        return <ProfilePage email={email} />;
      case 'configureAI':
        return <ConfigureAIPage />;
      case 'documentation':
        return <DocumentationPage />;
      case 'aboutUs':
        return <AboutUsPage />;
      default:
        return <SearchPage query={query} setQuery={setQuery} />;
    }
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className={`flex h-screen ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} handleLogout={handleLogout} isDarkMode={isDarkMode} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          email={email} 
          isDarkMode={isDarkMode} 
          toggleDarkMode={toggleDarkMode} 
          query={query} 
          setQuery={setQuery} 
        />
        <main className="flex-1 overflow-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">{currentPage}</h1>
            <div className="flex items-center text-gray-600">
              <HourglassIcon className="h-5 w-5 mr-2" />
              <span>Stai potenzialmente risparmiando 3 h al gg</span>
            </div>
          </div>
          {renderPage()}
        </main>
      </div>
      <AIChat showAIChat={showAIChat} setShowAIChat={setShowAIChat} isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;