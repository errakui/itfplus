import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const DocumentationPage = () => {
    const faqs = [
        {
            question: "Come posso iniziare una ricerca di sentenze?",
            answer: "Per iniziare una ricerca, vai alla pagina 'Cerca Sentenze' e inserisci le parole chiave nella barra di ricerca. Puoi anche utilizzare i filtri avanzati per una ricerca più specifica."
        },
        {
            question: "Posso salvare le sentenze che trovo interessanti?",
            answer: "Sì, puoi salvare le sentenze cliccando sull'icona 'Salva' accanto a ogni risultato. Le sentenze salvate saranno disponibili nella sezione 'Le Mie Ricerche'."
        },
        {
            question: "Come funziona l'assistente AI?",
            answer: "L'assistente AI è progettato per aiutarti nelle tue ricerche. Puoi configurarlo nella sezione 'Configura AI' e interagire con esso utilizzando il pulsante 'AI' in basso a destra dello schermo."
        },
        {
            question: "Posso esportare i risultati delle mie ricerche?",
            answer: "Sì, puoi esportare i risultati in vari formati (PDF, Excel) cliccando sul pulsante 'Esporta' nella pagina dei risultati di ricerca."
        },
        {
            question: "Come posso aggiornare le mie informazioni di profilo?",
            answer: "Vai alla sezione 'Profilo' e clicca su 'Modifica Profilo' per aggiornare le tue informazioni personali, inclusi i dettagli di contatto e le preferenze."
        }
    ];
    return (_jsxs("div", { className: "space-y-6", children: [_jsx("h2", { className: "text-3xl font-bold text-white mb-6", children: "Documentazione" }), _jsxs("div", { className: "bg-gray-800 rounded-lg p-6", children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "FAQ - Domande Frequenti" }), _jsx("div", { className: "space-y-6", children: faqs.map((faq, index) => (_jsxs("div", { children: [_jsxs("h4", { className: "font-bold mb-2 text-white", children: [index + 1, ". ", faq.question] }), _jsx("p", { className: "text-gray-300", children: faq.answer })] }, index))) })] })] }));
};
export default DocumentationPage;
