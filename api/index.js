const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Para poder recibir JSON en las peticiones

// Aquí almacenaremos las tareas en memoria
let tasks = [];
let currentId = 1;

// Endpoint para obtener todas las tareas
app.get('/tasks', (req, res) => {
    res.json(tasks);
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

// Levantamos el servidor
app.listen(port, () => {
    console.log(`Todo API listening at http://localhost:${port}`);
});