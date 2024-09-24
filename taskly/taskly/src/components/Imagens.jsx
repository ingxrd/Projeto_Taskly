import arcoiris from "../assets/arcoiris.svg";
import florverde from "../assets/florverde.svg";
import flormarrom from "../assets/flormarrom.svg";
import iconedone from "../assets/iconedone.svg";

function Imagens() {
  return (
    <div className="relative h-screen flex items-center justify-center"> {/* Div pai centralizada */}
      
      {/* Div Esquerda: Título e Subtítulo */}
      <div className="flex flex-col justify-center ml-20 ">
        <h1 className="custom-font-big text-stroke-thin text-stroke-black [text-shadow:_0_8px_0_rgb(0_0_0_/_100%)] text-cor-fonte font-black ">
          Taskly
        </h1>
        <div className="flex items-center mt-10 ml-10">
          <img src={iconedone} alt="Ícone Done" className="mr-4 w-8 h-8 mb-8 " />
          <p className="text-3xl font-medium font-clash max-w-md">
            Com o Taskly, você organiza suas tarefas e aumenta seu tempo livre.
          </p>
        </div>
      </div>

      {/* Div Direita: Imagens */}
      <div className="flex flex-col justify-center items-end h-full ">
        <div className="flex justify-end mb-[20px] mr-20">
          <img src={arcoiris} className="h-42 w-60" alt="Arco-íris" />
        </div>

        <div className="flex justify-end mb-[-50px] mr-10">
          <img src={flormarrom} className="h-41 w-60" alt="Flor Marrom" />
        </div>

        <div className="flex justify-end mr-60 mt-[-10px]">
          <img src={florverde} className="h-30 w-40" alt="Flor Verde" />
        </div>
      </div>
    </div>
  );
}

export default Imagens;
