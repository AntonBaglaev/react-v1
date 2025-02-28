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
    previewImage: '',
    mainImage: '',
  });

  const [previewImagePreview, setPreviewImagePreview] = useState('');
  const [mainImagePreview, setMainImagePreview] = useState('');

  useEffect(() => {
    if (isEdit) {
      const event = events.find(e => e.id === parseInt(eventId));
      if (event) {
        setFormData({
          title: event.title,
          date: event.date,
          description: event.description,
          previewImage: event.previewImage,
          mainImage: event.mainImage,
        });
        setPreviewImagePreview(event.previewImage);
        setMainImagePreview(event.mainImage);
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

  const handlePreviewImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          previewImage: reader.result, // Сохраняем base64 превью-изображение
        });
        setPreviewImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          mainImage: reader.result, // Сохраняем base64 основное изображение
        });
        setMainImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeletePreviewImage = () => {
    setFormData({
      ...formData,
      previewImage: '',
    });
    setPreviewImagePreview('');
  };

  const handleDeleteMainImage = () => {
    setFormData({
      ...formData,
      mainImage: '',
    });
    setMainImagePreview('');
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
        <div>
          <label>Превью-изображение (150x150 px):</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePreviewImageChange}
          />
          {previewImagePreview && (
            <div className="image-preview">
              <img src={previewImagePreview} alt="Превью" />
              <button
                type="button"
                onClick={handleDeletePreviewImage}
                className="delete-image-button"
              >
                Удалить превью
              </button>
            </div>
          )}
        </div>
        <div>
          <label>Основное изображение (400x400 px):</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleMainImageChange}
          />
          {mainImagePreview && (
            <div className="image-preview">
              <img src={mainImagePreview} alt="Основное изображение" />
              <button
                type="button"
                onClick={handleDeleteMainImage}
                className="delete-image-button"
              >
                Удалить основное изображение
              </button>
            </div>
          )}
        </div>
        <button type="submit">{isEdit ? 'Обновить' : 'Создать'}</button>
      </form>
    </div>
  );
};

export default EventForm;