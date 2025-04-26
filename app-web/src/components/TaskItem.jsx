import React, { useState } from 'react';
import { ListGroup, Button, Form, InputGroup } from 'react-bootstrap';
import { completeTask, deleteTask, updateTaskTitle } from '../services/taskService';

const TaskItem = ({ task, onTaskUpdated }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleComplete = async () => {
    await completeTask(task.id);
    onTaskUpdated();
  };

  const handleDelete = async () => {
    if (confirm('¿Estás seguro que deseas eliminar esta tarea?')) {
      await deleteTask(task.id);
      onTaskUpdated();
    }
  };

  const handleEdit = async () => {
    if (newTitle.trim() === '') {
      alert('El título de la tarea no puede estar vacío');
      return;
    }
    await updateTaskTitle(task.id, newTitle);
    setIsEditing(false);
    onTaskUpdated();
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <div style={{ flex: 1 }}>
        {isEditing ? (
          <InputGroup>
            <Form.Control
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleEdit();
              }}
              autoFocus
            />
            <Button variant="success" onClick={handleEdit}>Guardar</Button>
          </InputGroup>
        ) : (
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title}
          </span>
        )}
      </div>

      <div className="ms-3">
        {!task.completed && !isEditing && (
          <Button variant="outline-success" size="sm" onClick={handleComplete} className="me-2">Completado</Button>
        )}
        {!isEditing && (
          <Button variant="outline-primary" size="sm" onClick={() => setIsEditing(true)} className="me-2">Editar</Button>
        )}
        <Button variant="outline-danger" size="sm" onClick={handleDelete}>Eliminar</Button>
      </div>
    </ListGroup.Item>
  );
};

export default TaskItem;