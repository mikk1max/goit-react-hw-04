import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search";

export const fetchImagesWithTags = async (query, page = 1) => {
  const response = await axios.get(`/photos`, {
    params: {
      query,
      page,
      client_id: "fTSZdd3u_zUOZ8YazFBEwwKJTSicVIdbFNFPXjl7T74",
    },
  });
  //   console.log(response);

  return response.data;
};
