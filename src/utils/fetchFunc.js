import axios from "axios";

const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

axios.defaults.baseURL = "https://api.unsplash.com/search";

export const fetchImagesWithTags = async (query, page = 1) => {
  const response = await axios.get(`/photos`, {
    params: {
      query,
      page,
      client_id: `${API_KEY}`,
    },
  });
  //   console.log(response);

  return response.data;
};
