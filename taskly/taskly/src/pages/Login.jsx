import google from "../assets/google.svg";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { signUpGoogle, loginUser } from "../firebase/auth";
import "../index.css";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSignUpGoogle() {
    signUpGoogle().then(() => {
      toast.success("Welcome!");
      navigate("/tasks");
    });
  }

  function handleLogin() {
    loginUser(email, password).then(() => {
      toast.success("Welcome!");
      navigate("/tasks");
    }).catch(() => {
      toast.error("Wrong email or password!");
    });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-cor-fundo header">
      <div className="bg-white flex flex-col items-center shadow-sombra-botao w-full max-w-md h-auto py-10 border-black border-2">
        <div className="mb-10 mt-30 text-3xl font-bold">Login</div>
        <div className="form mb-20 flex flex-col gap-3 items-center w-full px-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input px-2 py-1 w-full"
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input px-2 py-1 w-full"
            placeholder="Password"
          />
          <button
            className="bg-cor-botaoheader border-2 border-black shadow-sombra-botao mt-4  w-40 py-2"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
        <div className=" mt-30 mb-10 bg-white px-4 justify-center items-center">
          <img src={google} alt="Google" className="w-6 h-6 cursor-pointer" onClick={handleSignUpGoogle} />
        </div>
      </div>
    </div>
  );
}

export default Login;