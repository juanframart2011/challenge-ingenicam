# Challenge Ingenicam

Este proyecto consiste en una aplicación de lista de tareas (To-Do List) dividida en dos partes:

- **API Backend**: Carpeta `api/` (Node.js + Express).
- **Aplicación Web Frontend**: Carpeta `app-web/` (React + React-Bootstrap).

---

## 📦 Estructura del proyecto

challenge-ingenicam/
├── api/ # Backend API Express
├── app-web/ # Frontend React
├── IngenicamTakeHomeAssesment.pdf # Instrucciones del challenge
├── README.md # Instrucciones


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

## La API estará disponible en: http://localhost:3000

## Importante: Asegúrate que el puerto 3000 esté libre.

## 🚀 Instalación y ejecución

### 1. Backend API (`api/`)

**Pasos para instalar y correr:**

# Entrar a la carpeta del frontend
cd app-web

# Instalar dependencias
npm install

# Correr la aplicación
npm run dev


## 🧪 Pruebas de API usando Postman
Dentro de la carpeta api/ encontrarás un archivo:
challenge-ingenicam.postman_collection.json
Este archivo es una colección de Postman lista para probar todos los endpoints de la API.

¿Cómo importar la colección?
Abre Postman.

Haz clic en "Import".

Selecciona el archivo challenge-ingenicam.postman_collection.json que se encuentra en la carpeta api/.

Postman cargará una colección con los siguientes endpoints:

Obtener todas las tareas.

Crear nueva tarea.

Marcar tarea como completada.

Actualizar título de tarea.

Eliminar tarea.

⚡️ Tips
Asegúrate que la API esté corriendo antes de probar con Postman.

La API funciona en http://localhost:3000.