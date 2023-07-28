import axios from 'axios';

const API_BASE_URL = 'https://api.johndoe-railways.com'; 
const AUTH_TOKEN = 'YOUR_AUTH_TOKEN'; 

export const getAllTrains = () => {
  return axios.get(`${API_BASE_URL}/trains`, {
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  });
};

export const getTrainById = (trainId) => {
  return axios.get(`${API_BASE_URL}/trains/${trainId}`, {
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  });
};
