import React from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import './EventList.css';

const EventList = ({ events, onRegister, showEditLink }) => {
  return (
    <div className="event-list-container">
      <div className="event-list">
        <h1>Мероприятия</h1>
        {showEditLink && (
          <Link to="/create-event" className="create-event-link">Создать новое мероприятие</Link>
        )}
        {events.map(event => (
          <div key={event.id} className="event-item">
            <div className="event-image">
              <img src={event.previewImage || 'https://via.placeholder.com/150'} alt={event.title} />
            </div>
            <div className="event-info">
              <h2>
                <Link to={`/event/${event.id}`}>{event.title}</Link>
              </h2>
              <p>{event.date}</p>
              {showEditLink && (
                <Link to={`/edit-event/${event.id}`} className="edit-link">Редактировать</Link>
              )}
            </div>
            <div className="event-participants">
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
          </div>
        ))}
      </div>
      {showEditLink && <RegistrationForm events={events} onRegister={onRegister} />}
    </div>
  );
};

export default EventList;