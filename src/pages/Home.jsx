import { useContext, useEffect } from 'react';

import { DataContext } from '../context/Data';

import Heading from '../components/Heading';
import Container from '../components/Container';
import { SearchTermContext } from '../context/SearchTerm';

function Home() {
  const { searchTerm } = useContext(SearchTermContext);
  const { data, changeData } = useContext(DataContext);

  const fetchData = async () => {
    const address = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${process.env.REACT_APP_API_APP_KEY}&units=metric`;
    const response = await fetch(address);

    const data = await response.json();
    changeData(data);
  };

  useEffect(() => {
    if (!searchTerm) return;
    fetchData();
    // eslint-disable-next-line
  }, [searchTerm]);

  var iconUrl = data?.name
    ? `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
    : null;

  return (
    <Container>
      <div className='home'>
        <Heading>WeatherNow</Heading>

        {data?.cod === '404' ? (
          <h3 className='error' style={{ animation: 'error 1s alternate' }}>
            City not found :(
          </h3>
        ) : data?.name ? (
          <div className='weather-info'>
            <div className='weather-info__general'>
              {iconUrl && (
                <img
                  className='weather-info__icon'
                  src={iconUrl}
                  alt='Weather'
                />
              )}
              <h1 className='weather-info__description'>
                {data.weather[0].description &&
                  (() => {
                    const capitalized =
                      data.weather[0].description[0].toUpperCase();
                    const rest = data.weather[0].description.slice(1);
                    return capitalized + rest;
                  })()}
              </h1>
            </div>
            <p className='weather-info__item'>
              {data.name}, {data.sys.country}(location icon)
            </p>
            <p className='weather-info__item'>
              Temperature: {data.main.temp}&#8451;
            </p>
            <p className='weather-info__item'>
              Min: {data.main.temp_min}&#8451;
            </p>
            <p className='weather-info__item'>
              Max: {data.main.temp_max}&#8451;
            </p>
            <p className='weather-info__item'>
              Humidity: {data.main.humidity}%
            </p>
          </div>
        ) : (
          <p style={{ animation: 'error 1s alternate' }}>
            Search for your city to see the weather :)
          </p>
        )}
      </div>
    </Container>
  );
}

export default Home;
