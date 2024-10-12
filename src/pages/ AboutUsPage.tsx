import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">Chi Siamo</h2>
      <div className="bg-gray-800 rounded-lg p-6 space-y-4">
        <p className="text-gray-300">
          ITFPLUS, acronimo di Il Tuo Foro Incrementato, è l'evoluzione di un servizio di successo presentato al mondo legale nel 2015.
        </p>
        <p className="text-gray-300">
          Si tratta di un'idea nata dal suo founder su richiesta degli operatori del mondo legale: un'informazione del mondo giuridico mirata al luogo in cui opera l'avvocato, con l'idea di raccogliere le sentenze del Tribunale in cui opera l'avvocato.
        </p>
        <p className="text-gray-300">
          A seguito di numerose convenzioni a firma di illuminati Presidenti di Tribunali e Corti di Appello, si è arrivati al primo servizio nazionale di raccolta di sentenze di merito, inglobate in una banca dati dal nome iltuoforo.net.
        </p>
        <p className="text-gray-300">
          Dal 2015 molte cose sono cambiate nel mondo dell'avvocato, la tecnologia si è imposta ed ha creato necessità e opportunità da cogliere. Era solo naturale che iltuoforo.net seguisse questa traccia e si incrementasse, ed ecco la presentazione di ITFPLUS.
        </p>
        <p className="text-white font-bold">
          La prima Suite documentale avanzata Implementata dall'AI per ricerca e analisi
        </p>
        <p className="text-gray-300">
          Crediamo che l'intelligenza artificiale debba inchinarsi alle esigenze dell'utente e non viceversa, debba creare valore all'utente e non sostituirlo. La nostra Suite, il nostro ITFPLUS ti aiuterà in questo.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;