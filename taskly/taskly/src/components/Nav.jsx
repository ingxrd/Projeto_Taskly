import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext"; // Certifique-se de ter esse contexto
import { logout  } from "../firebase/auth";// Função de logout do Firebase

function Nav() {
  const { user } = useContext(UserContext); // Acessa o contexto para saber se o usuário está logado
  const navigate = useNavigate();

  // Função de logout
  function handleLogout() {
    logout()
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error('Logout failed', error);
      });
  }
  return (
    <nav className="flex items-center w-full">
      <div className="ml-10 flex flex-grow items-center space-x-10">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/tasks" className="nav-link">Tasks</Link>
      </div>
      <div className="flex items-center space-x-10 mr-10">
        {/* Se o usuário estiver logado, mostrar Logout */}
        {user ? (
          <>
           <span className="text-light nav-link">{user.displayName}</span>
            <button className="nav-link bg-cor-botaoheader rounded-md border-2 border-black w-24 h-10 shadow-sombra-botao flex items-center justify-center" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            {/* Links para login e cadastro se o usuário não estiver logado */}
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup">
              <button className="bg-cor-botaoheader rounded-md border-2 border-black w-24 h-10 shadow-sombra-botao flex items-center justify-center">
                Sign-Up
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;
