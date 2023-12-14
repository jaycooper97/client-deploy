// History.js

import React from 'react';
import Slider from 'react-slick'; 
import './Home.css'; 


function History() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div>
      <div className="history-text-container">
        <h2 className="title-color">Cincinnati's History</h2>
        <p className="text-color">
          Cincinnati, often referred to as the "Queen City," has a rich and diverse history.
          Founded in 1788, it has played a significant role in the development of the Midwest.
          From its early days as a river port to its industrial boom during the 19th century,
          Cincinnati has a fascinating story to tell. Explore the city's historical landmarks,
          cultural heritage, and the people who have shaped its history.
        </p>
      </div>

      {/* New section header for famous people (centered) */}
      <div className="history-text-container">
        <h3 className="subtitle">Famous People from Cincinnati</h3>
      </div>

      {/* Cards for Famous People */}
      <div className="card-container history-card-container">
        {/* Card 1 */}
        <div className="card history-card">
          <img src={require('./imgs/Mark.jpg')} className="card-img-top" alt="Mark" />
          <div className="card-body">
            <p className="card-text">Markiplier, whose real name is Mark Edward Fischbach, hails from Cincinnati, Ohio. Born on June 28, 1989, in Honolulu, Hawaii, he later moved to Cincinnati where he began his journey as a prominent YouTuber, entertainer, and philanthropist, gaining widespread recognition for his engaging content and charitable efforts.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card history-card">
          <img src={require('./imgs/Neil.jpg')} className="card-img-top" alt="Neil" />
          <div className="card-body">
            <p className="card-text">Neil Armstrong, the iconic astronaut and the first person to walk on the moon, was born on August 5, 1930, in Wapakoneta, Ohio, near Cincinnati. Growing up in the Midwest, Armstrong developed a passion for aviation that eventually led him to make history as the commander of the Apollo 11 mission in 1969, marking a giant leap for mankind.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card history-card">
          <img src={require('./imgs/Steven.jpg')} className="card-img-top" alt="Steven" />
          <div className="card-body">
            <p className="card-text"> Steven Spielberg, born on December 18, 1946, in Cincinnati, Ohio, is a highly acclaimed director, producer, and screenwriter known for creating blockbuster films such as "Jaws," "E.T. the Extra-Terrestrial," and "Jurassic Park." His contributions to the film industry have earned him widespread recognition and numerous awards.</p>
          </div>
        </div>
      </div>

      {/* New section header for landmarks (centered) */}
      <div className="history-text-container">
        <h3 className="subtitle">Landmarks</h3>
      </div>

      {/* Carousel for Landmark Images */}
      <div className="carousel-container" style={{ padding: '20px' }}>
        <Slider {...sliderSettings}>
          <div>
            <img src={require('./imgs/Landmark1.jpg')} alt="Landmark 1" />
          </div>
          <div>
            <img src={require('./imgs/Landmark2.jpg')} alt="Landmark 2" />
          </div>
          <div>
            <img src={require('./imgs/Landmark3.png')} alt="Landmark 3" />
          </div>
        </Slider>
      </div>
      <p className="history-text-container" style={{ textAlign: 'center' }}>
        Explore these iconic landmarks that have contributed to Cincinnati's rich history and culture.
        Each landmark has its own unique story and significance, adding to the charm of the Queen City.
      </p>
      <p className="history-text-container" style={{ textAlign: 'center' }}>
        Explore the rich history of Cincinnati at the Cincinnati Museum Center. As a prominent landmark,
        the Cincinnati Museum Center is a hub of culture, education, and historical significance.
        Learn about the city's past, present, and future through captivating exhibits and engaging programs.
      </p>
      <p className="history-text-container" style={{ textAlign: 'center' }}>
        The John A. Roebling Suspension Bridge stands as an iconic symbol connecting Cincinnati and Covington,
        Kentucky. Named after its designer, John A. Roebling, this historic bridge is a masterpiece of
        engineering and a testament to Cincinnati's architectural heritage.
      </p>
      <p className="history-text-container" style={{ textAlign: 'center' }}>
        Immerse yourself in the world of performing arts at the Cincinnati Music Hall.
        With its stunning architecture and rich history, the Cincinnati Music Hall has been a
        cultural hub for music, theater, and dance performances, showcasing the city's artistic legacy.
      </p>
    </div>
  );
}

export default History;

