import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css'
import TaskList from './components/TaskList';

function App() {

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Challenge Ingenicam</h1>
      <TaskList />
    </Container>
  );
}

export default App