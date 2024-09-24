import React from "react";
import cabeloloiro from "../assets/cabeloloiro.png";
import cabeloazul from "../assets/cabeloazul.png";
import cabelopreto from "../assets/cabelopreto.png";
import Botao from "./Botao";

function Reviews() {
  return (
    <div className="bg-cor-review header flex items-center justify-center mt-0 mb-20 space-x-4 p-5 min-h-[400px] relative">
      {/* Botão posicionado acima dos outros elementos */}
      <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 z-20">
        <Botao />
      </div>

      {/* Depoimento 1 */}
      <div className="relative w-60 h-45 bg-white rounded-md border-2 border-black shadow-sombra-botao flex flex-col items-start p-2">
        {/* Foto da pessoa */}
        <div className="absolute -top-8 left-4 w-16 h-16 rounded-full border-3 border-black overflow-hidden shadow-sombra-botao">
          <img
            src={cabelopreto}
            alt="Foto da pessoa com cabelo preto"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Nome da pessoa */}
        <div className="text-sm font-bold mt-8 ml-0">
          Ana
        </div>
        {/* Texto do depoimento */}
        <div className="text-sm mt-2 ml-1">
          Taskly transformou minha rotina! Organizar tarefas nunca foi tão fácil e eficiente.
        </div>
      </div>

      {/* Depoimento 2 */}
      <div className="relative w-60 h-45 bg-white rounded-md border-2 border-black shadow-sombra-botao flex flex-col items-start p-2">
        {/* Foto da pessoa */}
        <div className="absolute -top-8 left-4 w-16 h-16 rounded-full border-3 border-black overflow-hidden shadow-sombra-botao">
          <img
            src={cabeloloiro}
            alt="Foto da pessoa com cabelo loiro"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Nome da pessoa */}
        <div className="text-sm font-bold mt-8 ml-0">
          Giovana
        </div>
        {/* Texto do depoimento */}
        <div className="text-sm mt-2 ml-1">
          O Taskly me ajudou a manter o foco e concluir projetos rapidamente. Simples e eficaz!
        </div>
      </div>

      {/* Depoimento 3 */}
      <div className="relative w-60 h-45 bg-white rounded-md border-2 border-black shadow-sombra-botao flex flex-col items-start p-2">
        {/* Foto da pessoa */}
        <div className="absolute -top-8 left-4 w-16 h-16 rounded-full border-3 border-black overflow-hidden shadow-sombra-botao">
          <img
            src={cabeloazul}
            alt="Foto da pessoa com cabelo azul"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Nome da pessoa */}
        <div className="text-sm font-bold mt-8 ml-0">
          Stefhani
        </div>
        {/* Texto do depoimento */}
        <div className="text-sm mt-2 ml-1">
          A interface do Taskly é intuitiva e suas funções, perfeitas para uma organização impecável.
        </div>
      </div>
    </div>
  );
}

export default Reviews;
