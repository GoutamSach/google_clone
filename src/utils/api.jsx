import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const API_KEY = process.env.REACT_APP_GOOGLE_API;
const API_CE = process.env.REACT_APP_GOOGLE_CX;

export const dataFromApi = async (string) => {
  const { data } = await axios.get(BASE_URL, { API_KEY, API_CE, string });
  return data;
};
