import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EventForm.css';

const EventForm = ({ events, onSave }) => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const isEdit = !!eventId;

  const [formData, setFormData] = useState({
    title: '',
    date: '',
    description: '',
  });

  useEffect(() => {
    if (isEdit) {
      const event = events.find(e => e.id === parseInt(eventId));
      if (event) {
        setFormData({
          title: event.title,
          date: event.date,
          description: event.description,
        });
      }
    }
  }, [eventId, events, isEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData, isEdit ? parseInt(eventId) : null);
    navigate('/events');
  };

  return (
    <div className="event-form container">
      <h1>{isEdit ? 'Редактировать мероприятие' : 'Создать мероприятие'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Название мероприятия:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Дата мероприятия:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Описание:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{isEdit ? 'Обновить' : 'Создать'}</button>
      </form>
    </div>
  );
};

export default EventForm;