import '../../src/index.css'; // Certifique-se de que o caminho está correto

function Botao() {
    return (
        <button className="header flex items-center justify-center text-center custom-font-size p-4 w-35 h-10 bg-cor-botaoheader rounded-full border-2 border-black shadow-sombra-botao text-black font-semibold rotate-[-12deg]">
            O que falam sobre nós
        </button>
    );
}

export default Botao;
