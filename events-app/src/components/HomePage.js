import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Блок 2: Информация о программе мероприятия */}
      <div className="event-program">
        <div className="event-program-text">
          <h1>РАСТИМ ПОКАЗАТЕЛИ ВАШЕГО БИЗНЕСА</h1>
          <p>
            У всех наших BIM менеджеров опыт работы с компаниями более 10 лет. Поэтому мы превращаем наш многолетний опыт BIM в ваш успех!
          </p>
          <div className="event-program-actions">
            <button className="discuss-project-button">Обсудить проект</button>
            <button className="choose-course-button">Выбрать курс</button>
          </div>
        </div>
        <div className="event-program-image">
          <img src="https://via.placeholder.com/600x400" alt="Программа мероприятия" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;