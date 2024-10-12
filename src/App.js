import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
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
                return _jsx(SearchPage, { query: query, setQuery: setQuery });
            case 'mySentences':
                return _jsx(MySentencesPage, {});
            case 'profile':
                return _jsx(ProfilePage, { email: email });
            case 'configureAI':
                return _jsx(ConfigureAIPage, {});
            case 'documentation':
                return _jsx(DocumentationPage, {});
            case 'aboutUs':
                return _jsx(AboutUsPage, {});
            default:
                return _jsx(SearchPage, { query: query, setQuery: setQuery });
        }
    };
    if (!isLoggedIn) {
        return _jsx(LoginPage, { onLogin: handleLogin });
    }
    return (_jsxs("div", { className: `flex h-screen ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`, children: [_jsx(Sidebar, { currentPage: currentPage, setCurrentPage: setCurrentPage, handleLogout: handleLogout, isDarkMode: isDarkMode }), _jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [_jsx(Header, { email: email, isDarkMode: isDarkMode, toggleDarkMode: toggleDarkMode, query: query, setQuery: setQuery }), _jsxs("main", { className: "flex-1 overflow-auto p-6", children: [_jsxs("div", { className: "flex justify-between items-center mb-6", children: [_jsx("h1", { className: "text-3xl font-bold", children: currentPage }), _jsxs("div", { className: "flex items-center text-gray-600", children: [_jsx(HourglassIcon, { className: "h-5 w-5 mr-2" }), _jsx("span", { children: "Stai potenzialmente risparmiando 3 h al gg" })] })] }), renderPage()] })] }), _jsx(AIChat, { showAIChat: showAIChat, setShowAIChat: setShowAIChat, isDarkMode: isDarkMode })] }));
};
export default App;
