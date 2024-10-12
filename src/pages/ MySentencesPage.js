import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { EyeIcon } from 'lucide-react';
const MySentencesPage = () => {
    const savedSentences = [
        { id: 1, title: 'Sentenza 123/2023', court: 'Tribunale di Roma', date: '15/05/2023' },
        { id: 2, title: 'Sentenza 456/2023', court: 'Tribunale di Milano', date: '20/05/2023' },
        { id: 3, title: 'Sentenza 789/2023', court: 'Tribunale di Napoli', date: '25/05/2023' },
    ];
    return (_jsxs("div", { className: "space-y-6", children: [_jsx("h2", { className: "text-3xl font-bold text-white mb-6", children: "Le Mie Ricerche" }), _jsx("p", { className: "text-gray-300 mb-4", children: "Qui puoi gestire le tue sentenze salvate e le tue cartelle." }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: savedSentences.map((sentence) => (_jsxs("div", { className: "bg-gray-800 rounded-lg p-4 shadow-sm", children: [_jsx("h3", { className: "font-bold mb-2 text-white", children: sentence.title }), _jsx("p", { className: "text-sm text-gray-400 mb-2", children: sentence.court }), _jsxs("p", { className: "text-sm text-gray-400 mb-2", children: ["Data: ", sentence.date] }), _jsxs("button", { className: "text-purple-400 hover:text-purple-300 flex items-center", children: [_jsx(EyeIcon, { className: "h-4 w-4 mr-1" }), " Visualizza"] })] }, sentence.id))) })] }));
};
export default MySentencesPage;
