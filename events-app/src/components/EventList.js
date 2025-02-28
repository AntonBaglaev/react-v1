import React from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import './EventList.css';

const EventList = ({ events, onRegister }) => {
  return (
    <div className="event-list-container">
      <div className="event-list">
        <h1>Мероприятия</h1>
        <Link to="/create-event" className="create-event-link">Создать новое мероприятие</Link>
        <ul>
          {events.map(event => (
            <li key={event.id}>
              <Link to={`/event/${event.id}`}>{event.title}</Link> - {event.date}
              <Link to={`/edit-event/${event.id}`} style={{ marginLeft: '10px' }}>Редактировать</Link>
              <div>
                <h3>Участники:</h3>
                {event.participants.length > 0 ? (
                  <ul>
                    {event.participants.map((participant, index) => (
                      <li key={index}>{participant}</li>
                    ))}
                  </ul>
                ) : (
                  <p>Пока нет участников.</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <RegistrationForm events={events} onRegister={onRegister} />
    </div>
  );
};

export default EventList;