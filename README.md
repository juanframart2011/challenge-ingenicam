
# Challenge Ingenicam

Este proyecto consiste en una aplicación de lista de tareas (**To-Do List**) dividida en dos partes:

- **API Backend**: Carpeta `api/` (Node.js + Express).
- **Aplicación Web Frontend**: Carpeta `app-web/` (React + React-Bootstrap).

---

## 📦 Estructura del proyecto

```
challenge-ingenicam/
├── api/                         # Backend API Express
├── app-web/                     # Frontend React
├── IngenicamTakeHomeAssesment.pdf # Instrucciones del challenge
├── README.md                     # Instrucciones
```

---

## 🚀 Instalación y ejecución

### 1. Backend API (`api/`)

**Pasos para instalar y correr:**

```bash
# Entrar a la carpeta del backend
cd api

# Instalar dependencias
npm install

# Correr la API
npm run start
```

- La API estará disponible en: [http://localhost:3000](http://localhost:3000)
- Importante: Asegúrate que el puerto 3000 esté libre.

---

### 2. Aplicación Web Frontend (`app-web/`)

**Pasos para instalar y correr:**

```bash
# Entrar a la carpeta del frontend
cd app-web

# Instalar dependencias
npm install

# Correr la aplicación
npm run dev
```

- La app estará disponible en: [http://localhost:5173](http://localhost:5173)
- La aplicación web consume la API en `http://localhost:3000`

---

## 🧪 Pruebas de API usando Postman

Dentro de la carpeta `api/` encontrarás un archivo:

```
challenge-ingenicam.postman_collection.json
```

Este archivo es una colección de Postman lista para probar todos los endpoints de la API.

### ¿Cómo importar la colección?

1. Abre **Postman**.
2. Haz clic en **"Import"**.
3. Selecciona el archivo `challenge-ingenicam.postman_collection.json` ubicado en la carpeta `api/`.
4. Postman cargará automáticamente una colección que incluye:
   - Obtener todas las tareas.
   - Crear nueva tarea.
   - Marcar tarea como completada.
   - Actualizar título de tarea.
   - Eliminar tarea.

### ⚡️ Tips:

- Asegúrate de que la API esté corriendo en `http://localhost:3000` antes de probar.
- Puedes utilizar la colección de Postman para probar rápidamente todas las funcionalidades del backend.

---

## 📋 Resumen rápido de la API

| Método | Endpoint                | Descripción                        |
|--------|--------------------------|------------------------------------|
| GET    | `/tasks`                 | Obtener todas las tareas           |
| POST   | `/tasks`                 | Crear nueva tarea                  |
| PUT    | `/tasks/:id/complete`    | Marcar tarea como completada        |
| PUT    | `/tasks/:id/title`       | Actualizar título de la tarea       |
| DELETE | `/tasks/:id`             | Eliminar tarea                     |

---

## 📅 Consideraciones

- **Base de datos**: Las tareas se almacenan en memoria (sin persistencia en disco).
- **CORS**: Configurado para permitir peticiones desde el frontend.
- **Persistencia**: Al reiniciar el servidor de la API, las tareas se pierden.

---

## 💪 Tecnologías utilizadas

- **Backend**: Node.js + Express
- **Frontend**: React + Vite + React-Bootstrap
- **Testing API**: Postman

---

✨ Proyecto realizado para el Challenge Ingenicam. ✨