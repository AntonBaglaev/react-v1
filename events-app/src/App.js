import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import EventList from './components/EventList';
import EventDetail from './components/EventDetail';
import EventForm from './components/EventForm';
import RegistrationForm from './components/RegistrationForm';

const App = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Конференция по React',
      date: '2023-10-15',
      description: 'Узнайте все о React!',
      previewImage: 'https://via.placeholder.com/150',
      mainImage: 'https://via.placeholder.com/400',
      participants: [],
    },
    {
      id: 2,
      title: 'Воркшоп по Node.js',
      date: '2023-11-20',
      description: 'Практический воркшоп по Node.js.',
      previewImage: 'https://via.placeholder.com/150',
      mainImage: 'https://via.placeholder.com/400',
      participants: [],
    },
    {
      id: 3,
      title: 'Митап по GraphQL',
      date: '2023-12-05',
      description: 'Обсуждение GraphQL и его преимуществ.',
      previewImage: 'https://via.placeholder.com/150',
      mainImage: 'https://via.placeholder.com/400',
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
      <Navbar /> {/* Навигационная панель теперь общая для всех страниц */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/events"
          element={
            <EventList events={events} onRegister={handleRegister} showEditLink={true} />
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