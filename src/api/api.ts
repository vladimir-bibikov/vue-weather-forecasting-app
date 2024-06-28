import axios from 'axios';
import { ICity } from '../types/types';

const API_KEY = '4178a525fa94f75cb887bdba6f69902a';

export const fetchCity = async (name: string): Promise<ICity> => {
  const response = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`,
  );
  const obj: ICity = {
    id: response.data.id,
    name: response.data.name,
    country: response.data.sys.country,
    temp: response.data.main.temp,
    feels_like: response.data.main.feels_like,
    clouds: response.data.weather[0].description,
    wind: response.data.wind.speed,
    humidity: response.data.main.humidity,
    pressure: response.data.main.pressure,
    visibility: response.data.visibility,
    icon: response.data.weather[0].icon,
  };
  return obj;
};

export const userCity = async () => {
  const response = await axios.get('http://api.sypexgeo.net');
  const name: string = response.data.city.name_en;
  return name;
};
