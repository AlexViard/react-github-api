import React from 'react';

import './style.scss';

const Faq = () => (
  <div className="faq">
    <h1 className="faq__title">FAQ</h1>
    <h2 className="faq__subtitle">A quoi ça sert</h2>
    <p className="faq__text">Cette application permet de trouver une liste de dépôts Github pour un critère donné.</p>
    <h2 className="faq__subtitle">Comment faire une recherche ?</h2>
    <p className="faq__text">Sur la page recherche, complétez le champ de recherche et valider la recherche</p>
    <h2 className="faq__subtitle">Puis-je chercher n'importe quel terme</h2>
    <p className="faq__text">Oui, c'est fou.</p>
  </div>
);

export default Faq;
