import React, { useState } from 'react';
import ailogo from '../assets/ailogo.png';

const ConfigureAIPage = () => {
  const [aiConfig, setAiConfig] = useState({ version: 'standard' });

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">Configura AI</h2>
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex items-center mb-6">
          <img src={ailogo} alt="Booky" className="w-24 h-24 rounded-full mr-4" />
          <div>
            <h3 className="text-xl font-bold text-white">Booky</h3>
            <p className="text-gray-400">La tua assistente AI</p>
          </div>
        </div>
        <p className="mb-4 text-gray-300">
          Ciao! Sono Booky, la tua assistente AI personale. Sono qui per aiutarti a cercare, riassumere e confrontare le sentenze giudiziarie, facendoti risparmiare un sacco di tempo prezioso. Con la mia conoscenza approfondita del diritto e la mia capacità di analizzare rapidamente grandi quantità di dati, posso fornirti informazioni accurate e pertinenti in pochi secondi.
        </p>
        <p className="mb-4 text-gray-300">
          Che si tratti di trovare precedenti legali, sintetizzare lunghe sentenze o identificare tendenze nella giurisprudenza, sono qui per semplificare il tuo lavoro e aumentare la tua produttività. Lascia che ti guidi attraverso la complessità del mondo legale!
        </p>
        <div>
          <h4 className="font-bold mb-2 text-white">Versione di Intelligenza</h4>
          <select
            className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
            value={aiConfig.version}
            onChange={(e) => setAiConfig({...aiConfig, version: e.target.value})}
          >
            <option value="standard">Standard</option>
            <option value="advanced">Avanzata</option>
            <option value="expert">Esperta</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ConfigureAIPage;