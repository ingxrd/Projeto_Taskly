import { useState } from "react";


const Faq = () => {
    /*Primeiro passo: setar um dicionário que guarde as informações de perguntas e respostas */
  const faqs = [
    {
      question: "O que é o Taskly?",
      answer: "Taskly é uma ferramenta para gerenciar suas tarefas diárias de forma simples e eficiente.",
    },
    {
      question: "Como faço para criar uma nova tarefa?",
      answer: "Para criar uma nova tarefa, clique no botão 'Adicionar Tarefa' e preencha os detalhes necessários.",
    },
    {
      question: "Posso editar uma tarefa depois de criá-la?",
      answer: "Sim, você pode editar uma tarefa clicando no ícone de edição ao lado da tarefa que deseja modificar.",
    },
    {
      question: "Como posso excluir uma tarefa?",
      answer: "Você pode excluir uma tarefa clicando no ícone de lixeira ao lado da tarefa que deseja remover.",
    },
    {
      question: "O Taskly permite a categorização de tarefas?",
      answer: "Sim, você pode categorizar suas tarefas para organizá-las melhor.",
    },
    {
      question: "Posso usar o Taskly em diferentes dispositivos?",
      answer: "Sim, o Taskly está disponível em múltiplos dispositivos para que você possa acessar suas tarefas de qualquer lugar.",
    },
  ];

  /* Segundo passo: a constante usa activeIndex, setActiveIndex e os estados null para controlar qual resposta vai aparecer no click */

  const [activeIndex, setActiveIndex] = useState(null);
  /* O toggleFAQ é usado para mostrar e esconder as respostas */
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 mb-8 bg-white font-clash  border-2 border-black  shadow-sombra-botao">
      {/* O map vai iterar sobre as perguntas em faqs e renderizá-las */}
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-b border-black">
          {/* O onclick recebe o toggleFAQ e o index */}
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left bg-white p-4"
          >
            <h2 className="text-lg font-medium">{faq.question}</h2>
          </button>
          {activeIndex === index && (
            <div className="p-4 mt-2">
              <p className="text-black">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    
  );
}  

export default Faq;
