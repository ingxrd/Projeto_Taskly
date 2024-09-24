import { Navigate, Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import toast from "react-hot-toast";
import { UserContext } from "../context/UserContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getTasksByUserId, updateTaskStatus, deleteTask } from "../firebase/tasks";
import deleteIcon from "../assets/deleteicon.png"; 
import editIcon from "../assets/editicon.png"; 

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext); // Recupera usuário do contexto

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      loadData();
    }
  }, [user]);

  const loadData = async () => {
    const results = await getTasksByUserId(user.uid);
    setTasks(results);
  };

  const onDragEnd = async (result) => {
    const { source, destination } = result;

    if (!destination || (source.droppableId === destination.droppableId && source.index === destination.index)) {
      return;
    }

    const updatedTasks = Array.from(tasks);
    const [movedTask] = updatedTasks.splice(source.index, 1);
    movedTask.status = destination.droppableId;
    updatedTasks.splice(destination.index, 0, movedTask);

    setTasks(updatedTasks);

    try {
      setLoading(true);
      await updateTaskStatus(movedTask.id, movedTask.status);
    } catch (error) {
      console.error("Error updating task status:", error);
    } finally {
      setLoading(false);
    }
  };

  const getTasksByStatus = (status) => tasks.filter((task) => task.status === status);

  const handleDeleteTask = async (id) => {
    const confirmDelete = window.confirm("Are you sure?");
    if (confirmDelete) {
      try {
        setLoading(true);
        await deleteTask(id);
        toast.success("Task removed.");
        loadData();
      } catch (error) {
        console.error("Error deleting task:", error);
        toast.error("Failed to remove task.");
      } finally {
        setLoading(false);
      }
    }
  };

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center min-h-screen mb-40">
        <div className="flex justify-between space-between gap-10 mt-16 w-full">
          <div>
            <h1 className="custom-font-overview ml-24">overview</h1>
          </div>
          <div>
            <Link to="/tasks/new">
              <button className="bg-cor-addtask custom-font-addtask rounded-full border-2 border-black w-60 h-9 shadow-sombra-botao flex items-center justify-center mt-20 mr-40">
                Create new task
              </button>
            </Link>
          </div>
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 custom-font-statustask">
            {/* Coluna To-Do */}
            <Droppable key="to-do" droppableId="to-do">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className="bg-cor-todo p-4 rounded-md border-2 border-black">
                  <button className="bg-cor-todo rounded-md border-2 border-black w-full h-8 shadow-sombra-botao flex items-center justify-center">
                    To-Do
                  </button>
                  <div className="mt-4">
                    {getTasksByStatus("to-do").map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="relative mb-4 border p-4 rounded-md shadow-md bg-white">
                            {/* Botão de deletar */}
                            <button
                              onClick={() => handleDeleteTask(task.id)}
                              className="absolute top-2 left-2 text-red-500 hover:text-red-700"
                            >
                              <img src={deleteIcon} alt="Delete" className="w-6 h-6" />
                            </button>
                            {/* Botão de editar */}
                            <button
                              onClick={() => navigate(`/tasks/editar/${task.id}`)}
                              className="absolute top-2 left-10 text-blue-500 hover:text-blue-700"
                            >
                              <img src={editIcon} alt="Edit" className="w-6 h-6" />
                            </button>
                            <h3 className="text-lg font-semibold mt-10">
                              {task.taskName}
                            </h3>
                            <p className="text-sm text-gray-600 mt-2">Category: {task.category}</p>
                            <p className="text-sm text-gray-600 mt-2">Deadline: {task.deadline}</p>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>

            {/* Coluna Doing */}
            <Droppable key="doing" droppableId="doing">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className="bg-cor-doing p-4 rounded-md border-2 border-black">
                  <button className="bg-cor-doing rounded-md border-2 border-black w-full h-8 shadow-sombra-botao flex items-center justify-center">
                    Doing
                  </button>
                  <div className="mt-4">
                    {getTasksByStatus("doing").map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="relative mb-4 border p-4 rounded-md shadow-md bg-white">
                            {/* Botão de deletar */}
                            <button
                              onClick={() => handleDeleteTask(task.id)}
                              className="absolute top-2 left-2 text-red-500 hover:text-red-700"
                            >
                              <img src={deleteIcon} alt="Delete" className="w-6 h-6" />
                            </button>
                            {/* Botão de editar */}
                            <button
                              onClick={() => navigate(`/tasks/editar/${task.id}`)}
                              className="absolute top-2 left-10 text-blue-500 hover:text-blue-700"
                            >
                              <img src={editIcon} alt="Edit" className="w-6 h-6" />
                            </button>
                            <h3 className="text-lg font-semibold mt-10">{task.taskName}</h3>
                            <p className="text-sm text-gray-600 mt-2">Category: {task.category}</p>
                            <p className="text-sm text-gray-600 mt-2">Deadline: {task.deadline}</p>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>

            {/* Coluna Done */}
            <Droppable key="done" droppableId="done">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className="bg-cor-done p-4 rounded-md border-2 border-black">
                  <button className="bg-cor-done rounded-md border-2 border-black w-full h-8 shadow-sombra-botao flex items-center justify-center">
                    Done
                  </button>
                  <div className="mt-4">
                    {getTasksByStatus("done").map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="relative mb-4 border p-4 rounded-md shadow-md bg-white">
                            {/* Botão de deletar */}
                            <button
                              onClick={() => handleDeleteTask(task.id)}
                              className="absolute top-2 left-2 text-red-500 hover:text-red-700"
                            >
                              <img src={deleteIcon} alt="Delete" className="w-6 h-6" />
                            </button>
                            {/* Botão de editar */}
                            <button
                              onClick={() => navigate(`/tasks/editar/${task.id}`)}
                              className="absolute top-2 left-10 text-blue-500 hover:text-blue-700"
                            >
                              <img src={editIcon} alt="Edit" className="w-6 h-6" />
                            </button>
                            <h3 className="text-lg font-semibold mt-10">{task.taskName}</h3>
                            <p className="text-sm text-gray-600 mt-2">Category: {task.category}</p>
                            <p className="text-sm text-gray-600 mt-2">Deadline: {task.deadline}</p>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
      <Footer />
    </div>
  );
}

export default Tasks;
