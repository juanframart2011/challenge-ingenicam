const API_URL = 'http://localhost:3000'; // Nuestro backend Express corre aquí

// Obtener todas las tareas
export async function getTasks() {
  const response = await fetch(`${API_URL}/tasks`);
  if (!response.ok) {
    throw new Error('Failed to fetch tasks');
  }
  return await response.json();
}

// Crear una nueva tarea
export async function createTask(title) {
  const response = await fetch(`${API_URL}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  });
  if (!response.ok) {
    throw new Error('Failed to create task');
  }
  return await response.json();
}

// Marcar tarea como completada
export async function completeTask(id) {
  const response = await fetch(`${API_URL}/tasks/${id}/complete`, {
    method: 'PUT',
  });
  if (!response.ok) {
    throw new Error('Failed to complete task');
  }
  return await response.json();
}

// Actualizar el título de una tarea
export async function updateTaskTitle(id, title) {
  const response = await fetch(`${API_URL}/tasks/${id}/title`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  });
  if (!response.ok) {
    throw new Error('Failed to update task title');
  }
  return await response.json();
}

// Borrar una tarea
export async function deleteTask(id) {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete task');
  }
  return await response.json();
}