import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { addTask } from "../firebase/tasks";

function NewTask() {
  const { user } = useContext(UserContext); 
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const saveTask = (data) => {
    if (!user) {
      toast.error("User not authenticated.");
      return;
    }

    
    const taskData = {
      ...data,
      userId: user.uid 
    };

    addTask(taskData)
      .then(() => {
        toast.success("New task added successfully!");
        navigate("/tasks");
      })
      .catch(() => {
        toast.error("An error occurred while adding your task.");
      });
  };

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-cor-fundo header">
      <div className="bg-white flex flex-col items-center shadow-sombra-botao w-full max-w-md py-10 border-black border-2">
        <div className="mb-10 mt-30 text-3xl font-bold">New Task</div>
        <form className="form mb-10 flex flex-col gap-3 items-center w-full px-4" onSubmit={handleSubmit(saveTask)}>
          <input
            type="text"
            id="taskname"
            className="form-input px-2 py-1 w-full"
            placeholder="Task Name"
            {...register("taskName", { required: "Task Name is required" })}
          />
          {errors.taskName && <p className="text-red-500">{errors.taskName.message}</p>}

          <select
            className="form-select px-2 py-1 w-full"
            {...register("category", { required: "Category is required" })}
          >
            <option value="">Select Category</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Shopping">Shopping</option>
            <option value="Others">Others</option>
          </select>
          {errors.category && <p className="text-red-500">{errors.category.message}</p>}

          <input
            type="date"
            className="form-input px-2 py-1 w-full"
            {...register("deadline", { required: "Deadline is required" })}
          />
          {errors.deadline && <p className="text-red-500">{errors.deadline.message}</p>}

          <select
            className="form-select px-2 py-1 w-full"
            {...register("status", { required: "Status is required" })}
          >
            <option value="to-do">To Do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
          {errors.status && <p className="text-red-500">{errors.status.message}</p>}

          <button
            type="submit"
            className="bg-cor-botaoheader border-2 border-black shadow-sombra-botao mt-4 w-40 py-2"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewTask;
