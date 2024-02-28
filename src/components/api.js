import axios from "axios";

axios.defaults.baseURL = "https://65d5e9aff6967ba8e3bcefea.mockapi.io/api/v1";

const getCars = async (p) => {
  const response = await axios.get(`/cars?page=${p}&limit=4`);

  return response;
};

export default getCars;
