import google from "../assets/google.svg";
import { signUpGoogle, createUser } from "../firebase/auth";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import "../index.css"; 
import { useForm } from "react-hook-form";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  function cadastrar(data) {
    createUser(data.name, data.email, data.password)
      .then(() => {
        toast.success('Welcome!');
        navigate("/tasks");
      })
      .catch((error) => {
        toast.error("An error occurred: " + error.message);
      });
  }

  function handlesignUpGoogle() {
    signUpGoogle()
      .then(() => {
        toast.success("Welcome!");
        navigate("/tasks"); 
      })
      .catch((error) => {
        toast.error("An error occurred: " + error.message);
      });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-cor-fundo header">
      <div className="bg-white flex flex-col items-center shadow-sombra-botao w-full max-w-md h-auto py-10 border-black border-2">
        <div className="mb-10 mt-30 text-3xl font-bold">Sign-Up</div>
        <form className="form mb-20 flex flex-col gap-3 items-center w-full px-4" onSubmit={handleSubmit(cadastrar)}>
          <input
            type="text"
            className="form-input px-2 py-1 w-full"
            placeholder="Name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          
          <input
            type="email"
            className="form-input px-2 py-1 w-full"
            placeholder="Email"
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          
          <input
            type="password"
            className="form-input px-2 py-1 w-full"
            placeholder="Password"
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          
          <button
            type="submit"
            className="bg-cor-botaoheader border-2 border-black shadow-sombra-botao mt-4 w-40 py-2"
          >
            Sign-Up
          </button>
        </form>

        <div className="mt-30 mb-10 bg-white px-4 flex justify-center items-center">
          <img src={google} alt="Google" className="w-6 h-6 mx-2 cursor-pointer" onClick={handlesignUpGoogle} />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
