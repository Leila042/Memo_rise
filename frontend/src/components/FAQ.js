import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "Comment puis-je m'inscrire ?",
      answer: "Cliquez sur le lien d'inscription dans la barre de navigation et remplissez le formulaire."
    },
    {
      question: "Quels sont vos délais de livraions ?",
      answer: "Nous livrons habituellement sous 72 heures"
    },
    {
      question: "Comment puis-je contacter le support client ?",
      answer: "Vous pouvez utiliser le formulaire de contact disponible dans la section 'Contactez-nous'."
    }
  ];

  return (
    <div className="container">
      <h2>FAQ</h2>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="card" key={index}>
            <div className="card-header" id={`heading${index}`}>
              <h2 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target={`#collapse${index}`}
                  aria-expanded="true"
                  aria-controls={`collapse${index}`}
                >
                  {faq.question}
                </button>
              </h2>
            </div>
            <div
              id={`collapse${index}`}
              className="collapse"
              aria-labelledby={`heading${index}`}
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
