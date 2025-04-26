import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { createTask } from '../services/taskService';

const TaskForm = ({ onTaskCreated }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title.trim() === '') {
      alert('Please enter a task title');
      return;
    }

    await createTask(title);
    setTitle('');
    onTaskCreated(); // Refresca la lista
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Nueva tarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button type="submit" variant="primary">Agregar Tarea</Button>
      </InputGroup>
    </Form>
  );
};

export default TaskForm;