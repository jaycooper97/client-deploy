import React from 'react';
import './Home.css';

function Sports() {
  return (
    <div className="sports-container">
      <h2 className="history-text-container">Sports in Cincinnati</h2>
      <p className="history-text-container">
        Explore the vibrant sports scene in Cincinnati, from professional teams to local leagues.
        Discover the passion and excitement that sports bring to the Queen City.
      </p>

      {/* Images on the Left */}
      <div className="sports-content-container">
        <div className="history-text-container">
        <a href="https://bengals.com" target="_blank" rel="noopener noreferrer">
          <img src={require('./imgs/Bengals.jpg')} alt="Bengals" className="sports-image" />
        </a>
          <p className="sports-text-container">
            The Cincinnati Bengals are a professional football team based in Cincinnati, Ohio. Established in 1968, the Bengals are a member of the North Division of the American Football Conference (AFC) in the National Football League (NFL). The team's distinctive orange and black color scheme, as well as their iconic tiger-striped helmets, make them easily recognizable. The Bengals play their home games at Paul Brown Stadium, named after the team's founder and coaching legend Paul Brown. Over the years, the Bengals have experienced both highs and lows, with notable moments including appearances in the Super Bowl and a strong fan base known as the "Who Dey Nation." The team continues to be a key part of Cincinnati's sports culture, inspiring passion and loyalty among its supporters.
          </p>
        </div>
        <div className="history-text-container">
        <a href="https://reds.com" target="_blank" rel="noopener noreferrer">
          <img src={require('./imgs/Reds.png')} alt="Reds" className="sports-image" />
        </a>
          <p className="sports-text-container">
            The Cincinnati Reds, established in 1881, are one of the oldest professional baseball teams in the United States. As a member of the Central Division of Major League Baseball's (MLB) National League (NL), the Reds have a rich history and a strong fan base. The team's home games are played at the Great American Ball Park, located along the banks of the Ohio River in downtown Cincinnati. The Reds boast a storied past, including multiple World Series championships and contributions to baseball history, such as being the first professional team to feature night games. The team's iconic red uniforms and classic logo make them easily recognizable, and their games are a beloved tradition for Cincinnati residents and baseball enthusiasts alike. The Reds continue to be a cornerstone of the city's sports culture, with a dedicated fan community known for their passionate support.
          </p>
        </div>
        <div className="history-text-container">
        <a href="https://fccincinnati.com" target="_blank" rel="noopener noreferrer">
          <img src={require('./imgs/FCC.jpg')} alt="FCC" className="sports-image" />
        </a>
          <p className="sports-text-container">
            FC Cincinnati, established in 2018, is a professional soccer team based in Cincinnati, Ohio. The team competes in Major League Soccer (MLS) and plays its home matches at the TQL Stadium, a state-of-the-art facility in the West End neighborhood. FC Cincinnati quickly rose to prominence, gaining entry into MLS as an expansion team, and has since become a prominent fixture in the league. The club's vibrant orange and blue color scheme, along with its passionate fan base, has made FC Cincinnati a distinctive presence in the soccer community. The team has showcased its commitment to local engagement and community involvement, creating a strong connection with Cincinnati residents. FC Cincinnati continues to evolve and grow, contributing to the city's sports landscape and fostering a spirited soccer culture in the region.
          </p>
        </div>
        <div className="history-text-container">
        <a href="https://cycloneshockey.com/" target="_blank" rel="noopener noreferrer">
          <img src={require('./imgs/Cyclones.png')} alt="Cyclones" className="sports-image" />
        </a>
          <p className="sports-text-container">

            The Cincinnati Cyclones are a professional ice hockey team based in Cincinnati, Ohio. The team was established in 1990 and plays its home games at the Heritage Bank Center, located in downtown Cincinnati. As a member of the ECHL (East Coast Hockey League), the Cyclones have been a consistent presence in minor league hockey, providing thrilling and competitive games for their dedicated fan base. The team's colors, navy blue, and yellow, reflect the city's spirit, and their mascot, Twister, adds an element of fun and excitement to the games. The Cyclones have achieved success on the ice, winning multiple championships and earning a reputation for their skilled and entertaining style of play. The franchise has become an integral part of Cincinnati's sports community, offering fans an opportunity to enjoy the fast-paced and dynamic sport of ice hockey in a family-friendly environment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sports;