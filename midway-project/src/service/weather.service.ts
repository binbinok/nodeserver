import { Provide } from '@midwayjs/decorator';
import { makeHttpRequest } from '@midwayjs/core';
import { WeatherInfo } from '../interface';

@Provide()
export class WeatherService {
  async getWeather(cityId: string): Promise<WeatherInfo> {
    console.log('cityId -- ', cityId);
    try {
      const result = await makeHttpRequest(
        `http://www.weather.com.cn/data/sk/${cityId}.html`,
        {
          dataType: 'json',
        }
      );
      console.log('result ', result);
      if (result.status === 200) {
        return result.data;
      }
    } catch (error) {
      console.log('WeatherService getWeather error: ', error);
    }
  }
}
