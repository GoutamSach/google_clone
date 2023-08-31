import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const param = {
  key: import.meta.env.VITE_APP_GOOGLE_API,
  cx: import.meta.env.VITE_APP_GOOGLE_CX,
};

// const key = import.meta.env.REACT_APP_GOOGLE_API;
// const cx = import.meta.env.REACT_APP_GOOGLE_CX;

export const dataFromApi = async (string) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...param, ...string },
  });
  return data;
};
