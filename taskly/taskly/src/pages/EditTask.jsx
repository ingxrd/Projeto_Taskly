import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getTask, updateTask } from "../firebase/tasks";
import toast from 'react-hot-toast';

function EditTask() {

  const { id } = useParams(); 
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    loadData();
  }, [id]);

  const loadData = async () => {
    try {
      console.log("Loading task with ID:", id); 
      const task = await getTask(id);
      console.log("Task loaded:", task);
      reset(task);
    } catch (error) {
      console.error("Error loading task:", error);
      toast.error("Tarefa não encontrada");
      navigate("/tasks");
    }
  };

  const saveTask = async (data) => {
    try {
      await updateTask(id, data);
      toast.success("Task updated successfully!");
      navigate("/tasks");
    } catch (error) {
      console.error("Error updating task:", error);
      toast.error("Erro ao atualizar tarefa");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cor-fundo header">
      <div className="bg-white flex flex-col items-center shadow-sombra-botao w-2/3 py-10 border-black border">
        <div className="mb-10 text-3xl font-bold">Edit Task</div>

        <form className="form mb-10 flex flex-col gap-4 items-center" onSubmit={handleSubmit(saveTask)}>
          <input
            type="text"
            id="taskname"
            className="form-input px-2 py-1 custom-input-width"
            placeholder="Task Name"
            {...register("taskName", { required: true })}
          />
          {errors.taskName && (
            <small className="invalid">Please, add a valid title.</small>
          )}

          <select
            className="form-select px-2 py-1 custom-input-width"
            {...register("category", { required: true })}
          >
            <option value="">Select Category</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Shopping">Shopping</option>
            <option value="Others">Others</option>
          </select>

          <input
            type="date"
            className="form-input px-2 py-1 custom-input-width"
            placeholder="Deadline"
            {...register("deadline", { required: true })}
          />

          <select
            className="form-select px-2 py-1 custom-input-width"
            {...register("status", { required: true })}
          >
            <option value="to-do">To Do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>

          <button type="submit" className="bg-cor-botaoheader border-2 border-black shadow-sombra-botao mt-4 w-1/2 p-1 custom-button-width">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditTask;
