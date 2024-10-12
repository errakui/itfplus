import React, { useState } from 'react';
import ailogo from '../assets/ailogo.png';

interface AIChatProps {
  showAIChat: boolean;
  setShowAIChat: (show: boolean) => void;
  isDarkMode: boolean;
}

const AIChat: React.FC<AIChatProps> = ({ showAIChat, setShowAIChat, isDarkMode }) => {
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'user' | 'ai' }>>([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      setMessages([...messages, { text: inputMessage, sender: 'user' }]);
      setInputMessage('');
      // Qui potremmo aggiungere la logica per ottenere una risposta dall'AI
    }
  };

  if (!showAIChat) {
    return (
      <button
        onClick={() => setShowAIChat(true)}
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 bg-purple-600 hover:bg-purple-700 flex items-center justify-center text-white font-bold"
      >
        AI
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 w-80 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-xl p-4`}>
      <div className="flex items-center mb-4">
        <img src={ailogo} alt="Booky" className="w-10 h-10 rounded-full mr-2" />
        <h3 className="text-lg font-semibold">Chat con Booky</h3>
        <button 
          onClick={() => setShowAIChat(false)} 
          className="ml-auto text-gray-500 hover:text-gray-700"
        >
          X
        </button>
      </div>
      <div className="h-64 overflow-y-auto border-t border-b py-4 mb-4">
        {messages.length === 0 ? (
          <p className="text-gray-500 text-center">Inizia una conversazione con Booky</p>
        ) : (
          messages.map((message, index) => (
            <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-800'}`}>
                {message.text}
              </span>
            </div>
          ))
        )}
      </div>
      <div className="flex items-center">
        <input 
          placeholder="Scrivi un messaggio..." 
          className={`flex-grow mr-2 p-2 border rounded ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button 
          onClick={handleSendMessage}
          className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700"
        >
          Invia
        </button>
      </div>
    </div>
  );
};

export default AIChat;