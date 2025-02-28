import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Section: Информация о программе мероприятия */}
      <section className="event-program">
        <div className="event-program-text">
          <h1>IT HR XAB</h1>
          <h2>ИСТОЧНИК ВДОХНОВЕНИЯ И ПРОФЕССИОНАЛЬНОГО РОСТА</h2>
          <p>
            УНИКАЛЬНЫЕ ДОКЛАДЫ, СОДЕРЖАТЕЛЬНЫЕ ПОДКАСТЫ, АНОНСЫ ЗНАЧИМЫХ СОБЫТИЙ И ЦЕННЫЕ МАТЕРИАЛЫ. ОСТАВАЙТЕСЬ В ЦЕНТРЕ HR-ТРЕНДОВ И ДВИГАЙТЕСЬ К УСПЕХУ ВМЕСТЕ С НАМИ!
          </p>
          <div className="event-program-actions">
            <button className="discuss-project-button">Обсудить проект</button>
            <button className="choose-course-button">Выбрать курс</button>
          </div>
        </div>
        <div className="event-program-image">
          <img src="https://via.placeholder.com/600x400" alt="Программа мероприятия" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;