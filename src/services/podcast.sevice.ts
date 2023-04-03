import axios from 'axios';

export const getAllPodcast = async () => {
  try {
    const res = await axios.get(``);
    const { data } = res;
    return data;
  } catch (error) {
    throw error;
  }
};
