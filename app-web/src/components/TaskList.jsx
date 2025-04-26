import React, { useEffect, useState } from 'react';
import { ListGroup, Spinner, Alert } from 'react-bootstrap';
import { getTasks } from '../services/taskService';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null);      // Estado de error

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      setError('Error al obtener tareas');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4">
      <h2>My To-Do List</h2>

      <TaskForm onTaskCreated={fetchTasks} />

      {loading && (
        <div className="text-center my-4">
          <Spinner animation="border" />
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      {!loading && tasks.length === 0 && (
        <Alert variant="info">No se encontraron tareas. ¡Agrega una nueva!</Alert>
      )}

      <ListGroup>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onTaskUpdated={fetchTasks} />
        ))}
      </ListGroup>
    </div>
  );
};

export default TaskList;