import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import EventDetail from './components/EventDetail';
import EventForm from './components/EventForm';

const App = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Конференция по React',
      date: '2023-10-15',
      description: 'Узнайте все о React!',
      image: 'https://via.placeholder.com/150', // Добавлено изображение
      participants: [],
    },
    {
      id: 2,
      title: 'Воркшоп по Node.js',
      date: '2023-11-20',
      description: 'Практический воркшоп по Node.js.',
      image: 'https://via.placeholder.com/150', // Добавлено изображение
      participants: [],
    },
    {
      id: 3,
      title: 'Митап по GraphQL',
      date: '2023-12-05',
      description: 'Обсуждение GraphQL и его преимуществ.',
      image: 'https://via.placeholder.com/150', // Добавлено изображение
      participants: [],
    },
  ]);

  const handleSave = (formData, id) => {
    if (id) {
      // Редактирование существующего мероприятия
      setEvents(events.map(event => event.id === id ? { ...event, ...formData } : event));
    } else {
      // Создание нового мероприятия
      const newEvent = { ...formData, id: Date.now(), participants: [] };
      setEvents([...events, newEvent]);
    }
  };

  const handleRegister = (eventId, name) => {
    setEvents(prevEvents =>
      prevEvents.map(event =>
        event.id === parseInt(eventId)
          ? { ...event, participants: [...event.participants, name] }
          : event
      )
    );
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Добро пожаловать на сайт мероприятий!</h1>} />
        <Route
          path="/events"
          element={
            <EventList events={events} onRegister={handleRegister} />
          }
        />
        <Route path="/event/:eventId" element={<EventDetail events={events} />} />
        <Route path="/create-event" element={<EventForm events={events} onSave={handleSave} />} />
        <Route path="/edit-event/:eventId" element={<EventForm events={events} onSave={handleSave} />} />
      </Routes>
    </Router>
  );
};

export default App;