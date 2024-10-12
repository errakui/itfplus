import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { className: `w-64 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} p-6 flex flex-col h-full`, children: [_jsx("div", { className: "flex justify-center mb-8", children: _jsx("div", { className: "w-full max-w-[200px] h-20 flex items-center justify-center", children: _jsx("img", { src: isDarkMode ? logoDark : logoLight, alt: "Logo", className: "max-w-full max-h-full object-contain" }) }) }), _jsx("nav", { className: "flex-grow space-y-2", children: menuItems.map(({ icon: Icon, label, page }) => (_jsxs("button", { onClick: () => setCurrentPage(page), className: `flex items-center space-x-3 w-full text-left p-2 rounded transition-colors
              ${currentPage === page
                        ? (isDarkMode ? 'bg-gray-700' : 'bg-gray-200')
                        : (isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100')}`, children: [_jsx(Icon, { className: "h-5 w-5" }), _jsx("span", { children: label })] }, page))) }), _jsxs("div", { className: "mt-auto space-y-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-sm", children: "info@itfplus.it" }), _jsx("button", { onClick: toggleDarkMode, className: `p-2 rounded-full ${isDarkMode ? 'bg-yellow-400 text-gray-800' : 'bg-gray-200 text-gray-800'}`, children: isDarkMode ? _jsx(SunIcon, { className: "h-5 w-5" }) : _jsx(MoonIcon, { className: "h-5 w-5" }) })] }), _jsxs("button", { onClick: handleLogout, className: `flex items-center space-x-2 w-full text-left p-2 rounded transition-colors
            ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`, children: [_jsx(LogOutIcon, { className: "h-5 w-5" }), _jsx("span", { children: "Logout" })] })] })] }));
};
export default Sidebar;
