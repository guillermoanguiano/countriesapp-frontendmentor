import axios from 'axios'
import { setupInterceptorsTo } from './interceptors';

export const api = async (request) => {
  try {
    const data = request.data ?? {};
    const filters = request.filters ? request.filters : '';
    const endpoint = request.endpoint || '';
    const url = 'https://restcountries.com/v3.1' + endpoint + filters
    const headers = {
      'Content-Type': 'application/json',
      ...request.headers,
    }

    const options = {
      method: request.method,
      url,
      data,
      headers,
    }

    const apiInstance = setupInterceptorsTo(axios.create())
    const response = await apiInstance(options)
    return response.data
  } catch (err) {
    return err
  }
}