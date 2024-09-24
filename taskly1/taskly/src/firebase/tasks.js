import { collection, query, where, getDocs, addDoc, updateDoc, doc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from './config';

export const taskCol = collection(db, "tasks");

// Adiciona uma nova tarefa
export async function addTask(data) {
    await addDoc(taskCol, data);
}

// Obtém todas as tarefas do usuário
export async function getTasksByUserId(userId) {
    const q = query(taskCol, where("userId", "==", userId));
    const snapshot = await getDocs(q);
    const tasks = [];

    snapshot.forEach(doc => {
        tasks.push({ ...doc.data(), id: doc.id });
    });
    return tasks;
}

// Atualiza o status da tarefa
export const updateTaskStatus = async (taskId, status) => {
  const taskRef = doc(db, "tasks", taskId);
  try {
    await updateDoc(taskRef, { status: status });
  } catch (error) {
    console.error("Error updating task status: ", error);
  }
};

// Deleta uma tarefa
export async function deleteTask(id) {
    const taskDoc = doc(db, "tasks", id);
    try {
      await deleteDoc(taskDoc);
    } catch (error) {
      console.error("Error deleting task: ", error);
    }
}

// Obtém uma tarefa específica pelo ID
export const getTask = async (id) => {
  const taskDoc = doc(db, "tasks", id);
  const snapshot = await getDoc(taskDoc);
  if (snapshot.exists()) {
    return { ...snapshot.data(), id: snapshot.id };
  } else {
    throw new Error("Task not found");
  }
};

// Atualiza os dados de uma tarefa específica
export async function updateTask(id, data) {
    const taskDoc = doc(taskCol, id);
    await updateDoc(taskDoc, data);
}
