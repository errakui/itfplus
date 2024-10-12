import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import ailogo from '../assets/ailogo.png';
const AIChat = ({ showAIChat, setShowAIChat, isDarkMode }) => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const handleSendMessage = () => {
        if (inputMessage.trim() !== '') {
            setMessages([...messages, { text: inputMessage, sender: 'user' }]);
            setInputMessage('');
            // Qui potremmo aggiungere la logica per ottenere una risposta dall'AI
        }
    };
    if (!showAIChat) {
        return (_jsx("button", { onClick: () => setShowAIChat(true), className: "fixed bottom-6 right-6 rounded-full w-14 h-14 bg-purple-600 hover:bg-purple-700 flex items-center justify-center text-white font-bold", children: "AI" }));
    }
    return (_jsxs("div", { className: `fixed bottom-6 right-6 w-80 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-xl p-4`, children: [_jsxs("div", { className: "flex items-center mb-4", children: [_jsx("img", { src: ailogo, alt: "Booky", className: "w-10 h-10 rounded-full mr-2" }), _jsx("h3", { className: "text-lg font-semibold", children: "Chat con Booky" }), _jsx("button", { onClick: () => setShowAIChat(false), className: "ml-auto text-gray-500 hover:text-gray-700", children: "X" })] }), _jsx("div", { className: "h-64 overflow-y-auto border-t border-b py-4 mb-4", children: messages.length === 0 ? (_jsx("p", { className: "text-gray-500 text-center", children: "Inizia una conversazione con Booky" })) : (messages.map((message, index) => (_jsx("div", { className: `mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`, children: _jsx("span", { className: `inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-800'}`, children: message.text }) }, index)))) }), _jsxs("div", { className: "flex items-center", children: [_jsx("input", { placeholder: "Scrivi un messaggio...", className: `flex-grow mr-2 p-2 border rounded ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`, value: inputMessage, onChange: (e) => setInputMessage(e.target.value), onKeyPress: (e) => e.key === 'Enter' && handleSendMessage() }), _jsx("button", { onClick: handleSendMessage, className: "bg-purple-600 text-white p-2 rounded hover:bg-purple-700", children: "Invia" })] })] }));
};
export default AIChat;
