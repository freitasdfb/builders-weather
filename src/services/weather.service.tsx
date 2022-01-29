
import axios from "axios";

const API_URL = "http://api.openweathermap.org/data/2.5/weather?units=metric&appid=6ac11af9138d553089e6333160c12d2e";

export const getWeather = async (lat: number, lon: number) => {

  return await axios.get(API_URL, { params: { lat, lon } })
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    });
};
