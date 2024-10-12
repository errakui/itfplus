import React from 'react';
import { EyeIcon } from 'lucide-react';

const MySentencesPage = () => {
  const savedSentences = [
    { id: 1, title: 'Sentenza 123/2023', court: 'Tribunale di Roma', date: '15/05/2023' },
    { id: 2, title: 'Sentenza 456/2023', court: 'Tribunale di Milano', date: '20/05/2023' },
    { id: 3, title: 'Sentenza 789/2023', court: 'Tribunale di Napoli', date: '25/05/2023' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">Le Mie Ricerche</h2>
      <p className="text-gray-300 mb-4">Qui puoi gestire le tue sentenze salvate e le tue cartelle.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {savedSentences.map((sentence) => (
          <div key={sentence.id} className="bg-gray-800 rounded-lg p-4 shadow-sm">
            <h3 className="font-bold mb-2 text-white">{sentence.title}</h3>
            <p className="text-sm text-gray-400 mb-2">{sentence.court}</p>
            <p className="text-sm text-gray-400 mb-2">Data: {sentence.date}</p>
            <button className="text-purple-400 hover:text-purple-300 flex items-center">
              <EyeIcon className="h-4 w-4 mr-1" /> Visualizza
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySentencesPage;