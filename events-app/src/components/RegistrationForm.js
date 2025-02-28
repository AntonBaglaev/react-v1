import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = ({ events, onRegister }) => {
  const [selectedEvent, setSelectedEvent] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedEvent && name) {
      onRegister(selectedEvent, name);
      setSelectedEvent('');
      setName('');
    }
  };

  return (
    <div className="registration-form">
      <h2>Регистрация на мероприятие</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Выберите мероприятие:</label>
          <select
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
            required
          >
            <option value="">-- Выберите мероприятие --</option>
            {events.map(event => (
              <option key={event.id} value={event.id}>
                {event.title} ({event.date})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Ваше имя:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default RegistrationForm;