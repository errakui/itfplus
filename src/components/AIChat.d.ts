import React from 'react';
interface AIChatProps {
    showAIChat: boolean;
    setShowAIChat: (show: boolean) => void;
    isDarkMode: boolean;
}
declare const AIChat: React.FC<AIChatProps>;
export default AIChat;
