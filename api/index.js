const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // Para poder recibir JSON en las peticiones

// Aquí almacenaremos las tareas en memoria
let tasks = [];
let currentId = 1;

// Endpoint para obtener todas las tareas
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Endpoint para eliminar una tarea
app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const index = tasks.findIndex(t => t.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }

    const deletedTask = tasks.splice(index, 1);
    res.json(deletedTask[0]);
});

// Endpoint para crear una nueva tarea
app.post('/tasks', (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }

    const newTask = {
        id: currentId++,
        title,
        completed: false,
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Endpoint para marcar una tarea como completada
app.put('/tasks/:id/complete', (req, res) => {
    const { id } = req.params;
    const task = tasks.find(t => t.id === parseInt(id));

    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }

    task.completed = true;
    res.json(task);
});

// Endpoint para actualizar el título de una tarea
app.put('/tasks/:id/title', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    if (!title || title.trim() === '') {
        return res.status(400).json({ error: 'Valid title is required' });
    }

    const task = tasks.find(t => t.id === parseInt(id));

    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }

    task.title = title.trim();
    res.json(task);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Levantamos el servidor
app.listen(port, () => {
    console.log(`Todo API listening at http://localhost:${port}`);
});