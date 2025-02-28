import React from 'react';
import { useParams } from 'react-router-dom';
import './EventDetail.css';

const EventDetail = ({ events }) => {
  const { eventId } = useParams();
  const event = events.find(e => e.id === parseInt(eventId));

  if (!event) {
    return <div className="container">Мероприятие не найдено</div>;
  }

  return (
    <div className="event-detail container">
      <h1>{event.title}</h1>
      <div className="event-image">
        <img src={event.mainImage || 'https://via.placeholder.com/400'} alt={event.title} />
      </div>
      <p>{event.date}</p>
      <p>{event.description}</p>
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
    </div>
  );
};

export default EventDetail;