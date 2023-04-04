import axios from 'axios';
import { BASE_API_URL, BASE_API_KEY } from '../config/config';

const options = {
  headers: {
    'X-Api-Key': BASE_API_KEY,
  }
};

export const fetchInspirationalQuotes = async () => {
  try {
    const res = await axios.get(`${BASE_API_URL}/quotes?category=inspirational`, options);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchExercises = async () => {
  try {
    const res = await axios.get(`${BASE_API_URL}/exercises`, options);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchExercisesByMuscleAndDifficulty = async (query, diff) => {
  try {
    const res = await axios.get(`${BASE_API_URL}/exercises?muscle=${query}&difficulty=${diff}`, options);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};




export const fetchCalorriesBurned = async (query) => {
  try {
    const res = await axios.get(`${BASE_API_URL}/caloriesburnedactivities?activity=${query}`, options);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};